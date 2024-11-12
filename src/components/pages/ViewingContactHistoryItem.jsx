import { useEffect, useState } from "react";
// icons
import { MdCallMade, MdCallMissed, MdCallReceived } from "react-icons/md";



const ViewingContactHistoryItem = (props) => {

   // props
   const { type, title, date } = props;


   // states 
   const [ icon, setIcon ] = useState(null);
   const [ iconColor, setIconColor ] = useState("#ddd");


   useEffect(() => {
      if (type === "incomingAnswered") {
         setIcon( <MdCallReceived /> );
         setIconColor("springgreen");
      } else if (type === "incomingMissed") {
         setIcon(  <MdCallMissed /> );
         setIconColor("tomato")
      } else if (type === "outgoingCall") {
         setIcon( <MdCallMade /> );
         setIconColor("white");
      }
   }, [])


   // callbacks
   const formatDate = (dateISO) => {
      const date = new Date(dateISO);
      return date.toLocaleString();
   }


   return (
      <li className="history__item" >

         <div className="history__item__type" >
            <span className="history__item__type__text" >
               {
                  title
               }
            </span>
            {" "}
            <span className="history__item__type__icon" style={{ color: iconColor }} >
               {
                  icon
               }
            </span>
         </div>

         <div className="history__item__date" >
            {
               formatDate(date)
            }
         </div>

      </li>
   );
}
 
export default ViewingContactHistoryItem;