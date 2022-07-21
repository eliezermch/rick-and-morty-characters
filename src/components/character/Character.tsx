import { useState, useEffect } from "react";

import "./character.css";

import eyeDetails from "../../assets/icons/icon-eye.png";

interface CharacterProps {
  page: number | string;
}

function Character({ page }: CharacterProps) {
  const [characters, setCharacters] = useState([]);

  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${page.toString()}`
        );
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page]);

  return (
    <div className="characters-container">
      {characters.map((character: any) => (
        <div key={character.id} className="characters-subcontainer">
          <ul>
            <li>
              <img className="characters-img" src={character.image} alt="" />
            </li>
            <li className="characters-name">
              <p>{truncate(character.name, 13)}</p>
            </li>
            <li>
              <p>{character.status}</p>
            </li>
            <li>
              <p>{character.species}</p>
            </li>
            <li>
              <p>{character.gender}</p>
            </li>
            <li>
              <button className="characters-detail-button">
                <img
                  className="characters-detail-img"
                  src={eyeDetails}
                  alt=""
                />
              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export { Character };
