import React, { useState } from "react";
import data from "../../../data/data.json";
import style from "./attendence.module.css";

const b = Object.keys(data["ATTENDANCE"]);
const monday = Object.values(data["ATTENDANCE"]["Monday"]);
const tuesday = Object.values(data["ATTENDANCE"]["Tuesday"]);
const wednesday = Object.values(data["ATTENDANCE"]["Wednesday"]);
const thursday = Object.values(data["ATTENDANCE"]["Thursday"]);
const friday = Object.values(data["ATTENDANCE"]["Friday"]);

const Attendence = () => {
  return (
    <>
      <div className={style.container}>
        <h2>HELLO! {data["NAME "]}</h2>
        <center>ATTENDANCE</center>
        <div className={style.items}>
          <span>
            <b>{b[0]}</b>

            <div>{monday[0]}</div>
            <div>{monday[1]}</div>
            <div>{monday[2]}</div>
          </span>
          <span>
            <b>{b[1]}</b>
            <div>{tuesday[0]}</div>
            <div>{tuesday[1]}</div>
            <div>{tuesday[2]}</div>
          </span>
          <span>
            <b>{b[2]}</b>
            <div>{wednesday[0]}</div>
            <div>{wednesday[1]}</div>
            <div>{wednesday[2]}</div>
          </span>
          <span>
            <b>{b[3]}</b>
            <div>{thursday[0]}</div>
            <div>{thursday[1]}</div>
            <div>{thursday[2]}</div>
          </span>
          <span>
            <b>{b[4]}</b>
            <div>{friday[0]}</div>
            <div>{friday[1]}</div>
            <div>{friday[2]}</div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Attendence;
