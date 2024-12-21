import React, { useContext } from "react";
import Sor from "./Sor";
import  { AdatContext } from "../context/AdatContext";

export default function Tablazat(){
    
    const {bejegyzesLista}=useContext(AdatContext);

    return(
        <>
        <table className="table table-hover table-bordered table-striped">
        <thead>
        <tr>
        <th>tevekenyseg</th>
        <th>osztaly</th>
        <th>pontszam</th>
        <th>allapot</th>
        </tr>
        </thead>
        <tbody>
        {bejegyzesLista.map((element)=>{
        return <Sor adat={element} key={element.id}/>}
        )}
        </tbody>
        </table>
        </>
    );
}