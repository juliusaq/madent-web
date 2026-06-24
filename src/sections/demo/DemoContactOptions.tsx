'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitLead } from '@/features/leads/actions';

export default function DemoContactOptions() {
  const router = useRouter();
  
  // Form states
  const [name, setName] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  
  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setIsSubmitting(true);

    try {
      const res = await submitLead({
        name,
        clinic_name: clinicName,
        email,
        phone,
        city,
        message,
      });

      if (res.success) {
        // Reset form
        setName('');
        setClinicName('');
        setEmail('');
        setPhone('');
        setCity('');
        setMessage('');
        
        // Redirect to /gracias
        router.push('/gracias');
      } else {
        setErrorMsg(res.error || 'Ocurrió un error inesperado al enviar los datos.');
      }
    } catch (err) {
      console.error('Unhandled submit error:', err);
      setErrorMsg('Error de conexión. Por favor, revisa tu red e inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto-demo" className="py-24 sm:py-32 bg-[#FAFAFA] relative border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">
            Opciones de contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight mb-4">
            Solicita tu demostración personalizada
          </h2>
          <p className="text-text text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Déjanos tus datos y te contactaremos para mostrarte cómo MADENT puede adaptarse a tu consultorio.
          </p>
        </div>

        {/* Bento Grid Layout - Form is primary (col-span-8), others are secondary (col-span-4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Form (lg:col-span-8 - Featured central card) */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.03)] flex flex-col justify-between transition-all duration-300 hover:border-slate-300">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-primary mb-3">
                Solicitar demo
              </h3>
              <p className="text-text text-sm leading-relaxed mb-8">
                Completa el siguiente formulario para coordinar tu sesión de demostración.
              </p>

              {/* Form inputs */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Nombre completo</label>
                    <input 
                      type="text" 
                      id="nombre" 
                      placeholder="Tu nombre" 
                      className="w-full p-3.5 rounded-xl border border-slate-200 text-sm text-primary placeholder-slate-400 bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all font-medium disabled:opacity-60"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="consultorio" className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Nombre del consultorio</label>
                    <input 
                      type="text" 
                      id="consultorio" 
                      placeholder="Nombre de tu consultorio" 
                      className="w-full p-3.5 rounded-xl border border-slate-200 text-sm text-primary placeholder-slate-400 bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all font-medium disabled:opacity-60"
                      value={clinicName}
                      onChange={(e) => setClinicName(e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="correo" className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Correo electrónico</label>
                    <input 
                      type="email" 
                      id="correo" 
                      placeholder="tu@correo.com" 
                      className="w-full p-3.5 rounded-xl border border-slate-200 text-sm text-primary placeholder-slate-400 bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all font-medium disabled:opacity-60"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">WhatsApp</label>
                    <input 
                      type="tel" 
                      id="whatsapp" 
                      placeholder="Tu número de WhatsApp" 
                      className="w-full p-3.5 rounded-xl border border-slate-200 text-sm text-primary placeholder-slate-400 bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all font-medium disabled:opacity-60"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="ciudad" className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Ciudad / Estado</label>
                  <input 
                    type="text" 
                    id="ciudad" 
                    placeholder="Ciudad y estado" 
                    className="w-full p-3.5 rounded-xl border border-slate-200 text-sm text-primary placeholder-slate-400 bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all font-medium disabled:opacity-60"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Mensaje (Opcional)</label>
                  <textarea 
                    id="mensaje" 
                    rows={3}
                    placeholder="Cuéntanos qué te gustaría mejorar en tu consultorio" 
                    className="w-full p-3.5 rounded-xl border border-slate-200 text-sm text-primary placeholder-slate-400 bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all font-medium resize-none disabled:opacity-60"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>

                {errorMsg && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-150 text-red-600 text-xs font-semibold leading-relaxed">
                    {errorMsg}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-4 px-6 rounded-xl bg-primary text-white font-semibold text-base shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar mi demo'}
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: WhatsApp & Calendly Stack (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
            
            {/* Card: WhatsApp */}
            <div className="p-6 rounded-[24px] bg-white border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.005)] flex flex-col justify-between flex-1 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(15,23,42,0.02)]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-900/5 text-slate-400 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-primary mb-2">
                  Hablar por WhatsApp
                </h3>
                <p className="text-text text-xs leading-relaxed mb-4">
                  Escríbenos y coordinamos una demostración en el horario que mejor te funcione.
                </p>
              </div>
              
              <div className="flex flex-col gap-2 mt-auto">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block text-center">
                  Próximamente
                </span>
                <button 
                  disabled 
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-400 font-semibold text-xs cursor-not-allowed transition-colors"
                >
                  Enviar mensaje
                </button>
              </div>
            </div>

            {/* Card: Calendly */}
            <div className="p-6 rounded-[24px] bg-white border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.005)] flex flex-col justify-between flex-1 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(15,23,42,0.02)]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-900/5 text-slate-400 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-primary mb-2">
                  Agendar llamada
                </h3>
                <p className="text-text text-xs leading-relaxed mb-4">
                  Elige un horario disponible para conocer MADENT.
                </p>
              </div>
              
              <div className="flex flex-col gap-2 mt-auto">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block text-center">
                  Próximamente
                </span>
                <button 
                  disabled 
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-400 font-semibold text-xs cursor-not-allowed transition-colors"
                >
                  Agendar en calendario
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
