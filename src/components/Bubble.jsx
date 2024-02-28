import styles from "./bubble.module.css";

const Bubble = () => {
  return (
    <div className="grid h-screen place-content-center">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="flex flex-col w-full justify-center items-center"
    >
      <h2 className="text-center w-2/3 lg:text-8xl text-4xl font-thin text-white">
        {"Where Expertise Meets Excellence In Real Estate"
          .split("")
          .map((child, idx) => (
            <span className={styles.hoverText} key={idx}>
              {child}
            </span>
          ))}
      </h2>

      <button className="btn my-6 capitalize">About MSB Studios</button>
    </div>
  );
};

export default Bubble;
