import { useState, useEffect } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Section } from "./Section/Section";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export const App = () => {
   const [contacts, setContacts] = useState([
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
   ]);
   
   const [filter, setFilter] = useState("");

   const fetchContactsFromLS = localStorage.getItem("contacts");

   useEffect(() => {
      if (fetchContactsFromLS) {
         setContacts(JSON.parse(fetchContactsFromLS));
      }
   }, []);

   useEffect(() => {
      localStorage.setItem("contacts", JSON.stringify(contacts));
   }, [contacts])

   const addContact = newContact => {
      setContacts(prevState => [...prevState, newContact]);
   }

   const deleteContact = contactId => {
      
      setContacts(contacts.filter(contact => contact.id != contactId))
   }

   const filterValue = value => {
      setFilter(value);
   }
   
   const filterContacts = () => {
      return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
   }

   return (
      <div>
         <Section title="Phonebook">
            <ContactForm
               contacts={contacts}
               addContact={addContact}
            />
         </Section>

         <Section title="Contacts">
            <Filter
               filter={filter}
               filterValue={filterValue}
            />
            <ContactList
               filterContacts={filterContacts}
               deleteContact={deleteContact}
            />
         </Section>
      </div>
   );
}