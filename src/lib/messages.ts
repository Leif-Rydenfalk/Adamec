import { writable, derived } from 'svelte/store';

interface Message {
	// lifetime: number;
	message: string;
	type: string;
}

// function createMessagesStore() {
// 	const { subscribe, set, update } = writable<Message[]>([]);

// 	return {
// 		subscribe,
// 		add: (message: Message) => {
// 			update((messages) => {
// 				return [...messages, message];
// 			});
// 		},
// 		remove: (message: Message) => {
// 			update((messages) => {
// 				return messages.filter((m) => m !== message);
// 			});
// 		}
// 	};
// }

// export const messages = createMessagesStore();

export const message = writable<Message | null>(null);
