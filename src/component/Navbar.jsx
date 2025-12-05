import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { toggleTheme } from "../store/slices/themeSlice";
import { selectUser, selectIsAuthenticated, selectIsDark, selectLanguage } from "../store/selectors";

export function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isDark = useSelector(selectIsDark);
  const lang = useSelector(selectLanguage);

  const translations = {
    TR: {
      home: "Ana Sayfa",
      cart: "Sepet",
      dashboard: "Kontrol Paneli",
      welcome: "Hoşgeldin",
      logout: "Çıkış Yap",
      login: "Giriş Yap",
    },
    EN: {
      home: "Home",
      cart: "Cart",
      dashboard: "Dashboard",
      welcome: "Welcome",
      logout: "Log Out",
      login: "Log In",
    },
  };

  const t = translations[lang] || translations.TR;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className={`${isDark ? "bg-gray-900 text-white" : "bg-linear-to-r from-indigo-600 to-purple-600 text-white"} shadow-lg sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex gap-6 font-semibold">
            <Link to="/" className="hover:text-indigo-200 transition">🏠 {t.home}</Link>
            <Link to="/cart" className="hover:text-indigo-200 transition">🛒 {t.cart}</Link>
            <Link to="/dashboard" className="hover:text-indigo-200 transition">📊 {t.dashboard}</Link>
          </div>

          <div className="flex gap-4 items-center flex-wrap">
            {isAuthenticated && user ? (
              <>
                <span className="text-sm font-medium">{t.welcome}, <span className="font-bold">{user.username}</span></span>
                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold transition shadow-md">
                  {t.logout}
                </button>
              </>
            ) : (
              <Link to="/login" className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition">
                {t.login}
              </Link>
            )}

            <button onClick={() => dispatch(toggleTheme())} className="bg-opacity-20 bg-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-30 transition">
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;