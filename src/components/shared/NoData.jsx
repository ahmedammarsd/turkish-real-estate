import React from 'react';
import noData from "../../images/svg/No data-cuate.svg"

const NoData = () => {
  return (
    <div className="tw-w-full tw-p-5 tw-py-10 tw-flex tw-justify-center tw-items-center tw-rounded-md">
    <div className=' tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-1 '>
        <div className="tw-w-full tw-h-full">
            <img src={noData} className="tw-w-full tw-h-full"/>
        </div>
    </div>
</div>
  )
}

export default NoData