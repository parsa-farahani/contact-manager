import PropTypes from "prop-types";
// react-icons
import { RxCross2 } from "react-icons/rx";
// styles
import styles from '../../styles/Modal.module.scss';
import { useCallback, useEffect, useRef } from 'react';




const Modal = (props) => {

   // props
   const { children, isOpen, onClose } = props;

   // refs
   const modalRef = useRef(null);

   // callbacks
   const handleClickOutside = useCallback((e) => {
      if (modalRef.current && !modalRef.current.contains(e.target) ) {
         onClose();
      }
   }, [onClose, modalRef])


   // Effects
   useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      }
   }, [])



   // render
   if (!isOpen) {
      return null;
   }

   return (
      <div className={styles['modal-cont']} >
         <div ref={ modalRef } className={styles['modal-cont__inner']} >
            {
               children
            }
         </div>
         <button onClick={ onClose } type="button" aria-label='close modal' className={styles['modal-cont__close-btn']} >
            <span aria-hidden="true" >
               <RxCross2 />
            </span>
         </button>
      </div>
   );
}


Modal.propTypes = {
   children: PropTypes.node,
   isOpen: PropTypes.bool,
   onClose: PropTypes.func,
}

 
export default Modal;