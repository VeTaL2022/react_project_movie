import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

import css from './HomePage.module.css';

export const HomePage = () => {

    return (
        <Carousel className={css.Carousel}>
            <div>
                <img src="https://sportshub.cbsistatic.com/i/2022/09/29/d3da7fd2-b22f-4fb1-a121-2524d9da3db0/black-adam-imax-poster-art.jpg" alt={"black adam"}/>
                {/*<p className={'legend'}>Legend 1</p>*/}
            </div>
            <div>
                <img src="https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/
                shazam-one-sheet-i71939.jpg" alt={"shazam"}/>
                {/*<p className={'legend'}>Legend 2</p>*/}
            </div>
            <div>
                <img src="https://images.thedirect.com/media/photos/thor1.jpg" alt={"thor"}/>
                {/*<p className={'legend'}>Legend 3</p>*/}
            </div>
        </Carousel>
    )
}