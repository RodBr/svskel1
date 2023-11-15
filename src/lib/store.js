import { writable } from 'svelte/store';

export const showDetails = writable(true);

export const notificationsAllowed = writable(false);

export const locationAllowed = writable(false);
