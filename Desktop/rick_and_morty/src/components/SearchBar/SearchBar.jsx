import style from "../SearchBar/SearchBar.module.css"
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
    const [id, setId] = useState('');

    function handleChange(event) {
        setId(event.target.value);
    }

    function handleSearch() {
        onSearch(id);
    }

    return (
        <div className={style.contenedor}>
            <input type="search" value={id} onChange={handleChange} />
            <button onClick={handleSearch}>Agregar</button>
            <Link to="/home">
                <button>Home</button>
            </Link>
            <NavLink to= "/About">
                <button>About</button>
            </NavLink>
        </div>
    );
};

export default SearchBar;