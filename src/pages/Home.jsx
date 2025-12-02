import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

export function Home() {
  useDocumentTitle("Ana Sayfa");

  const { lang, setLang, t } = useContext(LanguageContext);
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`min-h-auto ${dark ? "bg-gray-900" : "bg-linear-to-br from-indigo-50 to-purple-50"} flex items-center justify-center py-40 transition `}>
      <div className="w-full max-w-2xl">
        <div className={`${dark ? "bg-gray-800 text-white" : "bg-white text-gray-900"} rounded-2xl shadow-2xl p-8 md:p-12 transition`}>
          <h1 className="text-5xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 text-center">
            {t.homeTitle}
          </h1>
          
          <p className={`${dark ? "text-gray-300" : "text-gray-600"} text-center text-lg mb-8`}>
            {t.currentLang}: <span className="font-bold text-indigo-600 text-xl">{lang === "tr" ? t.langNameTr : t.langNameEn}</span>
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => setLang("tr")}
              className={`${
                lang === "tr" 
                  ? "bg-indigo-600 text-white" 
                  : dark ? "bg-gray-700 text-gray-200 hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              } px-6 py-3 rounded-lg font-bold transition transform hover:scale-105`}
            >
              🇹🇷 {t.langNameTr}
            </button>
            <button 
              onClick={() => setLang("en")}
              className={`${
                lang === "en" 
                  ? "bg-indigo-600 text-white" 
                  : dark ? "bg-gray-700 text-gray-200 hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              } px-6 py-3 rounded-lg font-bold transition transform hover:scale-105`}
            >
              🇺🇸 {t.langNameEn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;