import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import adda52 from "../assets/sponsors/website/Adda52.png";
import Anaconda from "../assets/sponsors/website/Anaconda.png";
// import AuLogo from "../assets/sponsors/website/AuLogo.png";
import b8hxDcPQWP4Gh1u0XvvW from "../assets/sponsors/website/b8hxDcPQWP4Gh1u0XvvW.png";
// import BSL from "../assets/sponsors/website/BSL.pdf";
import DLL from "../assets/sponsors/website/DLL.png";
import FBL from "../assets/sponsors/website/FBL.png";
import GOA from "../assets/sponsors/website/GOA.png";
import KA_Vithub_logo from "../assets/sponsors/website/KA_Vithub_logo.png";
import PBL from "../assets/sponsors/website/PBL.pdf";
import pp from "../assets/sponsors/website/pp.jpg";
import Techno from "../assets/sponsors/website/Techno.pdf";
import a from "../assets/sponsors/website/a.jpeg";
import b from "../assets/sponsors/website/b.jpeg";
import c from "../assets/sponsors/website/c.jpeg";
import d from "../assets/sponsors/website/d.jpeg";
import e from "../assets/sponsors/website/e.jpeg";
import f from "../assets/sponsors/website/f.jpeg";
import g from "../assets/sponsors/website/g.jpeg";

import Nav from "../components/Nav";
let arr = [
  {
    title: "adda52",
    dsgn: "",
    img: adda52,
    link: "",
  },
  {
    title: "Anaconda",
    dsgn: "",
    img: Anaconda,
    link: "",
  },
  // {
  //   title: "AuLogo",
  //   dsgn: "",
  //   img: AuLogo,
  //   link: "",
  // },
  {
    title: "b8hxDcPQWP4Gh1u0XvvW",
    dsgn: "",
    img: b8hxDcPQWP4Gh1u0XvvW,
    link: "",
  },
  // {
  //   title: "BSL",
  //   dsgn: "",
  //   img: BSL,
  //   link: "",
  // },
  {
    title: "DLL",
    dsgn: "",
    img: DLL,
    link: "",
  },
  {
    title: "FBL",
    dsgn: "",
    img: FBL,
    link: "",
  },
  {
    title: "GOA",
    dsgn: "",
    img: GOA,
    link: "",
  },
  {
    title: "KA_Vithub_logo",
    dsgn: "",
    img: KA_Vithub_logo,
    link: "",
  },
  {
    title: "pp",
    dsgn: "",
    img: pp,
    link: "",
  },
  {
    title: "a",
    dsgn: "",
    img: a,
    link: "",
  },
  {
    title: "b",
    dsgn: "",
    img: b,
    link: "",
  },
  {
    title: "c",
    dsgn: "",
    img: c,
    link: "",
  },
  {
    title: "d",
    dsgn: "",
    img: d,
    link: "",
  },
  {
    title: "e",
    dsgn: "",
    img: e,
    link: "",
  },
  {
    title: "f",
    dsgn: "",
    img: f,
    link: "",
  },
  {
    title: "g",
    dsgn: "",
    img: g,
    link: "",
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
