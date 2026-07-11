import type { Opportunity } from "@/types/opportunity";
import { isOverdue } from "@/lib/dates";
 
export function Metrics({ items }: { items: Opportunity[] }) {
  const total = items.length;
  const interviews = items.filter((i) => i.status === "Interview").length;
  const offers = items.filter((i) => i.status === "Offer").length;
  const overdue = items.filter((i) => isOverdue(i.followUpDate)).length;
 
  const cards = [
    { label: "Applications", value: total },
    { label: "Active interviews", value: interviews },
    { label: "Offers", value: offers },
    { label: "Overdue follow-ups", value: overdue },
  ];
 
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {cards.map((card) => (
        <div key={card.label} className="rounded-xl bg-slate-900 p-4">
          <p className="text-2xl font-bold text-slate-100">{card.value}</p>
          <p className="text-sm text-slate-400">{card.label}</p>
        </div>
      ))}
    </div>
  );
}
