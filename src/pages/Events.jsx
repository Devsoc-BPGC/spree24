import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.png";
import phonebg from "../assets/mobilebg.png";

const Events = () => {
  const navigate = useNavigate();

  const events = [
    {
      category: "Sports",
      events: [
        "Football",
        "Cricket",
        "Basketball",
        "Volleyball",
        "Tennis",
        "Badminton",
        "Kabaddi",
        "Table Tennis",
        "Carrom",
        "Chess",
        "Snooker",
        "Squash",
        "Powerlifting",
        "Frisbee",
      ],
    },
    {
      category: "Marathons",
      events: ["3KM", "5KM", "10KM"],
    },
  ];

  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const mobileBackgroundStyle = {
    backgroundImage: `url(${phonebg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8"
      style={{
        ...backgroundStyle,
        "@media (max-width: 768px)": mobileBackgroundStyle,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 bg-orange-300 hover:bg-orange-400 text-black px-4 py-2 rounded-full transition duration-300"
        >
          ← Back
        </button>

        <h1 className="text-4xl bg-white rounded-full bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg p-2 font-extrabold text-center mb-10">
          Exciting Events
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((category, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-orange-700">
                {category.category}
              </h2>
              <ul className="space-y-1 text-black">
                {category.events.map((event, eventIndex) => (
                  <li key={eventIndex} className="flex items-center">
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://register.bits-spree.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-300 text-black font-bold py-3 px-6 rounded-full hover:bg-orange-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Events;
