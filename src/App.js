import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {

  const [mostrarFormulario, acutalizarMostrar] = useState(false);  
  const [colaboradores, actualizarColaboradores] = useState([ 
  {
    id: uuid(),
    equipo: "Front End",
    puesto: "Instructor",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    puesto: "Sherpa",
    foto: "https://avatars.githubusercontent.com/u/8755301?v=4",
    nombre: "Jesus Guzman",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Data Science",
    puesto: "Data scientist",
    foto: "https://i.gifer.com/UFoP.gif",
    nombre: "Eliot Alderson",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Devops",
    puesto: "Instructor",
    foto: "https://i.pinimg.com/originals/b9/60/f8/b960f84ec0b6177ae5667b1fd3866631.jpg",
    nombre: "Emmet Brown",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    puesto: "Instructor",
    foto: "https://s3.us-east-1.amazonaws.com/contents.newzenler.com/417/users/417.5d297cf474775/l-snapshot-20180315205447266.png",
    nombre: "Alejandro Taboada",
    fav: true
  },

])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    }
    ,
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    }
    ,
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    }
    ,
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    }
    ,
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    }
    ,
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  const cambiarMostrar = ()=>{
    acutalizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) =>{
    //console.log("Nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id)=>{
    //console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter( (colaborador) => colaborador.id !==id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) =>{
    //console.log("Actuazliar color",color, id);
    const equiposActualizados = equipos.map( (equipo) =>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }


  //Crear equipo
  const crearEquipo = (nuevoEquipo)=>{
    //console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id:uuid() }])
  }

  //like
  const like = (id) =>{
    const colaboradoresActualizados = colaboradores.map( (colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }


  return (
    <div className="App">
      <div>
        <Header/>
        { 
          mostrarFormulario && <Formulario 
          equipos = {equipos.map( (equipo)=> equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo = {crearEquipo}
          />
        }
        
        
        <MiOrg cambiarMostrar = { cambiarMostrar }/>
        
        {
          equipos.map( (equipo)=> <Equipo 
          datos = {equipo} 
          key = {equipo.titulo}
          colaboradores = {colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador = {eliminarColaborador}
          actualizarColor = {actualizarColor}
          like = {like}
          />)
        }
        <Footer/>
      </div>
    </div>
  );
}

export default App; 
