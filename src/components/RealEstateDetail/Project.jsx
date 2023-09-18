import React from 'react';
import ReactPlayer from 'react-player';

const Project = ({descCompaond , youtubeLink}) => {
  return (
    <div className="tw-flex tw-flex-col tw-items-start tw-gap-5">
       <div>
      <p className="tw-text-sm tw-text-gray-400">
      {
          descCompaond?.split("\n")
          .map( (item , index) => (
            <span key={index}>
              {item}
              <br />
            </span>
          ))
      }
      </p>
      </div>
      <div className='tw-w-full tw-h-[300px] sm:tw-h-[240px]'>
            <ReactPlayer url={youtubeLink} width={"100%"} height={"100%"}/>
          </div>
    </div>
  )
}

export default Project