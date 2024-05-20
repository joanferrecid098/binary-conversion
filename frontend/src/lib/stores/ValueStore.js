import { writable } from 'svelte/store';

const isBrowser = typeof window !== 'undefined';

let value = 0;
if (isBrowser) value = JSON.parse(localStorage.storable);

const ValueStore = writable(value);

export default ValueStore;