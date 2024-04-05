import { motion } from "framer-motion";
import { SelectedPage } from "../shared/types";

type Props = { setSelectedPage: (value: SelectedPage) => void };
const About = ({ setSelectedPage }: Props) => {
  return (
    <section id="about" className="py-10 md:py-40 md:pb-0">
      <motion.div
        className="container max-w-[50rem] mx-auto px-4"
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      >
        <div className="mb-10 lg:mb-0">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            About
          </h1>
          <p className=" mb-3 hyphens-auto text-justify ">
            As a frontend developer, I thrive on crafting elegant interfaces
            that captivate users. With a blend of aesthetics and functionality,
            I turn designs into seamless digital experiences, from structured
            HTML to dynamic CSS presentations. I relish staying at the forefront
            of emerging technologies, mastering new frameworks, and optimizing
            performance. Transforming ideas into interactive websites that are
            more user friendly.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
