import React from 'react'
import NearestTourist from './NearestTourist'
import imageNotFound from "../../images/imagecompressor/Image_not_available.png";
import NoData from '../shared/NoData';


const Nearby = ({nearTourist ,  latitude , longitude}) => {
  
  const calcDistance = (lat1, lon1, lat2, lon2, unit) => {
    let radlat1 = Math.PI * lat1/180
    let radlat2 = Math.PI * lat2/180
    let theta = lon1-lon2
    let radtheta = Math.PI * theta/180
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="M") { dist = dist * 0.8684 }
    return dist
}
  return (
    <div>
      {
        nearTourist?.length === 0 || nearTourist !== "" ?
        <NoData />
        :
    <div className="tw-grid tw-grid-cols-3 lg:tw-grid-cols-2 sm:tw-grid-cols-1 tw-items-center tw-gap-3">
        { nearTourist?.map((tourst , index) => (
          <NearestTourist key={index} image={tourst?.tourist_area?.image_url === "" ? imageNotFound : tourst?.feature?.image_url}
           title={tourst?.tourist_area?.name} distance={calcDistance(latitude , longitude , tourst?.tourist_area?.latitude , tourst?.tourist_area?.longitude , "K")} />
        ))
}
    </div>
      }
      
    </div>
  )
}

export default Nearby