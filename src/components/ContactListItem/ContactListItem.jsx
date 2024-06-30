import PropTypes from "prop-types";
import css from "./ContactListItem.module.css";

export const ContactListItem = ({ contact, deleteContact }) => {
   const handleOnClick = id => { deleteContact(id) }
   
   return (
      <li className={css.formItem}>
         <p>{contact.name}</p>
         <p>{contact.number}</p>
         <button type="button" onClick={() => handleOnClick(contact.id)}>Delete</button>
      </li>
   );
}

ContactListItem.propTypes = {
   contact: PropTypes.object.isRequired,
   deleteContact: PropTypes.func.isRequired
}