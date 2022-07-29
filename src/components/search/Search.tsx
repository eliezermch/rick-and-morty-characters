import { Dispatch, SetStateAction, useRef } from "react";

import "./search.css";

import iconSearch from "../../assets/icons/icon-search.png";

type Props = {
  setSearchValue: Dispatch<SetStateAction<string>>;
  searchValue: string;
};

function Search({ searchValue, setSearchValue }: Props) {
  const searchInput = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (searchInput && searchInput.current) {
      setSearchValue(searchInput.current.value);
    }
  };

  return (
    <div className="main-input_container">
      <img src={iconSearch} alt="" />
      <input
        value={searchValue}
        ref={searchInput}
        onChange={handleSearch}
        className="main__input"
        type="text"
        placeholder="Search a Character"
      />
    </div>
  );
}

export { Search };
