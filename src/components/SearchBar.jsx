export default function SearchBar({ onChange }) {
  return (
    <div>
      <form action="#">
        <input type="search" onChange={onChange} />
      </form>
    </div>
  );
}
