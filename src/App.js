import {Navigate, Route, Routes} from "react-router-dom";
import useLocalStorage from "use-local-storage";

import {MoviesListCard} from "./components/MoviesListCard/MoviesListCard";
import {GenresPage, HomePage, MoviePage, MoviesPage} from "./pages";
import {MainLayout} from "./layouts";
import './App.css';

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <div className='App' data-theme={theme}>

            <button onClick={switchTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button>

            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'home'}/>}/>
                    <Route path={'home'} element={<HomePage/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'movies/:id'} element={<MoviesListCard/>}/>
                    <Route path={'find-movie'} element={<MoviePage/>}/>
                    <Route path={'genres'} element={<GenresPage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
