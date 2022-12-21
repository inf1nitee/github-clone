import React from "react";
import "./index.scss";
import { BiBookBookmark } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import Myinput from "../UI/Myinput";
const index = () => {
  return (
    <div>
      <div className="repo-search-wrapper my-3 ">
        <ul className="repo-list">
          <li className="repo-item">
            <Myinput
              className="form-control p-1 repo-search"
              placeholder="Find your repository....."
            />
          </li>
          <li className="repo-items ">
            <span className="repo_manu">Type</span>
            <AiFillCaretDown />
          </li>
          <li className="repo-items">
            <span>Lanuguage</span>
            <AiFillCaretDown />
          </li>
          <li className="repo-items ">
            <span>Sort</span>
            <AiFillCaretDown />
          </li>
          <li className="repo-items bg-success text-white">
            <BiBookBookmark />
            <span className="new-span">New</span>
          </li>
        </ul>
        <hr className="hr" />
      </div>
    </div>
  );
};

export default index;
