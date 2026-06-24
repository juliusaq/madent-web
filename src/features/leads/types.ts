export interface LeadInput {
  name: string;
  clinic_name?: string;
  email: string;
  phone: string;
  city?: string;
  message?: string;
}

export interface LeadSubmitResult {
  success: boolean;
  error?: string;
}
