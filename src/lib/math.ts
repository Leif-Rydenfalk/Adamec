// Returns a random number between min (inclusive) and max (exclusive)
export function randomRange(min: number, max: number) {
	return Math.random() * (max - min) + min;
}
