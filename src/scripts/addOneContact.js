import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const addOneContact = async () => {
  const contact = await readContacts();
  const newContact = createFakeContact();
  try {
    contact.push(newContact);
    writeContacts(contact);
    console.log('One more contact added!');
  } catch (error) {
    console.error('Sorry, it was not possible to add a contact', error);
  }
};

addOneContact();
