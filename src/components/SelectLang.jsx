import React , { useEffect } from "react";
import { language } from "../features/SelectLangSlice";
import { MdLanguage } from "react-icons/md";
import { useSelector , useDispatch } from "react-redux";
import { changeLang } from "../features/SelectLangSlice";

const SelectLanguage = () => {
    const selectLang = useSelector((state) => state.selectLang)
    const dispatch = useDispatch()

  return (
    <div className="tw-flex tw-items-center tw-justify-between tw-overflow-hidden tw-rounded-md tw-duration-300">
      {language.map(({ code, name }) => (
        <button
          key={code}
          type="button"
          className={` ${
            selectLang.currentLanguageCode === code ? "tw-hidden" : ""
          } tw-w-full tw-text-main-blue hover:tw-text-white tw-group tw-bg-transparent-white9 tw-backdrop-blur-lg hover:tw-bg-main-blue tw-font-semibold tw-text-sm sm:tw-text-xs tw-p-2 sm:tw-p-1.5 tw-px-2.5 sm:tw-px-1.5 tw-duration-300`}
          onClick={() => dispatch(changeLang(code))}
        >
          <span>{name}</span>
        </button>
      ))}
      <span className={`tw-p-2.5 sm:tw-p-1.5 tw-bg-main-blue tw-text-white tw-rounded-md
       ${ selectLang.currentLanguageCode === "en" 
      ? "tw-rounded-tl-none tw-rounded-bl-none"
      : "tw-rounded-tr-none tw-rounded-br-none"
    }
      `}>
        <MdLanguage />
      </span>
    </div>
  );
};

export default SelectLanguage;
