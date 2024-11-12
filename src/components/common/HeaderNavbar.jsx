import { Link, useLocation } from "react-router-dom";
// components
import SearchContact from "../contact/SearchContact";
// styles
import '../../styles/HeaderNavbar.scss';
import HomeLink from "./HomeLink";



const HeaderNavbar = () => {

   const location = useLocation();

   return (
      <>
         <nav className='main-header__inner container-fluid cont py-3'>

            <h1 className='main-header__inner__home-title d-flex align-items-center'>
              <HomeLink />
            </h1>
            
            <div className="main-header__inner__navlinks-cont flex-grow-1 d-flex align-items-center justify-content-end gap-2">

               {
                  (location.pathname === '/contacts') ? (
                     <SearchContact />
                  ) : (
                     null
                  )
               }

               <Link to={ '/contacts/add' } title="add contact" className="main-header__inner__navlinks-cont__link main-header__inner__navlinks-cont__link--add-link main-btn" >
                  <span className="main-header__inner__navlinks-cont__link--add-link__text h2" aria-label="add contact"></span>
               </Link>

            </div>

         </nav>
      </>
   );
}
 
export default HeaderNavbar;