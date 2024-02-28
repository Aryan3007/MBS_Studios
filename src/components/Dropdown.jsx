import { useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

const Dropdown = () => {
  return (
    <div className="flex justify-center">
      <FlyoutLink FlyoutContent={PricingContent}>
        <h1 className="hover:underline hover:text-purple-500 hover:cursor-pointer duration-150 transition">
          Media
        </h1>
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />

            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

FlyoutLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  FlyoutContent: PropTypes.elementType.isRequired,
};

const PricingContent = () => {
  return (
    <article className="rounded-xl grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 w-[700px] bg-white p-4 ring ring-purple-50">
      <div className="flex overflow-hidden  rounded-lg ">
        <div
          className="w-24  h-24 bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80")',
          }}
        />
        <div className="w-2/3 px-4 md:px-4">
          <h1 className="text-xl font-bold text-gray-800 ">Backpack</h1>
          <p className="mt-2 text-sm text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
          </p>
        </div>
      </div>
      <div className="flex overflow-hidden  rounded-lg ">
        <div
          className="w-24  h-24 bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80")',
          }}
        />
        <div className="w-2/3 px-4 md:px-4">
          <h1 className="text-xl font-bold text-gray-800 ">Backpack</h1>
          <p className="mt-2 text-sm text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
          </p>
        </div>
      </div>
      <div className="flex overflow-hidden  rounded-lg  ">
        <div
          className="w-24  h-24 bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80")',
          }}
        />
        <div className="w-2/3 px-4 md:px-4">
          <h1 className="text-xl font-bold text-gray-800 ">Backpack</h1>
          <p className="mt-2 text-sm text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
          </p>
        </div>
      </div>
      <div className="flex overflow-hidden  rounded-lg ">
        <div
          className="w-24  h-24 bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80")',
          }}
        />
        <div className="w-2/3 px-4 md:px-4">
          <h1 className="text-xl font-bold text-gray-800 ">Backpack</h1>
          <p className="mt-2 text-sm text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
          </p>
        </div>
      </div>
    </article>
  );
};

export default Dropdown;
