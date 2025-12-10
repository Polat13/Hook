import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWindowSize } from "../store/slices/uiSlice";
import { selectUser, selectIsDark, selectWindowSize } from "../store/selectors";
import useTranslation from "../hooks/useTranslation";

export function Dashboard() {
  const user = useSelector(selectUser);
  const isDark = useSelector(selectIsDark);
  const windowSize = useSelector(selectWindowSize);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const t = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      }));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <div className={`page-scrollable ${isDark ? "bg-gray-900" : "bg-linear-to-br from-indigo-50 to-purple-50"} py-12 px-4 transition`}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-12 text-center">
          {t.dashboard.dashboardTitle}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`${isDark ? "bg-gray-800 text-white border-indigo-500" : "bg-white text-gray-900"} rounded-2xl shadow-xl p-8 border-l-4 border-indigo-600 hover:shadow-2xl transition`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-indigo-300" : "text-gray-800"}`}>{t.dashboard.profile}</h2>
            <p className={`${isDark ? "text-gray-200" : "text-gray-600"} text-lg`}>
              {t.dashboard.profileUsername}: <span className={`font-bold ${isDark ? "text-indigo-300" : "text-indigo-600"}`}>{user?.username || t.dashboard.notLogged}</span>
            </p>
            <p className={`${isDark ? "text-gray-300" : "text-gray-700"} text-lg mt-3`}>
              {t.dashboard.password}: <span className={`font-bold ${isDark ? "text-indigo-300" : "text-indigo-600"}`}>{user?.password ? (showPassword ? user.password : "•".repeat(user.password.length)) : t.dashboard.notLogged}</span>
              {user?.password && (
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className={`ml-3 px-3 py-1 rounded-lg font-semibold transition ${isDark ? "bg-indigo-900 text-indigo-200 hover:bg-indigo-800" : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"}`}
                >
                  {showPassword ? `👁️ ${t.dashboard.hidePassword}` : `👁️ ${t.dashboard.showPassword}`}
                </button>
              )}
            </p>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600 opacity-70"} text-sm mt-3`}>{t.dashboard.secure}</p>
          </div>

          <div className={`${isDark ? "bg-gray-800 text-white border-purple-500" : "bg-white text-gray-900"} rounded-2xl shadow-xl p-8 border-l-4 border-purple-600 hover:shadow-2xl transition`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-purple-300" : "text-gray-800"}`}>{t.dashboard.device}</h2>
            <p className={`${isDark ? "text-gray-200" : "text-gray-600"} text-lg`}>
              {t.dashboard.width}: <span className={`font-bold ${isDark ? "text-purple-300" : "text-purple-600"}`}>{windowSize.width}px</span>
            </p>
            <p className={`${isDark ? "text-gray-300" : "text-gray-600"} text-sm mt-2`}>
              {t.dashboard.height}: <span className={`font-semibold ${isDark ? "text-purple-200" : ""}`}>{windowSize.height}px</span>
            </p>
          </div>
        </div>

        <div className={`${isDark ? "bg-gray-800 text-white" : "bg-white"} rounded-2xl shadow-xl p-8 mt-8 transition`}>
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? "text-gray-100" : "text-gray-800"}`}>{t.dashboard.stats}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className={`text-center p-4 ${isDark ? "bg-indigo-900 bg-opacity-40" : "bg-indigo-50"} rounded-lg hover:shadow-lg transition`}>
              <p className="text-3xl font-bold text-indigo-600">12</p>
              <p className={`${isDark ? "text-gray-300" : "text-gray-600"} text-sm mt-2`}>{t.dashboard.totalOps}</p>
            </div>
            <div className={`text-center p-4 ${isDark ? "bg-purple-900 bg-opacity-40" : "bg-purple-50"} rounded-lg hover:shadow-lg transition`}>
              <p className="text-3xl font-bold text-purple-600">4</p>
              <p className={`${isDark ? "text-gray-300" : "text-gray-600"} text-sm mt-2`}>{t.dashboard.activeProjects}</p>
            </div>
            <div className={`text-center p-4 ${isDark ? "bg-green-900 bg-opacity-40" : "bg-green-50"} rounded-lg hover:shadow-lg transition`}>
              <p className="text-3xl font-bold text-green-600">98%</p>
              <p className={`${isDark ? "text-gray-300" : "text-gray-600"} text-sm mt-2`}>{t.dashboard.successRate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;