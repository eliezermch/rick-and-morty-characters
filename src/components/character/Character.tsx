import { useState } from "react";

// ---------- Components ---------- //
import { CharacterDescription } from "../characterDescription/CharacterDescription";

// ---------- Style ---------- //
import "./character.css";

// ---------- Icon ---------- //
import eyeDetails from "../../assets/icons/icon-eye.png";

// ---------- Interface Props ---------- //
interface CharacterProps {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
}

function Character({
  id,
  image,
  name,
  status,
  species,
  gender,
}: CharacterProps) {
  const [showDescription, setShowDescription] = useState<boolean>(false);

  // ---------- Toggle Description ---------- //
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  // ---------- Truncate ---------- //
  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  };

  return (
    <>
      <tbody className="characters-container">
        <tr key={id} className="characters-subcontainer">
          <td>
            <img className="characters-img" src={image} alt="" />
          </td>
          <td>{truncate(name, 12)}</td>
          <td>{status}</td>
          <td>{species}</td>
          <td>{gender}</td>
          <td>
            <button
              className="characters-detail-button"
              onClick={toggleDescription}
            >
              <img
                className="characters-detail-img"
                src={eyeDetails}
                alt="with eyes to view details"
              />
            </button>
          </td>
          {showDescription && (
            <td>
              <CharacterDescription
                id={id}
                toggleDescription={toggleDescription}
              />
            </td>
          )}
        </tr>
      </tbody>
    </>
  );
}

export { Character };
