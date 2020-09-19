import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
          <div style={{ marginTop: 10 }}>
            <label style={{ display: "block", textAlign: "end" }}>
              Built by <a href="https://itiel.me">Itiel Maimon</a>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
