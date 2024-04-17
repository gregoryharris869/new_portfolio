import ActionButton from "../shared/ActionButton";
import { SelectedPage } from "../shared/types";
import { motion } from "framer-motion";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const textVariant = "text-2xl font-semibold text-textAction";

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="py-10 md:py-40">
      <motion.div
        className="container max-w-screen-xl px-4 mx-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h6 className="mt-16 mb-8 text-lg font-medium text-text1 md:text-3xl">
            Gregory Harris
          </h6>

          <h1 className="mb-8 text-4xl font-normal leading-none text-text2 md:text-7xl">
            Front-end Developer
          </h1>

          <p className="mb-16 font-normal text-text2 text-md md:text-xl">
            A passionate front-end developer, with focus on{" "}
            <span className={textVariant}>React</span> and{" "}
            <span className={textVariant}>Next.js</span>.
          </p>

          <ActionButton setSelectedPage={setSelectedPage}>Contact</ActionButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
