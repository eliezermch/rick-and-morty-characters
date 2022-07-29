import { useState } from "react";

// ---------- Components ---------- //
import { CharacterRow } from "../characterRow/CharacterRow";

// ---------- Style ---------- //
import "./characterList.css";

// ---------- Icons ---------- //
import iconArrowLeft from "../../assets/icons/icon-arrow-left.png";
import iconArrowRight from "../../assets/icons/icon-arrow-right.png";
import { Search } from "../search/Search";

function CharacterList() {
  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState("");

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

  return (
    <main className="main-container">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="main-list-container">
        <div className="main-list-subcontainer">
          <CharacterRow page={page} searchValue={searchValue} />
        </div>
      </div>
      {searchValue === "" && (
        <div className="main-pages-container">
          <button
            className={page !== 1 ? "main-pages-button" : "hidde-button"}
            onClick={previousPage}
          >
            <img className="main-pages-img" src={iconArrowLeft} alt="" />
          </button>
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
      )}
    </main>
  );
}

export { CharacterList };
