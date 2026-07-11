import type { Opportunity } from "@/types/opportunity";
 
export function buildFollowUpMessage(item: Opportunity) {
  const contact = item.contactName ? item.contactName : "there";
  return `Hi ${contact},\n\nI wanted to follow up on my application for the ${item.role} role at ${item.company}. I'm still very interested and happy to share any additional information.\n\nThank you for your time,\n[Your Name]`;
}
