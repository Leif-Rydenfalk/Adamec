import { writable, derived } from 'svelte/store';
// import type { Writable } from 'svelte/store';

// function create_cart() {
// 	const { subscribe, set, update } = writable({
// 		products: [
// 			// 1, 2, 3, 4, 5, 6
// 		]
// 	});

// 	let add = (product: Number) => {
// 		update((cart) => {
// 			cart.products.push(product);
// 			return cart;
// 		});
// 	};

// 	return {
// 		subscribe,
// 		add
// 	};
// }

import { persisted } from 'svelte-persisted-store';
import type { Persisted } from 'svelte-persisted-store';

class Cart {
	constructor(
		public cartProducts: Persisted<CartProduct[]> = persisted('cart', [])
	) {}

	// get fullname() {
	// 	// Use derived to access writable values and export as readonly
	// 	return derived(
	// 		[this.firstname, this.lastname],
	// 		([$firstName, $lastName]) => {
	// 			return $firstName + ' ' + $lastName;
	// 		}
	// 	);
	// }

	get productCount() {
		return derived(this.cartProducts, ($cartProducts) => $cartProducts.length);
	}

	add(cartProduct: CartProduct) {
		this.cartProducts.update((cartProducts) => {
			cartProducts.push(cartProduct);
			return cartProducts;
		});
	}

	remove(index: number) {
		this.cartProducts.update((cartProducts) => {
			// cart.push(cartProduct);
			cartProducts.splice(index, 1);
			return cartProducts;
		});
	}

	clear() {
		this.cartProducts.update((cartProducts) => {
			cartProducts = [];
			return cartProducts;
		});
	}
}

export const cart = new Cart();

export const showCart = writable(false);
