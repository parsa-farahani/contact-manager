import PropTypes from "prop-types";



const ContactDeletion = (props) => {

   // props
   const { onClose, handleDeleteContact, contactId } = props;


   return (
      <div className="contact-deletion-alert" >
         <div className='contact-deletion-alert_inner' >
         <h1 className="contact-deletion-alert__title" >
            Contact Deletion
         </h1>
         <p className="contact-deletion-alert__text" >
            Are you sure to delete the contact ' contact name ' ?
         </p>
         <div className="contact-deletion-alert__btns-cont" >
            <button
               onClick={ onClose }
               type="button"
               className="contact-deletion-alert__btns-cont__btn contact-deletion-alert__btns-cont__btn--no"
            >
               No
            </button>
            <button
               onClick={
                  () => {
                     handleDeleteContact(contactId);
                     onClose();
                  } 
               }
               type="button"
               className="contact-deletion-alert__btns-cont__btn contact-deletion-alert__btns-cont__btn--yes"
            >
               Yes
            </button>
         </div>
         </div>
      </div>
   )
}


ContactDeletion.propTypes = {
   onClose: PropTypes.func,
   handleDeleteContact: PropTypes.func,
   contactId: PropTypes.number,
}

 
export default ContactDeletion;