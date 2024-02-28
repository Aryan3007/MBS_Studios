import Bubble from "./Bubble";
// import Hero from "./Hero";
import HorizontalScroll from "./HorizontalScroll";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const HomeSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div
        
        className="p-6 lg:h-screen h-full text-white"
      >
        <div className="newhome h-[600px] lg:w-[100%] w-full">
          <div className="w-full  text-white h-1/2">
            <video
              className="videoTag  bg-cover videoTag inset-0 w-full h-full"
              width="560"
              height="315"
              src="./hhh.mp4"
              title="YouTube video player"
              frameBorder="0"
              autoPlay
              loop
              muted
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></video>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between my-5">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="300"
            className="lg:w-1/2 w-full"
          >
            <h1 className="text-3xl">Lightining the Path To Your </h1>
            <h1 className="text-3xl">Perfect Studios</h1>
            <p className="text-sm my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              dolore omnis placeat ducimus ullam vel perspiciatis modi
              temporibus. Laborum nostrum iusto ut voluptas totam atque odio
              assumenda libero ipsa repellat?
            </p>
          </div>
          <h1
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="300"
            className="text-white lg:text-9xl text-5xl p-0 lg:m-0 my-3"
          >
            MSB Studios
          </h1>
        </div>
      </div>

      <Bubble />

      <div className="h-full w-full text-white flex-col gap-6 my-12 flex justify-center items-center">
        <h1 className=" capitalize text-center lg:text-5xl text-3xl text-purple-400">
          Play without Limits
        </h1>
        <p className="lg:w-1/2 w-full px-6 text-center">
          With Unreal Engine, you can bring amazing real-time experiences to
          life using the world’s most advanced real-time 3D creation tool. From
          first projects to the most demanding challenges, our free and
          accessible resources and inspirational community empower everyone to
          realize their ambitions.
        </p>
      </div>

      <HorizontalScroll />
      {/* <Hero/> */}

      <div className="flex justify-center flex-col items-center">
        <div className="text-white w-full flex justify-between my-8 px-8">
          <h1 className="font-semibold text-3xl">
            The latest from MBS Studios
          </h1>
          <button className="text-purple-500 hover:underline">Veiw all</button>
        </div>
        <div className="h-[1px] mb-12 w-[95%] bg-white"></div>
        <div className="flex gap-12 px-8 lg:flex-row flex-col">
          <article data-aos="fade-up" className="group">
            <div className=" overflow-hidden rounded-xl">
              <img
                alt=""
                src="https://wallpapercave.com/wp/wp4370232.jpg"
                className="h-56 w-full  object-cover hover:scale-110 shadow-xl transition group-hover:grayscale-[50%]"
              />
            </div>

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-white">
                  Finding the Journey to Mordor
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
              <button className="bg-purple-400 py-3 px-5 my-6 capitalize">
                explore more
              </button>
            </div>
          </article>
          <article data-aos="fade-up"  data-aos-delay="300" className="group">
            <div className=" overflow-hidden rounded-xl">
              <img
                alt=""
                src="https://xxboxnews.blob.core.windows.net/prod/sites/2/2022/09/FREESTYLIN_FINAL_LANDSCAPE_1920X1080_JPG-9928423d535d3d18f841.jpg"
                className="h-56 w-full hover:scale-110 object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />
            </div>
            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-white">
                  Finding the Journey to Mordor
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
              <button className="bg-purple-400 py-3 px-5 my-6 capitalize">
                explore more
              </button>
            </div>
          </article>
          <article data-aos="fade-up"  data-aos-delay="600" className="group">
            <div className=" overflow-hidden rounded-xl">
              <img
                alt=""
                src="https://wallpapercave.com/wp/wp11061665.jpg"
                className="h-56 w-full object-cover shadow-xl hover:scale-110 transition group-hover:grayscale-[50%]"
              />
            </div>

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-white">
                  Finding the Journey to Mordor
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
              <button className="bg-purple-400 py-3 px-5 my-6 capitalize">
                explore more
              </button>
            </div>
          </article>
        </div>
      </div>

      <header className="my-12">
        <div className="lg:flex">
          <div
            data-aos="fade-right"  data-aos-delay="300"
            className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2"
          >
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Become a part of our{" "}
                <span className="text-purple-600 dark:text-purple-400">
                  {" "}
                  Community{" "}
                </span>
                today!
              </h2>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis commodi cum cupiditate ducimus, fugit harum id
                necessitatibus odio quam quasi, quibusdam rem tempora
                voluptates.
              </p>
              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <button className="bg-purple-400 py-3 px-5 w-36 capitalize">
                  Join Now
                </button>
              </div>
            </div>
          </div>
          <div data-aos="fade-left"  data-aos-delay="300" className="w-full h-64 lg:w-1/2 lg:h-auto">
            <div
              className="w-full h-full bg-cover"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1519256155806-cd510524ed97?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
            >
              <div className="w-full h-full bg-black opacity-25" />
            </div>
          </div>
        </div>
      </header>

      <section className="my-24">
        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-gray-200 lg:text-4xl">
              Create beautiful website layout with Meraki UI.
            </h1>
            <p className="mt-6 text-gray-200 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              similique obcaecati illum mollitia.
            </p>
            <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md focus-within:border-purple-400 focus-within:ring focus-within:ring-purple-300 focus-within:ring-opacity-40">
              <form className="flex flex-col md:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 h-10 px-4 py-2 m-1 text-gray-200 placeholder-gray-400 bg-transparent border-none appearance-none 0 focus:outline-none focus:placeholder-transparent focus:ring-0"
                />
                <button
                  type="button"
                  className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-purple-500 rounded-md hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
                >
                  Join Us
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
