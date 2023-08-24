import React, { FC, ReactElement } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

export const Footer: FC = (): ReactElement => {
  return (
    <div className="w-full h-[500px] bg-[#E7EBFB] pt-8 px-[4.8rem]">
      <h1 className="text-center font-lato text-[26px]">
        Want to start your projects with us?
      </h1>
      <p className="text-center mt-2">
        If you are interested in working with us, please dont hesitate to
        contact us!
      </p>
      <div className="flex justify-center">
        <Button
          variant="contained"
          color="primary"
          className="mt-2 mb-2 pt-1 pb-1 bg-[#123E95] hover:bg-[#1e325c] font-[lato] text-white text-[20px] normal-case"
        >
          Get started
        </Button>
      </div>
      <div className="border-r-0 border-l-0 border-b-1 border-t-2 border-solid border-red-500 w-full mt-10 grid grid-cols-1 sm:grid-cols-4">
        <div className="border-2 border-solid border-green-500 m-0">
          <Image
            src="/Images/Navbar/logo.jxr"
            width={150}
            height={50}
            alt="logo"
            title="logo"
            className="block"
          />
          <h2 className="text-black font-poppins font-semibold text-2xl tracking-wide mt-7">
            Head Office
          </h2>
          <p className="text-black font-poppins text-[14px] font-normal tracking-wider">
            Alumtec Glazing Solutions Inc.
          </p>
          <div className="text-black font-poppins text-[14px] font-normal tracking-wider">
            Address: 104-3300 Hwy 7, <br />
            Suit#348 <br />
            Concord ON. L4K 0G2
          </div>
        </div>
        <div className="border-2 border-solid border-yellow-500 m-0">
          <h2 className="text-black font-poppins text-lg font-semibold tracking-wide">
            Company
          </h2>
          {[
            "About Us",
            "Services",
            "Projects",
            "Contact Us",
            "Privacy Policy",
          ].map((v, i) => {
            return (
              <p
                key={i}
                className="text-black font-poppins text-[14px] font-normal tracking-wider mt-3 hover:underline cursor-pointer"
              >
                {v}
              </p>
            );
          })}
        </div>
        <div className="border-2 border-solid border-purple-500 m-0">
          <h2 className="text-black font-poppins text-lg font-semibold tracking-wide">
            Support
          </h2>
          {[
            "About Us",
            "Services",
            "Projects",
            "Contact Us",
            "Privacy Policy",
          ].map((v, i) => {
            return (
              <p
                key={i}
                className="text-black font-poppins text-[14px] font-normal tracking-wider mt-3 hover:underline cursor-pointer"
              >
                {v}
              </p>
            );
          })}
        </div>
        <div className="border-2 border-solid border-grey-500 m-0">
          <h2 className="text-black font-poppins text-lg font-semibold tracking-wide">
            Follow us
          </h2>
          {[
            "About Us",
            "Services",
            "Projects",
            "Contact Us",
            "Privacy Policy",
          ].map((v, i) => {
            return (
              <p
                key={i}
                className="text-black font-poppins text-[14px] font-normal tracking-wider mt-3 hover:underline cursor-pointer"
              >
                {v}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
