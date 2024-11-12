import { createContext } from "react";

const ContactsContext = createContext( {
   isLoadingContactsInfo: false,
   setIsLoadingContactsInfo: () => {},
   contacts: [],
   filteredContacts: [],
   groups: [],
   createNewContact: () => {},
   updateCurrentContact: () => {},
   deleteContactById: () => {},
   contactSearchTerm: "",
   setContactSearchTerm: () => {},
   isSearchingContacts: false,
   loadViewingContact: () => {},
   viewingContact: {},
   viewingContactGroup: {},
   loadViewingContactHistory: () => {},
   viewingContactHistory: [],
   isLoadingViewingContactHistory: false,
   isLoadingViewingContact: false,
   notFoundViewingContact: false,
   loadEdittingContact: () => {},
   edittingContact: {},
   edittingContactGroup: {},
   isLoadingEdittingContact: false,
   notFoundEdittingContact: false,
} )

export default ContactsContext;