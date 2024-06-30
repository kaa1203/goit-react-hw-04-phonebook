import { ContactListItem } from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";

export const ContactList = ({ filterContacts, deleteContact }) => {
   const contacts = filterContacts();
   return (
      <ul>
         {
            contacts.map(contact => (
               <ContactListItem
                  key={contact.id}
                  contact={contact}
                  deleteContact={deleteContact}
               />
            ))
         }
      </ul>
   );
}

ContactList.propTypes = {
   filterContacts: PropTypes.func.isRequired,
   deleteContact: PropTypes.func.isRequired
}