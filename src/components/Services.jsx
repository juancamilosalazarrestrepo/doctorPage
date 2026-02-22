"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Scan, Activity, Brain, FileHeart, ArrowUpRight } from 'lucide-react';

const services = [
    {
        icon: <Scan size={32} />,
        title: 'Tomografía Computarizada',
        description: 'Imágenes tridimensionales de alta resolución para el diagnóstico preciso de patologías complejas.',
    },
    {
        icon: <Activity size={32} />,
        title: 'Ultrasonido Doppler',
        description: 'Tecnología no invasiva para estudios abdominales, obstétricos, vasculares y musculoesqueléticos.',
    },
    {
        icon: <Brain size={32} />,
        title: 'Resonancia Magnética',
        description: 'Visualización de alta definición de tejidos blandos, sistema nervioso y articulaciones.',
    },
    {
        icon: <FileHeart size={32} />,
        title: 'Rayos X Digitales',
        description: 'Radiografía digital con menor exposición para evaluación ósea, torácica y dental.',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-[var(--color-primary)] relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent"></div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]"
                    >
                        Especialidades <span className="text-[var(--color-accent)]">Médicas</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[var(--color-text-muted)] max-w-2xl mx-auto"
                    >
                        Tecnología de última generación aplicada a un diagnóstico preciso y confiable.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group glass p-8 rounded-2xl border border-white/5 hover:border-[var(--color-accent)]/30 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <a href="#contact" className="inline-flex items-center text-[var(--color-accent)] text-sm font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                                    Solicitar
                                    <ArrowUpRight size={16} className="ml-1" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
