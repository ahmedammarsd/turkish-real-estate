import React from 'react'
import Feature from './Feature';
import testImage from '../../images/imagecompressor/img9.jpg'
import { useTranslation } from 'react-i18next';
import RealEstateContent from './RealEstateContent';
import imageNotFound from "../../images/imagecompressor/Image_not_available.png";

const About = ({desc , features , realEstateContent}) => {
  const { t } = useTranslation()
  return (
    <div className="tw-flex tw-flex-col tw-items-start tw-gap-5">
      <div>
      <p className="tw-text-sm tw-text-gray-400">
      {
          desc?.split("\n")
          .map( (item , index) => (
            <span key={index}>
              {item}
              <br />
            </span>
          ))
      }
      </p>
      </div>
      <div className="tw-w-full">
        <span className="tw-capitalize tw-bg-main-blue tw-text-white tw-rounded-sm tw-p-2 xs:tw-p-1.5 tw-px-4 xs:tw-px-2 tw-text-lg sm:tw-text-sm tw-font-semibold tw-whitespace-nowrap tw-inline-block tw-mb-4">{t("feature")}</span>
        {
          features?.length !== 0 || features !== "" ?
      <div className="tw-grid tw-grid-cols-3 lg:tw-grid-cols-2 sm:tw-grid-cols-1 tw-items-center tw-gap-3 tw-w-full">
        {
          features?.map((feture , index) => (
            <Feature image={feture?.feature?.image_url === "" ? imageNotFound : feture?.feature?.image_url } 
            feature={feture?.feature?.description || "" }/>
          ))
        }
        </div>
        : null
          
        }
      </div>
      {/*Real Estate Content */}
      <RealEstateContent content={realEstateContent}/>
        {/*End Real Estate Content */}
    </div>
  )
}

export default About