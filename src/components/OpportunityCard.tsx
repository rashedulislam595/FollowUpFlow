import type { Opportunity, OpportunityStatus } from "@/types/opportunity";
import { formatDate } from "@/lib/dates";

type Props = {
  item: Opportunity;
  onStatusChange: (id: string, status: OpportunityStatus) => void;
  onDelete: (id: string) => void;
};

const statusOptions: OpportunityStatus[] = [
  "Saved",
  "Applied",
  "Interview",
  "Offer",
  "Rejected",
];

export function OpportunityCard({
  item,
  onStatusChange,
  onDelete,
}: Props) {
  return (
    <div className="rounded-xl bg-slate-900 p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-slate-100">{item.company}</p>
          <p className="text-sm text-slate-400">
            {item.role} · {item.source}
          </p>
        </div>

        <button
          onClick={() => onDelete(item.id)}
          className="text-xs font-medium text-red-400 transition hover:text-red-300"
        >
          Delete
        </button>
      </div>

      <p className="mt-2 text-xs text-slate-500">
        Follow up: {formatDate(item.followUpDate)}
      </p>

      <div className="mt-4">
        <label
          htmlFor={`status-${item.id}`}
          className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-400"
        >
          Status
        </label>

        <select
          id={`status-${item.id}`}
          value={item.status}
          onChange={(e) =>
            onStatusChange(item.id, e.target.value as OpportunityStatus)
          }
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
        >
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}