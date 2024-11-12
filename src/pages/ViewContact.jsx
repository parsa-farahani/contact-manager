import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// context
import { ContactsContext } from "../context";

// components
import { ViewContactSkeleton } from '../components';
import { NotFoundAlert, ViewingContact } from "../components/pages";
// icons
import { VscDebugDisconnect } from "react-icons/vsc";
// styles
import '../styles/ViewContact.scss';



const ViewContact = () => {

   // context
   const { loadViewingContact, viewingContact, isLoadingViewingContact, notFoundViewingContact } = useContext( ContactsContext );

   // react-router-dom
   const { contactId } = useParams();


   // load the viewing-contact
   useEffect(() => {
      loadViewingContact(contactId);
   }, []);
   

   
   return (
      <>
         <Helmet>
            <title>
               Contacts | Info
            </title>
         </Helmet>

         <section className="main__inner">

            {
               (isLoadingViewingContact) ? (

                  <ViewContactSkeleton />

               ) : (Object.keys(viewingContact).length > 0) ? (

                  <ViewingContact />

               ) : (notFoundViewingContact) ? (

                  <NotFoundAlert title="Not Found the contact" />
                  
               ) : (
                  
                  <NotFoundAlert title="Couldn't load the contact, please try again" icon={<VscDebugDisconnect/>} />
                  
               )
            }

         </section>
      </>
   );
}
 
export default ViewContact;