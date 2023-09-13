import React from 'react'
import { useTranslation } from 'react-i18next'

const Virtual = () => {
  const { t } = useTranslation()
  return (
    <div className="tw-w-full tw-h-[250px] sm:tw-h-[200px] tw-flex tw-items-center tw-justify-center tw-p-3">
    <div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-bg-red-50 tw-rounded-md">
      <p className="tw-text-red-500 tw-capitalize tw-text-sm xs:tw-text-xs">
        {t("descVirtual")}
      </p>
    </div>
  </div>
  )
}

export default Virtual