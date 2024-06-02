import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props)=>{

    //Estado - hooks
    //useState

    const manejarClick = ()=>{
        console.log("Mostar/Ocultar elemento");
    }
    return <section className="orgSection">
        <h3 className="titulo">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>

    </section>
}

export default MiOrg