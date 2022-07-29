import { useState, useEffect } from "react";

// ---------- Components ---------- //
import { CharacterEpisodes } from "../characterEpisodes/CharacterEpisodes";

// ---------- API ---------- //
import {
  getCharacterDescription,
  // eslint-disable-next-line comma-dangle
  getCharacterEpisode,
} from "../../services/rickandmortyapi";

// ---------- Style ---------- //
import "./characterDescription.css";

// ---------- Interface ---------- //
import {
  CharacterEpisodesType,
  // eslint-disable-next-line comma-dangle
  CharacterByIdType,
} from "../../model/characterModel";

// ---------- Initial State ---------- //
const INITIALSTATE = {
  id: 0,
  image: "",
  name: "",
  status: "",
  species: "",
  gender: "",
  created: "",
  episode: [],
  type: "",
  url: "",
  origin: {
    name: "",
    url: "",
  },
  location: {
    name: "",
    url: "",
  },
};

// ---------- Interface Props ---------- //
interface DescriptionsProps {
  id: number;
  toggleDescription: () => void;
}

function CharacterDescription({ id, toggleDescription }: DescriptionsProps) {
  const [charactersById, setCharactersById] =
    useState<CharacterByIdType>(INITIALSTATE);
  const [episodes, setEpisodes] = useState<Array<CharacterEpisodesType>>([]);
  const [showEpisodes, setShowEpisodes] = useState<boolean>(false);

  const toggleEpisodes = () => {
    setShowEpisodes(!showEpisodes);
  };

  // ---------- Call API ---------- //
  useEffect(() => {
    (async () => {
      const data: CharacterByIdType = await getCharacterDescription(id);
      setCharactersById(data);

      // -------------- Episode -----------//
      const episodes: CharacterEpisodesType[] = [];
      data.episode?.forEach(async (url: string) => {
        const episode: CharacterEpisodesType = await getCharacterEpisode(url);
        episodes.push(episode);
      });

      setEpisodes(episodes);
    })();
  }, [id]);

  return (
    <div className="description-container">
      <section className="description-modal-content">
        <div className="modal-content_img">
          <img src={charactersById.image} alt="" />
        </div>
        <div className="modal-content">
          <p>Name</p>
          <div className="modal-content-span">
            <span>{charactersById.name}</span>
          </div>
        </div>
        <div className="modal-content">
          <p>Status</p>
          <div className="modal-content-span">
            <span>{charactersById.status}</span>
          </div>
        </div>
        <div className="modal-content">
          <p>Species</p>
          <div className="modal-content-span">
            <span>{charactersById.species}</span>
          </div>
        </div>
        <div className="modal-content">
          <p>Gender</p>
          <div className="modal-content-span">
            <span>{charactersById.gender} </span>
          </div>
        </div>
        <div className="modal-content">
          <p>Origin</p>
          <div className="modal-content-span">
            <span>{charactersById.origin?.name}</span>
          </div>
        </div>
        <div className="modal-content">
          <p>Location</p>
          <div className="modal-content-span">
            <span>{charactersById.location?.name}</span>
          </div>
        </div>
        {showEpisodes && (
          <div className="modal-episode-content">
            <p className="modal-episode-content-title">
              Episodes where appears
            </p>
            <div className="character-episode-grid">
              {episodes !== undefined &&
                episodes.map((episode) => (
                  <CharacterEpisodes
                    key={episode.id}
                    id={episode.id}
                    episodeName={episode.name}
                  />
                ))}
            </div>
          </div>
        )}

        <div className="modal-container-button">
          <button className="modal-content-button" onClick={toggleDescription}>
            <p>Close</p>
          </button>
          <button
            className="modal-content-button-episodes"
            onClick={toggleEpisodes}
          >
            <p>Episodes</p>
          </button>
        </div>
      </section>
    </div>
  );
}

export { CharacterDescription };
