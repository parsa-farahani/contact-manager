import { Link } from "react-router-dom";
// icons
import { IoAlertCircle } from "react-icons/io5";



const NotFound = () => {
   return (
      <>
         <section className="main-inner" style={{ height: '100svh', display: 'grid', placeContent: 'center' }} >
            <div className="contact-not-found-alert alert flex-column">
               <h2 className="mb-4 d-flex align-items-center justify-content-center gap-3 h3" >
                  <span className="d-inline-flex align-items-center" >
                     <IoAlertCircle />
                  </span>
                  <span>
                     404 - Not Found the Page
                  </span>
               </h2>
               <div className="text-center" >
                  <Link to="/" className="main-btn py-2 px-3" >
                     Back to Home
                  </Link>
               </div>
            </div>
         </section>
      </>
   );
}
 
export default NotFound;