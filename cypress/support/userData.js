function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const firstNames = [
    'Bard', 'Jackie', 'Chloe', 'Emily', 'Chris', 'Katie', 'Michael', 'Laura', 'David', 'Sara',
    'Olivia', 'Emma', 'Ava', 'Sophia', 'Isabella', 'Mia', 'Amelia', 'Harper', 'Evelyn', 'Abigail',
    'Lily', 'Hannah', 'Grace', 'Madison', 'Zoe', 'Natalie', 'Victoria', 'Ella', 'Scarlett', 'Aria',
    'Benjamin', 'James', 'Logan', 'Mason', 'Elijah', 'Lucas', 'Henry', 'Alexander', 'William', 'Daniel'
]

const lastNames = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
    'Taylor', 'Anderson', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White', 'Lopez',
    'Lee', 'Gonzalez', 'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Perez', 'Hall', 'Young',
    'Allen', 'Sanchez', 'Wright', 'King', 'Scott', 'Green', 'Baker', 'Adams', 'Nelson', 'Carter'
]

function getRandomFirstName() {
    return getRandomElement(firstNames);
}

function getRandomLastName() {
    return getRandomElement(lastNames);
}

function getRandomEmail(firstName, lastName) {
    const domains = ['example.com', 'test.com', 'mail.com'];
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${getRandomElement(domains)}`;
}

const firstName = getRandomFirstName();
const lastName = getRandomLastName();

const userData = {
    name: firstName,
    lastName: lastName,
    email: getRandomEmail(firstName, lastName),
    password: 'Password123!'
};

module.exports = {
    getRandomFirstName,
    getRandomLastName,
    getRandomEmail,
    userData
};