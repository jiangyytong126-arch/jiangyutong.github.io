export type SocialPlatform =
  | "email"
  | "github"
  | "linkedin"
  | "google-scholar"
  | "x"
  | "website";

export interface SocialLink {
  label: string;
  href: string;
  platform: SocialPlatform;
}

export interface Bio {
  name: string;
  title: string;
  affiliation: string;
  location: string;
  email: string;
  shortBio: string;
  social: SocialLink[];
}

export interface NewsItem {
  date: string; // ISO 或自然语言日期
  text: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  thumbnailAlt?: string;
  link?: string;
  badge?: string;
}

export interface ExperienceItem {
  type: "internship" | "award";
  title: string;
  organization: string;
  location?: string;
  period?: string;
  year?: string;
  description?: string;
}

export const bio: Bio = {
  name: "Your Name",
  title: "Ph.D. Student in Human–Computer Interaction",
  affiliation: "School of Computer Science, Example University",
  location: "City, Country",
  email: "you@example.edu",
  shortBio:
    "I am a human–computer interaction researcher focusing on interactive systems, creativity support tools, and AI-augmented interfaces. My work combines qualitative studies with prototype-driven experimentation.",
  social: [
    {
      label: "Email",
      href: "mailto:you@example.edu",
      platform: "email",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/",
      platform: "google-scholar",
    },
    {
      label: "GitHub",
      href: "https://github.com/yourname",
      platform: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yourname",
      platform: "linkedin",
    },
    {
      label: "Personal Blog",
      href: "https://yourwebsite.com",
      platform: "website",
    },
  ],
};

export const news: NewsItem[] = [
  {
    date: "2026-01",
    text: "One paper on AI-assisted prototyping was accepted to CHI 2026.",
  },
  {
    date: "2025-10",
    text: "Started a research internship at Example Research Lab, working on multimodal creativity support tools.",
  },
  {
    date: "2025-06",
    text: "Gave an invited talk on human-centered evaluation of generative models at Example HCI Seminar.",
  },
];

export const researchInterests: string[] = [
  "Human–Computer Interaction (HCI)",
  "Creativity support tools",
  "Human–AI collaboration",
  "Interactive data visualization",
  "Design tools & prototyping",
];

export const publications: Publication[] = [
  {
    title:
      "CoSketch: Lightweight AI-Assisted Sketching Workflows for Early-Stage Interface Design",
    authors: "Your Name, Collaborator A, Collaborator B",
    venue: "CHI 2026 (to appear)",
    year: "2026",
    badge: "CHI 2026",
    link: "https://example.com/paper",
    thumbnailAlt: "A schematic of AI-assisted sketching for interface design.",
  },
  {
    title:
      "PromptScaffold: Structuring Prompts to Support Novice Designers in Exploring the Generative Design Space",
    authors: "Your Name, Collaborator C",
    venue: "UIST 2025",
    year: "2025",
    badge: "UIST 2025",
    link: "https://example.com/promptscaffold",
  },
  {
    title:
      "Understanding How Practitioners Appropriate Large Language Models in Everyday Productivity Workflows",
    authors: "Your Name, Collaborator D, Collaborator E",
    venue: "CSCW 2025",
    year: "2025",
    badge: "CSCW 2025",
  },
];

export const experiences: ExperienceItem[] = [
  {
    type: "internship",
    title: "Research Intern, HCI & Productivity",
    organization: "Example Research Lab",
    location: "Remote",
    period: "Summer 2025",
    description:
      "Designed and evaluated interactive prototypes for AI-augmented productivity workflows with knowledge workers.",
  },
  {
    type: "internship",
    title: "Research Intern, Human-AI Interaction",
    organization: "Example AI Lab",
    location: "City, Country",
    period: "Summer 2024",
    description:
      "Ran mixed-methods studies to understand how non-expert users adapt to generative interfaces in creative domains.",
  },
  {
    type: "award",
    title: "Best Paper Honorable Mention",
    organization: "ACM CHI",
    year: "2025",
    description:
      "For work on interactive tools that scaffold novice designers in exploring generative design spaces.",
  },
  {
    type: "award",
    title: "Graduate Research Fellowship",
    organization: "Example Funding Agency",
    year: "2024",
  },
];

