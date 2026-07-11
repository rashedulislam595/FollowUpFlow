import type { Opportunity } from "@/types/opportunity";
 
export const sampleOpportunities: Opportunity[] = [
  {
    id: "seed-1",
    company: "Deep Web Studio",
    role: "Frontend Developer Intern",
    source: "Company website",
    status: "Applied",
    appliedDate: new Date().toISOString().slice(0, 10),
    followUpDate: new Date().toISOString().slice(0, 10),
    notes: "Applied through the internship page.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
