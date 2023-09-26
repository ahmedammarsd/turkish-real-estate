import React, { useEffect, useState } from "react";
import TitleAndDesc from "./shared/TitleAndDesc";
import { useTranslation } from "react-i18next";
import CardRealEstate from "./shared/CardRealEstate";
import { useLocation, useNavigate } from "react-router-dom";
import { linksNavbar } from "../Links-navbar/Links";
import FormFilterRealEstate from "./FormFilterRealEstate";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { VscSettings } from "react-icons/vsc";
import { getRealEstates } from "../features/RealEstateSlice";
import Loading from "./shared/Loading";
import ErrorMsg from "./shared/ErrorMsg";
import NoData from "./shared/NoData";
import imageNotFound from "../images/imagecompressor/Image_not_available.png";
import { BaseUrl } from "../utils/BaseUrl";
import Pagination from "./Pagination";


const RealEstates = ({ inMain }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const selectLang = useSelector((state) => state.selectLang);
  const realEstates = useSelector((state) => state.realEstates);

  const [controlFormFilter, setControlFormFilter] = useState(false);

  useEffect(() => {
   
  }, [realEstates.realEstates[0]?.length]);

  const [isRent, setIsRent] = useState(true);
  const [twon, setTown] = useState("none");
  const [compound, setCompound] = useState("none");
  const [typeRealEstate, setTypeRealEstatet] = useState(location.state?.FromCardRealEstaeType != undefined ? location.state?.FromCardRealEstaeType : "none");
  //const [features, setFeatures] = useState(""); // NO WORDING NOW
  //const [typeDesign, setTypeDesign] = useState(""); // NO WORDING NOW
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [minSpace, setMinSpace] = useState(1);
  const [maxSpace, setMaxSpace] = useState(500);
  let offerType = isRent  ?  "ايجار" : "شراء";
  const [realEstatesFilterr, setRealEstatesFilter] = useState([]);
  const [realEstatesFilterTwo, setRealEstatesFilterTwo] = useState([]);

  useEffect(() => {
    if (realEstates.realEstates?.length === 0) {
      dispatch(getRealEstates());
    }
      const realEstatesFilter = realEstates.realEstates[0]?.filter((realEstate) => realEstate.is_archive === false && realEstate.is_available === true);
      setRealEstatesFilter(realEstatesFilter); // IN MAIN PAGE
  },[realEstates.realEstates[0]?.length])


  useEffect(() => {
    //location.state?.FromCardRealEstaeType && setTypeRealEstatet(location.state?.FromCardRealEstaeType);
   
      
    /// ========== FILTER REAL ESTATE =================
  //  if (realEstatesFilter) {
      // const realEstateTwoChangeByFormFilter = realEstatesFilterr?.filter((real) =>  real?.offer_type == offerType
      //        && twon !== "none" ? real.residential_compound?.town_id == twon : null
      //        && compound != "none" ? real.residential_compound?.id == compound : real
      //        && typeRealEstate != "none" ?  real.type == typeRealEstate : null
      //        && (minPrice !== 0 && maxPrice !== 0) ? (real.real_estate_contents?.some((content) => content?.price >= minPrice)) && (real.real_estate_contents?.some((content) => content?.price <= maxPrice)): ""
      //        && (minSpace !== 0 && maxSpace !== 0) ? (real.real_estate_contents?.some((content) => content?.space >= minSpace)) && (real.real_estate_contents?.some((content) => content?.space <= maxSpace)): ""
      // );
      const realEstateTwoChangeByFormFilter = realEstatesFilterr?.filter((real) => real?.offer_type == offerType )
      .filter((real) =>  twon != "none" ? real.residential_compound?.town_id == twon :  real)
      .filter((real) => compound !== "none" ? real.residential_compound?.id == compound : real)
      .filter((real) => typeRealEstate != "none" ?  real.type == typeRealEstate : real)
      .filter((real) => (minPrice !== 0 && maxPrice !== 0) ? (real.real_estate_contents?.some((content) => content?.price >= minPrice)) && (real.real_estate_contents?.some((content) => content?.price <= maxPrice)): real)
      .filter((real) => (minSpace !== 0 && maxSpace !== 0) ? (real.real_estate_contents?.some((content) => content?.space >= minSpace)) && (real.real_estate_contents?.some((content) => content?.space <= maxSpace)): real)
      // console.log(realEstateTwoChangeByFormFilter.sort((a,b) => a.id - b.id))
      setRealEstatesFilterTwo(realEstateTwoChangeByFormFilter); // IN REAL ESTATE PAGE
   // }
  // }
 
  }, [ realEstatesFilterr,twon ,offerType , compound , typeRealEstate , minPrice , maxPrice , minSpace , maxSpace]);


  //====== PAGINATION ======
  const [currentPage, setCurrentPage] = useState(1);
  const [reaEstateInPage] = useState(6);
  // GET CURRENT NEWS
  const indexOfLastPage = currentPage * reaEstateInPage;
  const indexOfFirstNews = indexOfLastPage - reaEstateInPage;
  const currentRealEstat = realEstatesFilterTwo?.slice(
    indexOfFirstNews,
    indexOfLastPage
  );
  // CHANGE PAGE
  const paginatee = (pageNumber) => setCurrentPage(pageNumber);
  //====== END PAGINATION =====
  return (
    <div className="tw-py-2 tw-relative tw-flex tw-justify-center tw-items-center">
      <div className="tw-w-full">
        <div className="tw-w-[85%] sm:tw-w-[95%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
          {inMain ? (
            <div>
              <TitleAndDesc
                title={t("realEstate")}
                desc={t("")}
                isTransparentForTitle={false}
                isTransparentForDesc={true}
              />
            </div>
          ) : null}

          {/*========================================== */}
          {/* HANDLE TO SHOW THE BUTTON THE HIDE AND VIEW THE FORM FILTER IN REAL ESTATE PAGE NOT IN MAIN */}
          {
            !inMain ? (
              <div className=" tw-hidden lg:tw-flex tw-w-full tw-py-3 tw-bg-gray-5 tw-items-center tw-justify-center">
                <span
                  className="tw-text-3xl md:tw-text-2xl sm:tw-text-xl tw-text-main-blue tw-p-2 tw-rounded-md tw-shadow-md hover:tw-bg-main-blue hover:tw-text-white tw-cursor-pointer tw-duration-500"
                  onClick={() => setControlFormFilter(!controlFormFilter)}
                >
                  <VscSettings />
                </span>
              </div>
            ) : null // NOTHING TO SHOW IN MAIN
          }
          {/*========================================== */}
          <div className="tw-w-full tw-flex tw-flex-row lg:tw-flex-col tw-items-start tw-gap-4">
            {/*========================================== */}
            {/* FORM FILTER IN REAL ESTAE IN PAGE IN MANY CASES ITS HANDLE DEBENDS THE SCREEN SIZE */}
            {
              !inMain ? (
                <>
                  <div
                    className={`tw-w-[40%] lg:tw-w-full md:tw-fixed md:tw-h-screen md:tw-bg-transparent-black4 tw-backdrop-blur-[4px] md:tw-left-0 tw-z-8 md:tw-z-10 ${
                      controlFormFilter
                        ? "lg:tw-block md:tw-scale-100 md:tw-top-0"
                        : "lg:tw-hidden md:tw-scale-0 md:tw-top-[-1000px]"
                    } tw-transition-all tw-duration-1000`}
                  >
                    <span
                      className={`tw-hidden md:tw-block md:tw-absolute tw-top-1 ${
                        selectLang.currentLanguageCode === "en"
                          ? "tw-right-4"
                          : "tw-left-4"
                      } tw-text-red-600 tw-z-10 tw-p-2 tw-shadow-sm hover:tw-text-red-600 tw-cursor-pointer hover:tw-bg-gray-50 tw-rounded-md tw-text-xl tw-transition-all tw-duration-200 tw-ease-in-out`}
                      onClick={() => setControlFormFilter(false)}
                    >
                      <RxCross2 />
                    </span>
                    {/* FORM FILTER */}
                    <FormFilterRealEstate
                    twon={twon}
                      setTown={setTown}
                      setCompound={setCompound}
                      typeRealEstate={typeRealEstate}
                      setTypeReal={setTypeRealEstatet}
                      setPriceMin={setMinPrice}
                      setPriceMax={setMaxPrice}
                      setSpaceMin={setMinSpace}
                      setSpaceMax={setMaxSpace}
                      isRent={isRent}
                      setIsRent={setIsRent}
                      minPrice={minPrice}
                      maxPrice={maxPrice}
                      minSpace={minSpace}
                      maxSpace={maxSpace}
                    />
                  </div>
                </>
              ) : null // NOTHING TO SHOW IN MAIN
            }
            {/*========================================== */}

            {/*========================================== */}
            <div className="tw-w-full">
              {
                // =========== START HANDLE REAL ESTATES ================
                realEstates.loading ? (
                  <Loading />
                ) : realEstates.status === "failed" ? (
                  <ErrorMsg msg={realEstates.error || t("errorInGet")} />
                ) : inMain ? (
                  // ==== IN MAIN PAGE =======  CAN NOT USE FORM FILTER
                  realEstatesFilterr?.length === 0 ? (
                    <NoData />
                  ) : (
                    <div className="tw-grid tw-w-full tw-grid-cols-3 lg:tw-grid-cols-2 sm:tw-grid-cols-1 tw-items-center tw-gap-4">
                      {realEstatesFilterr
                        ?.slice(0, 6)
                        ?.map(
                          (
                            {
                              id,
                              image_url,
                              offer_type,
                              type,
                              real_estate_contents,
                              residential_compound,
                              ar_title,
                              en_title,
                            },
                            index
                          ) => (
                            <CardRealEstate
                              key={index}
                              imageReal={
                                image_url !== ""
                                  ? BaseUrl + "file/" + image_url
                                  : imageNotFound
                              }
                              porpose={offer_type || t("notSpecify")}
                              typeProperty={type || t("notSpecify")}
                              price={
                                real_estate_contents[0]?.price ||
                                t("notSpecify")
                              }
                              tilte={
                                selectLang.currentLanguageCode === "en"
                                  ? en_title || t("notSpecify")
                                  : ar_title || t("notSpecify")
                              }
                              addressOne={
                                residential_compound?.state?.city ||
                                t("notSpecify")
                              }
                              addressTwo={
                                selectLang.currentLanguageCode === "en"
                                  ? residential_compound?.en_address ||
                                    t("notSpecify")
                                  : residential_compound?.ar_address ||
                                    t("notSpecify")
                              }
                              numberAreaForInfoReal={
                                real_estate_contents[0]?.space ||
                                t("notSpecify")
                              }
                              numberRoomsForInfoReal={
                                real_estate_contents[0]?.rooms_count ||
                                t("notSpecify")
                              }
                              numberBathForInfoReal={
                                real_estate_contents[0]?.bathrooms_count ||
                                t("notSpecify")
                              }
                              customFunc={() =>
                                navigate(`${linksNavbar[1].to + "/" + id}`)
                              }
                            />
                          )
                        )}
                    </div>
                  )
                ) : // ==== IN REAL ESTATE PAGE ======= CAN USE FORM FILTER HERE AND DATA CHANGE
                realEstatesFilterTwo?.length === 0 ? 
                 (
                  <NoData />
                )
                :
                (
                  <div className=" tw-w-full">
                    <div className="tw-grid tw-w-full tw-grid-cols-2 lg:tw-grid-cols-2 sm:tw-grid-cols-1 tw-items-center tw-gap-4">
                      {currentRealEstat?.sort((a,b) => a.id < b.id).map(
                        (
                          {
                            id,
                            image_url,
                            offer_type,
                            type,
                            real_estate_contents,
                            residential_compound,
                            ar_title,
                            en_title,
                          },
                          index
                        ) => (
                          <CardRealEstate
                            key={index}
                            imageReal={
                              image_url !== ""
                                ? BaseUrl + "file/" + image_url
                                : imageNotFound
                            }
                            porpose={offer_type || t("notSpecify")}
                            typeProperty={type || t("notSpecify")}
                            price={
                              real_estate_contents[0]?.price || t("notSpecify")
                            }
                            tilte={
                              selectLang.currentLanguageCode === "en"
                                ? en_title || t("notSpecify")
                                : ar_title || t("notSpecify")
                            }
                            addressOne={
                              residential_compound.state.city || t("notSpecify")
                            }
                            addressTwo={
                              selectLang.currentLanguageCode === "en"
                                ? residential_compound.en_address ||
                                  t("notSpecify")
                                : residential_compound.ar_address ||
                                  t("notSpecify")
                            }
                            numberAreaForInfoReal={
                              real_estate_contents[0]?.space || t("notSpecify")
                            }
                            numberRoomsForInfoReal={
                              real_estate_contents[0]?.rooms_count ||
                              t("notSpecify")
                            }
                            numberBathForInfoReal={
                              real_estate_contents[0]?.bathrooms_count ||
                              t("notSpecify")
                            }
                            customFunc={() => navigate(`${id}`)}
                          />
                        )
                      )}
                    </div>
                    {/*========================================== */}
                    {
                      !inMain ? (
                        realEstates.status !== "failed" ? (
                          <div className=" tw-w-full tw-flex tw-justify-center tw-items-center tw-mt-7">
                            <Pagination
                              InPage={reaEstateInPage}
                              total={currentRealEstat?.length}
                              paginate={paginatee}
                            />
                          </div>
                        ) : null // IF FAILED NOTHING TO SHOW
                      ) : null // IF NOT IN MAIN HIDE PAGINATION
                    }
                    {/*========================================== */}
                  </div>
                ) 
                // =========== END HANDLE REAL ESTATES ================
              }
            </div>
            {/*========================================== */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstates;
