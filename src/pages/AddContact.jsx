import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
// contexts
import ContactsContext from "../context/ContactsContext";
// components
import { AddContactForm } from "../components/pages";
// react-icons
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
// styles
import "../styles/AddContact.scss";





const AddContact = () => {
   // contexts
   const { groups, createNewContact } = useContext(ContactsContext);



   return (
      <>
         <Helmet>
            <title>Contacts | Add</title>
         </Helmet>
         <section className="main__inner">

            <h2 className="page-title">
               Add Contact
            </h2>

            <div className="addcontact-form-wrapper">

               <div className="addcontact-form-wrapper__inner">

                  <div className="addcontact-form-wrapper__inner__form-cont">

                     <AddContactForm />

                  </div>

                  <div className="addcontact-form__group addcontact-form__group--btns-cont m-0">

                     <Link to='/' className="addcontact-form__cancel-btn ms-auto" >
                        <span className="d-inline-flex align-items-center" >
                           <IoArrowBack />
                        </span>
                        <span className="d-inline-flex align-items-center" >
                           Cancel
                        </span>
                     </Link>

                     <button
                        type="submit"
                        form="add-contact-form"
                        className="addcontact-form__submit-btn"
                     >
                        <span className="d-inline-flex align-items-center" >
                           Add
                        </span>
                        <span>
                           <IoIosAddCircleOutline />
                        </span>
                     </button>
                     
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default AddContact;
