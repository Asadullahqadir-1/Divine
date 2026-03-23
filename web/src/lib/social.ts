export const SOCIAL_URLS = {
  LinkedIn: "https://www.linkedin.com/in/divine-besong-eya-84b41622b/",
  Instagram: "https://www.instagram.com/dibeseya",
  TikTok: "https://www.tiktok.com/@besongeya",
  Facebook: "https://www.facebook.com/Di%20Bes",
} as const;

export function resolveSocialUrl(platform: string, value: string) {
  if (value?.startsWith("http")) return value;
  if (value?.startsWith("www.")) return `https://${value}`;

  const normalized = platform.trim();
  if (normalized in SOCIAL_URLS) {
    return SOCIAL_URLS[normalized as keyof typeof SOCIAL_URLS];
  }

  return SOCIAL_URLS.Facebook;
}

export function getSocialLabel(platform: string) {
  const normalized = platform.trim();
  if (normalized in SOCIAL_URLS) {
    return SOCIAL_URLS[normalized as keyof typeof SOCIAL_URLS];
  }
  return SOCIAL_URLS.Facebook;
}
