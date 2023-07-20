import { useState } from "react";
import axios from "axios";
import Contenedor from "./Contenedor";
import SubmitButton from "./SubmitButton";
import ProductList from "./ProductList";
import { Product } from "./ProductCard";

const App = () => {
  const [purpose, setPurpose] = useState("");
  const [maxPrice, setMaxPrice] = useState(-1);
  const [formFactor, setFormFactor] = useState("PC");
  const [isLoading, setIsLoading] = useState(false);

  const [productos, setProductos] = useState<Product[]>([]);

  const getProducts = async () => {
    setIsLoading(true);
    setProductos([]);

    const opt = {
      precio_max: maxPrice,
      tipo: ["edicion", "juegos"].includes(purpose) ? "SSD" : "HDD",
      formFactor,
    };
    console.log("Consultando recomendacion", opt);
    // basado en las respuestas proporcionadas
    const response = await axios.get(
      "https://scraping.andresgaibor.trade/api/recomendacion",
      {
        params: opt,
      }
    );

    const { data } = response as { data: { productos: Product[] } };

    setIsLoading(false);
    setProductos(data.productos);

    console.log(data);
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    void getProducts();
  };

  return (
    <Contenedor>
      <form>
        <Radio
          pregunta="¿Cual es tu presupuesto?"
          opciones={[
            { value: 50, label: "Menos de 50" },
            { value: 100, label: "Entre 50 y 100" },
            { value: 500, label: "Mas de 100" },
            { value: -1, label: "No importa" },
          ]}
          onOptionChange={(e) => setMaxPrice(Number(e.target.value))}
          selectedValue={maxPrice}
        />

        <Radio
          pregunta="¿Que tipo de computador tienes?"
          opciones={[
            { value: "Laptop", label: "Laptop" },
            { value: "PC", label: "Escritorio" },
          ]}
          onOptionChange={(e) => setFormFactor(e.target.value)}
          selectedValue={formFactor}
        />

        <Radio
          pregunta="Para que lo necesitas?"
          opciones={[
            { value: "ofimatica", label: "Para trabajo de ofimatica" },
            { value: "media", label: "Para almacenar archivos o peliculas" },
            { value: "edicion", label: "Para edicion de video o fotografia" },
            { value: "juegos", label: "Para jugar" },
          ]}
          onOptionChange={(e) => setPurpose(e.target.value)}
          selectedValue={purpose}
        />

        <SubmitButton onClick={handleSearch} isLoading={isLoading} />
      </form>
      <ProductList productos={productos} />
    </Contenedor>
  );
};
interface RadioProps {
  pregunta: string;
  opciones: { value: number | string; label: string }[];
  onOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedValue: number | string;
}

const Radio = ({
  pregunta,
  opciones,
  selectedValue,
  onOptionChange,
}: RadioProps) => {
  return (
    <>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        {pregunta}
      </h3>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {opciones.map(({ label, value }, i) => (
          <li
            key={i}
            className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
          >
            <div className="flex items-center pl-3">
              <input
                id={`${label}-${i}`}
                type="radio"
                onChange={onOptionChange}
                checked={selectedValue === value}
                value={value}
                name={pregunta}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor={`${label}-${i}`}
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {label}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default App;
