import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const removeLastContact = async () => {
  const contact = await readContacts();
  try {
    contact.splice(-1, 1);
    await writeContacts(contact);
    console.log('Last contact deleted!');
  } catch (error) {
    console.error('Sorry, failed to delete', error);
  }
};

removeLastContact();
