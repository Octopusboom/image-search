import React, { useState, ChangeEvent, FormEvent } from "react";
import '../style/searchBar.css';

interface SearchBarProps {
  onSubmit: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [term, setTerm] = useState<string>("");

  // FromEvent - event triggered by a form-related action, such as when a user submits a form
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit(term);
  };

  // ChangeEvent - an event triggered by a change in the value of an input, textarea, or select element
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <input
          value={term}
          onChange={handleChange}
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

export default SearchBar;