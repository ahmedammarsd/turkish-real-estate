import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';

const Project = ({descCompaond , moreInfo , youtubeLink}) => {
  const { t } = useTranslation()
  return (
    <div className="tw-flex tw-flex-col tw-items-start tw-gap-2">
       <div>
       <span className="tw-capitalize tw-bg-main-blue tw-text-white tw-rounded-sm tw-p-2 xs:tw-p-1.5 tw-px-4 xs:tw-px-2 tw-text-lg sm:tw-text-sm tw-font-semibold tw-whitespace-nowrap tw-inline-block tw-mb-2">{t("description")}</span>
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
      <div>
      <span className="tw-capitalize tw-bg-main-blue tw-text-white tw-rounded-sm tw-p-2 xs:tw-p-1.5 tw-px-4 xs:tw-px-2 tw-text-lg sm:tw-text-sm tw-font-semibold tw-whitespace-nowrap tw-inline-block tw-mb-2">{t("moreDetail")}</span>
      <p className="tw-text-sm tw-text-gray-400">
      {
          moreInfo?.split("\n")
          .map( (item , index) => (
            <span key={index}>
              {item}
              <br />
            </span>
          ))
      }
      </p>
      </div>
      </div>
      <div className='tw-w-full tw-h-[300px] sm:tw-h-[240px] tw-mt-5'>
            <ReactPlayer url={youtubeLink} width={"100%"} height={"100%"}/>
          </div>
    </div>
  )
}

export default Project