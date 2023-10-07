import React, { useState } from "react";


import shows from "./data/shows.js";

import "./styles/SelectShows.css";
import {
  DESELECT_SHOW,
  SELECT_SHOW,
  useAppDispatch,
  useAppState,
} from "./AppContext";


export default function SelectShows() {
  const [searchInput, updateSearchInput] = useState("");
  const appState = useAppState();
  const appDispatch = useAppDispatch();

  function updateShowSearch(e) {
    updateSearchInput(e.target.value.toLowerCase());
  }

  function changeShowSelected(show, isSelected) {
    if (isSelected) appDispatch({ type: SELECT_SHOW, show });
    else appDispatch({ type: DESELECT_SHOW, show });
  }


function renderShow(show, isSelected) {
  if (
    searchInput !== "" &&
    show.title.toLowerCase().indexOf(searchInput) === -1
  ) {
    return null;
  }

  return (
    <li key={show.id}>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={(e) => {
          console.log(e)
          changeShowSelected(show, e.target.checked)
        }}
      />
      <a href={show.url} target="_blank" rel="noopener noreferrer">
        {show.title}
      </a>
    </li>
  );
}

  return (
    <div className="select-shows">
      <h2>Show Selection</h2>
      <label>
        Filter by title: <input type="text" onChange={updateShowSearch} />
      </label>
      <ul>
        {appState.selectedShows.map((show) => renderShow(show, true))}
        {shows
          .filter((show) => !appState.selectedShows.includes(show))
          .map((show) => renderShow(show, false))}
      </ul>
    </div>
  );
}
