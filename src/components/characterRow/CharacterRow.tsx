import { useEffect, useState } from "react";

// ---------- Components ---------- //
import { Character } from "../character/Character";

// ---------- Services API ---------- //
import { getCharacter } from "../../services/rickandmortyapi";

// ---------- INTERFACE ---------- //
import { CharacterType } from "../../model/characterModel";

// ---------- Global State Custom Hook ---------- //
import { useGlobatState } from "../../context/context";

// ---------- Style ---------- //
import "./characterRow.css";

// ---------- Interface Props ---------- //
interface CharacterProps {
  page: number;
  searchValue: string;
}

function CharacterRow({ page, searchValue }: CharacterProps) {
  const [state, dispacth] = useGlobatState();
  const [currentCharacters, setCurrentCharacters] = useState<
    Array<CharacterType>
  >([]);

  const allCharacters: CharacterType[] = [];

  state.characters.forEach((charactersByPage: []) => {
    allCharacters.push(...charactersByPage);
  });

  // ---------- Call API ---------- //
  useEffect(() => {
    (async () => {
      if (state.characters[page - 1] === undefined) {
        const data: CharacterType[] | any = await getCharacter(page);
        dispacth({ characters: [...state.characters, data] });
        setCurrentCharacters(data);
      } else {
        setCurrentCharacters(state.characters[page - 1]);
      }
    })();
  }, [page]);

  useEffect(() => {
    if (searchValue === "") {
      setCurrentCharacters(state.characters[page - 1]);
    } else {
      const filteredCharacters: CharacterType[] = allCharacters.filter(
        (character: CharacterType) => {
          return character.name
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        }
      );
      setCurrentCharacters(filteredCharacters);
    }
  }, [searchValue]);

  // ---------- Seacrh characters functions ---------- //

  return (
    <div className="character-table-container">
      <table className="character-table">
        <thead className="main-list-subcontainer_index">
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Status</th>
            <th>Specie</th>
            <th>Gender</th>
            <th>Details</th>
          </tr>
        </thead>

        {currentCharacters?.map((character: CharacterType) => (
          <Character
            key={character.id}
            id={character.id}
            image={character.image}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
          />
        ))}
      </table>
    </div>
  );
}

export { CharacterRow };
