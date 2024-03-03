import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const stateList = [
  { value: "Andhra Pradesh", label: "Andhra Pradesh" },
  {
    value: "Andaman and Nicobar Islands",
    label: "Andaman and Nicobar Islands",
  },
  { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
  { value: "Assam", label: "Assam" },
  { value: "Bihar", label: "Bihar" },
  { value: "Chandigarh", label: "Chandigarh" },
  { value: "Chhattisgarh", label: "Chhattisgarh" },
  { value: "Dadar and Nagar Haveli", label: "Dadar and Nagar Haveli" },
  { value: "Daman and Diu", label: "Daman and Diu" },
  { value: "Delhi", label: "Delhi" },
  { value: "Lakshadweep", label: "Lakshadweep" },
  { value: "Puducherry", label: "Puducherry" },
  { value: "Goa", label: "Goa" },
  { value: "Gujarat", label: "Gujarat" },
  { value: "Haryana", label: "Haryana" },
  { value: "Himachal Pradesh", label: "Himachal Pradesh" },
  { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
  { value: "Jharkhand", label: "Jharkhand" },
  { value: "Karnataka", label: "Karnataka" },
  { value: "Kerala", label: "Kerala" },
  { value: "Madhya Pradesh", label: "Madhya Pradesh" },
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Manipur", label: "Manipur" },
  { value: "Meghalaya", label: "Meghalaya" },
  { value: "Mizoram", label: "Mizoram" },
  { value: "Nagaland", label: "Nagaland" },
  { value: "Odisha", label: "Odisha" },
  { value: "Punjab", label: "Punjab" },
  { value: "Rajasthan", label: "Rajasthan" },
  { value: "Sikkim", label: "Sikkim" },
  { value: "Tamil Nadu", label: "Tamil Nadu" },
  { value: "Telangana", label: "Telangana" },
  { value: "Tripura", label: "Tripura" },
  { value: "Uttar Pradesh", label: "Uttar Pradesh" },
  { value: "Uttarakhand", label: "Uttarakhand" },
  { value: "West Bengal", label: "West Bengal" },
];

document.addEventListener("wheel", function () {
  if (document.activeElement.type === "number") {
    document.activeElement.blur();
  }
});
function Form(props) {
  Form.propTypes = {
    setFullName: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired,
    setPhoneNumber: PropTypes.func.isRequired,
    setGender: PropTypes.func.isRequired,
    setCollegeName: PropTypes.func.isRequired,
    setResState: PropTypes.func.isRequired,
    setCity: PropTypes.func.isRequired,
  };

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 768;
  return (
    <>
      <div className="flex justify-center items-center flex-col   lg:w-5/12 border-white border-2 py-4 lg:py-4 rounded-lg h-full">
        <div className="flex justify-around h-full items-start flex-col lg:w-5/6 w-5/6 text-ggrey">
          <input
            type="text"
            placeholder="Full Name"
            id="fullName"
            required
            className={`bg-transparent  border-white border-2 rounded-lg h-9 px-2 w-full outline-none ${
              isMobile && "mt-2 mb-1"
            }`}
            onInput={(e) => {
              props.setFullName(e.target.value);
            }}
          />
          {/* <span className="text-red-500">*</span> */}
          <input
            type="text"
            placeholder="Email"
            required
            className={`bg-transparent border-white border-2 rounded-lg h-9 px-2 w-full outline-none ${
              isMobile && "my-1"
            }`}
            onInput={(e) => {
              props.setEmail(e.target.value);
            }}
          ></input>
          <input
            type="number"
            placeholder="Phone Number"
            required
            className={`bg-transparent border-white border-2 rounded-lg h-9 px-2 w-full outline-none ${
              isMobile && "my-1"
            }`}
            onInput={(e) => {
              props.setPhoneNumber(e.target.value);
            }}
          ></input>
          <select
            placeholder="Gender"
            required
            className="bg-transparent border-white border-2 rounded-lg h-9 px-2 w-full outline-none"
            onChange={(e) => props.setGender(e.target.value)}
          >
            <option
              className="bg-transparent "
              value=""
              selected
              disabled
              hidden
            >
              Gender
            </option>
            <option className="bg-transparent text-black" value="Male">
              Male
            </option>
            <option className="bg-transparent text-black" value="Female">
              Female
            </option>
          </select>
          <input
            type="text"
            placeholder="College Name"
            required
            className={`bg-transparent border-white border-2 rounded-lg h-9 px-2 w-full outline-none ${
              isMobile && "my-1"
            }`}
            onInput={(e) => {
              props.setCollegeName(e.target.value);
            }}
          ></input>
          <div className="w-full flex gap-4 justify-between items-center">
            <select
              className="bg-transparent w-5/12 border-white border-2 rounded-lg h-9 px-2 outline-none "
              onChange={(e) => props.setResState(e.target.value)}
            >
              <option
                className="bg-transparent"
                value=""
                selected
                disabled
                hidden
              >
                State
              </option>
              {stateList.map((state, index) => (
                <option
                  key={index}
                  className="bg-transparent text-black"
                  value={state.value}
                >
                  {state.label}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="City"
              required
              className={`bg-transparent border-white border-2 rounded-lg h-9 px-2 w-full outline-none ${
                isMobile && "my-1"
              }`}
              onInput={(e) => {
                props.setCity(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
