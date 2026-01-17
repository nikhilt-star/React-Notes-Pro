import React, { createContext, useEffect, useRef, useState } from "react";
export const NotesDataProviders = createContext();
import { Toast } from "primereact/toast";

const NotesDataContext = ({ children }) => {
  const localData = JSON.parse(localStorage.getItem("notes")) || [];
  const [title, settitle] = useState("");
  const [text, settext] = useState("");
  const [date, setdate] = useState("");
  const [AllData, setAllData] = useState(localData);
  const [searchNote, setsearchNote] = useState('')
  let Alldetails = "";
  function isValidDate(selectedDate) {
    if (!selectedDate) return false;

    const today = new Date();
    const userDate = new Date(selectedDate);

    today.setHours(0, 0, 0, 0);
    userDate.setHours(0, 0, 0, 0);

    return userDate >= today;
  }
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "" || text.trim() === "" || !isValidDate(date)) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "All Fields are required",
        life: 3000,
      });
      return;
    }
    Alldetails = [...AllData];
    Alldetails.push({ id: Date.now(), title, text, date });
    setAllData(Alldetails);
    localStorage.setItem("notes", JSON.stringify(Alldetails));
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Note saved successfully",
      life: 3000,
    });
    settitle("");
    settext("");
    setdate("");
  };
  const toast = useRef(null);
  useEffect(() => {}, [AllData]);

  function DeleteNotes(id) {
    let copyNotes = [...AllData];
    let findNote = copyNotes.findIndex((elem) => elem.id === id);
    copyNotes.splice(findNote, 1);
    setAllData(copyNotes);
    localStorage.setItem("notes", JSON.stringify(copyNotes));
  }
  const searchData = searchNote;
  const filterNotes = searchData.trim()==="" ? AllData : AllData.filter((elem)=>{
   if(elem.title === searchData)
   {
      return elem
    }
  })
  
  return (
    <>
      <Toast ref={toast} position="top-right" />
      <NotesDataProviders.Provider
        value={{
          title,
          settitle,
          text,
          settext,
          date,
          setdate,
          AllData,
          setAllData,
          setsearchNote,
          searchNote,
          SubmitHandler,
          DeleteNotes,
          filterNotes
        }}
      >
        {children}
      </NotesDataProviders.Provider>
    </>
  );
};

export default NotesDataContext;
