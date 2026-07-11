"use client";
import type { Opportunity } from "@/types/opportunity";
import { isOverdue, formatDate } from "@/lib/dates";
import { buildFollowUpMessage } from "@/lib/templates";
 
export function FollowUpQueue({ items }: { items: Opportunity[] }) {
  const due = items.filter((i) => isOverdue(i.followUpDate) && i.status !== "Rejected");
  if (!due.length) return null;
 
  return (
    <div className="rounded-xl bg-slate-900 p-4">
      <p className="mb-2 text-sm font-semibold text-amber-400">
        Follow-up queue ({due.length})
      </p>
      <div className="space-y-2">
        {due.map((item) => (
          <div key={item.id} className="flex items-center justify-between rounded-lg bg-slate-800 p-3">
            <div>
              <p className="text-sm text-slate-100">{item.company} — {item.role}</p>
              <p className="text-xs text-slate-500">Due {formatDate(item.followUpDate)}</p>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText(buildFollowUpMessage(item))}
              className="rounded-lg bg-cyan-500 px-3 py-1 text-xs font-semibold text-slate-950"
            >
              Copy email
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
