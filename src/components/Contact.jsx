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
        <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent)]/3 rounded-full blur-[150px]"></div>

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
                    <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-6 tracking-tight">
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
                                className="flex items-start gap-4 p-5 rounded-2xl bg-[var(--color-bg)] hover:bg-[var(--color-bg-warm)] transition-colors group"
                            >
                                <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/5 flex items-center justify-center text-[var(--color-accent)] group-hover:bg-gradient-to-br group-hover:from-[var(--color-accent)] group-hover:to-[#D4B85A] group-hover:text-[var(--color-primary)] transition-all shrink-0">
                                    {info.icon}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--color-primary)] text-sm mb-1">{info.title}</h4>
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
                        <div className="bg-[var(--color-bg)] rounded-3xl p-8 lg:p-10 shadow-[var(--shadow-sm)] border border-gray-100">
                            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
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
                                            className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all text-sm"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Apellido</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all text-sm"
                                            placeholder="Tu apellido"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all text-sm"
                                            placeholder="tu@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Teléfono</label>
                                        <input
                                            type="tel"
                                            className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all text-sm"
                                            placeholder="+57 300..."
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Estudio solicitado</label>
                                    <select className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all text-sm text-[var(--color-text-muted)]">
                                        <option value="">Selecciona un estudio</option>
                                        <option>Tomografía Computarizada</option>
                                        <option>Ultrasonido</option>
                                        <option>Resonancia Magnética</option>
                                        <option>Rayos X Digitales</option>
                                        <option>Otro</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Mensaje</label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all text-sm resize-none"
                                        placeholder="¿En qué podemos ayudarte?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold py-4 rounded-xl hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    <Send size={18} />
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
