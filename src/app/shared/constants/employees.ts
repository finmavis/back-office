import * as faker from 'faker';

import { Employee } from 'src/app/models/employee';
import { generateRandomNumber } from 'src/app/shared/utils/generate-random-number';

import { GROUPS } from './groups';

export const EMPLOYEES: Employee[] = Array.from({ length: 100 }).map((_) => {
  return {
    id: faker.random.uuid(),
    username: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    birthDate: faker.date.past(),
    basicSalary: faker.finance.amount(1000000, 100000000),
    status: faker.name.jobType(),
    group: GROUPS[generateRandomNumber()],
    description: faker.date.past(),
  };
});
