import { CLOUD_LINK } from "./utils/constants";


const Card = ({resData}) => {
   const { name, avgRating, slaString, cuisines, areaName, cloudinaryImageId } = resData;
    return(
        <div className="Card">
            <img width="99%" height="50%" 
            src={
                CLOUD_LINK
                + cloudinaryImageId
                }/>
            <div>
                <h2 className="Cardinfo resName">{name}</h2>  
                <h2 className="Cardinfo">{avgRating} {slaString}</h2>
                <p className="Cardinfo cuisines">{cuisines.join(", ")}</p> 
                <p className="Cardinfo">{areaName}</p>
                </div>  
          </div>
    )
}

export default Card;