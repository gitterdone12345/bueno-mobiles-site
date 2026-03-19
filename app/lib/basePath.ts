/** Base path for all static assets and routes. Must match next.config.ts basePath. */
export const BASE_PATH = "/buenomobiles";

/** Prefix a static asset path with the base path */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
