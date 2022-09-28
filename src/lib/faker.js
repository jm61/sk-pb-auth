import { faker } from "@faker-js/faker"
// import { faker } from '@faker-js/faker/locale/de';

export const USERS = []

export function createRandomUser() {
	return {
		/* title: faker.commerce.product(),
		price: faker.commerce.price(10, 99, 0, "€"),
		image: faker.image.avatar(),
		description: faker.commerce.productDescription(),
		category: faker.word.adjective(), */
		image: faker.image.fashion(256, 256),
	}
}

Array.from({ length: 10 }).forEach(() => {
	USERS.push(createRandomUser())
})

//console.log(USERS)
