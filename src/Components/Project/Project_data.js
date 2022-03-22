import React, { useEffect, useState } from "react";

function Project_data() {
  const [data, setData] = useState([]);
  const fetch_data = async () => {
    await fetch("https://git-data-screape.herokuapp.com/")
      // await fetch("http://localhost:8000/")
      .then((res) => {
        {
          return res.json();
        }
      })
      .then(async (data) => {
        await setData(data);
      });
  };

  useEffect(async () => {
    await fetch_data();
  }, []);

  return (
    <>

      {data.map((dataD) => (
    <div>
        <div className="card-bg">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={dataD.image} alt="Image..." />
              </div>
              <div className="flip-card-back p-3">
                <h3 className="card-title">{dataD.title}</h3>
                <p className="card-text">{dataD.desciption}</p>
                <a href={`https://github.com` + dataD.link}>
                  <button
                    className="btnn highlighted-btn"
                    style={{ height: "auto", width: "70%" }}
                  >
                    Check
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
      ))}
    </>
  );
}

export default Project_data;
