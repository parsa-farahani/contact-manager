import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// contexts
import ContactsContext from '../../context/ContactsContext';
// styles
import styles from '../../styles/Contact.module.scss';
// react icons
import { MdEmail, MdPhone } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";



const Contact = (props) => {

   // contexts
   const { deleteContactById } = useContext(ContactsContext);

   // props
   const { id, fullname, phone, avatar, email, homeAddress, job, group, isFavourite } = props;

   // states
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   
   return (
      <>
         <div className={styles.contact}>
            <Link to={ `/contacts/${id}` } className={styles['contact__view-link']} ></Link>
            <div className={styles['contact__inner']} >
               <div className={styles['contact__title-cont']} >
                  <div className={styles['contact__title-cont__img-cont']} >
                     <img src={ avatar || 'https://placehold.co/600x400/000000/FFF' } alt="avatar" width={200} height={200} className={ styles['contact__title-cont__img-cont__img'] } />
                  </div>
                  <div>
                     <h3>
                        {
                           fullname
                        }
                        {
                           (isFavourite) ? (
                              <span className={ `favourite-mark ${styles['contact__favourite-mark']}` } >
                              </span>
                           ) : (
                              null
                           )
                        }
                     </h3>
                     <p>
                        phone:
                        {' '} 
                        <span>
                           { phone }
                        </span>
                     </p>
                  </div>
               </div>
               <div className={styles['contact__controls']} >
                  <a href={`tel:${phone}`} className={styles['contact__controls__btn']}>
                     <span>
                        <MdPhone />
                     </span>
                  </a>
                  <a href={`mailto:${email}`} className={styles['contact__controls__btn']} >
                     <span>
                        <MdEmail />
                     </span>
                  </a>
               </div>
               <div className={ styles['contact__inner__menu'] } >
                  <button onClick={ e => setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen) } type="button" aria-label='menu' className={styles['contact__inner__menu__btn']}>
                     <span aria-hidden='true' >
                        <HiOutlineMenu />
                     </span>
                  </button>
                  <div className={ classNames({ [styles['contact__inner__menu__dropdown']]: true, [styles['contact__inner__menu__dropdown--opened']]: isMenuOpen }) } >
                     <ul className={styles['contact__inner__menu__dropdown__list']} >
                        <li className={styles['contact__inner__menu__dropdown__list__item']} >
                           <Link to={`/contacts/edit/${id}`} state={ {opener: 'AllContacts'} } tabIndex={isMenuOpen ? 0 : -1} className={styles['contact__inner__menu__dropdown__list__item__link']} >
                              <span>
                                 <MdEdit />
                              </span>
                              <span>
                                 Edit
                              </span>
                           </Link>
                        </li>
                        <li className={styles['contact__inner__menu__dropdown__list__item']} >
                           <button onClick={ () => { deleteContactById(id) } } type='button' tabIndex={isMenuOpen ? 0 : -1} className={styles['contact__inner__menu__dropdown__list__item__link']} >
                              <span>
                                 <MdDelete/>
                              </span>
                              <span>
                                 Delete
                              </span>
                           </button>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}


Contact.propTypes = {
   id: PropTypes.number,
   fullname: PropTypes.string,
   phone: PropTypes.string,
   avatar: PropTypes.string,
   email: PropTypes.string,
   homeAddress: PropTypes.string,
   job: PropTypes.string,
   group: PropTypes.string,
   isFavourite: PropTypes.bool
}

export default Contact;