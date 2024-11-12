import axios from "axios";

const SERVER_URL = "http://localhost:9090";


/* ------------------------ Read ------------------------ */
// contacts

// @desc: GET All Contacts
// @route: GET http://localhost:9090/contacts
export const getContacts = () => {
   const url = `${SERVER_URL}/contacts`;
   return axios.get(url);
}

// @desc: GET Contacts with Contact-ID
// @route: GET http://localhost:9090/contacts/:contactId
export const getContact = (contactId) => {
   const url = `${SERVER_URL}/contacts/${contactId}`;
   return axios.get(url);
}

// groups
// @desc: GET All Groups
// @route: GET http://localhost:9090/groups
export const getGroups = () => {
   const url = `${SERVER_URL}/groups`;
   return axios.get(url);
}

// @desc: GET Group with groupId
// @route: GET http://localhost:9090/contacts/:groupId
export const getGroup = (groupId) => {
   const url = `${SERVER_URL}/groups/${groupId}`;
   return axios.get(url);
}

// @desc: GET History with historyId
// @route: GET http://localhost:9090/histories/:historyId
export const getHistory = (historyId) => {
   const url = `${SERVER_URL}/histories/${historyId}`;
   return axios.get(url);
}


/* ------------------------ Create ------------------------ */
// @desc: POST Contact with Contact-Object(JSON)
// @route: POST http://localhost:9090/contacts
export const createContact = (contact) => {
   const url = `${SERVER_URL}/contacts`;
   return axios.post(url, contact)
}


/* ------------------------ Update ------------------------ */
// @desc: PUT Contact with Contact-Object(JSON) and Contact-ID
// @route: PUT http://localhost:9090/contacts/:contactId
export const updateContact = (contact, contactId) => {
   const url = `${SERVER_URL}/contacts/${contactId}`;
   return axios.put(url, contact);
}

/* ------------------------ Delete ------------------------ */
// @desc: DELETE Contact with Contact-ID
// @route: DELETE http://localhost:9090/contacts/:contactId
export const deleteContact = (contactId) => {
   const url = `${SERVER_URL}/contacts/${contactId}`;
   return axios.delete(url);
}