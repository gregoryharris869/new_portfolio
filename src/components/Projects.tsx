import React from "react";
import Project from "./Project";
import { projectsData } from "../lib/data";

const Projects = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container  max-w-[50rem] px-4 mx-auto">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="mb-10 lg:mb-0">
            <h1 className="mb-5 text-3xl font-medium text-gray-700 md:text-4xl">
              Portfolio
            </h1>

            <p className="text-xs font-normal text-gray-500 md:text-base">
              I have brought here my biggest and favorite works <br />
              as a professional.
            </p>
          </div>

          <div className="space-y-24">
            <div className="flex space-x-6">
              <div>
                {projectsData.map((project, index) => (
                  <React.Fragment key={index}>
                    <Project {...project} />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
