// components
import Spinner from "./Spinner";



const SearchContactSpinner = () => {
   return (
      <div className="spinner-cont--fixed">
         <div className="d-flex flex-column align-items-center gap-3" >
            <Spinner />
            <h2 className="h5" style={{color: 'var(--c-sec)'}} >
               searching...
            </h2>
         </div>
      </div>
   );
}
 
export default SearchContactSpinner;