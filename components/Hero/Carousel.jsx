import React from "react";
import Image from "next/image";

const InfiniteScroll = () => {
  const basePath = process.env.NODE_ENV === "production" ? "/Portfolio" : "";
  const icons = [
    {
      name: "HTML",
      src: `${basePath}/assets/html.svg`,
      alt: "HTML Icon",
      width: 60,
      height: 60,
    },
    {
      name: "CSS",
      src: "/assets/css.svg",
      alt: "CSS Icon",
      width: 60,
      height: 60,
    },
    {
      name: "JavaScript",
      src: "/assets/js.svg",
      alt: "JavaScript Icon",
      width: 60,
      height: 60,
    },
    {
      name: "React",
      src: "/assets/react.svg",
      alt: "React Icon",
      width: 60,
      height: 60,
    },
    {
      name: "Next.js",
      src: "/assets/next.svg",
      alt: "Next.js Icon",
      width: 60,
      height: 60,
    },
    {
      name: "Node.js",
      src: "/assets/node.svg",
      alt: "Node.js Icon",
      width: 60,
      height: 60,
    },

    {
      name: "Tailwind",
      src: "/assets/tailwind.svg",
      alt: "Tailwind Icon",
      width: 60,
      height: 60,
    },
  ];
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {icons.map((icon, index) => (
        <div key={index} className=" flex-shrink-0">
          <Image src={icon.src} alt={icon.alt} width={60} height={60} />
        </div>
      ))}
    </div>
  );
};

export default InfiniteScroll;
