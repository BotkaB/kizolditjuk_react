import { createContext,  useState, useEffect } from "react";
import axios from "../api/axios";

export const AdatContext = createContext();

export const AdatProvider = ({ children }) => {

    const [bejegyzesLista, setBejegyzesLista] = useState([]);
    const [tevekenysegLista, setTevekenysegLista] = useState([]);


    const getLista = async (vegpont, callBack) => {
        const { data } = await axios.get(vegpont);
        callBack(data);
    }
    const postAdat = async ({ ...adat}, vegpont ) => {
        try {
            await axios.post(vegpont, adat);
            getLista("api/bejegyzesek", setBejegyzesLista);
        } catch (error) { console.log(error) }

    }

    useEffect(() => {
        getLista("api/bejegyzesek", setBejegyzesLista);
        getLista("api/tevekenysegek", setTevekenysegLista);
    }, []);

    return (
        <AdatContext.Provider
            value={{ bejegyzesLista, tevekenysegLista, postAdat }}>
            {children}
        </AdatContext.Provider>
    );
}


