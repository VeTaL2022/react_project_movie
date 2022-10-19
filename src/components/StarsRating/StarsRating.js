import StarRatings from "react-star-ratings/build/star-ratings";

export const StarsRating = ({rate}) => {

    return (
        <StarRatings
            rating={rate}
            starRatedColor="yellow"
            numberOfStars={10}
            starDimension='28px'
        />
    )

}