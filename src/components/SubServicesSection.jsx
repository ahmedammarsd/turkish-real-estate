import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import testImage from "../images/imagecompressor/img13.jpg";
import ServiceSectionCard from './shared/ServiceSectionCard';
import { dummayDataServices } from '../Links-navbar/Links';

const SubServicesSection = () => {
    const { id } = useParams();
    const navigate = useNavigate()
  return (
    <div className="tw-py-16 tw-relative tw-flex tw-justify-center tw-items-center">
    <div className="tw-w-full">
      <div className=" tw-w-[85%] sm:tw-w-[95%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
      
        <div className="tw-grid tw-grid-cols-3 md:tw-grid-cols-2 sm:tw-grid-cols-1 tw-items-center tw-gap-4 tw-mt-3">
         {
          dummayDataServices[id].sub_services?.map( (service , index) => (

            <ServiceSectionCard
              key={index}
              services={service.service}
              disc={service.desc}
              image={testImage}
              isMainServ={false}
              customFunc={() => navigate(`${service.id}`) }
            />
          ))
         }
        </div>
      </div>
    </div>
  </div>
  )
}

export default SubServicesSection