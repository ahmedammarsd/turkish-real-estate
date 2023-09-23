import React from 'react';
import { FaCheckCircle } from "react-icons/fa"

const SuccessMsg = ({msg , isWhite}) => {
  return (
    <div className="tw-w-full tw-p-5 tw-py-10 tw-flex tw-justify-center tw-items-center tw-bg-red-5 tw-border tw-border-blue-50 tw-rounded-md">
        <div className=' tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-1 '>
            <span className=" tw-text-5xl sm:tw-text-4xl tw-text-main-blue">
                <FaCheckCircle />
            </span>
            <p className={`tw-whitespace-nowrap tw-text-lg sm:tw-text-sm tw-p-1 ${isWhite ? "tw-text-white" : "tw-text-gray-400"} tw-capitalize`}>
                {msg}
            </p>
        </div>
    </div>
  )
}

export default SuccessMsg