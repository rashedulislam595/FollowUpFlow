export function addDays(dateString: string, days: number) {
  const date = dateString ? new Date(dateString) : new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}
 
export function isOverdue(dateString: string) {
  if (!dateString) return false;
  const today = new Date().toISOString().slice(0, 10);
  return dateString < today;
}
 
export function formatDate(dateString: string) {
  if (!dateString) return "—";
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "2-digit", month: "short", year: "numeric",
  });
}
