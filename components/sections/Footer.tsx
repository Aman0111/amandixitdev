import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/70 py-10">
      <div className="section-shell flex flex-col gap-4 text-sm font-medium text-graphite/68 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. AI systems, MERN platforms, and delivery leadership.</p>
        <a href={`mailto:${profile.email}`} className="text-ink hover:text-violet">
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
