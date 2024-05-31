import searchIcon from "../assets/search-icon.png";
import "./TodoSearch.css";
function TodoSearch() {
  return (
    <div className="searchbar">
      <input placeholder="Cortar Cebolla" />
      <figure className="searchIcon">
        <img src={searchIcon} alt="imagen" />
      </figure>
    </div>
  );
}

export { TodoSearch };
