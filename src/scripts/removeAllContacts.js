import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
export const removeAllContacts = async () => {
  await fs.writeFile(PATH_DB, '[]');
  try {
    console.log('Your contacts deleted');
  } catch (error) {
    console.error('Sorry, action failed :(', error);
  }
};

removeAllContacts();
