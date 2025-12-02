import React from "react";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CardContext";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import useFakeData, { fakeProducts } from "../hooks/useFakeData";

export function Card() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const { t } = useContext(LanguageContext);
  const { dark } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);
  const [availableProducts, setAvailableProducts] = useState([]);

  const loadedProducts = useFakeData(fakeProducts, 1500);

  useEffect(() => {
    if (loadedProducts) {
      setAvailableProducts(loadedProducts);
      setIsLoading(false);
    }
  }, [loadedProducts]);

  return (
    <div className={`min-h-auto ${dark ? "bg-gray-900" : "bg-linear-to-br from-indigo-50 to-purple-50"} py-12 px-4 transition`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-12 text-center">
          {t.cartTitle}
        </h1>

        {isLoading ? (
          <div className="w-full mb-8 bg-gray-300 dark:bg-gray-700 text-white py-3 rounded-lg font-bold text-center animate-pulse">
            ⏳ {t.addProduct} {t.isLoading}
          </div>
        ) : (
          <div className="mb-8">
            <select
              onChange={(e) => {
                const product = availableProducts.find(p => p.id === parseInt(e.target.value));
                if (product) {
                  addToCart({ ...product, cartId: Date.now() });
                  e.target.value = "";
                }
              }}
              className={`w-full mb-4 p-3 rounded-lg font-semibold border-2 transition ${dark ? "bg-gray-800 text-white border-indigo-600" : "bg-white text-gray-800 border-indigo-300"}`}
            >
              <option value="">{t.selectProduct}</option>
              {availableProducts.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name} - ${product.price}
                </option>
              ))}
            </select>
            <div className="bg-linear-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-bold text-center hover:shadow-lg transition">
              ✅ {t.productsLoaded}: {availableProducts.length}
            </div>
          </div>
        )}

        {cart.length === 0 ? (
          <div className={`${dark ? "bg-gray-800 text-white" : "bg-white"} rounded-2xl shadow-xl p-12 text-center transition`}>
            <p className={`${dark ? "text-gray-300" : "text-gray-600"} text-xl`}>{t.emptyCart}</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {cart.map((item, index) => (
              <div key={item.id} className={`${dark ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:shadow-2xl"} rounded-xl shadow-lg p-6 flex justify-between items-center transition`}>
                <div className="flex items-center gap-4 flex-1">
                  <span className={`text-2xl font-bold ${dark ? "bg-indigo-900 text-indigo-200" : "bg-indigo-100 text-indigo-600"} rounded-full w-12 h-12 flex items-center justify-center`}>{index + 1}</span>
                  <div>
                    <p className={`text-xl font-semibold ${dark ? "text-white" : "text-gray-800"}`}>{item.name}</p>
                    <p className={`${dark ? "text-gray-400" : "text-gray-500"} text-sm`}>{t.productId}: {item.id}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold transition transform hover:scale-105"
                >
                  {t.delete}
                </button>
              </div>
            ))}
            <div className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-xl shadow-xl p-6 mt-8 text-white">
              <p className="text-lg font-semibold">{t.totalItems}: <span className="text-2xl font-bold">{cart.length}</span></p>
              <button className="w-full mt-4 bg-white text-indigo-600 py-3 rounded-lg font-bold hover:bg-indigo-50 transition">
                {t.buy}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Card;