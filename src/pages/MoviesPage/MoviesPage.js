import {MovieList} from "../../components";
import {Outlet} from "react-router-dom";

export const MoviesPage = () => {

    return (
        <div>
            <MovieList/>
            <Outlet/>
        </div>
    )

}