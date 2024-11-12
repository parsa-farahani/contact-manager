import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
// context
import { ContactsContext } from "../../context";
// validation schema
import { contactSchema } from "../../validations/contactValidation";
// icons
import { FaRegEdit } from "react-icons/fa";


const EditContactForm = () => {

   // context
   const { edittingContact, groups, updateCurrentContact } = useContext(ContactsContext);


   // react-router-dom
   const location = useLocation();


   return (
      <Formik
         initialValues={ {
            fullname: edittingContact.fullname,
            avatar: edittingContact.avatar,
            email: edittingContact.email,
            phone: edittingContact.phone,
            group: edittingContact.group,
            home_address: edittingContact.home_address,
            job: edittingContact.job
         } }
         validationSchema={ contactSchema }
         onSubmit={(values) => {
            updateCurrentContact(values, edittingContact.id, location.state?.opener)
         }}
      >
         <Form id="edit-contact-form" className="edit-contact__details__form"  >
            <div className="contact-edit__details__table" >
               <div className="contact-edit__details__table__body" >
                  <div className="contact-edit__details__table__row" >
                     <div className="contact-edit__details__table__cell contact-edit__details__table__heading" >
                        <label htmlFor="fullname" className="contact-edit__details__table__cell__label">
                           Name
                        </label>
                     </div>
                     <div className="contact-edit__details__table__cell contact-edit__details__table__data" >
                        <Field
                           id='fullname'
                           name='fullname'
                           type='text'
                           spellCheck='false'
                           placeholder='e.g: Parsa Farahani'
                           className='contact-edit__details__table__cell__input'
                        />
                        <div className="contact-edit__details__table__cell__error">
                           <ErrorMessage name="fullname" >
                              {
                                 msg => (
                                    <div className="contact-edit__details__table__cell__error__cont text-danger" >
                                       <p className="contact-edit__details__table__cell__error__cont__text">
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
                     <div className="contact-edit__details__table__row-icon-cont" >
                        <span className="contact-edit__details__table__row-icon-cont__inner">
                           <FaRegEdit />
                        </span>
                     </div>
                  </div>
                  <div className="contact-edit__details__table__row" >
                     <div className="contact-edit__details__table__cell contact-edit__details__table__heading" >
                        <label htmlFor="avatar" className="contact-edit__details__table__cell__label">
                           Image URL
                        </label>
                     </div>
                     <div className="contact-edit__details__table__cell contact-edit__details__table__data" >
                        <Field
                           id='avatar'
                           name='avatar'
                           type='text'
                           spellCheck='false'
                           placeholder='e.g: https://example...'
                           className='contact-edit__details__table__cell__input'
                        />
                        <div className="contact-edit__details__table__cell__error">
                           <ErrorMessage name="avatar" >
                              {
                                 msg => (
                                    <div className="contact-edit__details__table__cell__error__cont text-danger" >
                                       <p className="contact-edit__details__table__cell__error__cont__text">
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
                     <div className="contact-edit__details__table__row-icon-cont" >
                        <span className="contact-edit__details__table__row-icon-cont__inner">
                           <FaRegEdit />
                        </span>
                     </div>
                  </div>
                  <div className="contact-edit__details__table__row" >
                     <div className="contact-edit__details__table__cell contact-edit__details__table__heading" >
                        <label htmlFor="phone" className="contact-edit__details__table__cell__label">
                           Phone
                        </label>
                     </div>
                     <div className="contact-edit__details__table__cell contact-edit__details__table__data" >
                        <Field
                           id='phone'
                           name='phone'
                           type='text'
                           spellCheck='false'
                           className='contact-edit__details__table__cell__input'
                        />
                        <div className="contact-edit__details__table__cell__error">
                           <ErrorMessage name="phone" >
                              {
                                 msg => (
                                    <div className="contact-edit__details__table__cell__error__cont text-danger" >
                                       <p className="contact-edit__details__table__cell__error__cont__text">
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
                     <div className="contact-edit__details__table__row-icon-cont" >
                        <span className="contact-edit__details__table__row-icon-cont__inner">
                           <FaRegEdit />
                        </span>
                     </div>
                  </div>
                  <div className="contact-edit__details__table__row" >
                     <div className="contact-edit__details__table__cell contact-edit__details__table__heading" >
                        <label htmlFor="email" className="contact-edit__details__table__cell__label">
                           Email
                        </label>
                     </div>
                     <div className="contact-edit__details__table__cell contact-edit__details__table__data" >
                        <Field
                           id='email'
                           name='email'
                           type='text'
                           spellCheck='false'
                           className='contact-edit__details__table__cell__input'
                        />
                        <div className="contact-edit__details__table__cell__error">
                           <ErrorMessage name="email" >
                              {
                                 msg => (
                                    <div className="contact-edit__details__table__cell__error__cont text-danger" >
                                       <p className="contact-edit__details__table__cell__error__cont__text">
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
                     <div className="contact-edit__details__table__row-icon-cont" >
                        <span className="contact-edit__details__table__row-icon-cont__inner">
                           <FaRegEdit />
                        </span>
                     </div>
                  </div>
                  <div className="contact-edit__details__table__row" >
                     <div className="contact-edit__details__table__cell contact-edit__details__table__heading" >
                        <label htmlFor="home_address" className="contact-edit__details__table__cell__label">
                           Home Address
                        </label>
                     </div>
                     <div className="contact-edit__details__table__cell contact-edit__details__table__data" >
                        <Field
                           id='home_address'
                           name='home_address'
                           type='text'
                           spellCheck='false'
                           className='contact-edit__details__table__cell__input'
                        />
                        <div className="contact-edit__details__table__cell__error">
                           <ErrorMessage name="home_address" >
                              {
                                 msg => (
                                    <div className="contact-edit__details__table__cell__error__cont text-danger" >
                                       <p className="contact-edit__details__table__cell__error__cont__text">
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
                     <div className="contact-edit__details__table__row-icon-cont" >
                        <span className="contact-edit__details__table__row-icon-cont__inner">
                           <FaRegEdit />
                        </span>
                     </div>
                  </div>
                  <div className="contact-edit__details__table__row" >
                     <div className="contact-edit__details__table__cell contact-edit__details__table__heading" >
                        <label htmlFor="job" className="contact-edit__details__table__cell__label">
                           Job
                        </label>
                     </div>
                     <div className="contact-edit__details__table__cell contact-edit__details__table__data" >
                        <Field
                           id='job'
                           name='job'
                           type='text'
                           spellCheck='false'
                           className='contact-edit__details__table__cell__input'
                        />
                        <div className="contact-edit__details__table__cell__error">
                           <ErrorMessage
                              name="job"
                           >
                              {
                                 msg => (
                                    <div className="contact-edit__details__table__cell__error__cont text-danger" >
                                       <p className="contact-edit__details__table__cell__error__cont__text">
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
                     <div className="contact-edit__details__table__row-icon-cont" >
                        <span className="contact-edit__details__table__row-icon-cont__inner">
                           <FaRegEdit />
                        </span>
                     </div>
                  </div>
                  <div className="contact-edit__details__table__row" >
                     <div className="contact-edit__details__table__cell contact-edit__details__table__heading" >
                        <label htmlFor="group" className="contact-edit__details__table__cell__label">
                           Group
                        </label>
                     </div>
                     <div className="contact-edit__details__table__cell contact-edit__details__table__data" >
                        <Field
                           as='select'
                           id='group'
                           name='group'
                           className='contact-edit__details__table__cell__input contact-edit__details__table__cell__input--select'
                        >
                           <option value='' disabled >
                              Select Group
                           </option>
                           {
                              groups.map(group => (
                                 <option key={group.id} value={group.id} >
                                    { group.name }
                                 </option>
                              ))
                           }
                        </Field>
                        <div className="contact-edit__details__table__cell__error">
                           <ErrorMessage
                              name="group"
                           >
                              {
                                 msg => (
                                    <div className="contact-edit__details__table__cell__error__cont text-danger" >
                                       <p className="contact-edit__details__table__cell__error__cont__text">
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
                  </div>
               </div>
            </div>
         </Form>
      </Formik>
   );
}
 
export default EditContactForm;