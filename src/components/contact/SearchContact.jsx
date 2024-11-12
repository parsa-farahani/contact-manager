import { useCallback, useContext, useId } from "react";
import _ from "lodash";
// react icons
import { IoSearch } from "react-icons/io5";
import ContactsContext from "../../context/ContactsContext";




const SearchContact = () => {
   // contexts
   const { contactSearchTerm, setContactSearchTerm } =
      useContext(ContactsContext);

   // ids
   const searchInpId = useId();

   // callbacks

   const handleSearchInputChange = useCallback((e) => {
      const { value } = e.currentTarget;
      setContactSearchTerm(value);
   }, []);


   return (
      <>
         <form className="main-header__inner__navlinks-cont__search-form">
            <div className="main-header__inner__navlinks-cont__search-form__input-cont">
               <label
                  htmlFor={searchInpId}
                  className="main-header__inner__navlinks-cont__search-form__label"
               >
                  <IoSearch />
               </label>
               <input
                  onChange={ handleSearchInputChange }
                  type="search"
                  name={"search"}
                  value={contactSearchTerm}
                  placeholder="Search Contact..."
                  id={searchInpId}
                  className="main-header__inner__navlinks-cont__search-form__input main-input"
               />
            </div>
         </form>
      </>
   );
};

export default SearchContact;
