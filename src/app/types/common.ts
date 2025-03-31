export interface ICharacter {
  id: string;
  name: string;
  image: string;
  species: string;
}

export interface CharactersResponse {
  characters: {
    info: {
      count: number;
      pages: number;
      next: number | null;
      prev: number | null;
    };
    results: ICharacter[];
  };
}
