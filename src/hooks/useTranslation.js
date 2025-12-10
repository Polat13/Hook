import { useSelector } from "react-redux";
import { selectLanguage } from "../store/selectors";
import trTranslations from "../translations/tr.json";
import enTranslations from "../translations/en.json";

/**
 * Custom hook to access translations based on current language
 * @returns {Object} Translation object for the current language
 */
export function useTranslation() {
    const lang = useSelector(selectLanguage);

    const translations = {
        TR: trTranslations,
        EN: enTranslations,
    };

    return translations[lang] || translations.TR;
}

export default useTranslation;
