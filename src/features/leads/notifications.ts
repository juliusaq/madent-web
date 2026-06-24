import { LeadInput } from './types';

/**
 * Simulates notifying the team about a new captured lead.
 * Prepared for future Resend email template delivery integration.
 */
export async function notifyNewLead(lead: LeadInput): Promise<void> {
  console.log('--------------------------------------------------');
  console.log('🔔 [SOPORTE MADENT] ¡Nuevo Lead Registrado!');
  console.log(`👤 Nombre: ${lead.name}`);
  console.log(`📧 Correo: ${lead.email}`);
  console.log(`📞 Tel/WhatsApp: ${lead.phone}`);
  console.log(`🏢 Consultorio: ${lead.clinic_name || 'No especificado'}`);
  console.log(`📍 Ciudad: ${lead.city || 'No especificada'}`);
  console.log(`💬 Mensaje: ${lead.message || 'Sin mensaje adicional'}`);
  console.log('--------------------------------------------------');
}
