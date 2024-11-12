// styles
import styles from '../../styles/Spinner.module.scss';


const Spinner = () => {
   return (
      <>
         <div className={styles['spinner']} >
            <div className={styles["spinner__inner"]}>
            </div>
         </div>
      </>
   );
};
 
export default Spinner;