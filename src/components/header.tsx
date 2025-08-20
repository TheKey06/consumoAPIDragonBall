import { InputSearch } from "./search"  


export const Header = () =>{
    return (
        
        <div className="flex flex-col items-center justify-center py-0">
            <img src="/Header.png" alt="logo " className="w-[600px] h-[200px]"/>
            <InputSearch/>
        </div>

        

    )
}