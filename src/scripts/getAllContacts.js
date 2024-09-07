import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contacts = await readContacts();
  try {
    console.log('Done! your contacts:');
    return contacts;
  } catch (error) {
    console.error('Sorry, we couldnt get contacts', error);
  }
};

console.log(await getAllContacts());
