"use client";
type Props = {
  query: string; onQueryChange: (v: string) => void;
  status: string; onStatusChange: (v: string) => void;
};
 
const STATUSES = ["All", "Saved", "Applied", "Interview", "Offer", "Rejected"];
 
export function FilterBar({ query, onQueryChange, status, onStatusChange }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      <input value={query} onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search company or role" className="rounded-lg bg-slate-800 p-2 text-sm" />
      <select value={status} onChange={(e) => onStatusChange(e.target.value)}
        className="rounded-lg bg-slate-800 p-2 text-sm">
        {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>
    </div>
  );
}
