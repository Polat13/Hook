import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../store/slices/languageSlice";
import { selectLanguage, selectIsDark } from "../store/selectors";

export function Home() {
  useDocumentTitle("Ana Sayfa");

  const dispatch = useDispatch();
  const lang = useSelector(selectLanguage);
  const isDark = useSelector(selectIsDark);

  const translations = {
    TR: {
      homeTitle: "Hoş Geldiniz",
      currentLang: "Aktif Dil",
      langNameTr: "Türkçe",
      langNameEn: "English",
    },
    EN: {
      homeTitle: "Welcome",
      currentLang: "Active Language",
      langNameTr: "Turkish",
      langNameEn: "English",
    },
  };

  const t = translations[lang] || translations.TR;

  return (
    <div className={`page-fixed ${isDark ? "bg-gray-900" : "bg-linear-to-br from-indigo-50 to-purple-50"} flex items-center justify-center transition`}>
      <div className="w-full max-w-2xl">
        <div className={`${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"} rounded-2xl shadow-2xl p-8 md:p-12 transition`}>
          <h1 className="text-5xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 text-center">
            {t.homeTitle}
          </h1>
          
          <p className={`${isDark ? "text-gray-300" : "text-gray-600"} text-center text-lg mb-8`}>
            {t.currentLang}: <span className="font-bold text-indigo-600 text-xl">{lang === "TR" ? t.langNameTr : t.langNameEn}</span>
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => dispatch(setLanguage("TR"))}
              className={`${
                lang === "TR" 
                  ? "bg-indigo-600 text-white" 
                  : isDark ? "bg-gray-700 text-gray-200 hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              } px-6 py-3 rounded-lg font-bold transition transform hover:scale-105`}
            >
              🇹🇷 {t.langNameTr}
            </button>
            <button 
              onClick={() => dispatch(setLanguage("EN"))}
              className={`${
                lang === "EN" 
                  ? "bg-indigo-600 text-white" 
                  : isDark ? "bg-gray-700 text-gray-200 hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
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