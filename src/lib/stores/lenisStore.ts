import Lenis from 'lenis';
import Snap from 'lenis/snap';
import { writable, type Writable } from 'svelte/store';

interface LenisState {
	instance: Lenis | null;
	snap: Snap | null;
}

function createLenisStore() {
	const { subscribe, set, update }: Writable<LenisState> = writable({
		instance: null,
		snap: null
	});

	return {
		subscribe,
		setInstance: (lenis_instance: Lenis) =>
			update((state) => {
				state.instance = lenis_instance;
				return state;
			}),
		getInstance: () =>
			new Promise<Lenis | null>((resolve) => {
				const unsubscribe = subscribe(({ instance }) => {
					if (instance) {
						resolve(instance);
						unsubscribe();
					}
				});
			}),
		createSnap: () =>
			update((state) => {
				if (state.instance) {
					state.snap = new Snap(state.instance, {
						easing: (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2),
						duration: 2.5
					});
				} else {
					console.error('No Lenis instance found');
				}
				return state;
			}),
		destroySnap: () => {
			update((state) => {
				if (state.snap) {
					state.snap.destroy();
					state.snap = null;
				}
				return state;
			});
		},
		getSnap: () =>
			new Promise<Snap | null>((resolve) => {
				const unsubscribe = subscribe(({ snap }) => {
					if (snap) {
						resolve(snap);
						unsubscribe();
					}
				});
			})
	};
}

export const lenis_store = createLenisStore();
