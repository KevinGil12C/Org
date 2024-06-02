import "./Equipos.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props)=>{
    //Destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos;

    const { colaboradores, eliminarColaborador, actualizarColor, like  } = props

    const obj = { backgroundColor:hexToRgba(colorPrimario, 0.17)}
    const estiloTitulo = { borderColor:colorPrimario}

    return <>
        { 
        colaboradores.length > 0 && 
        <section className="equipo" style={ obj }>
            <input
                className="input-color"
                type="color"
                value={hexToRgba(colorPrimario, 0.17)}
                onChange={ (e) => {
                    actualizarColor(e.target.value, id)
                }}
            />
            <h3 style={ estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                
                {
                    colaboradores.map( (colaborador, index) => <Colaborador 
                    datos = {colaborador} 
                    key= {index} 
                    colorPrimario = {colorPrimario}
                    eliminarColaborador = {eliminarColaborador}
                    like = {like}
                    />)
                }
            </div>
        </section>
        }
    </>
}

export default Equipo