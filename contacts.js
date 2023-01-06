const fs = require("fs").promises;
const path = require("path");

const contactsPatch = path.resolve("./db/contacts.json");

// get contacts
async function listContacts() {
  const data = await fs.readFile(contactsPatch);
  const contacts = JSON.parse(data);
  return contacts;
}

//get contact by id
async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find((item) => item.id === String(contactId));
  if (!contact) {
    return null;
  }
  return contact;
}

//remove contact
async function removeContact(contactId) {
  const contacts = await listContacts();
  const newContacts = contacts.filter((item) => item.id !== String(contactId));
  if (contacts.length === newContacts.length) {
    return null;
  }
  await fs.writeFile(contactsPatch, JSON.stringify(newContacts));
  return newContacts;
}

//add contact
async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: String(contacts.length + 1),
    name: name,
    email: email,
    phone: phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPatch, JSON.stringify(contacts));
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
