import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { hasValidSanityWriteConfig, sanityWriteClient } from "@/lib/sanity/writeClient";
import { isVercelRuntime, saveLocalBookUpload } from "@/lib/localBooksStore";

const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;
const MAX_PDF_SIZE_BYTES = 50 * 1024 * 1024;

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  const fileType = formData.get("fileType") as string || "image";

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "File is required." }, { status: 400 });
  }

  if (fileType === "image") {
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Only image files are supported." }, { status: 400 });
    }

    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      return NextResponse.json({ error: "Image size must be 5MB or less." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    if (!hasValidSanityWriteConfig()) {
      if (isVercelRuntime()) {
        return NextResponse.json(
          { error: "Uploads on Vercel require SANITY_API_WRITE_TOKEN (or SANITY_WRITE_TOKEN)." },
          { status: 503 }
        );
      }

      const localUrl = await saveLocalBookUpload(file.name, buffer);
      return NextResponse.json({
        ok: true,
        assetId: `local-url:${localUrl}`,
        url: localUrl,
      });
    }

    const asset = await sanityWriteClient.assets.upload("image", buffer, {
      filename: file.name,
      contentType: file.type,
    });

    return NextResponse.json({
      ok: true,
      assetId: asset._id,
      url: asset.url,
    });
  }

  if (fileType === "pdf") {
    if (file.type !== "application/pdf") {
      return NextResponse.json({ error: "Only PDF files are supported." }, { status: 400 });
    }

    if (file.size > MAX_PDF_SIZE_BYTES) {
      return NextResponse.json({ error: "PDF size must be 50MB or less." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    if (!hasValidSanityWriteConfig()) {
      if (isVercelRuntime()) {
        return NextResponse.json(
          { error: "Uploads on Vercel require SANITY_API_WRITE_TOKEN (or SANITY_WRITE_TOKEN)." },
          { status: 503 }
        );
      }

      const localUrl = await saveLocalBookUpload(file.name, buffer);
      return NextResponse.json({
        ok: true,
        assetId: `local-url:${localUrl}`,
        url: localUrl,
      });
    }

    const asset = await sanityWriteClient.assets.upload("file", buffer, {
      filename: file.name,
      contentType: file.type,
    });

    return NextResponse.json({
      ok: true,
      assetId: asset._id,
      url: asset.url,
    });
  }

  return NextResponse.json({ error: "Invalid file type. Use 'image' or 'pdf'." }, { status: 400 });
}
