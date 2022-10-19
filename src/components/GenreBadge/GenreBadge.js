import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genreActions} from "../../redux";

export const GenreBadge = () => {
    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.genreReducer);

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [dispatch]);

    return (
        <div>
            {genres.map((genre, index) => <div key={index}><p>id: {genre.id} - name: {genre.name}</p></div>)}
        </div>
    )

}