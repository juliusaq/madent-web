'use server';

import { getSupabaseServer } from '@/lib/supabase/server';
import { LeadInput, LeadSubmitResult } from './types';
import { notifyNewLead } from './notifications';
import { trackLeadSubmitted } from '@/lib/analytics';

// Basic email regex validator
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Server Action to validate and submit a new lead to the Supabase database.
 */
export async function submitLead(input: LeadInput): Promise<LeadSubmitResult> {
  // 1. Inputs validation
  if (!input.name || !input.name.trim()) {
    return { success: false, error: 'El nombre completo es requerido.' };
  }

  if (!input.email || !input.email.trim()) {
    return { success: false, error: 'El correo electrónico es requerido.' };
  }

  if (!EMAIL_REGEX.test(input.email.trim())) {
    return { success: false, error: 'El formato del correo electrónico no es válido.' };
  }

  if (!input.phone || !input.phone.trim()) {
    return { success: false, error: 'El teléfono/WhatsApp es requerido.' };
  }

  // 2. Initialize Supabase client
  const supabase = getSupabaseServer();
  if (!supabase) {
    return { 
      success: false, 
      error: 'El servicio de registro temporalmente no está configurado. Por favor, contáctanos directamente por correo.' 
    };
  }

  // 3. Database insert operation
  try {
    const { error } = await supabase
      .from('leads')
      .insert([
        {
          name: input.name.trim(),
          clinic_name: input.clinic_name?.trim() || null,
          email: input.email.trim(),
          phone: input.phone.trim(),
          city: input.city?.trim() || null,
          message: input.message?.trim() || null,
          status: 'new',
          source: 'website',
          demo_requested: true
        }
      ]);

    if (error) {
      console.error('Supabase DB error inserting lead:', error.message);
      return { 
        success: false, 
        error: 'No pudimos procesar tu registro en este momento. Por favor, intenta más tarde.' 
      };
    }

    // 4. Trigger notifications & analytics asynchronously
    await notifyNewLead(input);
    trackLeadSubmitted(input.email);

    return { success: true };

  } catch (err) {
    console.error('Unhandled exception in submitLead Server Action:', err);
    return { 
      success: false, 
      error: 'Ocurrió un error inesperado al procesar tu solicitud. Inténtalo de nuevo.' 
    };
  }
}
