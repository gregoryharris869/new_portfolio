import { HiBars3 } from "react-icons/hi2";
import { HiX } from "react-icons/hi";
import Link from "./Link";
import gh from "../../assets/gh.svg";
import { useState } from "react";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../Hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMdScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-slate-100  drop-shadow";
  const flexStandard = "flex justify-between items-center";
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexStandard} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexStandard} mx-auto w-5/6`}>
          <div className={`${flexStandard} w-full gap-16`}>
            {/* Left side logo */}
            <img alt="logo" src={gh} />
            {/* Right side */}
            {isAboveMdScreens ? (
              <div className={`${flexStandard} w-full`}>
                {/* Links */}
                <div className={`${flexStandard} gap-8`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Skills"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* Call to action */}
                <ActionButton setSelectedPage={setSelectedPage}>
                  Contact
                </ActionButton>
              </div>
            ) : (
              <button
                className="p-2 rounded-full bg-slate-500"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <HiBars3 className="w-6 h-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
      {!isAboveMdScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-slate-100 drop-shadow-xl">
          {/* Close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <HiX className="w-6 h-6 text-gray-400" />
            </button>
          </div>
          {/* Menu items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;