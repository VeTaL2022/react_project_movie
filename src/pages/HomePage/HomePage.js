import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

import css from './HomePage.module.css';

export const HomePage = () => {


    return (
        <Carousel className={css.Carousel}>
            <div>
                <img src="https://sportshub.cbsistatic.com/i/2022/09/29/d3da7fd2-b22f-4fb1-a121-2524d9da3db0/black-adam-imax-poster-art.jpg" alt={"black adam"}/>

            </div>
            <div>
                <img src="https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/
                shazam-one-sheet-i71939.jpg" alt={"shazam"}/>
            </div>
            <div>
                <img src="https://images.thedirect.com/media/photos/thor1.jpg" alt={"thor"}/>
            </div>
            <div>
                <img src="https://www.themoviedb.org/t/p/original/7rIPjn5TUK04O25ZkMyHrGNPgLx.jpg" alt="superman"/>
            </div>
            <div>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b70001104204173.5f5e25f4318f6.jpg" alt="iron man"/>
            </div>
        </Carousel>
    )
}