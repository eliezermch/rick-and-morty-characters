import { useState, useRef } from "react";

// ---------- Components ---------- //
import { CharacterRow } from "../characterRow/CharacterRow";

// ---------- Style ---------- //
import "./characterList.css";

// ---------- Icons ---------- //
import iconSearch from "../../assets/icons/icon-search.png";
import iconArrowLeft from "../../assets/icons/icon-arrow-left.png";
import iconArrowRight from "../../assets/icons/icon-arrow-right.png";

function CharacterList() {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

  // ---------- Pagination Logic ---------- //
  const maxPage = 42;

  const nextPage = () => {
    if (page < maxPage) {
      setPage(page + 1);
    } else {
      setPage(42);
    }
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(1);
    }
  };

  // ---------- Input Value ---------- //
  const searchInput = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (searchInput && searchInput.current) {
      setSearch(searchInput.current.value);
    }
  };

  return (
    <main className="main-container">
      <div className="main-input_container">
        <img src={iconSearch} alt="" />
        <input
          value={search}
          ref={searchInput}
          onChange={handleSearch}
          className="main__input"
          type="text"
          placeholder="Search a Character"
        />
      </div>
      <div className="main-list-container">
        <div className="main-list-subcontainer">
          <CharacterRow page={page} searchValue={search} />
        </div>
      </div>
      <div className="main-pages-container">
        <button
          className={page !== 1 ? "main-pages-button" : "hidde-button"}
          onClick={previousPage}
        >
          <img className="main-pages-img" src={iconArrowLeft} alt="" />
        </button>
        {/* <button className="main-pages-button">
          <span>{page}</span>
        </button>
        <button className="main-pages-button">
          <span>{page}</span>
        </button> */}
        <button className="main-pages-button-number">
          <span>{page}</span>
        </button>
        <button
          className={page === 42 ? "hidde-button" : "main-pages-button"}
          onClick={nextPage}
        >
          <img className="main-pages-img" src={iconArrowRight} alt="" />
        </button>
      </div>
    </main>
  );
}

export { CharacterList };
