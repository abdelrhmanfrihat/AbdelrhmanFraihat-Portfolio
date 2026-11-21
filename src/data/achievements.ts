export type Achievement = { title: string; category: 'Education'|'Tech'|'General'; issuer: string; tags: string[]; image?: string; link?: string }
// Add verified achievements here when available. Empty items keep the compact education layout.
export const achievements: Achievement[] = []
