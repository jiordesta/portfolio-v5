import Active from "./Active";
import ResumeBtn from "./ResumeBtn";
import Timer from "./Timer";

export default function Header() {
  return (
    <section className="px-2 pt-2 md:px-4 md:pt-4 lg:px-6 lg:pt-6 sticky top-0 z-10 flex justify-between items-center">
      <div className="hidden md:flex h-[35px] items-center justify-center gap-2">
        <Timer/>
        <Active/>
      </div>
      <ResumeBtn/>
    </section>
  )
}
