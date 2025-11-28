import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

export function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { dark, toggleDark } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);

  return (
    <nav className={`${dark ? "bg-gray-900 text-white" : "bg-linear-to-r from-indigo-600 to-purple-600 text-white"} shadow-lg sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex gap-6 font-semibold">
            <Link to="/" className="hover:text-indigo-200 transition">🏠 {t.home}</Link>
            <Link to="/cart" className="hover:text-indigo-200 transition">🛒 {t.cart}</Link>
            <Link to="/dashboard" className="hover:text-indigo-200 transition">📊 {t.dashboard}</Link>
          </div>

          <div className="flex gap-4 items-center flex-wrap">
            {user ? (
              <>
                <span className="text-sm font-medium">{t.welcome}, <span className="font-bold">{user.name}</span></span>
                <button onClick={logout} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold transition shadow-md">
                  {t.logout}
                </button>
              </>
            ) : (
              <Link to="/login" className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition">
                {t.login}
              </Link>
            )}

            <button onClick={toggleDark} className="bg-opacity-20 bg-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-30 transition">
              {dark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;