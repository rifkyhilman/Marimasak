import React from "react";
import axios from "axios";
import { createContext } from "react";

export const DataResepContext = createContext(null);

const Provider = ({children}) => {

    // fungsi GET list data resep menggunakan axios
    const getListResep = async () => {
        const response = await axios.get('https://marimasak-api.vercel.app/api/list');
        return response.data.resep;
    };

    // fungsi GET detail data resep menggunakan axios
    const getDetailResep = async (id) => {
        const response = await axios.get('https://marimasak-api.vercel.app/api/detail/' + id);
        return response.data.resep;
    }
    
     // fungsi GET data resep sesuai kategori daerah menggunakan axios
    const getKategoriResep = async (daerah) => {
        const response = await axios.get('https://marimasak-api.vercel.app/api/kategori/' + daerah);
        return response.data.resep;
    }

    return (
        <DataResepContext.Provider value={{getListResep, getDetailResep, getKategoriResep}}>
                {children}
        </DataResepContext.Provider>
    )
}

export { Provider };