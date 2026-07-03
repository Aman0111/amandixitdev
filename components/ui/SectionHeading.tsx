import { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  kicker: string;
  title: ReactNode;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeading({ kicker, title, copy, align = "left" }: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mx-auto mb-12 max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left"
      )}
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-violet">
        {kicker}
      </p>
      <h2 className="text-balance text-4xl font-bold leading-[1.02] text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-base leading-8 text-graphite/75 sm:text-lg">{copy}</p>
      ) : null}
    </Reveal>
  );
}
