import { useContext, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// components
import { EditContactHeader, EditContactForm, NotFoundAlert } from "../components/pages";
import {Spinner} from '../components';
//contexts
import ContactsContext from "../context/ContactsContext";
// react-icons
import { IoArrowBack } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
// styles
import '../styles/EditContact.scss';



const EditContact = () => {

   // contexts
   const { loadEdittingContact, edittingContact, isLoadingEdittingContact, notFoundEdittingContact } = useContext(ContactsContext);



   // react-router-dom
   const location = useLocation();
   const { contactId } = useParams();
   // const navigate = useNavigate();


   // load editting-contact
   useEffect(() => {
      loadEdittingContact(contactId);
   }, [])



   return (
      <>
         <Helmet>
            <title>
               Contacts | Edit
            </title>
         </Helmet>

         <section className="main__inner">

            {
               (isLoadingEdittingContact) ? (

                  <div className="spinner-cont--fixed" >
                     <Spinner />
                  </div>

               ) : (Object.keys(edittingContact).length > 0) ? (

                  <div className="contact-edit">

                     <EditContactHeader avatar={edittingContact.avatar} fullname={edittingContact.fullname} isFavourite={edittingContact.isFavourite} />

                     <div className="contact-edit__details" >
                        <EditContactForm />
                     </div>

                     <div className="contact-edit__btns-cont m-0">
                        <div className="contact-edit__btns-cont__inner cont" >
                           <Link to={(location.state?.opener === 'ViewContact') ? (`/contacts/${edittingContact.id}`) : (`/contacts`)} className="addcontact-form__cancel-btn ms-auto" >
                              <span className="d-inline-flex align-items-center" >
                                 <IoArrowBack />
                              </span>
                              <span className="d-inline-flex align-items-center" >
                                 Cancel
                              </span>
                           </Link>
                           <button
                              type="submit"
                              form="edit-contact-form"
                              className="addcontact-form__submit-btn"
                           >
                              <span>
                                 <FaCheck />
                              </span>
                              <span className="d-inline-flex align-items-center" >
                                 Apply Changes
                              </span>
                           </button>
                        </div>
                     </div>

                  </div>

               ) : (notFoundEdittingContact) ? (

                  <NotFoundAlert title="Not Found the user" />
                  
               ) : (

                  <NotFoundAlert title="Couldn't load the contact, please try again" />
               
               )
            }
         </section>
      </>
   );
}

export default EditContact;