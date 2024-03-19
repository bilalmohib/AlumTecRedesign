import Image from "next/image";
import React, { FC, ReactElement } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

import Router from "next/router";

import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { supportList, companyUrlsList } from "./data";

export const Footer: FC = (): ReactElement => {
  return (
    <div className="w-full min-h-[500px] bg-[#E7EBFB] pt-8 px-[1.5rem] sm:px-[4.8rem]">
      <h1 className="text-center text-gray-800 text-2xl sm:text-4xl sm:text-[26px] font-semibold">
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
          onClick={() => Router.push("/contact")}
        >
          Get started
        </Button>
      </div>
      <div className="border-r-0 border-l-0 border-b-2 border-t-2 border-solid border-gray-400 w-full mt-10 grid grid-cols-1 md:grid-cols-4 py-6">
        <div className="m-0 pr-3 lg:pr-0">
          <Image
            src="/Images/Navbar/logo.jxr"
            width={150}
            height={50}
            alt="logo"
            title="logo"
            className="block"
          />
          <h2 className="text-black font-serif italic font-normal text-lg tracking-wide mt-7">
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
        <div className="m-0">
          <h2 className="text-black font-poppins text-lg font-semibold tracking-wide">
            Company
          </h2>
          {companyUrlsList.map((v, i) => {
            return (
              <p
                key={i}
                className="text-black font-poppins text-[14px] font-normal tracking-wider mt-3 hover:underline cursor-pointer"
                onClick={() => Router.push(v.link)}
              >
                {v.label}
              </p>
            );
          })}
        </div>
        <div className="m-0">
          <h2 className="text-black font-poppins text-lg font-semibold tracking-wide">
            Support
          </h2>
          {supportList.map((v, i: number) => {
            return (
              <p
                key={i}
                className="text-black font-poppins text-[14px] font-normal tracking-wider mt-3 hover:underline cursor-pointer"
                onClick={() => Router.push(v.link)}
              >
                {v.label}
              </p>
            );
          })}
        </div>
        <div className="m-0">
          <h2 className="text-black font-poppins text-lg font-semibold tracking-wide mt-2">
            Follow us
          </h2>
          <div className="flex flex-row">
            {[
              {
                icon: (
                  <FacebookSharpIcon
                    sx={{ color: "#4267B2", fontSize: "35px" }}
                  />
                ),
              },
              {
                icon: (
                  <LinkedInIcon sx={{ color: "#0072b1", fontSize: "35px" }} />
                ),
              },
              {
                icon: (
                  <YouTubeIcon sx={{ color: "#CD201F", fontSize: "35px" }} />
                ),
              },
              {
                icon: (
                  <TwitterIcon sx={{ color: "#00acee", fontSize: "35px" }} />
                ),
              },
            ].map((v, i) => {
              return (
                <p
                  key={i}
                  className="text-black font-poppins text-[14px] font-normal tracking-wider hover:underline cursor-pointer mr-3 mt-0"
                >
                  {v.icon}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-2 pb-2">
        <p className="text-black font-poppins text-[14px] font-normal tracking-wider">
          © 2023 Alumtec Glazing Solutions Inc. All rights reserved.
        </p>
        <p>
          <span className="text-black font-poppins text-[14px] font-normal tracking-wider">
            Powered by
          </span>
          <span className="text-black font-poppins text-[14px] font-normal tracking-wider">
            {" "}
            <a
              href="https://www.github.com/bilalmohib/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Muhammad Bilal Mohib
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
