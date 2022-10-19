import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

import {genreActions} from "../../redux";

export const GenreBadge = () => {
    const {register, handleSubmit} = useForm({defaultValues: {id: 1}});

    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.genreReducer);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [dispatch]);

    const ss = async ({id}) => {
        console.log(id);
    }
    return (
        <div>
            <form onChange={handleSubmit(ss)}>
                <select {...register('id')}>
                    {genres.map(genre => (
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                        ))}
                </select>
            </form>
            {genre && <div>{JSON.stringify(genre)}</div>}
        </div>
    )
}