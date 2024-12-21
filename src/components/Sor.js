import React from "react";

export default function Sor({adat}){

    return(
        <tr>
            <td>{adat.tevekenyseg_id}</td>
            <td>{adat.osztaly_nev}</td>
            <td>{adat.allapot}</td>
        </tr>
    )

}