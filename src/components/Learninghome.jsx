import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../components/learninghome.css";

// Pages
import Header from "./Header";
import Allcards from "./Allcards";

export default function Learninghome() {
  const navigate = useNavigate();

  const cardData = JSON.parse(localStorage.getItem("session")) || [];

  function handleClick() {
    navigate("/newcard");
  }

  function handlebuttonClick() {
    if (window.confirm("Are you sure?")) {
      localStorage.clear();
      window.location.reload();
    } else {
      return false;
    }
  }

  const storageSize = new Blob(Object.values(localStorage)).size;

  return (
    <>
      <Header />
      <div className="button-container">
        <button className="add-card-button" onClick={handleClick}>
          Add card
        </button>
      </div>

      <Allcards cardData={cardData} />
      <div className="clear-all">
        <button className="clear-all-button" onClick={handlebuttonClick}>
          Clear all cards
        </button>
        <p className="localstorage-para">
          This page is using {((storageSize / 5000000) * 100).toFixed(5)} % of
          your 5Mb local storage memory
        </p>
      </div>
    </>
  );
}
