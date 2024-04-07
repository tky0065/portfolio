import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <div className="flex flex-col gap-5">
        <Hero />
        <Skills />
        {/* <Encryption />  */}
        <Projects />
      </div>
    </main>
  );
}
