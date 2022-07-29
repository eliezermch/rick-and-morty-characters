export interface CharacterType {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  created: string;
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
  type: string;
  url: string;
  episode: Array<string>;
}

export interface CharacterByIdType {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  created: string;
  episode: Array<string>;
  type: string;
  url: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
}

export interface CharacterEpisodesType {
  id: number;
  air_date: string;
  created: string;
  episode: string;
  name: string;
  url: string;
  characters: Array<string>;
}
