import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[800px] flex flex-col bg-red-600">
      <div className=" ">
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="h-32  md:h-38 lg:h-48"
        />
      </div>
      <div className="flex h-full pl-10 items-center ">
        <div className="w-full text-white   ">
          <p className=" text-7xl pb-2">Pokaż się </p>
          <p className=" text-7xl">w social media</p>
        </div>
        <div className="w-full  flex flex-col justify-center items-start text-white ">
          <p>azatorska.simplemedia@gmail.com</p>
          <p className="pb-8">+48 884 822 323</p>
          <p>Węglowa 13,</p>
          <p>15-121 Białystok</p>
        </div>
      </div>

      <div className="flex justify-between  text-white p-4">
        <p> Aleksandra Zatorska SIMPLE MEDIA</p>
        <p> polityka prywatności</p>
        <p> NIP: 9662206159</p>
        <p> REGON:541677815</p>
      </div>
    </div>
  );
};

export default Footer;
