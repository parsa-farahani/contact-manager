import Skeleton, { SkeletonTheme } from "react-loading-skeleton";



const ViewContactSkeleton = () => {
   return (
      <>
         <SkeletonTheme direction="rtl" baseColor="#222" customHighlightBackground="linear-gradient(90deg, transparent 30%, #555 50%, transparent 70%)">
            <div className="contact contact-skeleton">
               <div className="contact__title-cont d-flex flex-column align-items-center justify-content-center gap-4" >
                  <Skeleton width={200} height={200} className="contact-skeleton__img-cont" />
                  <div className="contact__title-cont__title d-flex align-items-center gap-3">
                     <Skeleton className="contact-skeleton__title" />
                  </div>
               </div>
               <div className="contact__details contact-skeleton__details" >
                  <Skeleton className="contact-skeleton__details__item" />
                  <Skeleton className="contact-skeleton__details__item" />
                  <Skeleton className="contact-skeleton__details__item" />
                  <Skeleton className="contact-skeleton__details__item" />
               </div>
            </div>
         </SkeletonTheme>
      </>
   );
}
 
export default ViewContactSkeleton;