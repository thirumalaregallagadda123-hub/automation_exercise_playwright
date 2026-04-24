// Function to generate random name and email
    export class DataGenerator {
        generateRandomCredentials() {
            const randomString = Math.random().toString(36).substring(2, 8);
            const name = `User${randomString}`;
            const email = `${randomString}@test.com`;
            return { name, email };
        }
    }