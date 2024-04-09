const fs = require('fs');
const readlineSync = require('readline-sync');

const jsonFile = './users.json';

if (!fs.existsSync(jsonFile)) {
  fs.writeFileSync(jsonFile, '[]');
}

function saveUsers(users) {
  fs.writeFileSync(jsonFile, JSON.stringify(users));
}

function addUser(userName) {
  const users = getUsers();
  //   console.log(users)
  const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  users.push({ id, name: userName });
  saveUsers(users);
}

function getUsers() {
  return JSON.parse(fs.readFileSync(jsonFile));
}

function printUser(userName) {
  const users = getUsers();
  const user = users.find(user => user.name === userName);
  if (user) {
    console.log(`User ID: ${user.id}, Name: ${user.name}`);
  } else {
    console.log('User not found.');
  }
}

// print all users
function printAllUsers() {
  const users = getUsers();
  console.log('All Users:');
  // users.forEach((user) => {
  //     console.log(users)
  //     console.log(`User ID: ${user.id}, Name: ${user.name}`)
  // });
  users.forEach(user => console.log(`User ID: ${user.id}, Name: ${user.name}`));
}

function main() {
  let choice;
  while (true) {
    console.log('\n1. Add User Name');
    console.log('2. Print specific user');
    console.log('3. Print All User');
    console.log('0. Exit');

    choice = readlineSync.question('Enter your choice: ');

    switch (choice) {
      case '1':
        const userName = readlineSync.question('Enter user name: ');
        addUser(userName);
        console.log('User added successfully.');
        break;
      case '2':
        const userNameToPrint = readlineSync.question('Enter user name to print: ');
        printUser(userNameToPrint);
        break;
      case '3':
        printAllUsers();
        break;
      case '0':
        console.log('Exiting...');
        process.exit(0);
      default:
        console.log('Invalid choice. Please try again.');
    }
  }
}

main();
