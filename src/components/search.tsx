import { Search } from "lucide-react";

export const InputSearch = () => {
  return (
    <div className="flex relative">
      <Search className="absolute left-2 top-[42%]" />
      <input
        type="text"
        placeholder="Buscar por nombre, raza y afiliación"
        className="w-96 h-9 rounded-md mt-4 pl-10 py-2"
      />
    </div>
  );
};
