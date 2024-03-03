import { useState, useEffect } from "react";
import "./SportTeam.css";
import PropTypes from "prop-types";

const sportList = [
  { value: "", label: "Sport", disabled: true, hidden: true },
  { value: "Basketball", label: "Basketball" },
  { value: "Badminton", label: "Badminton" },
  { value: "Football", label: "Football" },
  { value: "Carrom", label: "Carrom" },
  { value: "Chess", label: "Chess" },
  { value: "Cricket", label: "Cricket" },
  { value: "Kabaddi", label: "Kabaddi" },
  { value: "Powerlifting", label: "Powerlifting" },
  { value: "Squash", label: "Squash" },
  { value: "Tennis", label: "Tennis" },
  { value: "UFC", label: "UFC" },
  { value: "Snooker", label: "Snooker" },
  { value: "Table Tennis", label: "Table Tennis" },
  { value: "Volleyball", label: "Volleyball" },
];
const Team = ({ m, i, teamData, setTeamData }) => {
  Team.propTypes = {
    m: PropTypes.number.isRequired,
    i: PropTypes.number.isRequired,
    teamData: PropTypes.array.isRequired,
    setTeamData: PropTypes.func.isRequired,
  };
  // const [fullName, setFullName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // console.log(i);

  // useEffect(() => {
  //   console.log(teamData);
  // }, [teamData]);

  const handleFullNameChange = (e) => {
    teamData[i] = {
      ...teamData[i],
      fullName: e.target.value,
    };
    setTeamData([...teamData]);
  };

  const handlePhoneNumberChange = (e) => {
    teamData[i] = {
      ...teamData[i],
      phoneNumber: e.target.value,
    };
    setTeamData([...teamData]);
  };

  return (
    <div
      className="flex justify-between items-center w-4/5"
      style={{ marginTop: `${m}rem` }}
    >
      <span className="bg-black rounded-full p- text-lg font-extrabold  w-7 h-7 flex items-center justify-center">
        {i + 1}
      </span>
      {/* <input type="text" placeholder="Full Name" className="w-5/12 bg-transparent border-ggrey border-b-2 h-9 px-2 outline-none"></input>
                    <input type="number" placeholder="Phone Number" className="w-5/12 bg-transparent border-ggrey border-b-2 h-9 px-2 outline-none"></input> */}
      <input
        type="text"
        placeholder="Full Name"
        // value={teamData[i]?.fullName}
        onChange={handleFullNameChange}
        className="w-5/12 bg-transparent border-ggrey border-b-2 h-9 px-2 outline-none"
      />
      <input
        type="number"
        placeholder="Phone Number"
        // value={teamData[i]?.phoneNumber}
        onChange={handlePhoneNumberChange}
        className="w-5/12 bg-transparent border-ggrey border-b-2 h-9 px-2 outline-none"
      />
    </div>
  );
};

const SportTeam = ({ sport, setSport, setTeamData, teamData, setPoc }) => {
  SportTeam.propTypes = {
    sport: PropTypes.string.isRequired,
    setSport: PropTypes.func.isRequired,
    setTeamData: PropTypes.func.isRequired,
    teamData: PropTypes.array.isRequired,
    setPoc: PropTypes.func.isRequired,
  };
  const [width, setWidth] = useState(window.innerWidth);

  const [index, setIndex] = useState(3);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  // const [teamData, setTeamData] = useState([
  //   { fullName: "", phoneNumber: "" },
  //   { fullName: "", phoneNumber: "" },
  //   { fullName: "", phoneNumber: "" },
  //   { fullName: "", phoneNumber: "" },
  // ]);

  // useEffect(() => {
  //   console.log(teamData);
  //   console.log(sport);
  // }, [teamData, sport]);

  const isMobile = width <= 768;
  const [data, setData] = useState([
    <Team
      key={teamData}
      m={1}
      i={0}
      teamData={teamData}
      setTeamData={setTeamData}
    />,
    <Team key={teamData} i={1} teamData={teamData} setTeamData={setTeamData} />,
    <Team key={teamData} i={2} teamData={teamData} setTeamData={setTeamData} />,
    <Team key={teamData} i={3} teamData={teamData} setTeamData={setTeamData} />,
  ]);

  const handleAdd = async () => {
    setData((prevData) => [
      ...prevData,
      <Team
        key={teamData}
        i={index + 1}
        setTeamData={setTeamData}
        teamData={teamData}
      />,
    ]);
    setIndex((prevIndex) => prevIndex + 1);
  };
  return (
    <>
      <div className="flex justify-between items-center flex-col h-full lg:w-5/12">
        <div className="sync">
          {/* <div> */}
          <button
            className={`add ${isMobile && "mr-[-40vw] mt-16"}`}
            onClick={handleAdd}
          >
            +
          </button>
          {/* </div> */}
          <div>
            <select
              placeholder="Sport"
              required
              className="bg-transparent border-white border-2 rounded-lg h-9 px-2 w-full outline-none text-ggrey"
              onChange={(e) => setSport(e.target.value)}
              value={sport}
            >
              {sportList.map((option, index) => (
                <option
                  key={index}
                  value={option.value}
                  disabled={option.disabled}
                  hidden={option.hidden}
                  className="bg-transparent"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div
          className="flex justify-center items-center flex-col py-5 w-full border-white border-2 rounded-lg text-ggrey"
          style={{ paddingTop: "0rem", overflowY: "scroll", margin: "1rem" }}
        >
          {data}
        </div>
        <div className="flex justify-center items-center py-5 flex-col w-full border-white border-2 rounded-lg text-ggrey">
          <div className="w-11/12 text-ggrey">Point of Contact (POC)</div>
          <div className="flex justify-between items-center w-4/5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-5/12 bg-transparent border-ggrey border-b-2 h-9 px-2 outline-none"
              onChange={(e) =>
                setPoc((prevPoc) => ({
                  ...prevPoc,
                  fullName: e.target.value,
                }))
              }
            ></input>
            <input
              type="number"
              placeholder="Phone Number"
              className="w-5/12 bg-transparent border-ggrey border-b-2 h-9 px-2 outline-none"
              onChange={(e) =>
                setPoc((prevPoc) => ({
                  ...prevPoc,
                  phoneNumber: e.target.value,
                }))
              }
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default SportTeam;
