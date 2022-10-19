import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import css from './MovieList.module.css';

export const MovieList = () => {
    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movieReducer);

    // const [page, setPage] = useState(null);
    // const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAll())
        // dispatch(movieActions.getAll(query.get('page')));
        // setPage(movies.page);
    }, [dispatch]);

    // const prevPage = () => {
    //     setQuery(value => ({page: value.get('page') - 1}));
    // }
    // const nextPage = () => {
    //     setQuery(value => ({page: +value.get('page') + 1}))
    // }

    return (
        <div>
            <div>
                {/*<button onClick={prevPage}>Prev</button>*/}
                {/*<button onClick={nextPage}>Next</button>*/}
            </div>
            <div className={css.Flex}>
                {movies.map((movie, index) => <MovieInfo movie={movie} key={index}/>)}
            </div>
        </div>
    )

}