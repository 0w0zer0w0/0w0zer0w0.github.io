import React from "react";
import Image from "next/image";

const Card = ({ image, title, desc }) => {
  return (
    <div className="bg-card max-w-[400px]  rounded-xl flex flex-col overflow-hidden card_border">
      <div>
        <Image src={image} alt="profile icon" width={400} height={400} />
      </div>
      <h3 className="font-bold p-2 m-2 text-xl">{title}</h3>
      <p className="p-2 mx-2">{desc}</p>
      <div className="flex justify-start items-center">
        <button className="bg-Secondary rounded-lg px-4 py-2 m-5 mr-2 transition transform hover:-translate-y-1 active:-translate-y-0">
          Visit Site
        </button>
        <button className="bg-Primary text-background rounded-lg px-4 py-2 m-5 ml-0 transition transform hover:-translate-y-1 active:-translate-y-0">
          <Image
            src="/assets/github-mark.svg"
            alt="profile icon"
            width={25}
            height={25}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
