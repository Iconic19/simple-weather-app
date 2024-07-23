import axios from "axios";
import "./App.css";
import "./Components/style/searchbar.css";
import { useState } from "react";
import Weather from "./Components/Weather";

function App() {
  const secretKey = import.meta.env.VITE_SECRET_KEY;
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [apiData, setApiData] = useState([]);
  const fetchingData = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&appid=${secretKey}
        `
      )
      .then((res) => {
        setLoading(false);
        setErr(false);
        setApiData(res);
      })
      .catch((err) => {
        setLoading(false);
        err ? setErr(true) : err;
      });
  };

  const handler = (e) => {
    setLoading(true);
    e.preventDefault();
    fetchingData(search);
    setSearch("");
  };
  console.log(err);
  return (
    <div>
      <form onSubmit={handler}>
        <input
          value={search}
          placeholder="Search City..."
          type="text"
          name="text"
          className="input rounded-lg mr-1"
          onChange={(e) => setSearch(e.target.value)}
        />
        <span>
          <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
            Search
          </button>
        </span>
      </form>

      {loading && !err ? (
        <div className="mt-[150px] flex-col gap-4 w-full flex items-center justify-center">
          <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full"></div>
        </div>
      ) : (
        <Weather data={apiData} err={err} />
      )}
    </div>
  );
}

export default App;
