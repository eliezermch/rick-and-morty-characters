import {
  CharacterType,
  CharacterByIdType,
  // eslint-disable-next-line comma-dangle
  CharacterEpisodesType,
} from "../model/characterModel";

const API_DOMAIN = "https://rickandmortyapi.com";

function getCharacter(page: number | string): Promise<CharacterType> {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await getData(`${API_DOMAIN}/api/character/?page=${page}`);
      const characters: CharacterType = data.results;
      resolve(characters);
    } catch (error) {
      reject(error);
    }
  });
}

function getCharacterDescription(
  id: number | string
): Promise<CharacterByIdType> {
  return new Promise(async (resolve, reject) => {
    try {
      const data: CharacterByIdType = await getData(
        `${API_DOMAIN}/api/character/${id}`
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

function getCharacterEpisode(episode: string): Promise<CharacterEpisodesType> {
  return new Promise(async (resolve, reject) => {
    try {
      const data: CharacterEpisodesType = await getData(episode);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

async function getData(url: string) {
  try {
    const response = await fetch(url);

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export { getCharacter, getCharacterDescription, getCharacterEpisode };
