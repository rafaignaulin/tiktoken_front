import { useAppDispatch } from "@store/hooks";
import { fetch } from "@store/slices/searchEvent";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchTermRef = useRef(searchTerm);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const inputFocusRef = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async () => {
    if (inputFocusRef.current) {
      dispatch(fetch(searchTermRef.current));
    }
    router.push(`/events`);
  };

  useEffect(() => {
    const keyEvents = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.code === "Enter") {
        handleSearch();
      }
      if (e.code === "Escape") {
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", keyEvents);
    return () => window.removeEventListener("keydown", keyEvents);
  }, []);

  return (
    <div className="m-h-10 flex flex-inline space-x-4 w-full">
      <input
        ref={inputRef}
        className="bg-white  focus:ring focus:ring-blue-300 focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 block w-full appearance-none leading-normal "
        type="text"
        onFocus={() => (inputFocusRef.current = true)}
        onBlur={() => (inputFocusRef.current = false)}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.currentTarget.value);
          searchTermRef.current = e.currentTarget.value;
        }}
        placeholder="Busque aqui seus eventos e lugares"
      />

      <button
        className="bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSearch}
        type="button"
      >
        Buscar
      </button>
    </div>
  );
};

export default Search;
