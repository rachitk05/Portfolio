import {Projects} from "@/components/projects";
import {ProjectCards} from "@/components/projectsCard";
import {LandingPage} from "@/components/landingPage";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.0.2]">
      <LandingPage />
        {/*<LampDemo/>*/}
      {/*<WorkEx />*/}
      <Projects />
        <ProjectCards/>
      {/*<Instructors />*/}
    </main>
  );
}
