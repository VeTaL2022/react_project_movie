import {NavLink} from "react-router-dom";

import css from './Header.module.css';

export const Header = () => {
    return (
        <div>
            <NavLink className={css.Home} to={'/home'}>Home</NavLink>
            <div className={css.Header}>
                <NavLink to={'/movies'}>Get Movies</NavLink>
                <NavLink to={'/genres'}>Get Genres</NavLink>
                <div className={css.Search}>
                    <input type="text" placeholder={'search films'}/>
                    <button>Search</button>
                </div>
            </div>
        </div>
    )

}