import { ArrowUpRight, Newspaper, Sparkles, BookOpen, Award } from "lucide-react";
import { bio, news, researchInterests, publications, experiences } from "@/data/content";
import { SocialIcon } from "@/components/social-icons";

export default function HomePage() {
  return (
    <div className="space-y-12 lg:space-y-16">
      {/* 顶部粘性导航 */}
      <header className="sticky top-0 z-20 -mx-4 border-b border-slate-200/80 bg-background/90 px-4 py-3 backdrop-blur lg:-mx-6 lg:px-6">
        <nav className="mx-auto flex max-w-5xl items-center justify-between text-xs font-medium text-slate-700">
          <span className="tracking-tight text-slate-900">
            {bio.name}
          </span>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-slate-900">
              About
            </a>
            <a href="#news" className="hover:text-slate-900">
              News
            </a>
            <a href="#research" className="hover:text-slate-900">
              Research
            </a>
            <a href="#publications" className="hover:text-slate-900">
              Publications
            </a>
            <a href="#experience" className="hover:text-slate-900">
              Internships & Awards
            </a>
          </div>
        </nav>
      </header>

      {/* 主内容：12 栅格布局 */}
      <section
        id="about"
        className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12"
      >
        {/* 左侧：头像 + 基本信息 */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-7 shadow-sm">
            <div className="flex items-start gap-5">
              {/* 极简头像占位（非固定） */}
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-900 text-xl font-semibold tracking-tight text-slate-50">
                {initialsFromName(bio.name)}
              </div>
              <div className="space-y-1">
                <h1 className="text-lg font-semibold tracking-tight text-slate-900">
                  {bio.name}
                </h1>
                <p className="text-sm text-slate-700">{bio.title}</p>
                <p className="text-xs text-slate-500">{bio.affiliation}</p>
                <p className="text-xs text-slate-500">{bio.location}</p>
              </div>
            </div>

            <div className="mt-5 space-y-2 text-xs text-slate-600">
              <p>{bio.shortBio}</p>
              <p>
                <span className="font-medium text-slate-800">Email:</span>{" "}
                <a href={`mailto:${bio.email}`}>{bio.email}</a>
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {bio.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700 transition hover:border-slate-900 hover:bg-slate-900 hover:text-slate-50"
                >
                  <SocialIcon
                    platform={link.platform}
                    className="h-3.5 w-3.5 text-slate-500 group-hover:text-slate-50"
                  />
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          {/* 研究兴趣 */}
          <div
            id="research"
            className="rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm"
          >
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Research Interests</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {researchInterests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-800"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 右侧：News、Publications、Experience */}
        <div className="lg:col-span-8 space-y-10">
          {/* News */}
          <section
            id="news"
            className="rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm"
          >
            <div className="mb-4 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                <Newspaper className="h-3.5 w-3.5" />
                <span>News</span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                RECENT UPDATES
              </span>
            </div>
            <div className="space-y-3">
              {news.map((item, idx) => (
                <div key={idx} className="flex gap-3 text-xs text-slate-700">
                  <div className="w-16 flex-none pt-0.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                    {item.date}
                  </div>
                  <p className="leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section
            id="publications"
            className="rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Selected Publications</span>
            </div>
            <div className="space-y-4">
              {publications.map((pub) => (
                <article
                  key={pub.title}
                  className="rounded-xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 transition hover:border-slate-900 hover:bg-white"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-slate-900">
                        {pub.title}
                      </h3>
                      <p className="text-xs text-slate-600">{pub.authors}</p>
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                        {pub.venue} · {pub.year}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {pub.badge && (
                        <span className="inline-flex rounded-full bg-slate-900 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-50">
                          {pub.badge}
                        </span>
                      )}
                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-800 underline-offset-4 hover:underline"
                        >
                          PDF / Project
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Internships & Awards */}
          <section
            id="experience"
            className="rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              <Award className="h-3.5 w-3.5" />
              <span>Internships &amp; Awards</span>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              {experiences.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-20 flex-none pt-0.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                    {item.type === "internship" ? "Internship" : "Award"}
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex flex-wrap items-baseline gap-1.5">
                      <span className="font-medium text-slate-900">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        · {item.organization}
                      </span>
                    </div>
                    {(item.period || item.year || item.location) && (
                      <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                        {[item.period ?? item.year, item.location]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                    )}
                    {item.description && (
                      <p className="text-xs leading-relaxed text-slate-700">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

function initialsFromName(name: string) {
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return (parts[0]![0] + parts[parts.length - 1]![0]).toUpperCase();
}

