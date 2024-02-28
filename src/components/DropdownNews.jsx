import { useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

const DropdownNews = () => {
  return (
    <div className="flex justify-center">
      <FlyoutLink  FlyoutContent={PricingContent}>
        <h1          className="hover:underline hover:text-purple-500 hover:cursor-pointer duration-150 transition"
>
        News
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
      className="relative w-full h-fit"
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
    <article className="rounded-xl w-[700px] bg-white p-4 ring ring-purple-50 sm:p-6 lg:p-8">
      <div className="flex items-start sm:gap-8">
        <div
          className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-purple-500"
          aria-hidden="true"
        >
          <div className="flex items-center gap-1">
            <span className="h-8 w-0.5 rounded-full bg-purple-500"></span>
            <span className="h-6 w-0.5 rounded-full bg-purple-500"></span>
            <span className="h-4 w-0.5 rounded-full bg-purple-500"></span>
            <span className="h-6 w-0.5 rounded-full bg-purple-500"></span>
            <span className="h-8 w-0.5 rounded-full bg-purple-500"></span>
          </div>
        </div>

        <div>
          <strong className="rounded border border-purple-500 bg-purple-500 px-3 py-1.5 text-[10px] font-medium text-white">
            Episode #101
          </strong>

          <h3 className="mt-4 text-lg font-medium sm:text-xl">
            <a href="#" className="hover:underline">
              {" "}
              Some Interesting Podcast Title{" "}
            </a>
          </h3>

          <p className="mt-1 text-sm text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            nulla amet voluptatum sit rerum, atque, quo culpa ut necessitatibus
            eius suscipit eum accusamus, aperiam voluptas exercitationem facere
            aliquid fuga. Sint.
          </p>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center gap-1 text-gray-500">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>

              <p className="text-xs font-medium">48:32 minutes</p>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
              Featuring{" "}
              <a href="#" className="underline hover:text-gray-700">
                Barry
              </a>
              ,
              <a href="#" className="underline hover:text-gray-700">
                Sandra
              </a>{" "}
              and
              <a href="#" className="underline hover:text-gray-700">
                August
              </a>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DropdownNews;
