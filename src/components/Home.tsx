import ActionButton from "../shared/ActionButton";
import { SelectedPage } from "../shared/types";
import { motion } from "framer-motion";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="py-10 md:py-32 ">
      <motion.div
        className="container max-w-screen-xl mx-auto px-4"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="text-center">
          <h6 className="mt-16 font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
            Gregory Harris
          </h6>

          <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
            Front-end Developer
          </h1>

          <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
            As a passionate front-end developer, with focus on React and
            Next.js.
          </p>

          <ActionButton setSelectedPage={setSelectedPage}>Contact</ActionButton>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
