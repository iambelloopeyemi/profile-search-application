import "../styles/SearchBar.css"

export default function SearchBar({ onChange }) {
  return (
    <div className="searchbar-container">
      <form action="#" className="searchbar-wrapper">
        <input type="search" placeholder="Search by name" onChange={onChange} className="searchbar" />
      </form>
    </div>
  );
}
