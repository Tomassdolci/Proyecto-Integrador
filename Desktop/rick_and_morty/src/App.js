import Cards from './components/Cards/Cards.jsx';
import { useEffect, useState } from 'react';
import style from "./components/SearchBar/SearchBar.module.css"
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from "./components/About/About.jsx"
import Detail from "./components/Detail/Detail.jsx"
import Forms from './components/Forms/Forms.jsx';
const EMAIL = "tomasgdolci@gmail.com"
const PASSWORD = "123456"

function App() {
    const [characters, setCharacters] = useState([]);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [access, setAccess] = useState(false);

function login (userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
        setAccess(true);
        navigate('/home');
    }
}

useEffect(() => {
    if (!access) {
        navigate('/');
    }
    }, [access, navigate]);


    function onSearch(id) {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacters((oldChars) => [...oldChars, data]);
            } else {
                window.alert('¡No hay personajes con este ID!');
            }
        }
        );
    }

    const onClose = (id) => {
        setCharacters(
            characters.filter((char) => {
                return char.id !== Number(id)
            })
        )
    }

    return (

        <div className={style.App}>
            {pathname !== "/" && <SearchBar onSearch={onSearch} />}
            <Routes>
                <Route path="/" element={<Forms login={login} />} />
                <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
                <Route path="/About" element={<About />} />
                <Route path="/Detail/:id" element={<Detail />} />
            </Routes>
        </div>
    );
}


export default App;


