import React from "react";
import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const translations = {
  tr: {
    // Navbar
    home: "Ana Sayfa",
    cart: "Sepet",
    dashboard: "İstatistikler",
    welcome: "Hoş geldin",
    logout: "Çıkış",
    login: "Giriş",
    theme: "Tema",

    // Home Page
    homeTitle: "Hoş Geldiniz",
    currentLang: "Mevcut Dil",
    langNameTr: "Türkçe",
    langNameEn: "English",

    // Login Page
    loginTitle: "Giriş Yap",
    loginSubtitle: "Hesabınıza Giriş Yapın",
    username: "Kullanıcı Adı",
    password: "Şifre",
    loginBtn: "Giriş Yap",
    noAccount: "Henüz hesabınız yok mu?",
    signup: "Kayıt Ol",
    usernameRequired: "Kullanıcı adı gerekli",
    passwordRequired: "Şifre gerekli",

    // Dashboard
    dashboardTitle: "Pano",
    profile: "👤 Profil Bilgileri",
    profileUsername: "Kullanıcı Adı",
    notLogged: "Giriş Yapınız",
    secure: "Hesabınız güvenli ve etkin",
    device: "📱 Cihaz Bilgileri",
    width: "Ekran Genişliği",
    height: "Ekran Yüksekliği",
    stats: "📊 İstatistikler",
    totalOps: "Toplam İşlem",
    activeProjects: "Aktif Projeler",
    successRate: "Başarı Oranı",

    // Cart Page
    cartTitle: "🛒 Alışveriş Sepeti",
    addProduct: "➕ Ürün Ekle",
    emptyCart: "Sepetiniz boş. Ürün ekleyin!",
    totalItems: "Toplam Ürün",
    buy: "💳 Satın Al",
    delete: "✕ Sil",
    productId: "Ürün ID",
    selectProduct: "📦 Ürün Seçin",
    productsLoaded: " Ürünler Yüklendi",
    isLoading: "yükleniyor..."
  },
  en: {
    // Navbar
    home: "Home",
    cart: "Cart",
    dashboard: "Dashboard",
    welcome: "Welcome",
    logout: "Exit",
    login: "Login",
    theme: "Theme",

    // Home Page
    homeTitle: "Welcome",
    currentLang: "Current Language",
    langNameTr: "Turkish",
    langNameEn: "English",

    // Login Page
    loginTitle: "Login",
    loginSubtitle: "Sign in to your account",
    username: "Username",
    password: "Password",
    loginBtn: "Login",
    noAccount: "Don't have an account?",
    signup: "Sign Up",
    usernameRequired: "Username is required",
    passwordRequired: "Password is required",

    // Dashboard
    dashboardTitle: "Dashboard",
    profile: "👤 Profile Information",
    profileUsername: "Username",
    notLogged: "Please Login",
    secure: "Your account is secure and active",
    device: "📱 Device Information",
    width: "Screen Width",
    height: "Screen Height",
    stats: "📊 Statistics",
    totalOps: "Total Operations",
    activeProjects: "Active Projects",
    successRate: "Success Rate",

    // Cart Page
    cartTitle: "🛒 Shopping Cart",
    addProduct: "➕ Add Product",
    emptyCart: "Your cart is empty. Add a product!",
    totalItems: "Total Items",
    buy: "💳 Buy",
    delete: "✕ Delete",
    productId: "Product ID",
    selectProduct: "📦 Select Product",
    productsLoaded: "Products Loaded",
    isLoading: "loading..."
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("tr");

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}
export default LanguageProvider;