const contactBook = {
    contacts: [
        {
            name: "John Doe",
            phone: "+1111111111",
            email: "johndoe@gmail.com"
        },
        {
            name: "Jane Smith",
            phone: "+222222222",
            email: "janesmith@gmail.com"
        }
    ],

    findContactByName: function(name) {
        return this.contacts.find(contact => contact.name() === name());
    },
    
    addContact: function(name, phone, email) {
        this.contacts.push({ name, phone, email });
    }
};



