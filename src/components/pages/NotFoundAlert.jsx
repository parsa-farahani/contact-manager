import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// icons
import { IoAlertCircle } from "react-icons/io5";



const NotFoundAlert = (props) => {

   // props
   const { children, title, icon=<IoAlertCircle/> } = props;

   return (
      <div className="contact-not-found-alert alert flex-column">
         <h2 className="mb-4 d-flex align-items-center justify-content-center gap-3 h3" >
            <span className="d-inline-flex align-items-center" >
               {
                  icon
               }
            </span>
            <span>
               {
                  title
               }
            </span>
         </h2>
         <div>
            {
               children
            }
         </div>
         <div className="text-center" >
            <Link to="/" className="main-btn py-2 px-3" >
               Back to Home
            </Link>
         </div>
      </div>
   );
}


NotFoundAlert.propTypes = {
   children: PropTypes.node,
   title: PropTypes.string,
   icon: PropTypes.node,
}
 
export default NotFoundAlert;