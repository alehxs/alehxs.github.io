import { Buffer } from 'buffer';

// Polyfill Buffer for gray-matter
window.Buffer = Buffer;
globalThis.Buffer = Buffer;
