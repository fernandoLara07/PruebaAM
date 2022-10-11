import PropTypes from "prop-types";
import { FaBookmark,  FaUserPlus} from "react-icons/fa";
import { useState } from "react";
import { Modal } from '../components';

export const ModalButton = ({textValue, border, fav, add}) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  return (
    <div  className={`modalbutton_container ${ border }`}>
      <div onClick={onOpenModal} className="Iconspan">
        <button >
          {textValue}
        </button>
      </div>
      { open && <Modal onClick={(e)=>onCloseModal(e)}></Modal>}
      <span className="Iconspan">{fav && <FaBookmark />}</span>
      <span className="Iconspan">{add && <FaUserPlus />}</span>
    </div>

    
  );
};


ModalButton.propTypes = {
  textValue: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  fav: PropTypes.bool,
  add: PropTypes.bool,
};