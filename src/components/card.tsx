export const Card = () => {
  return (
    <div className=" overflow-hidden rounded-xl border-4 border-gray-950 w-80 h-80 bg-white flex flex-col gap-1 ">
      <div className="flex flex-row w-full h-full gap-1 justify-start items-center">
        {/* Imagen mas planeta */}
        <div className="bg-Vegetta w-44 h-64 bg-cover bg-center rounded-tr-full rounded-br-full relative top-3 p-5 -left-4" />

        <div className="bg-Goku bg-center w-24 h-52 bg-cover absolute ml-7 mt-7" />
        {/* Estadisticas */}
        <div className="w-12 h-36 relative flex flex-col justify-around items-center ml-6">
            <div className="bg-[#1667EA] w-32 h-6 rounded-md"> <p className="text-xl w-full text-center">Nombre</p></div>
          <div className="  bg-gradient-to-r from-[#9BCDFD] to-[#1476D3] h-4 w-20 flex-initial rounded-md">
            <p className="text-xs w-full text-center">Hola mundo</p>
          </div>
          <div className="  bg-gradient-to-r from-[#9BCDFD] to-[#1476D3] h-4 w-20 flex-initial rounded-md">
            <p className="text-xs w-full text-center">Hola mundo</p>
          </div>
          <div className="  bg-gradient-to-r from-[#9BCDFD] to-[#1476D3] h-4 w-20 flex-initial rounded-md">
            <p className="text-xs w-full text-center">Hola mundo</p>
          </div>
          <div className="  bg-gradient-to-r from-[#9BCDFD] to-[#1476D3] h-4 w-20 flex-initial rounded-md">
            <p className="text-xs w-full text-center">Hola mundo</p>
          </div>
          <div className="  bg-gradient-to-r from-[#9BCDFD] to-[#1476D3] h-4 w-20 flex-initial rounded-md">
            <p className="text-xs w-full text-center">Hola mundo</p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <button className="bg-[#1476D3] w-18 h-6 text-xs rounded-lg">Ver descripcion</button>
        <p className="text-xs"> Tranformaciones</p>
        
      </div>
    </div>
  );
};
