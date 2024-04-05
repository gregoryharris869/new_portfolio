import { motion } from "framer-motion";
import { SelectedPage } from "../shared/types";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Projects = ({ setSelectedPage }: Props) => {
  return (
    <section id="projects" className="py-10 md:py-40">
      <motion.div
        className="container max-w-[50rem] mx-auto px-4"
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-10 lg:mb-0">
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
              Portfolio
            </h1>

            <p className="font-normal text-gray-500 text-xs md:text-base">
              Put Github Logo with Link tag for projects.
            </p>
          </div>

          <div className="space-y-24">
            <div className="flex space-x-6">
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                01
              </h1>

              <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

              <div>
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                  Demo API Generator
                </h1>

                <p className="font-normal text-gray-500 text-sm md:text-base">
                  A dummy data free and documented API generator to facilitate
                  the process of testing the front-end portion of projects.
                </p>
              </div>
            </div>
            <div className="flex space-x-6">
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                02
              </h1>

              <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

              <div>
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                  Demo API Generator
                </h1>

                <p className="font-normal text-gray-500 text-sm md:text-base">
                  A dummy data free and documented API generator to facilitate
                  the process of testing the front-end portion of projects.
                </p>
              </div>
            </div>
            <div className="flex space-x-6">
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                03
              </h1>

              <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

              <div>
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                  Demo API Generator
                </h1>

                <p className="font-normal text-gray-500 text-sm md:text-base">
                  A dummy data free and documented API generator to facilitate
                  the process of testing the front-end portion of projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
