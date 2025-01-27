import { products } from '$lib/products.js';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	// Return the product with the given ID
	let product = products[params.id];

	// If the product does not exist
	if (!product) {
		// Return a 404 error
		return { status: 404, error: 'Product not found' };
	}

	// Return the product data
	return { product };
};
