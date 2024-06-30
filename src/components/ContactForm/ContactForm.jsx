import { useState } from "react";
import css from "./ContactForm.module.css"
import PropTypes from "prop-types";

export const ContactForm = ({ contacts, addContact }) => {
   const [state, setState] = useState({
      name: "",
      number: "",
   });
   
   const { name, number } = state;

   const handleNameOnChange = e => {
      setState(prevState => ({
         ...prevState,
         name: e.target.value
      }))
   }

   const handleNumberOnChange = e => {
      setState(prevState => ({
         ...prevState,
         number: e.target.value
      }))
   }

   const handleOnSubmit = e => {
      e.preventDefault();
      const id = `id-${contacts.length + 1}`;
      
      addContact({
         id,
         name: name.toLowerCase(),
         number
      });
      
      setState(prevState => ({
         ...prevState, 
         name: "",
         number: ""
      }));
   }

   return (
      <form className={css.contactForm} onSubmit={handleOnSubmit}>
         <div className={css.inputWrapper}>
            <label className={css.label}>
               Full Name
               
               <input 
                  type="text"
                  name="name"
                  className={css.formInput}
                  placeholder="Full Name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                  value={name}
                  onChange={handleNameOnChange}
                  required
               />
            </label>
         </div>

         <div className={css.inputWrapper}>
            <label className={css.label}>
               Number
               <input 
                  type="tel"
                  name="number"
                  className={css.formInput}
                  placeholder="Contact Number"
                  pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  value={number}
                  onChange={handleNumberOnChange}
                  required
               />
            </label>
         </div>
         <button className={css.formButton} type="submit">Submit</button>
      </form>
   );
}

ContactForm.propTypes = {
   contacts: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         number: PropTypes.string.isRequired,
      }).isRequired,
   ).isRequired,
   addContact: PropTypes.func.isRequired,
}