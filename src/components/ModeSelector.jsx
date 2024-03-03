import PropTypes from "prop-types";

function ModeSelector(props) {
  ModeSelector.propTypes = {
    mode: PropTypes.string.isRequired,
    setMode: PropTypes.func.isRequired,
  };
  return (
    <>
      <div className="font-Skia flex justify-center items-center font-[600] text-3xl text-white">
        <div
          className={`rounded-l-3xl border-2 cursor-pointer border-white w-[47vw] h-16 lg:w-44 lg:h-16 flex justify-center items-center ${
            props.mode === "individual" ? "bg-[#bf3535] text-[#fff]" : ""
          }`}
          onClick={() => {
            props.setMode("individual");
          }}
          style={{
            textShadow:
              props.mode === "individual"
                ? "2px 0 #089da8, -2px 0 #089da8, 0 2px #089da8, 0 -1px #089da8, 1px 1px #089da8, -1px -1px #089da8, 1px -1px #089da8, -1px 1px #089da8"
                : "",
          }}
        >
          Individual
        </div>
        <div
          className={`rounded-r-3xl border-2 ]  border-white cursor-pointer w-[47vw] h-16 lg:w-44 lg:h-16 flex justify-center items-center ${
            props.mode === "team" ? "bg-[#bf3535] text-[#fff]" : ""
          }`}
          onClick={() => {
            props.setMode("team");
          }}
          style={{
            textShadow:
              props.mode === "team"
                ? "2px 0 #089da8, -2px 0 #089da8, 0 2px #089da8, 0 -1px #089da8, 1px 1px #089da8, -1px -1px #089da8, 1px -1px #089da8, -1px 1px #089da8"
                : "",
          }}
        >
          Team
        </div>
      </div>
    </>
  );
}

export default ModeSelector;
