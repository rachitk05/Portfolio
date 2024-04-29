import React from "react";
import { Vortex } from "./ui/vortex";
import {ProjectCards} from "@/components/projectsCard";

export function Projects() {
    return (
        <>
        <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
            <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
                <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                    Check Out my Projects
                </h2>
                <p className="text-white text-sm md:text-lg max-w-xl mt-6 text-center">
                    Crafted engaging user interfaces using React, JavaScript, HTML, and CSS, producing websites that are visually attractive and operate flawlessly in practical scenarios.
                </p>


            </Vortex>

        </div>


    </>
    );
}
