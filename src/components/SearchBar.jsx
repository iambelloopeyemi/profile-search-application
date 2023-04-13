import "../styles/SearchBar.css";
import styled from "styled-components";

const Input = styled.input`
  width: 840px;
  height: 40px;
  padding: 5px;
  border: none;
  outline: none;

  &::placeholder {
    font-style: italic;
    color: rgb(189, 185, 185);
  }
`;

export default function SearchBar({ onChange }) {
  return (
    <div className="searchbar-container">
      <form action="#" className="searchbar-wrapper">
        {/* <input
          type="search"
          placeholder="Search by name..."
          onChange={onChange}
          className="searchbar"
        /> */}
        <Input onChange={onChange} type="search"
          placeholder="Search by name..." />
      </form>
    </div>
  );
}
