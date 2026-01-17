import React, { useContext, useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import { useNavigate } from "react-router-dom";
import { NotesDataProviders } from "../DataContexts/NotesDataContext";


const NotesList = () => {
  const navigate = useNavigate();
  const { AllData, DeleteNotes , setsearchNote , searchNote , searchNotesData , filterNotes} = useContext(NotesDataProviders);
  useEffect(() => {}, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#071426] via-[#081022] to-[#0b1520] p-6">
      <div className="notes-header flex items-center justify-between mb-6">
        <div>
          <h1 className="notes-title">Your Notes</h1>
          <div className="flex">
          <input type="text" placeholder="Search notes..." className="search-input" value={searchNote} onChange={(e)=>{setsearchNote((e.target.value).toLowerCase())}} /> 
         
          </div>
        </div>
        <button onClick={() => navigate("/")} className="icon-btn" aria-label="Back to Home">
          <i className="ri-arrow-left-line text-xl"></i>
        </button>
      </div>
      
      <div className="note-grid">
        {filterNotes.length === 0 ? (
          <div className="empty-message">No notes yet — add your first note!</div>
        ) : (
          filterNotes.map((elem, id) => (
            <article key={elem.id ?? id} className="note-card glass-card">
              <header className="note-card-header flex items-start justify-between">
                <h3 className="note-title">{elem.title}</h3>
                <div className="note-actions flex items-center gap-3">
                  <span className="note-date">{elem.date}</span>
                  <button className="delete-btn" onClick={() => DeleteNotes(elem.id)} aria-label="Delete note">
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </div>
              </header>
              <p className="note-text">{elem.text}</p>
            </article>
          ))
        )}
      </div>
    </div>
  );
};

export default NotesList;
