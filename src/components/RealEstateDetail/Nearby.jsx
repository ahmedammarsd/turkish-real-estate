import React from 'react'
import NearestTourist from './NearestTourist'
import testImage from '../../images/imagecompressor/img8.jpg'

const Nearby = () => {
  return (
    <div className="tw-grid tw-grid-cols-3 lg:tw-grid-cols-2 sm:tw-grid-cols-1 tw-items-center tw-gap-3">
      <NearestTourist image={testImage} title={"Madani"} distance={"5"} />
      <NearestTourist image={testImage} title={"Madani"} distance={"5"} />
      <NearestTourist image={testImage} title={"Madani"} distance={"5"} />
      <NearestTourist image={testImage} title={"Madani"} distance={"5"} />
      <NearestTourist image={testImage} title={"Madani"} distance={"5"} />
    </div>
  )
}

export default Nearby