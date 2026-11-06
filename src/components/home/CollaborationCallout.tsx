import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, PenTool, UsersRound } from "lucide-react";
import { Container } from "@/components/layout/Container";

const collaborators = [
  {
    title: "Brands & businesses",
    copy: "Responsible merchandise and co-created collections.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Designers & creators",
    copy: "Material-led experiments and original collections.",
    icon: PenTool,
  },
  {
    title: "Community partners",
    copy: "Workshops, awareness and impact programmes.",
    icon: UsersRound,
  },
];

export function CollaborationCallout() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#4A0613] bg-[#580716] text-[#F8EBDC]" aria-labelledby="collaboration-title">
      <Container className="relative py-8 sm:py-10 lg:py-11">
        <div className="grid items-center gap-7 lg:grid-cols-[minmax(19rem,0.95fr)_minmax(0,1.25fr)] lg:gap-10">
          <div>
            <div className="flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#F2E2D7]">
              <span>Collaboration</span>
              <span className="w-12 border-t border-dashed border-[#D6B8A7]" aria-hidden="true" />
            </div>
            <h2 id="collaboration-title" className="mt-3 max-w-xl font-sans text-[clamp(2.1rem,3.5vw,3.65rem)] font-normal leading-[0.98] text-[#F8EBDC]">
              Good things happen when we come together.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#E0BFC0]">
              From creative partnerships to community action, let&apos;s make better use of what already exists.
            </p>
            <Link href="/contact" className="group mt-5 inline-flex min-h-10 items-center gap-2 rounded-[6px] bg-[#F5E7D6] px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#58111D] transition-colors hover:bg-[#EBD7C0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8EBDC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#580716]">
              Collaborate with us <ArrowUpRight aria-hidden="true" size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 sm:gap-0">
            {collaborators.map(({ copy, icon: Icon, title }, index) => (
              <article className={`relative px-4 py-2 text-center sm:px-5 sm:py-3 ${index > 0 ? "sm:border-l sm:border-[#B07078]" : ""}`} key={title}>
                <span className={`collaboration-sticker collaboration-sticker-${index + 1} mx-auto grid size-12 place-items-center rounded-[30%_70%_45%_55%/48%_38%_62%_52%] border border-dashed border-[#B67671] bg-[#F5E7D6] text-[#741228] shadow-[3px_4px_0_rgb(23_0_5_/_0.26)]`}>
                  <Icon aria-hidden="true" size={22} strokeWidth={1.75} />
                </span>
                <h3 className="mt-3 text-balance font-sans text-sm font-semibold leading-[1.1] text-[#F8EBDC]">{title}</h3>
                <p className="mt-1.5 text-balance text-xs leading-5 text-[#E0BFC0]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
