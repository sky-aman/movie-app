// src/userStore.js
import { writable } from 'svelte/store';

// Initialize the user store with an empty array for users
const userStore = writable([]);

export default userStore;
