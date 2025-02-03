import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/products.json") 
      .then((response) => {
        console.log("Data fetched:", response.data); 
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="overflow-x-auto w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-gray-300 px-4 py-2">No</th>
              <th className="border border-gray-300 px-4 py-2">Nama</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Desc</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {products.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-4">Loading...</td>
              </tr>
            ) : (
              products.map((product, index) => (
                <tr key={product.id} className="hover:bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-black">{index + 1}</th>
                  <td className="border border-gray-300 px-4 py-2">{product.nama}</td>
                  <td className="border border-gray-300 px-4 py-2">Rp{product.harga}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.desc}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
