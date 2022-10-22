import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

import css from './HomePage.module.css';

export const HomePage = () => {

    return (
        <Carousel className={css.Carousel}>
            <div>
                <img src={"https://image.tmdb.org/t/p/w300/3uDwqxbr0j34rJVJMOW6o8Upw5W.jpg"}
                    alt={"photo1"}/>
                <img src="https://image.tmdb.org/t/p/w300/aGBuiirBIQ7o64FmJxO53eYDuro.jpg" alt={"photo2"}/>
                <img src="https://image.tmdb.org/t/p/w300/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg" alt={"photo3"}/>
                <img src="https://image.tmdb.org/t/p/w300//aVLV38txajXhEy2qNEClPIsDbAH.jpg" alt={"photo4"}/>
            </div>
            <div>
                <img src={"https://image.tmdb.org/t/p/w300/spCAxD99U1A6jsiePFoqdEcY0dG.jpg"}
                     alt={"photo5"}/>
                <img src="https://image.tmdb.org/t/p/w300/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg" alt={"photo6"}/>
                <img src="https://image.tmdb.org/t/p/w300/7ze7YNmUaX81ufctGqt0AgHxRtL.jpg" alt={"photo7"}/>
                <img src="https://image.tmdb.org/t/p/w300/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg" alt={"photo8"}/>
            </div>
            <div>
                <img src={"https://image.tmdb.org/t/p/w300/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"}
                     alt={"photo9"}/>
                <img src="https://image.tmdb.org/t/p/w300/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg" alt={"photo10"}/>
                <img src="https://image.tmdb.org/t/p/w300/nQKW2sabIClUsrQl3Y3i5LQgf5l.jpg" alt={"photo11"}/>
                <img src="https://image.tmdb.org/t/p/w300/65WFr1ZMAbEniIh4jEhbRG9OHHN.jpg" alt={"photo12"}/>
            </div>
            <div>
                <img src={"https://image.tmdb.org/t/p/w300/ySXRgHCdelVtvUyHcKGpiQKb052.jpg"}
                     alt={"photo13"}/>
                <img src="https://image.tmdb.org/t/p/w300/iNf1wC8cK6e8zgNyuMUqWFT7Din.jpg" alt={"photo14"}/>
                <img src="https://image.tmdb.org/t/p/w300/1DRaBfaVuQyEK9DAurUXZuQqlEp.jpg" alt={"photo15"}/>
                <img src="https://image.tmdb.org/t/p/w300/ipn8khVVC4eToWiGf89WF9J5PJn.jpg" alt={"photo16"}/>
            </div>
        </Carousel>
    )
}