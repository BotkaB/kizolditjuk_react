import React, { useState, useContext } from "react";
import  {AdatContext} from "../context/AdatContext";

export default function Urlap() {

    const { tevekenysegLista, postAdat, setBejegyzesLista } =useContext(AdatContext);

    const osztalyLista = ["1a", "1b", "2a", "2b"];

    const [osztaly, setOsztaly] = useState("valassz");
    const [tevekenyseg, setTevekenyseg] = useState("valassz");
    function kuld(event) {
        event.preventDefault();
        let adat = {
            tevekenyseg_id: tevekenyseg,
            osztaly_nev: osztaly,
            allapot: 0,
        };

        if(!(osztaly==="valassz"||tevekenyseg==="valassz")){
            postAdat(adat,"api/bejegyzesek",setBejegyzesLista)
        }else{
            console.log("hibás adatok");
        }
    }
    return (

  <form className="mb-3" onSubmit={kuld}>
    <select className="form-select"
    id="osztaly"
    name="osztaly"
    onChange={(event)=>{
        setOsztaly(event.target.value)
    }}
    >
       
  <option value="valassz">Válassz osztályt!</option>
  {osztalyLista.map((element, index)=>{
    return (
        <option key={index} value={element}>{element}</option>
    );
  })}
</select>
<select className="form-select"
    id="tevekenyseg"
    name="tevekenyseg"
    onChange={(event)=>{
        setTevekenyseg(event.target.value)
    }}
    >
       
  <option value="valassz">Válassz tevékenységet!</option>
  {tevekenysegLista.map((element)=>{
    return (
        <option key={element.tevekenyseg_id} value={element.tevekenyseg_id}>{element.tevekenyseg_nev}</option>
    );
  })}
</select>

  <button type="submit" className="btn btn-primary" value="küld" id="submit">küld</button>
  
</form>
    );
}
