import {faFilm, faMagnifyingGlass, faSort} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

import css from './Header.module.css';

export const Header = () => {

    return (
        <div>
            <NavLink className={css.Home} to={'/home'}>Movie Word</NavLink>
            <div className={css.Header}>
                <NavLink to={'/movies'}>
                    <button>
                        <FontAwesomeIcon icon={faFilm}/> Get Movies
                    </button>
                </NavLink>

                <NavLink to={'/genres'}>
                    <button>
                        <FontAwesomeIcon icon={faSort}/> Get Genres
                    </button>
                </NavLink>

                <NavLink to={'/find-movie'}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: 'greenyellow', fontSize: '30px'}}/>
                </NavLink>
            </div>
        </div>
    );
};