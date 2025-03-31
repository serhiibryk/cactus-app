import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_CHARACTERS } from "../GraphQL/queries/getCharacters";
import type { CharactersResponse } from "../types/common";
import Button from "./Button";

const CharactersList = () => {
  const [page, setPage] = useState<number>(1);
  const { loading, error, data } = useQuery<CharactersResponse>(
    GET_CHARACTERS,
    {
      variables: { page },
    },
  );

  if (loading) {
    return (
      <p className="text-center mt-8 text-gray-500">Loading characters...</p>
    );
  }
  if (error) {
    return (
      <p className="text-center mt-8 text-red-500">Error: {error.message}</p>
    );
  }

  const characters = data?.characters.results || [];
  const pageInfo = data?.characters.info;

  return (
    <div className="mt-10 px-4">
      <div className="flex flex-wrap justify-center gap-6">
        {characters.map((char) => (
          <div
            key={char.id}
            className="w-48 bg-black border border-gray-600 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition-all"
          >
            <img
              src={char.image}
              alt={char.name}
              className="w-full h-auto rounded-lg mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800">{char.name}</h3>
            <p className="text-sm text-gray-500">{char.species}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center items-center gap-6">
        <Button
          onClick={() => setPage((p) => p - 1)}
          disabled={!pageInfo?.prev}
        >
          ← Prev
        </Button>
        <span className="text-gray-700 font-medium">Page {page}</span>
        <Button
          onClick={() => setPage((p) => p + 1)}
          disabled={!pageInfo?.next}
        >
          Next →
        </Button>
      </div>
    </div>
  );
};

export default CharactersList;
