import { useCallback } from "react";

export default function SearchBar({ values }) {
  const {
    searchByName,
    searchBySpecie,
    setSearchByName,
    setSearchBySpecie,
    searchByNameInput,
    searchBySpecieInput,
    characterStyles,
  } = values;
  const classStyles = "searchBar " + characterStyles;
  // const handleSearchByName = () => {
  //   setSearchByName(searchByNameInput.current.value);
  // };

  const handleSearchByName = useCallback(() => {
    setSearchByName(searchByNameInput.current.value);
  }, [setSearchByName, searchByNameInput]);

  // const handleSearchBySpecie = () => {
  //   setSearchBySpecie(searchBySpecieInput.current.value);
  // };

  const handleSearchBySpecie = useCallback(() => {
    setSearchBySpecie(searchBySpecieInput.current.value);
  }, [setSearchBySpecie, searchBySpecieInput]);
  return (
    <div className={classStyles}>
      <div>
        <label>Name: </label>
        <input type="text" value={searchByName} ref={searchByNameInput} onChange={handleSearchByName} />
      </div>
      <div>
        <label>Species: </label>
        <input type="text" value={searchBySpecie} ref={searchBySpecieInput} onChange={handleSearchBySpecie} />
      </div>
    </div>
  );
}
