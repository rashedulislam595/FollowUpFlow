import type { Opportunity, OpportunityStatus } from "@/types/opportunity";
import { OpportunityCard } from "@/components/OpportunityCard";
import { EmptyState } from "./EmptyState";
 
const COLUMNS: OpportunityStatus[] = ["Saved", "Applied", "Interview", "Offer", "Rejected"];
 
type Props = {
  items: Opportunity[];
  onStatusChange: (id: string, status: OpportunityStatus) => void;
  onDelete: (id: string) => void;
};
 
export function StatusBoard({ items, onStatusChange, onDelete }: Props) {
  if (!items.length) return <EmptyState />;
  return (
    <div className="grid gap-4 md:grid-cols-5">
      {COLUMNS.map((col) => (
        <div key={col} className="space-y-3">
          <p className="text-sm font-semibold text-slate-300">{col}</p>
          {items.filter((i) => i.status === col).map((item) => (
            <OpportunityCard key={item.id} item={item}
              onStatusChange={onStatusChange} onDelete={onDelete} />
          ))}
        </div>
      ))}
    </div>
  );
}
