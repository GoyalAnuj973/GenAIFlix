import React, { useRef } from "react";
import openai from "../utils/openai";

const GPTSearchBar = () => {
  const searchText = useRef(null);

  const handleSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if(!gptResults.choices) return;

  };

  return (
    <>
      <div className="absolute top-[15%] mx-auto left-0 right-0 w-6/12 ">
        <form
          action=""
          className="bg-black py-6 px-6 rounded-lg grid grid-cols-12 bg-opacity-70"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className=" outline-none border-none col-span-9 px-4 py-4 rounded-lg"
            type="text"
            placeholder="What would you like to watch today?"
            ref={searchText}
          />
          <button
            className="outline-none border-none col-span-3 py-4 bg-red-600 text-white rounded-lg ml-3"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default GPTSearchBar;
