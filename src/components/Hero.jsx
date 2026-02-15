"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Award, Users, Clock } from 'lucide-react';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/imagen10.jpeg"
                    alt="Dr. Cristian Machado"
                    className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/95 via-[var(--color-primary)]/80 to-[var(--color-primary)]/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-[100px] z-0"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-[var(--color-secondary)]/10 rounded-full blur-[80px] z-0"></div>

            {/* Content */}
            <div className="container-custom relative z-10 pt-28 pb-20">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Text Content */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-[var(--color-accent-light)] text-sm font-medium mb-8">
                                <Award size={14} />
                                <span>Médico Especialista en Diagnóstico por Imágenes</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[0.95] tracking-tight"
                        >
                            Dr. Cristian{' '}
                            <span className="text-gradient-gold block mt-2">
                                Machado Otero
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg sm:text-xl text-white/70 mb-10 max-w-xl leading-relaxed"
                        >
                            Precisión diagnóstica con tecnología de última generación.
                            Comprometido con tu salud y bienestar a través de la imagenología avanzada.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href="#contact"
                                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-accent)] to-[#D4B85A] text-[var(--color-primary)] px-8 py-4 rounded-2xl font-bold text-base shadow-[var(--shadow-gold)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                Agendar Cita
                                <span className="w-6 h-6 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                            <a
                                href="#about"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white border border-white/20 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                            >
                                Conocer Más
                            </a>
                        </motion.div>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap gap-8 mt-16 pt-10 border-t border-white/10"
                        >
                            {[
                                { icon: <Clock size={18} />, value: '15+', label: 'Años de Experiencia' },
                                { icon: <Users size={18} />, value: '5,000+', label: 'Pacientes Atendidos' },
                                { icon: <Award size={18} />, value: '100%', label: 'Compromiso' },
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-accent)]">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                                        <p className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="lg:col-span-5 hidden lg:block"
                    >
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    src="/imagen1.jpeg"
                                    alt="Dr. Cristian Machado Otero"
                                    className="w-full h-[600px] object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/60 via-transparent to-transparent"></div>
                            </div>

                            {/* Floating Card */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -bottom-6 -left-6 z-20 glass-dark rounded-2xl p-4 pr-8"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-accent)] to-[#D4B85A] rounded-xl flex items-center justify-center">
                                        <Award size={22} className="text-[var(--color-primary)]" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">Especialista Certificado</p>
                                        <p className="text-white/60 text-xs">Diagnóstico por Imágenes</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Background decoration */}
                            <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl border-2 border-[var(--color-accent)]/20 z-0"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <a href="#about" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors">
                    <span className="text-xs uppercase tracking-widest">Explorar</span>
                    <ChevronDown size={20} />
                </a>
            </motion.div>
        </section>
    );
}
