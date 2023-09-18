import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Lable = ({ labelInput }) => (
  <label className=" tw-text-main-blue md:tw-text-white md:tw-font-bold tw-tracking-tight tw-text-[15px] sm:tw-text-sm tw-capitalize">
    {labelInput}
  </label>
);

const FormFilterRealEstate = () => {
  const { t } = useTranslation();
  const styleSelect =
    "tw-w-full tw-h-10 shadow-md md:tw-backdrop-blur-sm md:tw-bg-transparent-white6 tw-ring-1 tw-ring-gray-50 md:tw-ring-0 tw-backdrop-blur-md tw-bg-white tw-rounded-sm tw-border-b-[.7px] md:tw-border-b-[2px] tw-border-main-blue md:tw-border-gray-100 focus:tw-border-none tw-px-3 tw-text-gray-500 md:placeholder:tw-text-gray-100 md:tw-text-gray-700 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-main-blue sm:tw-text-sm";
  //const styleInput = "tw-block tw-w-full tw-rounded-md tw-border-0 tw-px-3.5 tw-py-2 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"

  // PRICE STATE AND VALIDATION
  const [price, setPrice] = useState({
    min: 0,
    max: 0,
  });
  const [minPriceValid , setMinPriceValid] = useState(true)
  const [maxPriceValid , setMaxPriceValid] = useState(true)
  const [equalMinAndMax , setEqualMinAndMax] = useState(true);

  const checkPrice = (min , max) => {
    if (min < 0){
      setMinPriceValid(false)
    }
    else if (max < 0){
      setMaxPriceValid(false)
    }
    else if(price.min >= price.max){
      setEqualMinAndMax(false)
    }
    else {
      setMinPriceValid(true)
      setMaxPriceValid(true)
      setEqualMinAndMax(true)
    }
  }
// END PRICE STATE AND VALIDATION

// SPACE STATE AND VALIDATION
const [space, setSpace] = useState({
  min: 0,
  max: 0,
});
const [minSpaceValid , setMinSpaceValid] = useState(true)
const [maxSpaceValid , setMaxSpaceValid] = useState(true)
const [equalMinAndMaxSpace , setEqualMinAndMaxSpace] = useState(true);

const checkSpace = (min , max) => {
  if (min < 0){
    setMinSpaceValid(false)
  }
  else if (space.max < 0){
    setMaxSpaceValid(false)
  }
  else if(space.min >= space.max){
    setEqualMinAndMaxSpace(false)
  }
  else {
    setMinSpaceValid(true)
    setMaxSpaceValid(true)
    setEqualMinAndMaxSpace(true)
  }
}
// END PRICE STATE AND VALIDATION
  useEffect(() => {
    
  }, [price]);
  return (
    <div>
        <div className=" md:tw-mt-5">
          <form className="tw-w-full tw-p-4 tw-border lg:tw-border-none">

            <div className="tw-flex tw-flex-col tw-items-start tw-gap-5 md:tw-gap-4">
              <div className="tw-w-full tw-flex tw-flex-col tw-items-start tw-gap-2">
                <Lable labelInput={t("twon")} />
                <select className={styleSelect}>
                  <option>town 1</option>
                  <option>town 1</option>
                  <option>town 1</option>
                </select>
              </div>
              <div className="tw-w-full tw-flex tw-flex-col tw-items-start tw-gap-2">
                <Lable labelInput={t("compound")} />
                <select className={styleSelect}>
                  <option>town 1</option>
                  <option>town 1</option>
                  <option>town 1</option>
                </select>
              </div>
              <div className="tw-w-full tw-flex tw-flex-col tw-items-start tw-gap-2">
                <Lable labelInput={t("typeReal")} />
                <select className={styleSelect}>
                  <option>type real 1</option>
                  <option>type real 1</option>
                  <option>type real 1</option>
                </select>
              </div>
              <div className="tw-w-full tw-flex tw-flex-col tw-items-start tw-gap-2">
                <Lable labelInput={t("features")} />
                <select className={styleSelect}>
                  <option>feature 1</option>
                  <option>feature 1</option>
                  <option>feature 1</option>
                </select>
              </div>
              <div className="tw-w-full tw-flex tw-flex-col tw-items-start tw-gap-2">
                <Lable labelInput={t("typeDesign")} />
                <select className={styleSelect}>
                  <option>type 1</option>
                  <option>type 1</option>
                  <option>type 1</option>
                </select>
              </div>

              <div className="tw-w-full tw-flex tw-flex-col tw-items-start tw-gap-2">
                <Lable labelInput={t("price")} />
                <div className=" tw-w-full tw-grid tw-grid-cols-2 tw-items-center tw-gap-3">
                  <div>
                    <input
                      type="number"
                      max={5000}
                      min={0}
                      placeholder={t("min")}
                      name="fromPrice"
                      className={`${styleSelect} ${!minPriceValid || !equalMinAndMax  ? "tw-border tw-border-red-500" : null}`}
                      onChange={(e) => {
                        setPrice({ ...price, min:Number(e.target.value) });
                        checkPrice(price.min , price.max)
                      } }
                      onFocus={(e) => checkPrice(price.min , price.max)}
                      onBlur={(e) => checkPrice(price.min , price.max)}
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      max={4000}
                      min={0}
                      placeholder={t("max")}
                      name="ToPrice"
                      className={`${styleSelect} ${!maxPriceValid || !equalMinAndMax ? "tw-border tw-border-red-500" : null}`}
                      onChange={(e) => {
                        setPrice({ ...price, max: Number(e.target.value) })
                        checkPrice(price.min ,price.max)
                      }}
                      onFocus={(e) => checkPrice(price.min ,price.max) }
                      onBlur={(e) => checkPrice(price.min , price.max) }
                    />
                  </div>
                </div>
              </div>

              <div className="tw-w-full tw-flex tw-flex-col tw-items-start tw-gap-2">
                <Lable labelInput={t("space")} />
                <div className=" tw-w-full tw-grid tw-grid-cols-2 tw-items-center tw-gap-3">
                  <div>
                    <input
                      type="number"
                      max="5000"
                      min="0"
                      placeholder={t("min")}
                      name="fromPrice"
                      className={`${styleSelect} ${!minSpaceValid || !equalMinAndMaxSpace  ? "tw-border tw-border-red-500" : null}`}
                      onChange={(e) => {
                        setSpace({ ...space, min:Number(e.target.value) });
                        checkSpace(space.min , space.max)
                      } }
                      onFocus={(e) => checkSpace(space.min , space.max)}
                      onBlur={(e) => checkSpace(space.min , space.max)}
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      max="5000"
                      min="0"
                      placeholder={t("max")}
                      name="ToPrice"
                      className={`${styleSelect} ${!maxSpaceValid || !equalMinAndMaxSpace  ? "tw-border tw-border-red-500" : null}`}
                      onChange={(e) => {
                        setSpace({ ...space, max:Number(e.target.value) });
                        checkSpace(space.min , space.max)
                      } }
                      onFocus={(e) => checkSpace(space.min , space.max)}
                      onBlur={(e) => checkSpace(space.min , space.max)}
                    />
                  </div>
                </div>
              </div>

              <div className="tw-w-full tw-mt-5">
                <button className=" tw-w-full tw-text-white tw-bg-main-blue tw-py-3 tw-rounded-sm hover:tw-bg-blue-700 tw-capitalize">
                  {t("search")}
                </button>
              </div>
            </div>
          </form>
      </div>
    </div>
  );
};

export default FormFilterRealEstate;
