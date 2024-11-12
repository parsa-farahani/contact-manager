import React, { useState, useContext, useCallback, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Portal } from "react-portal";
// context
import { ContactsContext } from "../../context";
// components
import { ViewingContactInfoTable } from ".";
import { Modal } from "../common";
// icons
import { MdEdit, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Spinner } from "../loading";
// lazy components
const ViewingContactHistory = lazy( () => import('../pages/ViewingContactHistory') );



const ViewingContact = () => {

   // context
   const { viewingContact, viewingContactGroup, loadViewingContactHistory, viewingContactHistory, isLoadingViewingContactHistory } = useContext(ContactsContext);
   

   // states
   const [ isAvatarModalOpen, setIsAvatarModalOpen ] = useState(false);
   const [ showHistory, setShowHistory ] = useState(false);


   // callbacks
   const handleLoadHistory = useCallback((e) => {
      setShowHistory( prevShowHistory => !prevShowHistory );
      loadViewingContactHistory(viewingContact.id);
   }, [])


   return (
      <div className="contact">
         
         <div className="contact__title-cont d-flex flex-column align-items-center justify-content-center gap-4" >
           
            <div onClick={ () => setIsAvatarModalOpen(true) } className="contact__title-cont__img-cont">
               <img src={ viewingContact.avatar || 'https://placehold.co/600x400/000000/FFF' } alt="avatar" className="contact__title-cont__img-cont__img" />
            </div>

            <h2 className="contact__title-cont__title d-flex align-items-center gap-3">

               { viewingContact.fullname }

               {
                  (viewingContact.isFavourite) ? (
                     <span className="favourite-mark contact__title-cont__title__favourite-mark" ></span>
                  ) : null
               }

               <div className="contact__edit" >
                  <Link to={ `/contacts/edit/${viewingContact.id}` } state={ {opener: 'ViewContact'} } className="main-btn contact__edit__btn " >
                     <span className="contact__edit__btn__inner" >
                        <MdEdit />
                     </span>
                  </Link>
               </div>
            </h2>
         </div>

         <div className="contact__details" >
            <ViewingContactInfoTable phone={viewingContact.phone} email={viewingContact.email} homeAddress={viewingContact.homeAddress} job={viewingContact.job} groupName={viewingContactGroup.name} />
         </div>

         <div className="pt-5 pb-3" >

            <button onClick={ handleLoadHistory } type="button" className="rounded-pill d-block mx-auto mb-3 py-1 ps-3 pe-2" style={{ backgroundColor: 'transparent', fontSize: 'clamp(.75rem, 1vw, .9rem)' }} >
               <span className="me-1" >
                  {
                     showHistory ? "Hide History" : "Show History"
                  }
               </span>
               <span style={{ fontSize: '1.2rem' }} >
                  {
                     showHistory ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
                  }
               </span>
            </button>

            {
               (!showHistory) ? (
                  null
               ) : (isLoadingViewingContactHistory) ? (

                  <div className="mt-2 d-flex align-items-center justify-content-center" >
                     <Spinner />
                  </div>
               
               ) : ( viewingContactHistory?.data?.length > 0  ) ? (
               
                  <Suspense fallback={<Spinner />} >
                     <ViewingContactHistory />
                  </Suspense>
               
               ) : (

                  <p>
                     This contact hasn't any history yet...
                  </p>

               )
            }
            
         </div>


         {/* modal for focusing on 'profile-photo(avatar)' */}
         <Portal node={document && document.getElementById('modal-root')} >
            <Modal isOpen={isAvatarModalOpen} onClose={ () => setIsAvatarModalOpen(false) } >
               <div className="contact__avatar-modal-img-cont" >
                  <img src={viewingContact.avatar} alt="avatar" width={200} height={200} className="contact__avatar-modal-img-cont__img" />
               </div>
            </Modal>
         </Portal>

      </div>
   );
}
 
export default ViewingContact;