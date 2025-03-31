import { useQuery } from "@apollo/client";

import type { CharactersResponse } from "../types/common";
import { GET_CHARACTERS } from "../GraphQL/queries/getCharacters";

export const useCharacters = (page: number) => {
  return useQuery<CharactersResponse>(GET_CHARACTERS, {
    variables: { page },
  });
};
