import React, { useState } from "react";

function SearchForm(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSearch({ name, type });
  };

  return (
    <form className="form">
      <input
        onChange={handleNameChange}
        type="text"
        placeholder="name of pokemon"
        value={name}
      />
      <input
        onChange={handleTypeChange}
        type="text"
        placeholder="type of pokemon"
        value={type}
      />
      <button onClick={handleSubmit} type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
