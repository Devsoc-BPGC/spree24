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
import skippi from "../assets/sponsors/skippi.png";
import mogu from "../assets/sponsors/mogu.png";
import exceedd from "../assets/sponsors/exceedd.png";
import oneplus from "../assets/sponsors/oneplus.png";
import maxpro from "../assets/sponsors/maxpro.png";
import ferr from "../assets/sponsors/ferr.png";
import skechers from "../assets/sponsors/skechers.png";
import icici from "../assets/sponsors/icici.png";
import times from "../assets/sponsors/times.png";
import spi from "../assets/sponsors/spi.png";
import medial from "../assets/sponsors/medial.png";
import trends from "../assets/sponsors/trends.png";
import plum from "../assets/sponsors/plum.png";
import kamat from "../assets/sponsors/kamat.png";
import probox from "../assets/sponsors/probox.png";
import oatey from "../assets/sponsors/oatey.jpeg";

import Nav from "../components/Nav";
let arr = [
  {
    title: "Cosco",
    dsgn: "Associater Prartner of Volleyball",
    img: cosco,
    link: "https://www.cosco.in/",
  },
  {
    title: "Junglee Games",
    dsgn: "Title Sponsor of EDM Night",
    img: junglee,
    link: "https://www.jungleegames.com/",
  },
  {
    title: "Himalaya Wellness",
    dsgn: "Festival Skin Care Partner",
    img: himal,
    link: "https://himalayawellness.in/",
  },
  {
    title: "Safexpress",
    dsgn: "Official Logistics Partner",
    img: safe,
    link: "https://www.safexpress.com/",
  },
  {
    title: "Hipop",
    dsgn: "Festival Partner",
    img: hipop,
    link: "https://drinkhipop.com",
  },
  {
    title: "Teeshood",
    dsgn: "Festival Partner",
    img: tees,
    link: "https://www.teeshood.com/",
  },
  {
    title: "Peta",
    dsgn: "Animal Welfare Partner",
    img: peta,
    link: "https://www.petaindia.com/",
  },
  {
    title: "Taali",
    dsgn: "Festival Snacking Partner",
    img: taali,
    link: "https://taalifoods.in/",
  },
  {
    title: "Tattoo Tattva",
    dsgn: "Festival Partner",
    img: tat,
    link: "https://www.instagram.com/tattoo_tattva?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    title: "Coca Cola",
    dsgn: "Powered By",
    img: coke,
    link: "https://www.coca-colacompany.com/",
  },
  {
    title: "SBI",
    dsgn: "Associate Banking Partner",
    img: sbi,
    link: "https://www.onlinesbi.sbi/",
  },
  {
    title: "Blinkit",
    dsgn: "Official Instant Delivery Partner",
    img: blinkit,
    link: "https://blinkit.com/",
  },

  {
    title: "Skippi",
    dsgn: "Offical Ice Popsicle Partner",
    img: skippi,
    link: "https://skippi.in/",
  },
  {
    title: "Mogu Mogu",
    dsgn: "Official Juice Partner",
    img: mogu,
    link: "https://getmogumogo.com/",
  },
  {
    title: "Exceedd",
    dsgn: "Finance Partner",
    img: exceedd,
    link: null,
  },
  {
    title: "Oneplus",
    dsgn: "Title Sponsor of Bollywood Night",
    img: oneplus,
    link: "https://www.oneplus.in/",
  },
  {
    title: "Max Protein",
    dsgn: "Festival Protein Partner",
    img: maxpro,
    link: "https://maxprotein.in/",
  },
  {
    title: "Ferrero",
    dsgn: "Official Chocolate",
    img: ferr,
    link: "https://www.ferrero.com/int/en/",
  },
  {
    title: "Skechers",
    dsgn: "Official Fashion Partner",
    img: skechers,
    link: "https://www.skechers.in/",
  },
  {
    title: "ICICI",
    dsgn: "Festival Partner",
    img: icici,
    link: "https://www.icicibank.com/",
  },
  {
    title: "Times Prime",
    dsgn: "Official Subscriptions Partner",
    img: times,
    link: "https://www.timesprime.com/",
  },
  {
    title: "Spiky Sips",
    dsgn: "Festivals Refreshment Partner",
    img: spi,
    link: "https://spikysips.com/",
  },
  {
    title: "Medial",
    dsgn: "Social Networking Partner",
    img: medial,
    link: "https://mediatalapp.medium.com/introducing-medial-the-next-gen-professional-social-media-app-14dd6449f6cf",
  },
  {
    title: "Reliance Trends",
    dsgn: "Festival Partner",
    img: trends,
    link: "https://relianceretail.com/reliance-trends.html",
  },
  {
    title: "Plum Goodness",
    dsgn: "Skincare Partner",
    img: plum,
    link: "https://plumgoodness.com/",
  },
  {
    title: "Kamat Realty",
    dsgn: "Official Real Estate Partner",
    img: kamat,
    link: "https://kamatrealty.com/",
  },
  {
    title: "Real",
    dsgn: "Hydration Partner",
    img: null,
    link: null,
  },
  {
    title: "Princess",
    dsgn: "Hydration Partner",
    img: null,
    link: null,
  },
  {
    title: "Protein Box",
    dsgn: "Health Foods Partner",
    img: probox,
    link: "https://protein-box.com/",
  },
  {
    title: "Oatey",
    dsgn: "Sustainable Healthy Plant Based Milk Partner",
    img: oatey,
    link: "https://oatey.in/",
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
