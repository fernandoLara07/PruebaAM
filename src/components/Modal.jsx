import { FaRegTimesCircle } from "react-icons/fa";


export const Modal = ({onClick}) => {

  return (
    <div  className="modal_container " >
     <div className="container animate__animated animate__backInRight">
       <div className="row header"><h2>Agrega un personaje</h2> <span onClick={onClick}><FaRegTimesCircle /></span> </div>
       <div className="row ">
         <div className="col">
           <label htmlFor="">NOMBRE</label>
           <input type="text" />
         </div>
         <div className="col">
           <label htmlFor="">CUMPLEAÑOS</label>
           <input type="text" />
         </div>
       </div>
       <div className="row ">
         <div className="col">
           <label htmlFor="">COLOR DE OJOS</label>
           <input type="text" />
         </div>
         <div className="col">
           <label htmlFor="">COLOR DE PELO</label>
           <input type="text" />
         </div>
       </div>
        <div className="row">
          <div className="radiocol">
            <label htmlFor="">GÉNERO</label>
            <div>
              <input type="radio" checked  name="genero" value="Mujer"/><label htmlFor="">Mujer</label>
              <input type="radio" name="genero" value="Hombre"/><label htmlFor="">Hombre</label>
            </div>
          </div>
          <div className="radiocol">
            <label htmlFor="">POSICIÓN</label>
            <div>
              <input type="radio" checked name="posicion" value="Estudiante"/><label htmlFor="">Estudiante</label>
              <input type="radio" name="posicion" value="Staff"/><label htmlFor="">Staff</label>
            </div>
          </div>
        </div>
        <div className="imagerow">
          <label htmlFor="">FOTOGRAFIA (input type file)</label>
          <input type="file" name="" id="" />
        </div>
        <div className="button">
          <button onClick={onClick}>GUARDAR</button>
        </div>
     </div>
    </div>

    
  );
};
