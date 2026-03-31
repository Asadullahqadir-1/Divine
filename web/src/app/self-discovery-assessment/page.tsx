import type { Metadata } from "next";
import { SelfDiscoveryAssessment } from "@/components/SelfDiscoveryAssessment";

export const metadata: Metadata = {
  title: "Self Discovery Assessment | Divine Besong Eya",
  description:
    "Test your leadership level with a practical self-discovery assessment and get your next growth focus.",
};

export default function SelfDiscoveryAssessmentPage() {
  return <SelfDiscoveryAssessment />;
}
