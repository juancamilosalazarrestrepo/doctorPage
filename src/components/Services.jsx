"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Scan, Activity, Brain, FileHeart, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: <Scan size={32} />,
        title: 'Tomografía Computarizada',
        description: 'Imágenes tridimensionales de alta resolución para el diagnóstico preciso de patologías complejas.',
        features: ['Multicorte de alta velocidad', 'Reconstrucción 3D', 'Baja radiación'],
    },
    {
        icon: <Activity size={32} />,
        title: 'Ultrasonido',
        description: 'Tecnología no invasiva para estudios abdominales, obstétricos, vasculares y musculoesqueléticos.',
        features: ['Doppler color', 'Ecografía 4D', 'Tiempo real'],
    },
    {
        icon: <Brain size={32} />,
        title: 'Resonancia Magnética',
        description: 'Visualización de alta definición de tejidos blandos, sistema nervioso y articulaciones.',
        features: ['Alto campo magnético', 'Sin radiación', 'Alta resolución'],
    },
    {
        icon: <FileHeart size={32} />,
        title: 'Rayos X Digitales',
        description: 'Radiografía digital con menor exposición para evaluación ósea, torácica y dental.',
        features: ['Resultado inmediato', 'Formato digital', 'Baja dosis'],
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 lg:py-32 bg-[var(--color-bg)] relative">
            {/* Decorative */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-secondary)]/3 rounded-full blur-[120px]"></div>

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
                        Servicios
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-6 tracking-tight">
                        Estudios de{' '}
                        <span className="text-gradient-gold">Diagnóstico</span>
                    </h2>
                    <div className="section-divider mb-6"></div>
                    <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg">
                        Tecnología de vanguardia al servicio de diagnósticos precisos y oportunos.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all duration-500 border border-gray-100 hover:border-[var(--color-accent)]/20 overflow-hidden"
                        >
                            {/* Hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/3 group-hover:to-transparent transition-all duration-500 rounded-3xl"></div>

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/5 flex items-center justify-center text-[var(--color-accent)] mb-6 group-hover:bg-gradient-to-br group-hover:from-[var(--color-accent)] group-hover:to-[#7EC8E3] group-hover:text-white transition-all duration-500 group-hover:shadow-[var(--shadow-gold)]">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.features.map((feature, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-[var(--color-bg)] text-[var(--color-text-muted)] text-xs font-medium rounded-full border border-gray-100"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                <a href="#contact" className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold text-sm group/link">
                                    Solicitar estudio
                                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
