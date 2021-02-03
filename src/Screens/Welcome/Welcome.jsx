import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

export default function Welcome() {
  return (
    <>
      <div className="title">
        <div className="boxed">
          <h2 className="plus">Plus Ultra!</h2>
        </div>
      </div>
      <div className='deku'>
      <img src="https://i.ibb.co/T2hzf8y/dekuwriting.gif"/>
      </div>
      <div className='description'>
        <p>A fun project involving MHA and its API. Take a look at some character stats.</p>
        <p>Note there are some light spoilers here. If you spoil yourself, you are responsible so don't blame me! :)</p>
        <Link to='/plus'>
          <button className='navigate'>Enter</button>
        </Link>
      </div>

    </>
  );
}
