import AppContextProvider from "@/context/ContextProvider";


const CommonLayout=({children})=>{
    return  <AppContextProvider>{children}</AppContextProvider>
};


export default CommonLayout;