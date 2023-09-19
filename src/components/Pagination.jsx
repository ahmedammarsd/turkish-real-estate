import React from 'react'
import { useState } from 'react';

const Pagination = ({InPage , total , paginate}) => {
    const pageNumber = [];
    for (let i = 1; i<= Math.ceil(total / InPage); i++ ){
        pageNumber.push(i)
    }
    const [activePage , setActivePage] = useState(1);
    const handlePageClick = (number) => {
        setActivePage(number)
        paginate(number)
    }
  return (
    <div>
        <div className="tw-flex tw-items-center tw-gap-2">
            {
                pageNumber.map( (number) => (
                    <span key={number}>
                        <p 
                        className={`tw-border tw-border-main-blue tw-h-[30px] tw-w-[30px] tw-flex tw-justify-center tw-items-center tw-p-3 tw-cursor-pointer tw-rounded-md
                         hover:tw-bg-main-blue hover:tw-text-white ${activePage === number ? "tw-bg-main-blue tw-text-white" : "tw-text-main-blue"}`}
                        onClick={() => handlePageClick(number)}>
                            {number}
                        </p>
                    </span>
                ))
            }
        </div>
    </div>
  )
}

export default Pagination