import React from "react";
import { BiBookBookmark } from "react-icons/bi";
import "./index.scss";
import Loader from "../../components/Loader";

const index = ({ data }) => {
  const currentData = data.slice(0, 6);
  const dot = (lang) => {
    switch (lang) {
      case "HTML":
        return {
          background: "#FF884B",
        };
        break;

      case "CSS":
        return {
          background: "#AF0171",
        };

      case "SCSS":
        return {
          background: "#FF597B",
        };

      case "JavaScript":
        return {
          background: "#FDFF00",
        };

      default:
        break;
    }
  };
  return (
    <>
      {data.length > 0 ? (
        currentData.map((e) => {
          return (
            <div className="card-body" key={e.name}> 
              <ul className="card-list  ">
                <li className="card-item d-flex align-items-center justify-content-between mb-2">
                  <div className="repo-name d-flex align-items-center gap-3">
                    <p className="m-0 ">
                      <span className="book"><BiBookBookmark /></span>
                      <a  href={e.html_url} target="_blank">
                         {e.name ? e.name : ""}
                      </a>
                    </p>
                  </div>
                  <span className="public">{e.visibility}</span>
                </li>
                <li className="card-item  ">
                  <span className="dot me-3 js " style={dot(e.language)}></span>
                  <span>{e.language ? e.language : "JavaScript"}</span>
                </li>
              </ul>
            </div>
          );
        })
      ) : (
        <Loader />
      )}
    </>
  );
};

export default index;
