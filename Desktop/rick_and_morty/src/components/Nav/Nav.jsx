import SearchBar from "../SearchBar/SearchBar.jsx"
import style from "../SearchBar/SearchBar.module.css"

const Nav = ({onSearch}) => {
    return (
        <div className={style.SearchBar}>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav;
