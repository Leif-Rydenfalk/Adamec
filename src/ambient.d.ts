interface Product {
	id: string;
	price: number; // USD
	name?: string;
	description?: string;
	imageSrc?: string;
}

interface CartProduct {
	id: string;
	// cartIndex: number; // int
}
