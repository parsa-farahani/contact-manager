import ContactSkeleton from "./ContactSkeleton";



const AllContactsSkeleton = () => {

   return (
      <>
         {  
            new Array(6).fill(null).map((e, i) => <ContactSkeleton key={ i } />)
         }
      </>
   );
}
 
export default AllContactsSkeleton;