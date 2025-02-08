import React from "react";
import Image from "next/image";
import Card from "../components/Card";

const Main = () => {
  return (
    <div id="About">
      <div className="flex flex-col justify-start items-center  px-14 mb-24 mx-14 rounded-xl bg-bg2">
        <h1 className="text-5xl font-bold font-oxanium underline text-left mt-10">
          About Me
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center mb-10">
          <p className="my-4 text-center sm:text-justify sm:text-lg">
            I’m always excited to learn new technologies and grow as a
            developer, and recently, I’ve been diving deep into React-based
            apps, creating web apps that fit seamlessly into each business’s
            workflow, whether it’s starting fresh or improving an existing site.
            I love working with small businesses and nonprofits, providing them
            with professional services at prices that work for them.
          </p>

          <Image
            src="/assets/user.svg"
            alt="profile icon"
            width={400}
            height={400}
          />
        </div>
      </div>

      <div
        id="Projects"
        className="flex flex-col justify-center items-center px-14 mb-7"
      >
        <h1 className="text-5xl font-bold font-oxanium underline text-left mt-10 mb-20">
          Projects
        </h1>
        <div className="mb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          <Card
            image={"/assets/testprofile.jpg"}
            title={"Portfolio"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
          <Card
            image={"/assets/testprofile.jpg"}
            title={"Portfolio"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
          <Card
            image={"/assets/testprofile.jpg"}
            title={"Portfolio"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </div>
      </div>

      <div
        id="Contact"
        className="flex flex-col md:flex-row gap-10 justify-end lg:justify-center items-center  px-14 mx-14 mb-5 rounded-xl bg-card text-Text"
      >
        <div className="my-10 shrink-0">
          <Image
            src="/assets/phone.svg"
            alt="profile icon"
            width={375}
            height={375}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl sm:text-4xl font-bold font-oxanium  text-center ">
            Get In Touch
          </h3>
          <h1 className="text-3xl sm:text-6xl font-bold font-oxanium underline text-center mt-2 mb-5">
            Contact Me
          </h1>
          <button className="flex gap-2 justify-center items-center bg-Secondary text-background rounded-lg px-4 py-2 transition transform hover:-translate-y-1 active:-translate-y-0">
            <Image
              src="/assets/email.svg"
              alt="profile icon"
              width={25}
              height={25}
            />

            <p>
              <a href="mailto:camilojm53@gmail.com">Camilojm53@gmail.com</a>
            </p>
          </button>
          <button className="flex gap-2 justify-center items-center bg-Accent text-background rounded-lg px-4 py-2 m-2 mb-10 transition transform hover:-translate-y-1 active:-translate-y-0">
            <Image
              src="/assets/call.svg"
              alt="profile icon"
              width={25}
              height={25}
            />

            <p>
              <a href="tel:321-332-5894">321-332-5894</a>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
