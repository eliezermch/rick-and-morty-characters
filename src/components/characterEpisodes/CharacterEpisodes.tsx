import "./characterEpisode.css";

// ---------- Interface Props ---------- //
interface CharacterEpisodesProps {
  id: number;
  episodeName: string;
}

function CharacterEpisodes({ id, episodeName }: CharacterEpisodesProps) {
  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  };

  return (
    <div className="character-episode-container">
      <div key={id} className="character-episode-content">
        <p className="character-episode-content-title">
          {truncate(`● ${episodeName}`, 34)}
        </p>
      </div>
    </div>
  );
}

export { CharacterEpisodes };
