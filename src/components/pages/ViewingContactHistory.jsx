import { useContext } from "react";
import PropTypes from "prop-types";
//components
import ViewingContactHistoryItem from "./ViewingContactHistoryItem";
// context
import { ContactsContext } from "../../context";
// styles
import '../../styles/ViewingContactHistory.scss';




const ViewingContactHistory = (props) => {

   // context
   const { viewingContactHistory } = useContext(ContactsContext);



   return (

      <ul className="history" >

         {
            viewingContactHistory.data.map((historyData, i) => (

               <ViewingContactHistoryItem type={historyData.type} title={historyData.title} date={historyData.date} />
               
            ))
         }

      </ul>

   );
}


ViewingContactHistory.propTypes = {
   type: PropTypes.string,
   date: PropTypes.string,
}
 
export default ViewingContactHistory;