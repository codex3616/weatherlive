import React, { useEffect, useState } from "react";
import img1 from "./img/think.PNG";
import DateMonth from "./DateMonth";
const tempSymb = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-thermometer-half"
    viewBox="0 0 16 16"
  >
    <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z" />
    <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
  </svg>
);

const cloudSymb = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    fill="currentColor"
    className="bi bi-cloud-fog2-fill mt-2 animated "
    viewBox="0 0 16 16"
  >
    <path d="M8.5 3a5.001 5.001 0 0 1 4.905 4.027A3 3 0 0 1 13 13h-1.5a.5.5 0 0 0 0-1H1.05a3.51 3.51 0 0 1-.713-1H9.5a.5.5 0 0 0 0-1H.035a3.53 3.53 0 0 1 0-1H7.5a.5.5 0 0 0 0-1H.337a3.5 3.5 0 0 1 3.57-1.977A5.001 5.001 0 0 1 8.5 3z" />
  </svg>
);

// ca3e70eca342e8e84a78c612cd30f3ea;   .getFullYear()
const App = () => {
  const [response, setRes] = useState(null);
  const [search, setSearch] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ca3e70eca342e8e84a78c612cd30f3ea`;
      const response = await fetch(url);
      const resJson = await response.json();
      setRes(resJson.main);
      // console.log(resJson);
    };

    fetchApi();
  }, [search]);

  const FetchEvent = (e) => {
    const data = e.target.value;
    setSearch(data);
  };
  return (
    <>
      <div className="head bg-light ">
        <div className="box text-center mx-auto">
          <input
            type="search"
            className=" mt-3"
            value={search}
            placeholder="Search..."
            onChange={FetchEvent}
          />
          {!response ? ( // if response exit then show data if not exits then don't show..
            <div className="noData">
              <img src={img1} alt="..." className=" img-fluid mt-5 mb-2" />
              <p className=" mb-5 noData">No Data Found...</p>
            </div>
          ) : (
            <div className="info">
              <h1 className=" display-4 text-capitalize">
                <i className="fas fa-street-view text-light animated streetMen"></i>
                {search}
              </h1>
              <div className="text">
                <h2 className="temp">
                  {response.temp}°Cel{tempSymb}
                </h2>
                <p className="minMaxTemp my-2">
                  Min : {response.temp_min}°Cel | Max : {response.temp_max}°Cel
                </p>
                {cloudSymb}
                <DateMonth />
              </div>
            </div>
          )}
          {/* <div className="wave1"></div> */}
          {/* <div className="wave2"></div> */}
          {/* <div className="wave3"></div> */}
        </div>
      </div>
    </>
  );
};

export default App;
