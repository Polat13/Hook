import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

export function Login() {
useDocumentTitle("Giriş Yap");

  const { login } = useContext(AuthContext);
  const { t } = useContext(LanguageContext);
  const { dark } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleLogin = () => {
    setError("");
    if (!name.trim()) {
      setError(t.usernameRequired || "Kullanıcı adı gerekli");
      return;
    }
    if (!password.trim()) {
      setError(t.passwordRequired || "Şifre gerekli");
      return;
    }
    login(name, password);
    setName("");
    setPassword("");
    navigate("/");
  };

  return (
    <div className={`min-h-auto ${dark ? "bg-gray-900" : "bg-linear-to-br from-indigo-50 to-purple-50"} flex items-center justify-center py-12 px-4 transition`}>
      <div className="w-full max-w-md">
        <div className={`${dark ? "bg-gray-800 text-white" : "bg-white"} rounded-2xl shadow-2xl p-8 transition`}>
          <h1 className="text-4xl font-bold text-center bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            {t.loginTitle}
          </h1>
          <p className={`${dark ? "text-gray-300" : "text-gray-600"} text-center mb-8`}>{t.loginSubtitle}</p>

          <div className="space-y-4">
            <div>
              <label className={`block text-sm font-semibold ${dark ? "text-gray-200" : "text-gray-700"} mb-2`}>{t.username}</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.username}
                className={`w-full px-4 py-3 border-2 ${dark ? "bg-gray-700 border-gray-600 text-white focus:border-indigo-500" : "bg-white border-gray-300 text-gray-900 focus:border-indigo-600"} rounded-lg focus:outline-none transition`}
              />
            </div>
            <div>
              <label className={`block text-sm font-semibold ${dark ? "text-gray-200" : "text-gray-700"} mb-2`}>{t.password}</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                placeholder="•••••••••"
                className={`w-full px-4 py-3 border-2 ${dark ? "bg-gray-700 border-gray-600 text-white focus:border-indigo-500" : "bg-white border-gray-300 text-gray-900 focus:border-indigo-600"} rounded-lg focus:outline-none transition`}
              />
            </div>
          </div>

          {error && (
            <div className="mt-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
              <p className="font-semibold">⚠️ {error}</p>
            </div>
          )}

          <button 
            onClick={handleLogin}
            className="w-full mt-6 bg-linear-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105"
          >
            {t.loginBtn}
          </button>

          <p className={`text-center ${dark ? "text-gray-400" : "text-gray-600"} text-sm mt-4`}>
            {t.noAccount} <span className="text-indigo-600 font-bold">{t.signup}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;