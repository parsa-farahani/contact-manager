import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// context
import { ContactsContext } from "../../context";
// validation schema
import { contactSchema } from "../../validations/contactValidation";



const AddContactForm = () => {

   // context
   const { groups, createNewContact } = useContext(ContactsContext);


   return (
      <Formik
         initialValues = {{
            fullname: '',
            avatar: '',
            phone: '',
            email: '',
            home_address: '',
            job: '',
            group: '',
         }}
         validationSchema = {contactSchema}
         onSubmit = {(values) => {
            createNewContact(values);
         }}
      >
         <Form
            id="add-contact-form"
            className="addcontact-form"
         >
            <div className="addcontact-form__group mb-3">
               <label
                  htmlFor="fullname"
                  className="addcontact-form__group__label"
               >
                  <span>Name</span>
               </label>
               <div className="addcontact-form__group__input-cont" >
                  <Field
                     id="fullname"
                     name="fullname"
                     type="text"
                     placeholder="e.g: Parsa Farahani"
                     className="addcontact-form__group__input"
                  />
                  <ErrorMessage name="fullname" >
                     {
                        msg => (
                           <div className="addcontact-form__group__error text-danger" >
                              <p>
                                 {
                                    msg
                                 }
                              </p>
                           </div>
                        )
                     }
                  </ErrorMessage>
               </div>
            </div>
            <div className="addcontact-form__group mb-3">
               <label
                  htmlFor="avatar"
                  className="addcontact-form__group__label"
               >
                  <span>Image URL</span>
               </label>
               <div className="addcontact-form__group__input-cont" >
                  <Field
                     id="avatar"
                     name="avatar"
                     type="text"
                     placeholder="e.g: https://example..."
                     className="addcontact-form__group__input"
                  />
                  <ErrorMessage name="avatar" >
                     {
                        msg => (
                           <div className="addcontact-form__group__error text-danger" >
                              <p>
                                 {
                                    msg
                                 }
                              </p>
                           </div>
                        )
                     }
                  </ErrorMessage>
               </div>
            </div>
            <div className="addcontact-form__group mb-3">
               <label
                  htmlFor="phone"
                  className="addcontact-form__group__label"
               >
                  <span>Phone</span>
               </label>
               <div className="addcontact-form__group__input-cont">
                  <Field
                     id="phone"
                     name="phone"
                     type="text"
                     placeholder="e.g: 9925564894"
                     className="addcontact-form__group__input"
                  />
                  <ErrorMessage name="phone" >
                     {
                        msg => (
                           <div className="addcontact-form__group__error text-danger" >
                              <p>
                                 {
                                    msg
                                 }
                              </p>
                           </div>
                        )
                     }
                  </ErrorMessage>
               </div>
            </div>
            <div className="addcontact-form__group mb-3">
               <label
                  htmlFor="email"
                  className="addcontact-form__group__label"
               >
                  <span>Email</span>
               </label>
               <div className="addcontact-form__group__input-cont">
                  <Field
                     id="email"
                     name="email"
                     type="text"
                     placeholder="e.g: example@gmail.com"
                     className="addcontact-form__group__input"
                  />
                  <ErrorMessage name="email" >
                     {
                        msg => (
                           <div className="addcontact-form__group__error text-danger" >
                              <p>
                                 {
                                    msg
                                 }
                              </p>
                           </div>
                        )
                     }
                  </ErrorMessage>
               </div>
            </div>
            <div className="addcontact-form__group mb-3">
               <label
                  htmlFor="home_address"
                  className="addcontact-form__group__label"
               >
                  <span>Home Address</span>
               </label>
               <div className="addcontact-form__group__input-cont">
                  <Field
                     id="home_address"
                     name="home_address"
                     type="text"
                     placeholder="e.g: "
                     className="addcontact-form__group__input"
                  />
                  <ErrorMessage name="home_address" >
                     {
                        msg => (
                           <div className="addcontact-form__group__error text-danger" >
                              <p>
                                 {
                                    msg
                                 }
                              </p>
                           </div>
                        )
                     }
                  </ErrorMessage>
               </div>
            </div>
            <div className="addcontact-form__group mb-3">
               <label
                  htmlFor="job"
                  className="addcontact-form__group__label"
               >
                  <span>Job</span>
               </label>
               <div className="addcontact-form__group__input-cont" >
                  <Field
                     id="job"
                     name="job"
                     type="text"
                     placeholder="e.g: cook"
                     className="addcontact-form__group__input"
                  />
                  <ErrorMessage name="job" >
                     {
                        msg => (
                           <div className="addcontact-form__group__error text-danger" >
                              <p>
                                 {
                                    msg
                                 }
                              </p>
                           </div>
                        )
                     }
                  </ErrorMessage>
               </div>
            </div>
            <div className="addcontact-form__group">
               <label
                  htmlFor="group"
                  className="addcontact-form__group__label"
               >
                  <span>Group</span>
               </label>
               <div className="addcontact-form__group__input-cont" >
                  <Field
                     as="select"
                     id="group"
                     name="group"
                     className="addcontact-form__group__input addcontact-form__group__input--select"
                  >
                     <option value="" disabled >
                        Select Group
                     </option>
                     {groups.length > 0 && groups.map((group) => (
                        <option key={group.id} value={group.id} className="addcontact-form__group__input--option">
                           {group.name}
                        </option>
                     ))}
                  </Field>
                  <ErrorMessage name="group" >
                     {
                        msg => (
                           <div className="addcontact-form__group__error text-danger" >
                              <p>
                                 {
                                    msg
                                 }
                              </p>
                           </div>
                        )
                     }
                  </ErrorMessage>
               </div>
            </div>
         </Form>
      </Formik>
   );
}
 
export default AddContactForm;