import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Lable = ({ labelInput }) => (
  <label className=" tw-text-main-blue md:tw-text-white md:tw-font-bold tw-tracking-tight tw-text-[15px] sm:tw-text-sm tw-capitalize">
    {labelInput}
  </label>
);

const FormFilterRealEstate = ({isRent , setIsRent , setTown , setCompound , setTypeReal , setFeture , setPriceMin , setPriceMax , setSpaceMin , setSpaceMax}) => {
  const { t } = useTranslation();
  const realEstates = useSelector((state) => state.realEstates);
  const langCode = useSelector((state) => state.selectLang.currentLanguageCode);
  

  let statesArray = [];
  let compoundArray = []
  let typeReal = []
  const pushStates = () => {
    if (realEstates.status !== "failed"){
    for (let index = 0; index < realEstates.realEstates[0]?.length; index++) {
    //  statesArray.push(realEstates.realEstates[0][index]?.residential_compound?.state?.city)   STOP WORKING WITH BECAUSE THE STATE IN COMPOUND I CAN DISPLAY ITS FROM COMPOUND ARRAY
      compoundArray.push(realEstates.realEstates[0][index]?.residential_compound) // GET COMPOUNT AND TWON
      typeReal.push(realEstates.realEstates[0][index]?.type)
    }
  }
  }
  pushStates()
  
  //let pp = testAarry.filter( (ele, ind) => ind === testAarry.findIndex( elem => elem.id === ele.id )) REMOVE DUPLICATE OBJECT IN ARRAY
  const removeDuplicateStates = [...new Set(statesArray)];
  //const removeDuplicateEnCompound = [...new Set(compounArray)];
  const removeDuplicateCompound = compoundArray.filter( (ele, ind) => ind === compoundArray.findIndex( elem => elem.id === ele.id )) // REMOVE THE DUPLICATE COMPOUND
  const removeDuplicateTwon = compoundArray.filter( (ele, ind) => ind === compoundArray.findIndex( elem => elem.town_id === ele.town_id )) // AFTER COMPUND REMOVE THE DUPLICATE TWON BUCASE MAY THA TWO COMPOUND HAS SAME TWON
  const removeDuplicateTypeReal = [...new Set(typeReal)];
  //const removeTest = [new Set(testAarry.id)] // ITS TEST ARRAY FOR REMOVE DUPLICATE VALUE
  
  const styleSelect =
    "tw-w-full tw-h-9 xs:tw-h-7 shadow-sm md:tw-backdrop-blur-sm md:tw-bg-transparent-white5 tw-ring-1 tw-ring-gray-50 md:tw-ring-0 tw-backdrop-blur-md tw-bg-white tw-rounded-sm tw-border-b-[.7px] md:tw-border-b-[2px] tw-border-main-blue md:tw-border-gray-100 focus:tw-border-none tw-px-3 tw-text-gray-500 md:placeholder:tw-text-gray-100 md:tw-text-gray-700 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-main-blue tw-capitalize sm:tw-text-sm";
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
      setPriceMax(max)
      setPriceMin(min)
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
  else if (max < 0){
    setMaxSpaceValid(false)
  }
  else if(min >= max){
    setEqualMinAndMaxSpace(false)
  }
  else {
    setMinSpaceValid(true)
    setMaxSpaceValid(true)
    setEqualMinAndMaxSpace(true)
    setSpaceMax(max)
    setSpaceMin(min)
  }
}
 const handleSubmit = (e) => {
  e.preventDefault()
 }
// END PRICE STATE AND VALIDATION
//let array = [1,2,3,2,4,3, 1]
//let filterArray = [...new Set(array)] // filter the dublicate
  useEffect(() => {
  
  }, [price]);
  return (
    <div>
        <div className="md:tw-mt-10">
          <form className="tw-w-full tw-p-4 tw-border lg:tw-border-none" onSubmit={handleSubmit}>

            <div className="tw-flex tw-flex-col tw-items-start tw-gap-5 md:tw-gap-4">
              <div className=" tw-w-full tw-flex tw-items-center">
                <button className={`tw-w-full tw-py-2 sm:tw-p-1 tw-capitalize ${isRent ? " tw-bg-main-blue tw-text-white" : " tw-bg-gray-50 hover:tw-bg-slate-50 md:tw-bg-transparent-white9 tw-text-main-blue md:hover:tw-bg-transparent-white5"}`}
                onClick={() => setIsRent(true)}
                >
                  {t("rent")}
                  </button>
                <button className={`tw-w-full tw-py-2 sm:tw-p-1 tw-capitalize ${!isRent ? " tw-bg-main-blue tw-text-white" : " tw-bg-gray-50 hover:tw-bg-slate-50 md:tw-bg-transparent-white9 tw-text-main-blue md:hover:tw-bg-transparent-white5"}`}
                onClick={() => setIsRent(false)}
                >
                  {t("buy")}
                  </button>
              </div>
              <div className="tw-w-full tw-flex tw-flex-col tw-items-start tw-gap-2">
                <Lable labelInput={t("twon")} />
                {
                  realEstates.loading ? 
                  <span className=" tw-p-1 tw-bg-transparent-white2 tw-rounded-sm tw-text-white tw-animate-pulse">LOADING...</span>
                  : realEstates.status === "failed" ?
                  <span className=" tw-p-1.5 tw-bg-transparent-white9 tw-rounded-sm tw-text-red-500 tw-w-full tw-text-center tw-text-sm xs:tw-text-xs">{realEstates.errorStates || t("errorInGet")}  {t("twon")}</span>
                  :
                  <select className={styleSelect}
                  onChange={(e) => setTown(e.target.value)}
                 >
                   <option value="">{t("all")}</option>
                  {
                    removeDuplicateTwon?.map( (state , index) => (
                      <option key={index} value={state.town_id}>{state.state.city}</option>
                    ))
                  }
                 </select>
                }
               
              </div>
              <div className="tw-w-full tw-flex tw-flex-col tw-items-start tw-gap-2">
                <Lable labelInput={t("compound")} />
                {
                   realEstates.loading ? 
                   <span className=" tw-p-1 tw-bg-transparent-white2 tw-rounded-sm tw-text-white tw-animate-pulse">LOADING...</span>
                   : realEstates.status === "failed" ?
                   <span className=" tw-p-1.5 tw-bg-transparent-white9 tw-rounded-sm tw-text-red-500 tw-w-full tw-text-center tw-text-sm xs:tw-text-xs">{realEstates.errorStates || t("errorInGet")} {t("compound")}</span>
                   :
                   <select className={styleSelect}
                    onChange={(e) => setCompound(e.target.value) }
                   >
                     <option value="">{t("all")}</option>
                     {
                     
                      removeDuplicateCompound?.map((compound , index) => (
                        <option key={index} value={compound.id}>{ langCode == "en" ? compound.en_name : compound.ar_name}</option>
                      ))
                      
                     }
                </select>
                }
                
              </div>
              <div className="tw-w-full tw-flex tw-flex-col tw-items-start tw-gap-2">
                <Lable labelInput={t("typeReal")} />
                {
                 realEstates.loading ? 
                 <span className=" tw-p-1 tw-bg-transparent-white2 tw-rounded-sm tw-text-white tw-animate-pulse">LOADING...</span>
                 : realEstates.status === "failed" ?
                 <span className=" tw-p-1.5 tw-bg-transparent-white9 tw-rounded-sm tw-text-red-500 tw-w-full tw-text-center tw-text-sm xs:tw-text-xs">{realEstates.errorStates || t("errorInGet")} {t("typeReal")}</span>
                 :
                 <select className={styleSelect} 
                 onChange={(e) => setTypeReal(e.target.value)}
                 >
                   <option value="">{t("all")}</option>
                   {
                    removeDuplicateTypeReal?.map( (type , index) => (
                      <option key={index} value={type}>{
                        type === "منزل" ? t("houses")
                        : type === "شقة" ? t("apartments") 
                        : type === "فيلا" ? t("villas") 
                        : type === "مبنى" ? t("buildings")
                        : type === "ارض" ? t("lands")
                        : type === "تجاري" ? t("commercial")
                        : t("residential")
                      }</option>
                    ))
                  }
                  </select>  
                }
              </div>
              {/* NO FETURES FOR NOW */}
              {/* <div className="tw-w-full tw-flex tw-flex-col tw-items-start tw-gap-2">
                <Lable labelInput={t("features")} />
                <select className={styleSelect}>
                  <option>feature 1</option>
                  <option>feature 1</option>
                  <option>feature 1</option>
                </select>
              </div> */}

              {/* NO TYPE DESIGN NOW */}
              {/* <div className="tw-w-full tw-flex tw-flex-col tw-items-start tw-gap-2">
                <Lable labelInput={t("typeDesign")} />
                <select className={styleSelect}>
                  <option>type 1</option>
                  <option>type 1</option>
                  <option>type 1</option>
                </select>
              </div> */}

              <div className="tw-w-full tw-flex tw-flex-col tw-items-start tw-gap-2">
                <Lable labelInput={t("price")} />
                <div className=" tw-w-full tw-grid tw-grid-cols-2 tw-items-center tw-gap-3">
                  <div>
                  <Lable labelInput={t("min")} />
                    <input
                      type="number"
                      max={5000}
                      min={0}
                      placeholder={t("min")}
                      name="fromPrice"
                      className={`${styleSelect} ${!minPriceValid || !equalMinAndMax  ? "tw-border tw-border-red-500" : null}`}
                      defaultValue={price.min}
                      onChange={(e) => {
                        setPrice({ ...price, min:Number(e.target.value) });
                        checkPrice(price.min , price.max)
                      } }
                      onFocus={(e) => checkPrice(price.min , price.max)}
                      onBlur={(e) => checkPrice(price.min , price.max)}
                    />
                   
                  </div>
                  <div>
                  <Lable labelInput={t("max")} />
                    <input
                      type="number"
                      max={4000}
                      min={0}
                      placeholder={t("max")}
                      name="ToPrice"
                      className={`${styleSelect} ${!maxPriceValid || !equalMinAndMax ? "tw-border tw-border-red-500" : null}`}
                      defaultValue={price.max}
                      onChange={(e) => {
                        setPrice({ ...price, max: Number(e.target.value) })
                        checkPrice(price.min ,price.max)
                      }}
                      onFocus={(e) => checkPrice(price.min ,price.max) }
                      onBlur={(e) => checkPrice(price.min , price.max) }
                    />
                  </div>
                </div>
                {
                      !minPriceValid || !equalMinAndMax ?
                      <p className="tw-text-sm xs:tw-text-xs tw-text-red-500 tw-bg-transparent-white9 tw-p-1 tw-w-full">
                        {t("min")} {t("notEqual")} {t("max")} 
                      </p>
                      : null
                    }
              </div>

              <div className="tw-w-full tw-flex tw-flex-col tw-items-start tw-gap-2 tw-border-t tw-pt-2">
                <Lable labelInput={t("space")} />
                <div className=" tw-w-full tw-grid tw-grid-cols-2 tw-items-center tw-gap-3">
                  <div>
                  <Lable labelInput={t("min")} />
                    <input
                      type="number"
                      max="5000"
                      min="0"
                      placeholder={t("min")}
                      name="fromPrice"
                      className={`${styleSelect} ${!minSpaceValid || !equalMinAndMaxSpace  ? "tw-border tw-border-red-500" : null}`}
                      defaultValue={space.min}
                      onChange={(e) => {
                        setSpace({ ...space, min:Number(e.target.value) });
                        checkSpace(space.min , space.max)
                      } }
                      onFocus={(e) => checkSpace(space.min , space.max)}
                      onBlur={(e) => checkSpace(space.min , space.max)}
                    />
                  </div>
                  <div>
                  <Lable labelInput={t("max")} />
                    <input
                      type="number"
                      max="5000"
                      min="0"
                      placeholder={t("max")}
                      name="ToPrice"
                      className={`${styleSelect} ${!maxSpaceValid || !equalMinAndMaxSpace  ? "tw-border tw-border-red-500" : null}`}
                      defaultValue={space.max}
                      onChange={(e) => {
                        setSpace({ ...space, max:Number(e.target.value) });
                        checkSpace(space.min , space.max)
                      } }
                      onFocus={(e) => checkSpace(space.min , space.max)}
                      onBlur={(e) => checkSpace(space.min , space.max)}
                    />
                  </div>
                </div>
                {
                      !maxSpaceValid || !equalMinAndMaxSpace ?
                      <p className="tw-text-sm xs:tw-text-xs tw-text-red-500 tw-bg-transparent-white9 tw-p-1 tw-w-full">
                        {t("min")} {t("notEqual")} {t("max")} 
                      </p>
                      : null
                    }
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
