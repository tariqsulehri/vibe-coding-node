import { faker } from '@faker-js/faker';

/**
 * Generate an array of fake user objects.
 *
 * @param {number} [count=10] - Number of user objects to generate (clamped 1..100 by controller).
 * @returns {Array<Object>} Array of user objects with id, name, email, avatar, username, bio, createdAt
 */
export const generateUsers = (count = 10) => {
  const users = [];
  for (let i = 0; i < count; i += 1) {
    users.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      username: faker.internet.userName(),
      bio: faker.lorem.sentence(),
      createdAt: faker.date.past().toISOString(),
    });
  }
  return users;
};
