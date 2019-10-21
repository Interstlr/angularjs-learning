appModule
  .factory('phoneContactService', function() {
    const contacts = [
      {
        id: '1',
        fullName: 'Alex Frost',
        phoneNumber: {
          value: '33342245555',
          visible: true,
        },
        email: 'alex@gmail.com',
        address: 'Minsk',
      },
      {
        id: '2',
        fullName: 'Anna Test',
        phoneNumber: {
          value: '233446435',
          visible: true,
        },
        email: 'annaa@gmail.com',
        address: 'LA',
      },
      {
        id: '3',
        fullName: 'Daniel Smith',
        phoneNumber: {
          value: '2342345',
          visible: true,
        },
        email: 'daniel@gmail.com',
        address: 'NY',
      },
    ];

    return function() {
      return {
        getAll() {
          return contacts;
        },
  
        addContact(data) {
          const contact = {
            id: uuidv4(),
            fullName: data.fullName,
            phoneNumber: {
              value: data.phoneNumber,
              visible: true,
            },
            email: data.email,
            address: data.address,
          };

          contacts.push(contact);
        },

        deleteContact(id) {
          const index = contacts.findIndex((contact) => contact.id === id);

          if (index !== -1) {
            contacts.splice(index, 1);
          }
        },
      };
    }();
  });