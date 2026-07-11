"use client";
import { AppHeader } from "@/components/AppHeader";
import { FilterBar } from "@/components/FilterBar";
import { FollowUpQueue } from "@/components/FollowUpQueue";
import { Metrics } from "@/components/Metrics";
import { OpportunityForm } from "@/components/OpportunityForm";
import { StatusBoard } from "@/components/StatusBoard";
import { useOpportunities } from "@/hooks/useOpportunities";
import { useMemo, useState } from "react";

 
export default function Home() {
  const { items, ready, addOpportunity, updateStatus, deleteOpportunity } = useOpportunities();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
 
  const filtered = useMemo(() => items.filter((item) => {
    const text = `${item.company} ${item.role} ${item.notes ?? ""}`.toLowerCase();
    const matchesText = text.includes(query.toLowerCase());
    const matchesStatus = status === "All" || item.status === status;
    return matchesText && matchesStatus;
  }), [items, query, status]);
 
  if (!ready) return <main className="p-6 text-slate-400">Loading workspace…</main>;
 
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-7xl space-y-6 p-4 md:p-8">
        <AppHeader />
        <Metrics items={items} />
        <OpportunityForm onAdd={addOpportunity} />
        <FollowUpQueue items={items} />
        <FilterBar query={query} onQueryChange={setQuery} status={status} onStatusChange={setStatus} />
        <StatusBoard items={filtered} onStatusChange={updateStatus} onDelete={deleteOpportunity} />
      </section>
    </main>
  );
}
