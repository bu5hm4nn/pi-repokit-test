const cache = new Map<string, string>();

/** Look up a cached value. */
export function lookup(key: string): string | undefined {
	return cache.get(key);
}

/** Store a value in the cache. */
export function store(key: string, value: string): void {
	cache.set(key, value);
}

/** Remove every cached value. */
export function clear(): void {
	cache.clear();
}
