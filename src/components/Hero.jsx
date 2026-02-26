"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-primary)]">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/banner1.jpg"
                    alt="Diagnostic Imaging Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/80 to-[var(--color-primary)]/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[var(--color-primary)]/50 to-[var(--color-primary)]"></div>
            </div>

            {/* Decorative Overlay */}
            <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>

            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-[120px] animate-pulse"></div>

            {/* Content */}
            <div className="container-custom relative z-10 pt-20 pb-24 lg:pb-0">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Side: Text Content */}
                    <div className="max-w-2xl order-2 lg:order-1 mb-16 lg:mb-0">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs font-bold tracking-widest uppercase mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
                                </span>
                                Tecnología de Próxima Generación
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter text-white mb-6 font-[family-name:var(--font-heading)]"
                        >
                            Precisión que <br />
                            <span className="text-gradient-cyan drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                                Transformará tu vida
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-[var(--color-text-muted)] mb-10 max-w-xl leading-relaxed"
                        >
                            Visualización 3D de alta definición y análisis asistido por tecnología avanzada para un diagnóstico médico sin precedentes. La vanguardia en imagenología al servicio de su salud.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <button className="bg-[var(--color-accent)] text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-glow">
                                EXPLORAR TECNOLOGÍA
                                <ArrowRight size={20} />
                            </button>
                            <a href="#about" className="glass px-8 py-4 rounded-xl font-bold text-white border border-white/10 hover:bg-white/5 transition-all text-center">
                                CONOCER EQUIPO
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Side: Doctor Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative lg:order-2 order-1"
                    >
                        <div className="relative group mx-auto max-w-md lg:max-w-none mt-28 lg:mt-0">
                            {/* Decorative Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-accent)]/20 to-transparent blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

                            {/* Glass Frame */}
                            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/20 glass shadow-2xl p-2">
                                <img
                                    src="/doctor4.webp"
                                    alt="Dr. Cristian Machado Otero"
                                    className="w-full aspect-[4/5] lg:aspect-auto lg:h-[500px] object-cover rounded-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                />
                                {/* Internal Glow/Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 via-transparent to-transparent"></div>

                                {/* Professional Label */}
                                <div className="absolute bottom-6 left-6 right-6 glass-dark p-4 rounded-xl border border-white/10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-white font-bold text-xl mb-1">Dr. Cristian Machado Otero</p>
                                    <p className="text-[var(--color-accent)] text-sm font-medium tracking-wide">Especialista en Radiología Avanzada</p>
                                </div>
                            </div>

                            {/* Decorative Floating Elements */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--color-accent)]/10 rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--color-accent)]/5 rounded-full blur-2xl animate-pulse delay-700"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <ChevronDown className="text-white/30" size={32} />
            </motion.div>
        </section>
    );
}
