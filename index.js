const contactsOperations = require("./contacts");
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.table(contacts);
      break;

    case "get":
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        console.error(`Contact witch id: ${id} not found`);
      }
      console.table(contact);
      break;

    case "add":
      const newContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      if (!newContact) {
        console.error(`Error adding contact: ${name}!`);
      }
      console.log("Contacts added successfully!");
      console.table(newContact);
      break;

    case "remove":
      const newContacts = await contactsOperations.removeContact(id);
      if (!newContacts) {
        console.error(`Contact witch id: ${id} not found`);
      }
      console.log(`Contact with id: ${id} deleted completely, new list:`);
      console.table(newContacts);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
