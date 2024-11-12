import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
// styles
import styles from '../../styles/ContactSkeleton.module.scss';

const ContactSkeleton = () => {
   return (
      <>
         <SkeletonTheme direction="rtl" baseColor="#222" customHighlightBackground="linear-gradient(90deg, transparent 30%, #555 50%, transparent 70%)" >
            <div className={ styles['contactSkeleton'] } >
               <div className='d-flex gap-3' >
                  <div>
                     <Skeleton  width={100} height={100} style={{borderRadius: '1rem'}} />
                     <div className='d-flex flex-column' >
                        <Skeleton height={10} width={200} />
                        <Skeleton height={10} width={100} />
                     </div>
                  </div>
                  <div className='d-flex flex-column' style={{height: 'fit-content', width: 'fit-content', marginLeft: 'auto', marginTop: 'auto'}} >
                     <Skeleton circle={true}  width={40} height={40} />
                     <Skeleton circle={true}  width={40} height={40} />
                  </div>
               </div>
            </div>
         </SkeletonTheme>
      </>
   );
}


export default ContactSkeleton;