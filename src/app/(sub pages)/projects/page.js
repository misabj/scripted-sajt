import Image from "next/image";
import bg from "../../../../public/background/projects-scripted.jpeg"
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import { RenderModel } from "@/components/RenderModel";


import Wizard from "@/components/models/Wizard";



export default function Home() {
  return (
    <>
      <Image src={bg} alt="background image"  className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" />

    <ProjectList projects={projectsData} />

    <div className="flex items-center justify-center fixed top-20 lg:top-20 left-1/2 lg:-left-12 -translate-x-1/2 lg:translate-x-0 -z-10 h-screen ">
      <RenderModel>
        <Wizard />
      </RenderModel>
    </div>
    </>
  );
}
