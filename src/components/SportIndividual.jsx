import PropTypes from "prop-types";

function SportIndividual(props) {
  SportIndividual.propTypes = {
    sport: PropTypes.string.isRequired,
    setSport: PropTypes.func.isRequired,
  };
  // const [sport, setSport] = useState("");
  // console.log(props.sport);

  const sports = [
    "Basketball",
    "Badminton",
    "Football",
    "UFC",
    "Snooker",
    "Carrom",
    "Chess",
    "Cricket",
    "Kabaddi",
    "Powerlifting",
    "Squash",
    "Tennis",
    "Table Tennis",
    "Volleyball",
  ];

  return (
    <>
      <div className="flex justify-center items-center flex-col h-full lg:w-5/12 border-white border-2 py-4 lg:py-0  rounded-lg">
        <div className="flex justify-between items-start w-5/6 text-sm lg:text-xl text-ggrey flex-wrap h-4/5 font-Tourney font-black">
          {sports.map((sportName, index) => (
            <div
              key={index}
              className={`border-white border-2 rounded-lg h-9 cursor-pointer flex justify-center items-center w-5/12 m-1 ${
                props.sport === sportName ? "bg-[#089da8] text-[#bf3535] " : ""
              }`}
              onClick={() => {
                props.setSport(sportName);
              }}
              style={{
                textShadow:
                  props.sport === sportName
                    ? "1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff"
                    : "",
              }}
            >
              {sportName}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SportIndividual;
