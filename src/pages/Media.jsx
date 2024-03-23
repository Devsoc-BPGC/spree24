import { useEffect, useState } from "react";
import amar from "../assets/media/amar.png";
import blogadda from "../assets/media/blogadda.png";
import Bullspree from "../assets/media/Bullspree.png";
import CampusKarma from "../assets/media/CampusKarma.jpeg";
import CampusTimesPune from "../assets/media/CampusTimesPune.png";
import campusVarta from "../assets/media/campusVarta.png";
import chesscom from "../assets/media/chesscom.png";
import DUBeat from "../assets/media/DUBeat.png";
import FistoSports from "../assets/media/FistoSports.png";
import Goa365 from "../assets/media/Goa365.jpeg";
import jiosaavn from "../assets/media/jiosaavn.png";
import knowafestphp from "../assets/media/knowafestphp.png";
import ohCapus from "../assets/media/ohCapus.png";

import PhysioTimes from "../assets/media/PhysioTimes.jpg";
import RDXGoa from "../assets/media/RDXGoa.png";
import TechStory from "../assets/media/TechStory.jpeg";
import youth from "../assets/media/youth.png";
import zex from "../assets/media/zex.png";
import Nav from "../components/Nav";
let arr = [
  {
    title: "Bullspree",
    dsgn: "Official Trading Partner",
    img: Bullspree,
    link: "",
  },
  {
    title: "Campus Times Pune",
    dsgn: "Associate Media Partner",
    img: CampusTimesPune,
    link: "",
  },
  {
    title: "Amar Ujala",
    dsgn: "Official Excellence Partner",
    img: amar,
    link: "",
  },
  {
    title: "Jio Saavan",
    dsgn: "Official Streaming Partner of Boiler Room",
    img: jiosaavn,
    link: "",
  },
  {
    title: "RDX Goa",
    dsgn: "Associate Media Partner",
    img: RDXGoa,
    link: "",
  },
  {
    title: "ZexPR",
    dsgn: "Official Media Partner",
    img: zex,
    link: "https://www.safexpress.com/",
  },
  {
    title: "DU Beat",
    dsgn: "Associate Media Partner",
    img: DUBeat,
    link: "https://www.cosco.in/",
  },
  {
    title: "Goa365",
    dsgn: "Associate Media Partner",
    img: Goa365,
    link: "",
  },
  {
    title: "Campus Karma",
    dsgn: "Associate Media Partner",
    img: CampusKarma,
    link: "",
  },
  {
    title: "Campus Varta",
    dsgn: "Associate Media Partner",
    img: campusVarta,
    link: "",
  },
  {
    title: "Chess.com",
    dsgn: "Associate Media Partner",
    img: chesscom,
    link: "",
  },
  {
    title: "Fisto Sports",
    dsgn: "Associate Media Partner",
    img: FistoSports,
    link: "",
  },

  {
    title: "Knowafest",
    dsgn: "Associate Media Partner",
    img: knowafestphp,
    link: "",
  },
  {
    title: "Oh Capus",
    dsgn: "Associate Media Partner",
    img: ohCapus,
    link: "",
  },
  {
    title: "Physio Times",
    dsgn: "Associate Media Partner",
    img: PhysioTimes,
    link: "",
  },
  {
    title: "TechStory",
    dsgn: "Associate Media Partner",
    img: TechStory,
    link: "",
  },
  {
    title: "Blogadda",
    dsgn: "Associate Media Partner",
    img: blogadda,
    link: "",
  },
  {
    title: "Youth Incorporated Magazine",
    dsgn: "Associate Media Partner",
    img: youth,
    link: "",
  },
];

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-cover bg-[#015c6a] ">
      <div className="bg-[url('./assets/spon_bg.png')] bg-contain min-h-screen">
        <div className="fixed right-2 lg:top-2 top-2 h-10 ">
          <Nav />
        </div>
        <div className="z-10">
          <div
            className="lg:text-8xl lg:ml-4 text-4xl tracking-wider flex justify-start ml-2 items-center lg:justify-start text-white font-extrabold [text-shadow:_0_5px_0_rgb(0_0_0_/_40%)]"
            style={{
              textShadow:
                "4px 0 #cd6230, -4px 0 #cd6230, 0 4px #cd6230, 0 -2px #cd6230, 2px 2px #cd6230, -2px -2px #cd6230, 1px -1px #cd6230, -1px 1px #cd6230",
            }}
          >
            Media Partners
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
                  <img
                    src={sponsor.img}
                    className="lg:h-56 h-36 bg-contain mt-4 "
                  ></img>
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
