import { useCallback, useContext, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Contact } from "../components";
// contexts
import ContactsContext from "../context/ContactsContext";
// components
import { AllContactsSkeleton, SearchContactSpinner } from "../components/loading";
// react-icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// styles
import '../styles/AllContacts.scss';



const AllContacts = () => {

   // contexts
   const { isLoadingContactsInfo, contacts , filteredContacts, isSearchingContacts} = useContext( ContactsContext );

   // states
   const [ isContactsContTop, setIsContactsContTop ] = useState(true);
   const [ isContactsContBottom, setIsContactsContBottom ] = useState(false);

   // refs
   const contactsContRef = useRef(null);



   // contacts-cont: scroll to top/bottom controllers
   const scrollContactsContToTop = useCallback(() => {
      contactsContRef.current.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
      setIsContactsContTop(true);
      setIsContactsContBottom(false);
   }, [contactsContRef])

   const scrollContactsContToBottom = useCallback(() => {
      contactsContRef.current.scrollTo({
         top: (contactsContRef.current.scrollHeight - contactsContRef.current.offsetHeight),
         behavior: 'smooth',
      })
      setIsContactsContTop(false);
      setIsContactsContBottom(true);
   }, [contactsContRef])



   return (
      <>
         <Helmet>
            <title>
               Contacts
            </title>
         </Helmet>

         <section className="main__inner">

            <div className="page-title" >
               <h2 >
                  All Contacts
               </h2>
               <div>
                  <button onClick={ scrollContactsContToTop } type="button" className="page-title__scroll-btn" disabled={ isContactsContTop } >
                     <IoIosArrowUp />
                  </button>
                  <button onClick={ scrollContactsContToBottom } type="button" className="page-title__scroll-btn" disabled={ isContactsContBottom } >
                     <IoIosArrowDown />
                  </button>
               </div>
            </div>

            <div ref={ contactsContRef } className="all-contacts-cont" >
               <div className="all-contacts-cont__contacts-wrapper" >
                 {

                    (isLoadingContactsInfo) ? (

                        <AllContactsSkeleton />

                    ) : (contacts.length > 0) ? (
                     
                        (isSearchingContacts) ? (
                           
                           <SearchContactSpinner />

                        ) : (

                           filteredContacts.map((contact, i) => {
                              return (
                                 <Contact key={ i } id={ contact.id } fullname={ contact.fullname } phone={ contact.phone } avatar={ contact.avatar } email={ contact.email } homeAddress={ contact.home_address } job={ contact.job } group={ contact.group } isFavourite={ contact.isFavourite } />
                              )
                           })
                           
                        )

                    ) : (

                        <h2>
                           There is no any contact
                        </h2>

                    )

                 }
               </div>
               
            </div>

         </section>
      </>
   );
}
 
export default AllContacts;