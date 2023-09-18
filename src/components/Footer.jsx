import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import {  BiLogoYoutube , BiLogoInstagram , BiLogoTelegram , BiLogoTiktok} from "react-icons/bi"
import { BsTwitter , BsWhatsapp } from "react-icons/bs"

const LinksSocial = ({link , iconApp}) => {
  return (
  <a href={link} target="_blank"
  className="tw-p-3 sm:tw-p-2 tw-bg-white tw-text-main-blue tw-text-lg md:tw-text-sm tw-text-center tw-rounded-full tw-cursor-pointer hover:tw-bg-main-blue hover:tw-text-white tw-duration-300"
  >
    {iconApp}
  </a>
  )
}
const Footer = () => {
  return (
    <div className="tw-py-5 tw-pt-7 tw-w-full tw-bg-slate-800 tw-mt-8 tw-flex tw-flex-col tw-justify-end tw-items-center tw-h-full tw-gap-8">
      <div className=" tw-flex tw-items-center tw-gap-2">
        <LinksSocial link="https://www.facebook.com/bestselect0" iconApp={<FaFacebookSquare />} />
        <LinksSocial link={"https://wa.me/+905342122000"} iconApp={<BsWhatsapp />} />
        <LinksSocial link={"https://www.twitter.com/bestselect0"} iconApp={<BsTwitter />} />
        <LinksSocial link={"https://www.instagram.com/bestselect0"} iconApp={<BiLogoInstagram />} />
        <LinksSocial link={"https://m.youtube.com/channel/UCuRPpeDpim9WIpmq4aIlaeg"} iconApp={<BiLogoYoutube />} />
        <LinksSocial link={"https://t.me/bestselect0"} iconApp={<BiLogoTelegram />} />
        <LinksSocial link={"https://www.tiktok.com/@bestselect0"} iconApp={<BiLogoTiktok />} />
      </div>
      <div className="tw-w-full tw-border-t tw-text-center tw-pt-3">
      <a href="http://right-businesses.com/" target="_blank" rel="noopener noreferrer" className="tw-text-white tw-text-sm xs:tw-text-xs">
            Copyright &copy; <span className="tw-text-main-blue"> Right Businesses</span> all rights reserved
        </a>
      </div>
    </div>
  )
}

export default Footer