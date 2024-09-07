import { readContacts } from '../utils/readContacts.js';
export const countContacts = async () => {
  const count = await readContacts();
  try {
    console.log('Success! Number of your contacts:');
    return count.length;
  } catch (error) {
    console.error(
      'An error occurred, it was not possible to obtain the number of contacts',
      error,
    );
  }
};

console.log(await countContacts());
