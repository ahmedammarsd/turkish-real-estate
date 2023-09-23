import React from 'react';
import {BsClockHistory } from "react-icons/bs";
import ReactPlayer from 'react-player';

const NewsDetails = ({image , date , title , category , desc , youtubeLink}) => {
  return (
    <div>
        <div className="tw-w-full tw-h-[500px]">
            <img src={image} className="tw-w-full tw-h-full tw-object-cover" />
        </div>
        <div className="tw-flex tw-items-start tw-flex-col tw-gap-5 sm:tw-gap-3 tw-p-4 tw-py-5">
        <div className=" tw-flex tw-justify-between tw-w-full tw-items-center">
            <span className="tw-p-2 tw-px-2.5 tw-bg-main-blue tw-text-white tw-whitespace-nowrap tw-text-sm xs:tw-text-xs xs:tw-p-1.5 tw-rounded-sm tw-capitalize">
              {category}
            </span>
            <div className="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-gray-400 xs:tw-text-xs">
            <span><BsClockHistory /></span>
            <span>{date}</span>
          </div>
          </div>
          <div>
            <span className="tw-font-bold tw-text-xl sm:tw-text-lg tw-capitalize tw-whitespace-nowrap tw-text-main-blue">
              {title}
            </span>
          </div>
          <div>
            <p className="tw-text-sm tw-text-gray-500 xs:tw-text-xs">
               {/* {desc.replace(/\n/g , "<br />" )} */}
               {
                desc.split("\n")
                .map( (item , index) => (
                  <span key={index}>
                    {item}
                    <br />
                  </span>
                ))
               }
            </p>
          </div>
          {
            youtubeLink &&
          <div className='tw-w-full tw-h-[300px] sm:tw-h-[240px]'>
            <ReactPlayer url={youtubeLink} width={"100%"} height={"100%"}/>
          </div>
          }
        </div>
    </div>
  )
}

export default NewsDetails