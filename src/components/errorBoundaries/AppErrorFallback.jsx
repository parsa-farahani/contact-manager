import PropTypes from "prop-types";
// styles
import '../../styles/AppErrorFallback.scss';



const AppErrorFallback = ( props ) => {

   // props
   const { error, resetErrorBoundary } = props;


   return (
      <>
         <div className="app-error-fallback-cont container-fluid cont alert d-grid justify-content-center align-content-center">
            <p className="text-danger">
               An Error occured, please contact us for more details
            </p>
            <pre className="alert alert-danger" role="alert" >
               <p>
                  <span className="fw-bold" >Error:</span> {' '}
                  {
                     error.message
                  }
               </p>
            </pre>
            <button className="d-block" onClick={ resetErrorBoundary } type="button">
               Try again
            </button>
         </div>
      </>
   );
}

AppErrorFallback.propTypes = {
   error: PropTypes.object,
   resetErrorBoundary: PropTypes.func,
}
 
export default AppErrorFallback;