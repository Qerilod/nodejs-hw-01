import { PATH_DB } from '../constants/contacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const generateContacts = async (number) => {
  const contactsData = await fs.readFile(PATH_DB, 'utf-8');
  const contacts = JSON.parse(contactsData);

  const newContacts = [];
  for (let i = 0; i < number; i++) {
    newContacts.push(createFakeContact());
  }
  const updatedContacts = [...contacts, ...newContacts];

  await writeContacts(updatedContacts);

  console.log(`${number} new contacts added correct!`);
};

generateContacts(5);
