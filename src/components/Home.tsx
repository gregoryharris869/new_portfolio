import ActionButton from "../shared/ActionButton";
import { SelectedPage } from "../shared/types";
import { motion } from "framer-motion";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const textVariant = "text-2xl font-semibold";

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="py-10 md:py-32 ">
      <motion.div
        className="container max-w-screen-xl px-4 mx-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="text-center">
          <h6 className="mt-16 mb-8 text-lg font-medium text-gray-600 uppercase md:text-2xl">
            Gregory Harris
          </h6>

          <h1 className="mb-8 text-4xl font-normal leading-none text-gray-900 md:text-7xl">
            Front-end Developer
          </h1>

          <p className="mb-16 font-normal text-gray-600 text-md md:text-xl">
            A passionate front-end developer, with focus on{" "}
            <span className={textVariant}>React</span> and{" "}
            <span className={textVariant}>Next.js</span>.
          </p>

          <ActionButton setSelectedPage={setSelectedPage}>Contact</ActionButton>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
