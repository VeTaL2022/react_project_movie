import {Outlet} from "react-router-dom";

import {MovieList} from "../../components";

export const MoviesPage = () => {

    return (
        <div>
            <MovieList/>
            <Outlet/>
        </div>
    );
};