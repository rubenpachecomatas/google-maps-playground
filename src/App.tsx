import "./App.css";
import { useLoadScript } from "@react-google-maps/api"
import AutoComplete from "./components/autocomplete";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <div className="flex flex-col items-center gap-5">
    <h1 className="text-2xl font-bold text-white px-2 bg-gradient-to-r from-green-500 to-green-700 w-fit">Maps playground!</h1>
    <AutoComplete />
  </div>;
}

export default App;
