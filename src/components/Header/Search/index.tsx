import Button from "@atlaskit/button";
import TextField from "@atlaskit/textfield";
import { useAppDispatch } from "@store/hooks";
import { fetch } from "@store/slices/searchEvent";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSearch = useCallback(async () => {
    dispatch(fetch(searchTerm));
    router.push(`/events`);
  }, [searchTerm]);

  useEffect(() => {
    const searchOnEnter = ({ code }) => {
      if (code === "Enter") {
        handleSearch();
      }
    };
    window.addEventListener("keydown", searchOnEnter);
    return () => window.removeEventListener("keydown", searchOnEnter);
  }, [handleSearch]);

  return (
    <>
      <TextField
        isCompact={false}
        className="textfield"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
        placeholder="Busque aqui seus eventos e lugares"
      />
      <Button appearance="primary" onClick={handleSearch}>
        Entrar
      </Button>
    </>
  );
};

export default Search;
