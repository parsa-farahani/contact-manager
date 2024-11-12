import PropTypes from "prop-types";


const ViewingContactInfoTable = (props) => {

   // props
   const { phone, email, homeAddress, job, groupName } = props;


   return (
      <table className="contact__details__table" >
         <tbody className="contact__details__table__body" >
            <tr className="contact__details__table__row" >
               <th scope="row" className="contact__details__table__cell contact__details__table__heading" >
                  Phone
               </th>
               <td className="contact__details__table__cell contact__details__table__data" >
                  { phone }
               </td>
            </tr>
            <tr className="contact__details__table__row" >
               <th scope="row" className="contact__details__table__cell contact__details__table__heading" >
                  Email
               </th>
               <td className="contact__details__table__cell contact__details__table__data" >
                  { email }
               </td>
            </tr>
            <tr className="contact__details__table__row" >
               <th scope="row" className="contact__details__table__cell contact__details__table__heading" >
                  Home Address
               </th>
               <td className="contact__details__table__cell contact__details__table__data" >
                  { homeAddress }
               </td>
            </tr>
            <tr className="contact__details__table__row" >
               <th scope="row" className="contact__details__table__cell contact__details__table__heading" >
                  Job
               </th>
               <td className="contact__details__table__cell contact__details__table__data" >
                  { job }
               </td>
            </tr>
            <tr className="contact__details__table__row" >
               <th scope="row" className="contact__details__table__cell contact__details__table__heading" >
                  Group
               </th>
               <td className="contact__details__table__cell contact__details__table__data" >
                  { groupName }
               </td>
            </tr>
         </tbody>
      </table>
   );
}

ViewingContactInfoTable.propTypes = {
   phone: PropTypes.string,
   email: PropTypes.string,
   homeAddress: PropTypes.string,
   job: PropTypes.string,
   groupName: PropTypes.string,
}
 
export default ViewingContactInfoTable;