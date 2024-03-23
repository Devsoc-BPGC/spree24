import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import coke from "../assets/sponsors/coke.png";
import junglee from "../assets/sponsors/junglee.jpeg";
import blinkit from "../assets/sponsors/blinkit.svg";
import himal from "../assets/sponsors/himal.jpg";

import hipop from "../assets/sponsors/hipop.jpeg";

import peta from "../assets/sponsors/peta.svg";
import safe from "../assets/sponsors/safe.png";
import sbi from "../assets/sponsors/sbi.png";
import taali from "../assets/sponsors/taali.png";
import cosco from "../assets/sponsors/cosco.png";
import tat from "../assets/sponsors/tat.jpeg";
import tees from "../assets/sponsors/tees.png";

import Nav from "../components/Nav";
let arr = [
  {
    title: "Coco Cola",
    dsgn: "Powered By",
    img: coke,
    link: "https://www.coca-colacompany.com/",
  },
  {
    title: "Junglee Games",
    dsgn: "Title Sponsor of EDM Night",
    img: junglee,
    link: "https://www.jungleegames.com/",
  },
  {
    title: "SBI",
    dsgn: "Associate Banking Sponsor",
    img: sbi,
    link: "https://www.onlinesbi.com/",
  },
  {
    title: "PETA",
    dsgn: "Animal Welfare Partner",
    img: peta,
    link: "https://www.petaindia.com/",
  },
  {
    title: "Blinkit",
    dsgn: "Official Instant Delivery Partner",
    img: blinkit,
    link: "https://www.blinkit.com/",
  },
  {
    title: "Safexpress",
    dsgn: "Official Logistics Partner",
    img: safe,
    link: "https://www.safexpress.com/",
  },
  {
    title: "Cosco",
    dsgn: "Associate Partner of Volleyball",
    img: cosco,
    link: "https://www.cosco.in/",
  },
  {
    title: "Hipop",
    dsgn: "Festival Partner",
    img: hipop,
    link: "https://www.drinkhipop.com/",
  },
  {
    title: "Teeshood",
    dsgn: "Festival Partner",
    img: tees,
    link: "https://www.teeshood.com/",
  },
  {
    title: "Tatto Tattva",
    dsgn: "Festival Partner",
    img: tat,
    link: "https://www.instagram.com/tattoo_tattva?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    title: "Himalaya Wellness",
    dsgn: "Festival Skin Care Partner",
    img: himal,
    link: "https://himalayawellness.in/",
  },
  {
    title: "Taali",
    dsgn: "Festival Snacking Partner",
    img: taali,
    link: "https://taalifoods.in/",
  },
];

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-cover bg-[#015c6a] ">
      <div className="bg-[url('./assets/spon_bg.png')] bg-contain min-h-screen">
        <div className="z-10">
          <div className="fixed right-2 lg:top-2 top-2 h-10 ">
            <Nav />
          </div>
          <div
            className="lg:text-8xl lg:ml-4 text-6xl tracking-wider flex justify-start ml-2 items-center lg:justify-start text-white font-extrabold [text-shadow:_0_5px_0_rgb(0_0_0_/_40%)]"
            style={{
              textShadow:
                "4px 0 #cd6230, -4px 0 #cd6230, 0 4px #cd6230, 0 -2px #cd6230, 2px 2px #cd6230, -2px -2px #cd6230, 1px -1px #cd6230, -1px 1px #cd6230",
            }}
          >
            Sponsors
          </div>
          <div className="flex flex-col lg:mt-24 mt-20 justify-center items-center">
            {arr.map((sponsor, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center items-center lg:mb-16 mb-14 flex-col"
                >
                  <div
                    className="lg:text-5xl text-2xl font-bold tracking-wide lg:font-bold text-white"
                    style={{
                      textShadow:
                        "2px 0 #cd6230, -2px 0 #cd6230, 0 2px #cd6230, 0 -2px #cd6230, 2px 2px #cd6230, -2px -2px #cd6230, 1px -1px #cd6230, -1px 1px #cd6230",
                    }}
                  >
                    {sponsor.dsgn}
                  </div>
                  <Link to={sponsor.link} target="_blank">
                    <img
                      src={sponsor.img}
                      className="lg:h-56 h-36 bg-contain mt-4 "
                    ></img>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
