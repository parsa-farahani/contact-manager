import PropTypes from "prop-types";


const EditContactHeader = (props) => {

   // props
   const { avatar, fullname, isFavourite } = props;


   return (
      <div className="contact-edit__title-cont d-flex flex-column align-items-center justify-content-center gap-4" >
         <div className="contact-edit__title-cont__img-cont">
            <img src={ avatar || 'https://placehold.co/600x400/000000/FFF' } alt="avatar" className="contact-edit__title-cont__img-cont__img" />
         </div>
         <h2 className="contact-edit__title-cont__title d-flex align-items-center gap-3">
            { fullname }
            {
               (isFavourite) ? (
                  <span className="favourite-mark contact__title-cont__title__favourite-mark" ></span>
               ) : null
            }
         </h2>
      </div>
   );
}

EditContactHeader.propTypes = {
   avatar: PropTypes.string,
   fullname: PropTypes.string,
   isFavourite: PropTypes.bool,
}
 
export default EditContactHeader;