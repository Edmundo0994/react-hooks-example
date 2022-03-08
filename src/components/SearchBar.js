export default function SearchBar({ values }) {
  const { searchByName, searchBySpecie, setSearchByName, setSearchBySpecie } = values;
  const handleSearchByName = (e) => {
    setSearchByName(e.target.value);
  };
  const handleSearchBySpecie = (e) => {
    setSearchBySpecie(e.target.value);
  };
  return (
    <div className="searchBar">
      <div>
        <label>Name: </label>
        <input type="text" value={searchByName} onChange={handleSearchByName} />
      </div>
      <div>
        <label>Species: </label>
        <input type="text" value={searchBySpecie} onChange={handleSearchBySpecie} />
      </div>
    </div>
  );
}
