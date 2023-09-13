import React from 'react'

const Bults = ({isTransparent}) => {
  return (
    <span className={`tw-h-[10px] tw-w-[10px] tw-rounded-full ${isTransparent ? "tw-bg-transparent" : "tw-bg-main-blue"}`}>

    </span>
  )
}

export default Bults