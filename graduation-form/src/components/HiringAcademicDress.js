import React, { useEffect, useState } from "react";
const HiringAcademicDress = ({
  ceremony: {
    Yes_HasHiringAcademicDress,
    Yes_HiringAcademicDressContent1,
    Yes_HiringAcademicDressContent2,
  },
}) => {
  const [academicDressOption, setAcademicDressOption] = useState(0);
  const [sizeOfAcademicDressOption, setSizeOfAcademicDressOption] = useState(0);
  const [graduationTrencherSize, setGraduationTrencherSize] = useState(0);
  const [qualification, setQualification] = useState("");
  const [institution, setInstitution] = useState("");
  useEffect(() => {}, [academicDressOption, sizeOfAcademicDressOption]);
  const academicDressOptions = [
    {
      label: "I would like to hire my academic dress from Otago Polytechnic",
      value: "hire",
    },
    {
      label:
        "I have my own academic dress. I do not need to hire an academic dress",
      value: "no-hire",
    },
    {
      label:
        "I have a higher qualification. I would like to wear the academic dress from my highest qualification",
      value: "higher-qualification",
    },
  ];
  const sizeOfAcademicDressOptions = [
    {
      label: "SP: Short and Petite, height 158cm or shorter",
      value: "sp",
    },
    {
      label: "S: Short, height between 159cm - 163cm",
      value: "s",
    },
    {
      label: "M: Medium, height between 164cm - 176cm",
      value: "m",
    },
    {
      label: "T: Tall, height between 177cm - 187cm",
      value: "t",
    },
    {
      label: "XT: Extra Tall, height 188cm or taller",
      value: "xt",
    },
  ];
  const graduationTrencherSizes = [
    {
      label: "52cm",
      value: 52,
    },
    {
      label: "53cm",
      value: 53,
    },
    {
      label: "54cm",
      value: 54,
    },
    {
      label: "55cm",
      value: 55,
    },
    {
      label: "56cm",
      value: 56,
    },
    {
      label: "57cm",
      value: 57,
    },
    {
      label: "58cm",
      value: 58,
    },
    {
      label: "59cm",
      value: 59,
    },
    {
      label: "60cm",
      value: 60,
    },
    {
      label: "61cm",
      value: 61,
    },
    {
      label: "62cm",
      value: 62,
    },
    {
      label: "63cm",
      value: 63,
    },
    {
      label: "64cm",
      value: 64,
    },
    {
      label: "65cm",
      value: 65,
    },
  ];
  return (
    <>
      {Yes_HasHiringAcademicDress ? (
        <div>
          <h1>Hiring Academic Dress</h1>
          <p>
            All graduates must wear academic dress during the Otago Polytechnic
            Graduation Ceremony.
          </p>
          {academicDressOptions.map(({ label, value }) => (
            <div key={value}>
              <input
                type="radio"
                id={`academicDressOptions_${value}`}
                name="academicDressOptions"
                checked={academicDressOption === value}
                onChange={() => {
                  setAcademicDressOption(value);
                }}
              />
              <label htmlFor={`academicDressOptions_${value}`}>{label}</label>
            </div>
          ))}
          <div
            dangerouslySetInnerHTML={{
              __html: Yes_HiringAcademicDressContent1,
            }}
          />
          {academicDressOption === "higher-qualification" ? (
            <>
              <p>
                Please provide details of your academic dress for your highest
                qualification
              </p>
              <div>
                <label htmlFor="qualification">Name of qualification</label>
                <input
                  id="qualification"
                  type="text"
                  value={qualification}
                  onChange={(event) => {
                    setQualification(event.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="institution">Name of institution</label>
                <input
                  id="institution"
                  type="text"
                  value={institution}
                  onChange={(event) => {
                    setInstitution(event.target.value);
                  }}
                />
              </div>
            </>
          ) : (
            <></>
          )}
          {academicDressOption === "hire" ||
          academicDressOption === "higher-qualification" ? (
            <>
              <p>Size of your academic dress (Tick one)</p>
              {sizeOfAcademicDressOptions.map(({ label, value }) => (
                <div key={value}>
                  <input
                    type="radio"
                    id={`sizeOfAcademicDressOptions_${value}`}
                    name="sizeOfAcademicDressOptions"
                    checked={sizeOfAcademicDressOption === value}
                    onChange={() => {
                      setSizeOfAcademicDressOption(value);
                    }}
                  />
                  <label htmlFor={`sizeOfAcademicDressOptions_${value}`}>
                    {label}
                  </label>
                </div>
              ))}
              <h2>Graduation trencher</h2>
              <p>Select the head size for your graduation trencher</p>
              <select
                id="graduationTrencherSizes"
                value={graduationTrencherSize}
                onChange={(event) => {
                  setGraduationTrencherSize(event.target.value);
                }}>
                <option> </option>
                {graduationTrencherSizes.map(({ label, value }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              <div
                dangerouslySetInnerHTML={{
                  __html: Yes_HiringAcademicDressContent2,
                }}
              />
            </>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default HiringAcademicDress;
