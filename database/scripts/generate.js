import fs from 'fs';
import { faker } from '@faker-js/faker';

const users = [];
for (let i = 1; i <= 10; i++) {
  users.push({
    id: i,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: faker.helpers.arrayElement(['admin', 'developer', 'tester'])
  });
}

const projects = [];
for (let i = 1; i <= 5; i++) {
  projects.push({
    id: i,
    name: faker.commerce.productName(),
    status: faker.helpers.arrayElement(['in progress', 'completed', 'pending'])
  });
}

const db = { users, projects };

fs.writeFileSync('database/seeds.json', JSON.stringify(db, null, 2));
console.log('Seeds generated!');
