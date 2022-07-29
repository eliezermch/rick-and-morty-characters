import { useEffect, useMemo } from "react";

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

  // let number: number = 1;
  // for (let i = 1; i <= 10; i++) {
  //   number = i;
  //   console.log("🚀 ~ number", number);
  // }

  // ---------- Call API ---------- //
  useEffect(() => {
    (async () => {
      const data: CharacterType = await getCharacter(page);
      dispacth({ characters: data });
    })();
  }, [page]);

  // ---------- Seacrh characters functions ---------- //
  const filteredCharacters = useMemo(
    () =>
      state.characters.filter((character: CharacterType) => {
        return character.name.toLowerCase().includes(searchValue.toLowerCase());
      }),
    [state.characters, searchValue]
  );

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

        {filteredCharacters.map((character: CharacterType) => (
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
