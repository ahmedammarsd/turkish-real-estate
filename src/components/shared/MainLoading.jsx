import React from 'react'
import Gear from "../../images/loading/Gear.svg"
const MainLoading = () => {
  return (
    <div className="tw-w-full tw-h-screen tw-p-5 tw-py-10 tw-flex tw-justify-center tw-items-center tw-rounded-md">
    <div className=' tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-1 tw-w-full tw-h-full'>
        <div className="tw-w-[150px] lg:tw-w-[90px]">
            <img src={Gear} className="tw-w-full tw-h-full"/>
        </div>
    </div>
</div>
  )
}

export default MainLoading