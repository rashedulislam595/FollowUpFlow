export type OpportunityStatus =
  | "Saved"
  | "Applied"
  | "Interview"
  | "Offer"
  | "Rejected";
 
export type Opportunity = {
  id: string;
  company: string;
  role: string;
  source: string;
  status: OpportunityStatus;
  appliedDate: string;
  followUpDate: string;
  contactName?: string;
  contactEmail?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
};
