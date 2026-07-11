"use client";
import { useState } from "react";
import type { Opportunity } from "@/types/opportunity";
import { addDays } from "@/lib/dates";
 
type Props = { onAdd: (data: Omit<Opportunity, "id" | "createdAt" | "updatedAt">) => void };
 
export function OpportunityForm({ onAdd }: Props) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [source, setSource] = useState("");
 
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!company.trim() || !role.trim()) return;
    const appliedDate = new Date().toISOString().slice(0, 10);
    onAdd({
      company, role, source, status: "Applied",
      appliedDate, followUpDate: addDays(appliedDate, 3),
    });
    setCompany(""); setRole(""); setSource("");
  }
 
  return (
    <form onSubmit={handleSubmit} className="grid gap-3 rounded-xl bg-slate-900 p-4 md:grid-cols-4">
      <input value={company} onChange={(e) => setCompany(e.target.value)}
        placeholder="Company" className="rounded-lg bg-slate-800 p-2 text-sm" />
      <input value={role} onChange={(e) => setRole(e.target.value)}
        placeholder="Role" className="rounded-lg bg-slate-800 p-2 text-sm" />
      <input value={source} onChange={(e) => setSource(e.target.value)}
        placeholder="Source (LinkedIn, referral...)" className="rounded-lg bg-slate-800 p-2 text-sm" />
      <button type="submit" className="rounded-lg bg-cyan-500 p-2 text-sm font-semibold text-slate-950">
        Add application
      </button>
    </form>
  );
}
