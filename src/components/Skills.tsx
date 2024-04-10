import { motion } from "framer-motion";
import { skillsData } from "../lib/data";
import { SelectedPage } from "../shared/types";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
export default function Skills({ setSelectedPage }: Props) {
  return (
    <section id="skills" className="py-10 md:py-40 md:pb-0">
      <motion.div
        className="container max-w-[50rem] mx-auto px-4"
        onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
      >
        <div className="mb-10 lg:mb-0">
          <h1 className="mb-5 text-3xl font-medium text-gray-700 md:text-4xl">
            Skills
          </h1>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {skillsData.map((skills, index) => (
              <motion.li
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
                className="px-5 py-3 bg-white borderBlack rounded-xl "
                key={index}
              >
                {skills}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}