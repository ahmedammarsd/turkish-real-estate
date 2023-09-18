import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/semantic-ui.css"


const Lable = ({ labelInput }) => (
  <label className="tw-text-white md:tw-font-bold tw-tracking-tight tw-text-[15px] sm:tw-text-sm tw-capitalize">
    {labelInput}
  </label>
);

const FormRequest = () => {

  const { t } = useTranslation();
// FORM
  const [nameUser , setNameUser] = useState("");
  const [phoneNumber , setPhoneNumber] = useState("");
  const [email , setEmail] = useState("");


  // validation name user
  const nameRgex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
  const [msgErrNameUser , setMsgErrNameUser] = useState("")
  const [ showMsgErrNameUser , setShowMsgNameUser] = useState(false);
  
  const validNameUser = (inputName) => {
      if(inputName.trim().length === 0){
          setMsgErrNameUser(t("nameMsgErrOne"));
          setShowMsgNameUser(true)
        }
        else if (!nameRgex.test(inputName)){
          setMsgErrNameUser(t("nameMsgErrTwo"));
          setShowMsgNameUser(true);
        }
        else{
         return setShowMsgNameUser(false)
        }
  }
  // End validation name user

  // PHONE VALID
  const [msgErrPhone , setMsgErrPhone] = useState("")
  const [ showMsgErrPhone , setShowMsgPhone] = useState(false);
  
  const validPhone = (inputPhone) => {
      if(inputPhone.length === 0){
          setMsgErrPhone(t("nameMsgErrOne"));
          setShowMsgPhone(true)
        }
        else if (inputPhone.length < 8){
          setMsgErrPhone(t("phoneMsgErrTwo"));
          setShowMsgPhone(true);
        }
        else{
         return setShowMsgPhone(false)
        }
  }
  // END PHONE VALID

  // VALIDATION EMAIL
  const emailRgex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g;
  const [msgErrEmail , setMsgErrEmail] = useState("")
  const [showMsgErrEmail , setShowMsgErrEmail] = useState(false)
  const validEmail = (inputEmail) => {
    if(inputEmail.trim().length === 0){
      setMsgErrEmail(t("nameMsgErrOne"));
      setShowMsgErrEmail(true)
    }
    else if (!emailRgex.test(inputEmail)){
      setMsgErrEmail(t("emailMsgErrTwo"));
      setShowMsgErrEmail(true);
    }
    else{
     return setShowMsgErrEmail(false)
    }
  }
  // END VALIDATION EMAIL

  // HANDLE SUBMIT 
  const handleSubmit = (e) => {
    e.preventDefault();
    validNameUser(nameUser);
    validEmail(email)
    validPhone(phoneNumber)
  }
  // =================
  // END FORM
  const styleSelect =
    "tw-w-full tw-h-10 shadow-md tw-backdrop-blur-sm tw-bg-transparent-white6 tw-ring-1 tw-ring-gray-50 tw-ring-0 tw-border-b-[.7px] tw-border-b-[2px] tw-border-gray-100 focus:tw-border-none tw-px-3 tw-text-gray-500 placeholder:tw-text-gray-50 tw-text-gray-700 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-main-blue sm:tw-text-sm";
  return (
    <div className="tw-w-full tw-h-full">
      <div className=" md:tw-mt-5 tw-flex tw-justify-center tw-items-center tw-w-full tw-h-full">
        <form className=" tw-w-[50%] md:tw-w-full tw-p-4" onSubmit={handleSubmit}>
          <div className="tw-flex tw-flex-col tw-items-start tw-gap-5 md:tw-gap-4">
            <div className="tw-w-full tw-flex tw-flex-col tw-items-start tw-gap-2">
              <Lable labelInput={"name"} />
              <input type="text" className={`${styleSelect} ${showMsgErrNameUser ? "tw-border-red-500" : null}`}
                 value={nameUser}
                 maxLength={30}
               onChange={(e) => {
                setNameUser(e.target.value)
                validNameUser(e.target.value)
               }}
               onFocus={(e) => {
                setNameUser(e.target.value)
                validNameUser(e.target.value)
               }}
               onBlur={(e) => {
                setNameUser(e.target.value)
                validNameUser(e.target.value)
               }}
              />
              {
                showMsgErrNameUser ?
                <p className=" tw-text-red-500 tw-p-1 tw-text-sm tw-whitespace-nowrap tw-capitalize tw-bg-transparent-white1 tw-px-3 tw-rounded-sm">
                  {msgErrNameUser}
                </p>
                :
                null
              }
            </div>
            <div className="tw-w-full tw-flex tw-flex-col tw-items-start tw-gap-2">
              <Lable labelInput={"phone"} />
              <PhoneInput 
              inputStyle={{
                background: "rgba(255,255,255,.6)",
                width: "100%",
                height: "40px",
                borderRadius: "none",
                borderBottom: showMsgErrPhone ? "2px solid red" : "2px solid white",
                backdropFilter: "blur(4px)"
                
              }}
              buttonStyle={{
                background: "rgba(255,255,255,.6)",
              }}
              dropdownStyle={{
                background: "rgba(255,255,255,.8)",
                backdropFilter: "blur(10px)"
              }}
              country={"tr"}
              inputProps={{
                required: true
              }}
              onChange={(value) => {
                setPhoneNumber(value)
                validPhone(value)
              }}
              onBlur={(value) => {
                setPhoneNumber(value)
                validPhone(value)
              }}
              onFocus={(value) => {
                setPhoneNumber(value)
                validPhone(value)
              }}
              
              />
              {/* <input type="number" className={styleSelect} /> */}
              {
                showMsgErrPhone ?
                <p className=" tw-text-red-500 tw-p-1 tw-text-sm tw-whitespace-nowrap tw-capitalize tw-bg-transparent-white1 tw-px-3 tw-rounded-sm">
                  {msgErrPhone}
                </p>
                :
                null
              }
            </div>
            <div className="tw-w-full tw-flex tw-flex-col tw-items-start tw-gap-2">
              <Lable labelInput={"email"} />
              <input type="email" className={`${styleSelect} ${showMsgErrNameUser ? "tw-border-red-500" : null}`}
              value={email}
              placeholder="example@example.com"
              onChange={(e) => {
                setEmail(e.target.value)
                validEmail(e.target.value)
               }}
               onFocus={(e) => {
                setEmail(e.target.value)
                validEmail(e.target.value)
               }}
               onBlur={(e) => {
                setEmail(e.target.value)
                validEmail(e.target.value)
               }}
              />
               {
                showMsgErrEmail ?
                <p className=" tw-text-red-500 tw-p-1 tw-text-sm tw-whitespace-nowrap tw-capitalize tw-bg-transparent-white1 tw-px-3 tw-rounded-sm">
                  {msgErrEmail}
                </p>
                :
                null
              }
            </div>
            <div className="tw-w-full tw-mt-5">
                <button className=" tw-w-full tw-text-white tw-bg-main-blue tw-py-3 tw-rounded-sm hover:tw-bg-blue-700 tw-capitalize">
                  {t("send")}
                </button>
              </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRequest;
