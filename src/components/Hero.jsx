"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Award, Users, Clock } from 'lucide-react';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen overflow-hidden">

            {/* ============================== */}
            {/* DESKTOP BANNER (≥1024px)       */}
            {/* ============================== */}
            <div className="hidden lg:flex relative min-h-screen items-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/imagen10.jpeg"
                        alt="Dr. Cristian Machado"
                        className="w-full h-full object-cover object-[50%_0%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/95 via-[var(--color-primary)]/80 to-[var(--color-primary)]/40"></div>
                    <div className="absolute inset-0 bg-[var(--color-primary)]/60"></div>
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
                                    className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-accent)] to-[#7EC8E3] text-white px-8 py-4 rounded-2xl font-bold text-base shadow-[var(--shadow-gold)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    Agendar Cita
                                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">→</span>
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
                                    { icon: <Clock size={18} />, value: '10+', label: 'Años de Experiencia' },
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
                            className="lg:col-span-5"
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
                                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-accent)] to-[#7EC8E3] rounded-xl flex items-center justify-center">
                                            <Award size={22} className="text-white" />
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

                {/* Scroll Indicator Desktop */}
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
            </div>

            {/* ================================ */}
            {/* MOBILE BANNER (<1024px)          */}
            {/* ================================ */}
            <div className="lg:hidden relative min-h-screen flex flex-col">
                {/* Background Image - bannermobile.jpg */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/bannermobile.jpg"
                        alt="Dr. Cristian Machado"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Dark overlay for readability — using rgba since Tailwind opacity modifiers don't work with CSS var colors */}
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(11,29,53,0.70) 0%, rgba(11,29,53,0.50) 40%, rgba(11,29,53,0.80) 100%)' }}></div>
                    <div className="absolute inset-0 bg-black/25"></div>
                </div>

                {/* Decorative blurs */}
                <div className="absolute top-32 right-0 w-48 h-48 bg-[var(--color-accent)]/8 rounded-full blur-[80px] z-0"></div>
                <div className="absolute bottom-40 left-0 w-40 h-40 bg-[var(--color-secondary)]/10 rounded-full blur-[60px] z-0"></div>

                {/* Mobile Content */}
                <div className="relative z-10 flex-1 flex flex-col justify-center px-6 pt-24 pb-20">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[var(--color-accent-light)] text-xs font-medium mb-6">
                            <Award size={12} />
                            <span>Especialista en Diagnóstico por Imágenes</span>
                        </div>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-[1] tracking-tight"
                    >
                        Dr. Cristian{' '}
                        <span className="text-gradient-gold block mt-1">
                            Machado Otero
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base text-white/70 mb-8 max-w-sm leading-relaxed"
                    >
                        Precisión diagnóstica con tecnología de última generación.
                        Comprometido con tu salud y bienestar.
                    </motion.p>

                    {/* CTA Buttons - stacked on mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-3 mb-10"
                    >
                        <a
                            href="#contact"
                            className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--color-accent)] to-[#7EC8E3] text-white px-6 py-3.5 rounded-2xl font-bold text-sm shadow-[var(--shadow-gold)] active:scale-[0.98] transition-all duration-200"
                        >
                            Agendar Cita
                            <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">→</span>
                        </a>
                        <a
                            href="#about"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm text-white border border-white/20 backdrop-blur-sm active:bg-white/10 transition-all duration-200"
                        >
                            Conocer Más
                        </a>
                    </motion.div>

                    {/* Stats - compact grid for mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="grid grid-cols-3 gap-3 pt-8 border-t border-white/10"
                    >
                        {[
                            { icon: <Clock size={16} />, value: '10+', label: 'Años Exp.' },
                            { icon: <Users size={16} />, value: '5,000+', label: 'Pacientes' },
                            { icon: <Award size={16} />, value: '100%', label: 'Compromiso' },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center text-center gap-1.5 py-2">
                                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-accent)]">
                                    {stat.icon}
                                </div>
                                <p className="text-xl font-bold text-white leading-none">{stat.value}</p>
                                <p className="text-[10px] text-white/50 uppercase tracking-wider leading-tight">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll Indicator Mobile */}
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative z-10 pb-6 flex justify-center"
                >
                    <a href="#about" className="flex flex-col items-center gap-1.5 text-white/40">
                        <span className="text-[10px] uppercase tracking-widest">Explorar</span>
                        <ChevronDown size={16} />
                    </a>
                </motion.div>
            </div>

        </section>
    );
}
