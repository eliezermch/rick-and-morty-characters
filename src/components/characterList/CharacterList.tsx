import { useState } from "react";
import { Character } from "../character/Character";
import "./characterList.css";

import iconSearch from "../../assets/icons/icon-search.png";
import iconArrowLeft from "../../assets/icons/icon-arrow-left.png";
import iconArrowRight from "../../assets/icons/icon-arrow-right.png";

function CharacterList() {
  const [page, setPage] = useState<number>(1);

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
      <div className="main-input_container">
        <img src={iconSearch} alt="" />
        <input
          className="main__input"
          type="text"
          placeholder="Search a Character"
        />
      </div>
      <div className="main-list-container">
        <div className="main-list-subcontainer">
          <div className="main-list-subcontainer_index">
            <ul>
              <li>
                <p>Photo</p>
              </li>
              <li>
                <p>Name</p>
              </li>
              <li>
                <p>Status</p>
              </li>
              <li>
                <p>Specie</p>
              </li>
              <li>
                <p>Gender</p>
              </li>
              <li>
                <p>Details</p>
              </li>
            </ul>
          </div>
          <Character page={page} />
          <div className="main-pages-container">
            <button
              className={page !== 1 ? "main-pages-button" : "hidde-button"}
              onClick={previousPage}
            >
              <img className="main-pages-img" src={iconArrowLeft} alt="" />
            </button>
            <span>{page}</span>
            <button
              className={page === 42 ? "hidde-button" : "main-pages-button"}
              onClick={nextPage}
            >
              <img className="main-pages-img" src={iconArrowRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export { CharacterList };
