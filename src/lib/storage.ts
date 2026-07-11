import type { Opportunity } from "@/types/opportunity";
 
const STORAGE_KEY = "followupflow-opportunities-v1";
 
export function loadOpportunities(): Opportunity[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Opportunity[]) : [];
  } catch {
    return [];
  }
}
 
export function saveOpportunities(items: Opportunity[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}
