import { useCallback, useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { produce } from 'immer';
import { confirmAlert } from 'react-confirm-alert';
import { Slide, ToastContainer, toast } from 'react-toastify';
// conponents
import { AllContacts, ViewContact, AddContact, EditContact, NotFound } from './pages';
import { HeaderNavbar, ContactDeletion } from './components';
// Contexts
import ContactsContext from './context/ContactsContext';
// services
import { getContacts, createContact, getGroups, updateContact, deleteContact, getGroup, getContact, getHistory } from './services/contactsServices';
// validation-schemas
import { contactSchema } from './validations/contactValidation';
// styles
import './styles/App.scss';
import { FaRegCheckCircle, FaUserEdit } from 'react-icons/fa';
import _ from 'lodash';




function App() {

  // states
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [groups, setGroups] = useState([]);
  const [isLoadingContactsInfo, setIsLoadingContactsInfo] = useState(false);
  const [contactSearchTerm, setContactSearchTerm] = useState("");
  const [isSearchingContacts, setIsSearchingContacts] = useState(false);

  const [viewingContact, setViewingContact] = useState({});
  const [viewingContactGroup, setViewingContactGroup] = useState({});
  const [isLoadingViewingContact, setIsLoadingViewingContact] = useState(false);
  const [notFoundViewingContact, setNotFoundViewingContact] = useState(false);
  const [viewingContactHistory, setViewingContactHistory] = useState([]);
  const [isLoadingViewingContactHistory, setIsLoadingViewingContactHistory] = useState(false);

  const [edittingContact, setEdittingContact] = useState({});
  const [edittingContactGroup, setEdittingContactGroup] = useState({});
  const [isLoadingEdittingContact, setIsLoadingEdittingContact] = useState(false);
  const [notFoundEdittingContact, setNotFoundEdittingContact] = useState(false);


  // react-router-dom
  const navigate = useNavigate();


  // callbacks
  // + load all contacts
  const loadContactsInfo = useCallback(async () => {
    try {
      setIsLoadingContactsInfo(true);
      const { status: contactsStatus, data: contactsData } = await getContacts();
      if (contactsStatus === 200) {
        setContacts(contactsData);
        // setFilteredContacts(contactsData);
      } else {
        throw new Error('Error - Fetch Contacts');
      }
      const { status: groupsStatus, data: groupsData } = await getGroups();
      if (groupsStatus === 200) {
        setGroups(groupsData);
      } else {
        throw new Error('Error - Fetch Contacts');
      }
    } catch (error) {
      console.warn(error);
    } finally {
      setIsLoadingContactsInfo(false);
    }
  }, []);

  // + load viewing contact
  const loadViewingContact = useCallback(async (contactId) => {
    try {
       setIsLoadingViewingContact(true);
       const { status: contactStatus, data: contactData } = await getContact(contactId);
       
       if (contactStatus === 200) {
          setViewingContact(contactData);
          if ( contactData.group !== "" && contactData.group !== undefined && contactData.group !== null &&  Number.isFinite(+contactData.group) ) {
             const { status: groupStatus, data: groupData } = await getGroup(+contactData.group);
             if (groupStatus === 200) {
                setViewingContactGroup(groupData);
                setIsLoadingViewingContact(false);
             }
          } else {
             setIsLoadingViewingContact(false);
          }
       }
    } catch (error) {
       console.warn(error);
       setIsLoadingViewingContact(false);
       if ( error.status === 404) {
          setNotFoundViewingContact(true);
          // navigate('/');
       }
    }
  }, []) 


  // load viwing contact history
  const loadViewingContactHistory = useCallback(async (contactId) => {
    
    try {

      setIsLoadingViewingContactHistory(true);

      const { status: historyStatus, data: historyData } = await getHistory(contactId)
      
      if (historyStatus === 200) {
        setViewingContactHistory(historyData);
      } else {
        setViewingContactHistory([]);
      }

      setIsLoadingViewingContactHistory(false);

    } catch (error) {
      console.warn(error); 
      setIsLoadingViewingContactHistory(false);
    }

  }, []);



 // + load editting contact
  const loadEdittingContact = useCallback(async (contactId) => {
    try {
      setIsLoadingEdittingContact(true);
      const { status: contactStatus, data: contactData } = await getContact(contactId);
      
      if (contactStatus === 200) {
          setEdittingContact(contactData);
          // if ( contactData.group !== "" && contactData.group !== undefined && contactData.group !== null &&  Number.isFinite(+contactData.group) ) {
          // }
          setIsLoadingEdittingContact(false);
      }
    } catch (error) {
      console.warn(error);
      setIsLoadingEdittingContact(false);
      if ( error.status === 404) {
          setNotFoundEdittingContact(true);
          // navigate('/');
      }
    }
  }, [])


  // * Create contact
  const createNewContact = useCallback(async (newContact) => {

    try {
      setIsLoadingContactsInfo(true);

      // validating newContact  --> Errors -> error.
      await contactSchema.validate( newContact, {abortEarly: false} );

      // sending to server
      const { status: contactStatus, data: contactData } = await createContact(newContact);

      if (contactStatus === 201) {
        navigate('/contacts');
        setContacts( produce(draft => {
          draft.push( contactData );
        }) );
        setIsLoadingContactsInfo(false);
        // show toast
        toast('The contact is added successfully', {icon: <FaRegCheckCircle />});
      }
    } catch (error) {
      console.warn(error); 
      setIsLoadingContactsInfo(false);
    }
  }, []);


  // * Edit(Update) contact
  const updateCurrentContact = useCallback(async (contact, contactId, openerPage) => {
    
    console.log(openerPage);

    try {
      setIsLoadingContactsInfo(true);
      // sending the updated-contact to the server
      const { status, data } = await updateContact(contact, contactId);

      if (status === 200) {
        // updating the DOM(states)
        setContacts( prevContacts => {
          const newContacts = [...prevContacts];
          const contactIndex = newContacts.findIndex(contact => contact.id === parseInt(contactId));
          newContacts[contactIndex] = {...data};
          return newContacts;
        } );
        setIsLoadingContactsInfo(false);
        if (openerPage === 'ViewContact') {
          navigate(`/contacts/${contactId}`);
        } else {
          navigate('/contacts');
        }
        // show toast
        toast('The contact is editted successfully', {icon: <FaUserEdit />});
      }

    } catch (error) {
      console.warn(error); 
      setIsLoadingContactsInfo(false);
    }

  }, [])

  
  
  // * Delete contact
  const handleDeleteContact = useCallback(async (contactId) => {

    // holding a backup of the 'contacts', so if the request to the server fails, this backup will be set back on 'contacts' state
    const contactsBackup = [...contacts];

    try {
      setIsLoadingContactsInfo(true);

      // updating the DOM (states)
      setContacts( produce(draft => {
        return draft.filter(contact => contact.id !== contactId);
      }) )

      // updating the server
      const { status } = await deleteContact(contactId);

      // if the request fails, we set back the 'contactsBackup'
      if (status !== 200) {
        setContacts(contactsBackup);
      }
      
      setIsLoadingContactsInfo(false);
    } catch (error) {
      console.warn(error);
      setContacts(contactsBackup);
      setIsLoadingContactsInfo(false);
    }
  }, [contacts, deleteContact])

  const deleteContactById = useCallback((contactId) => {
    confirmAlert(
      {
        customUI: ({onClose}) => {
          return (
            <>
              <ContactDeletion onClose={onClose} handleDeleteContact={handleDeleteContact} contactId={contactId} />
            </>
          )
        }
      }
    )
  }, [])
  

  // * search contact
  const setNewFilteredContacts = _.debounce(() => {
    setFilteredContacts( produce(draft => {
      return contacts.filter(contact => contact.fullname.toLowerCase().includes(contactSearchTerm.toLowerCase()));
    }) ); 
    setIsSearchingContacts(false);   
  }, 300);


  
  // * load contacts(initial loading)
  useEffect(() => {
    loadContactsInfo();
  }, [])

  // * change search-term -> change filteredContacts
  useEffect(() => {
    setIsSearchingContacts(true);
    setNewFilteredContacts();
  }, [contactSearchTerm, contacts])



  return (
    <>
      <HelmetProvider>
        <ContactsContext.Provider
          value={ {
            isLoadingContactsInfo,
            setIsLoadingContactsInfo,
            contacts,
            filteredContacts,
            groups,
            createNewContact,
            updateCurrentContact,
            deleteContactById,
            contactSearchTerm,
            setContactSearchTerm,
            isSearchingContacts,
            loadViewingContact,
            viewingContact,
            viewingContactGroup,
            loadViewingContactHistory,
            viewingContactHistory,
            isLoadingViewingContactHistory,
            isLoadingViewingContact,
            notFoundViewingContact,
            loadEdittingContact,
            edittingContact,
            edittingContactGroup,
            isLoadingEdittingContact,
            notFoundEdittingContact
          } }
        >
          <header className='main-header d-flex align-items-center'>
            <HeaderNavbar />
          </header>
          <main className='main container-fluid cont'>
            <Routes>
              <Route path='/' element={ <Navigate to='/contacts' /> } />
              <Route path='/contacts' >
                <Route index element={ <AllContacts /> } />
                <Route path=':contactId' element={ <ViewContact /> } />
                <Route path='add' element={ <AddContact /> } />
                <Route path='edit/:contactId' element={ <EditContact /> } />
              </Route>
              <Route path='*' element={ <NotFound /> } />
            </Routes>
            <div className='main__bg bg'>
              <div className='main__bg__inner bg__inner' >
                <svg className="main__bg__svg" aria-hidden='true'><clipPath id='main__bg__svg' clipPathUnits="objectBoundingBox"><path d="M0,0.364 C0,0.291,0.222,0.145,0.333,0.073 C0.5,0,0.667,0,0.833,0.073 C1,0.218,1,0.509,1,0.582 C1,0.655,0.778,1,0.722,1 C0.667,1,0.722,0.873,0.667,0.727 C0.667,0.655,0.444,0.509,0.389,0.509 C0.278,0.436,0,0.509,0,0.364"></path></clipPath></svg>
              </div>
            </div>
            { /* Toasts are shown here */ }
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Slide}
            />
          </main>
        </ContactsContext.Provider>
      </HelmetProvider>
    </>
  );
}

export default App;
