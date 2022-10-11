import { CharacterGrid, DropdownButton, ModalButton } from "./components";
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
  const matches = useMediaQuery('(min-width:950px)');
  return (
    <div className="howardsApp">
      <div className="header">
        <div className="nav">
         { matches &&
           <div className="navrow">
            <DropdownButton  textValue="favoritos" fav={true}  border="BottomLeft" />
            
            <ModalButton textValue="agregar" add={true}  border="BottomRight" />
          </div>
         }
        </div>
        

        <div className="titles">
          <p className="pageTitle">Harry Potter</p>
          <p className="InstructionTitle">Selecciona tu filtro</p>
        </div>
        
      </div>
      <div className="gridBody" >
        <CharacterGrid />
      </div>
      { !matches &&
        <div className="nav">
            <div className="navrow">
              <DropdownButton  textValue="favoritos" fav={true}  border="TopLeft" />
              
              <ModalButton textValue="agregar" add={true}  border="TopRight" />
            </div>
          </div>
         }
    </div>
  );
}

export default App;
