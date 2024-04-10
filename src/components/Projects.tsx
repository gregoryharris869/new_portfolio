import React from "react";
import Project from "./Project";
import { projectsData } from "../lib/data";
import { FaSquareGithub } from "react-icons/fa6";
import { SelectedPage } from "../shared/types";
import { motion } from "framer-motion";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Projects = ({ setSelectedPage }: Props) => {
  return (
    <section id="projects" className="py-10 md:py-16">
      <motion.div
        className="container  max-w-[50rem] px-6 mx-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        <div className="flex flex-col justify-between lg:flex-row ">
          <div className="mb-10 lg:mb-0">
            <h1 className="pr-4 mb-5 text-3xl font-medium text-gray-700 md:text-4xl">
              Portfolio
            </h1>
            <a
              href="https://github.com"
              target="_blank"
              className="text-gray-700 hover:text-gray-900"
            >
              <FaSquareGithub className="inline-block mr-2 text-5xl align-middle" />
            </a>
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
      </motion.div>
    </section>
  );
};

export default Projects;
