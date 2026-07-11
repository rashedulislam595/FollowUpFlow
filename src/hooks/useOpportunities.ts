"use client";
import { useEffect, useState } from "react";
import type { Opportunity, OpportunityStatus } from "@/types/opportunity";
import { loadOpportunities, saveOpportunities } from "@/lib/storage";
import { sampleOpportunities } from "@/data/sample";
 
export function useOpportunities() {
  const [items, setItems] = useState<Opportunity[]>([]);
  const [ready, setReady] = useState(false);
 
  useEffect(() => {
    const stored = loadOpportunities();
    setItems(stored.length ? stored : sampleOpportunities);
    setReady(true);
  }, []);
 
  useEffect(() => {
    if (ready) saveOpportunities(items);
  }, [items, ready]);
 
  function addOpportunity(data: Omit<Opportunity, "id" | "createdAt" | "updatedAt">) {
    const now = new Date().toISOString();
    setItems((prev) => [
      { ...data, id: crypto.randomUUID(), createdAt: now, updatedAt: now },
      ...prev,
    ]);
  }
 
  function updateStatus(id: string, status: OpportunityStatus) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status, updatedAt: new Date().toISOString() } : item
      )
    );
  }
 
  function deleteOpportunity(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }
 
  return { items, ready, addOpportunity, updateStatus, deleteOpportunity };
}
