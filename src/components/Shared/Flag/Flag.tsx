import { CircleFlag } from "react-circle-flags";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Flag = (): JSX.Element => {
  const { i18n } = useTranslation();
  const [show, setShow] = useState(false);

  const [lang, setLang] = useState("en");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
    localStorage.setItem('i18nextLng', lng);
    setShow(false); // Save selected language to local storage
  };
  return (
    <>
      <span className="min-w-12 relative">
        <div className="" onClick={() => setShow(!show)}>
          <CircleFlag countryCode={lang == "en" ? "gb" : lang} height="50" width="50"/>
        </div>

        <span
          className={`absolute top-16 -left-2 flex flex-col gap-4 w-max bg-white  px-2 py-4  shadow-lg z-10   ${
            show ? "block" : "hidden"
          }`}
        ><CircleFlag className={`cursor-pointer ${lang === "en" ? "hidden" : "block"}`} onClick={() => changeLanguage("en")} countryCode="gb" height="50" width="50" />
          <CircleFlag className={`cursor-pointer ${lang === "az" ? "hidden" : "block"}`} onClick={() => changeLanguage("az")} countryCode="az" height="50" width="50" />
          <CircleFlag className={`cursor-pointer ${lang === "ru" ? "hidden" : "block"}`} onClick={() => changeLanguage("ru")} countryCode="ru" height="50" width="50" />
          <CircleFlag className={`cursor-pointer ${lang === "tr" ? "hidden" : "block"}`} onClick={() => changeLanguage("tr")} countryCode="tr" height="50" width="50" />
            
        </span>
      </span>
    </>
  );
};

export default Flag;
