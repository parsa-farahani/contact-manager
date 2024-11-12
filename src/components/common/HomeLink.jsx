import { NavLink } from "react-router-dom";
// styles
import '../../styles/HomeLink.scss';



const HomeLink = () => {
   return (
      <>
         <NavLink className='main-header__inner__home-title__link navbar-brand' to='/'>
            <span className='main-header__inner__home-title__link__text'>
            <span className='main-header__inner__home-title__link__text__t1'>
               Contact
            </span>
            <span className='main-header__inner__home-title__link__text__t2' >
               Manager
            </span>
            </span>
         </NavLink>
      </>
   );
}
 
export default HomeLink;