import {
  Github,
  Linkedin,
  Mail,
  Globe,
  GraduationCap,
  Twitter,
} from "lucide-react";
import type { SocialPlatform } from "@/data/content";

export function SocialIcon({
  platform,
  className,
}: {
  platform: SocialPlatform;
  className?: string;
}) {
  const base = className ?? "h-4 w-4";

  switch (platform) {
    case "email":
      return <Mail className={base} aria-hidden="true" />;
    case "github":
      return <Github className={base} aria-hidden="true" />;
    case "linkedin":
      return <Linkedin className={base} aria-hidden="true" />;
    case "google-scholar":
      return <GraduationCap className={base} aria-hidden="true" />;
    case "x":
      return <Twitter className={base} aria-hidden="true" />;
    case "website":
    default:
      return <Globe className={base} aria-hidden="true" />;
  }
}

