"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactInfo = [
    {
        icon: <MapPin size={20} />,
        title: 'Ubicación',
        lines: ['Clínica de Especialistas', 'Consultorio 401, Bogotá'],
    },
    {
        icon: <Phone size={20} />,
        title: 'Teléfono',
        lines: ['+57 300 123 4567'],
    },
    {
        icon: <Mail size={20} />,
        title: 'Email',
        lines: ['contacto@drmachado.com'],
    },
    {
        icon: <Clock size={20} />,
        title: 'Horarios',
        lines: ['Lun - Vie: 8:00 - 18:00', 'Sáb: 8:00 - 13:00'],
    },
];

export default function Contact() {
    return (
        <section id="contact" className="py-24 lg:py-32 relative overflow-hidden" style={{
            background: `
                    radial-gradient(ellipse 80% 50% at 20% 80%, rgba(30, 64, 175, 0.08) 0%, transparent 60%),
                    radial-gradient(ellipse 60% 80% at 80% 20%, rgba(37, 99, 235, 0.05) 0%, transparent 50%),
                    radial-gradient(ellipse 100% 60% at 50% 100%, rgba(29, 78, 216, 0.06) 0%, transparent 50%),
                    linear-gradient(160deg, #020617 0%, #020a1a 30%, #03112a 55%, #020a1a 75%, #020617 100%)
                `,
            backgroundAttachment: 'fixed'
        }}>
            {/* Animated Wave Blobs */}
            <div className="absolute inset-0 overflow-hidden" style={{ transform: 'translateZ(0)' }}>
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#1e40af]/6 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-[#1d4ed8]/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-[#2563eb]/3 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="container-custom relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-[var(--color-accent)] font-semibold uppercase tracking-[0.15em] text-sm mb-4 block">
                        Contacto
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                        Agenda tu{' '}
                        <span className="text-gradient-gold">Consulta</span>
                    </h2>
                    <div className="section-divider mb-6"></div>
                    <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
                        Estamos listos para atenderte con la mejor calidad profesional y humana.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-10">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Info Cards */}
                        {contactInfo.map((info, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex items-start gap-4 p-5 rounded-2xl glass hover:bg-white/5 transition-all duration-300 group"
                            >
                                <div className="w-11 h-11 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] group-hover:bg-gradient-to-br group-hover:from-[var(--color-accent)] group-hover:to-[#7EC8E3] group-hover:text-[var(--color-primary)] transition-all duration-300 shrink-0">
                                    {info.icon}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white text-sm mb-1">{info.title}</h4>
                                    {info.lines.map((line, j) => (
                                        <p key={j} className="text-[var(--color-text-muted)] text-sm">{line}</p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}

                        {/* Map */}
                        <div className="w-full h-52 rounded-2xl overflow-hidden shadow-[var(--shadow-md)] border border-gray-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.787729864239!2d-74.05370422525703!3d4.632007895342805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a3c3d3d3d3d%3A0x3d3d3d3d3d3d3d3d!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1699999999999!5m2!1ses!2sco"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-3"
                    >
                        <div className="glass rounded-3xl p-8 lg:p-10 shadow-[var(--shadow-xl)]">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                Envíanos un Mensaje
                            </h3>
                            <p className="text-[var(--color-text-muted)] text-sm mb-8">
                                Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                            </p>

                            <form className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Nombre</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all text-sm text-white"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Apellido</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all text-sm text-white"
                                            placeholder="Tu apellido"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all text-sm text-white"
                                            placeholder="tu@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Teléfono</label>
                                        <input
                                            type="tel"
                                            className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all text-sm text-white"
                                            placeholder="+57 300..."
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Estudio solicitado</label>
                                    <select className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all text-sm text-white/70">
                                        <option value="" className="bg-[var(--color-secondary)]">Selecciona un estudio</option>
                                        <option className="bg-[var(--color-secondary)] text-white">Tomografía Computarizada</option>
                                        <option className="bg-[var(--color-secondary)] text-white">Ultrasonido</option>
                                        <option className="bg-[var(--color-secondary)] text-white">Resonancia Magnética</option>
                                        <option className="bg-[var(--color-secondary)] text-white">Rayos X Digitales</option>
                                        <option className="bg-[var(--color-secondary)] text-white">Otro</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Mensaje</label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all text-sm text-white resize-none"
                                        placeholder="¿En qué podemos ayudarte?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 text-white font-semibold py-4 rounded-xl border-none hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 transition-all duration-500 group"
                                    style={{
                                        backgroundImage: 'linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 40%, #3b82f6 60%, #1e40af 100%)',
                                        backgroundSize: '200% 200%',
                                        backgroundPosition: '0% 50%',
                                        transition: 'all 0.5s ease',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.backgroundPosition = '100% 50%'}
                                    onMouseLeave={e => e.currentTarget.style.backgroundPosition = '0% 50%'}
                                >
                                    <Send size={18} className="text-white/90 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
