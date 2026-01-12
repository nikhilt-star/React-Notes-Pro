import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import { useContext } from "react";
import { NotesDataProviders } from "../DataContexts/NotesDataContext";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

const Home = () => {
  const {
    title,
    settitle,
    text,
    settext,
    date,
    setdate,
    AllData,
    setAllData,
    SubmitHandler,
  } = useContext(NotesDataProviders);
  const toast = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Note Added Successfully",
      life: 3000,
    });
  };
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#0f172a] via-[#0b1220] to-[#071426] flex items-center justify-center flex-col p-6 text-amber-50 font-poppins">
      <Navbar />
      <Toast ref={toast} className="toast-custom" />
      <form
        onSubmit={(e) => {
          SubmitHandler(e);
        }}
        className="glass-card w-full max-w-2xl p-8 rounded-3xl flex flex-col gap-6"
      >
        <input
          onChange={(e) => {
            settitle(e.target.value);
          }}
          value={title}
          className="input-premium w-full text-amber-50 outline-none p-3 bg-transparent placeholder-amber-200 border border-amber-200/20 rounded-lg mt-2"
          type="text"
          placeholder="Enter Title"
        />
        <textarea
          onChange={(e) => {
            settext(e.target.value);
          }}
          value={text}
          className="input-premium w-full text-amber-50 outline-none p-3 bg-transparent placeholder-amber-200 border border-amber-200/20 rounded-lg h-36 resize-none"
          name=""
          id=""
          placeholder="Enter Your Details.."
        ></textarea>
        <input
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => {
            setdate(e.target.value);
          }}
          value={date}
          className="input-premium w-full text-amber-50 outline-none p-3 bg-transparent placeholder-amber-200 border border-amber-200/20 rounded-lg"
          type="date"
          placeholder="Enter Date"
        />
        <button
          className="btn-premium w-full py-3 rounded-xl text-black font-semibold"
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default Home;
