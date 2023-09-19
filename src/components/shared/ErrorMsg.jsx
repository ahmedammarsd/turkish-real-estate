import React from 'react';
import { BiSolidError } from "react-icons/bi"

const ErrorMsg = ({msg}) => {
  return (
    <div className="tw-w-full tw-p-5 tw-py-10 tw-flex tw-justify-center tw-items-center tw-bg-red-50 tw-rounded-md">
        <div className=' tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-1 tw-text-red-500'>
            <span className=" tw-text-5xl sm:tw-text-4xl">
                <BiSolidError />
            </span>
            <p className="tw-whitespace-nowrap tw-text-lg sm:tw-text-sm tw-p-1">
                {msg}
            </p>
        </div>
    </div>
  )
}

export default ErrorMsg