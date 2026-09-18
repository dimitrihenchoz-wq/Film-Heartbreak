export const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const withBase = (href: string) => (href === "/" ? `${base}/` : `${base}${href}`);
