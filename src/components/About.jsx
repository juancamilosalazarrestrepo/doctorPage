"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Stethoscope, ShieldCheck, Heart, Award } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 bg-[var(--color-bg-alt)] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-secondary)]/5 rounded-full blur-[100px]"></div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Main Image Frame with Glass Effect */}
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 glass">
                                <img
                                    src="/imagen9.jpeg"
                                    alt="Dr. Cristian Machado Otero"
                                    className="w-full h-[600px] object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-500"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent opacity-80"></div>
                            </div>

                            {/* Decorative Borders */}
                            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border border-[var(--color-accent)]/20 z-0"></div>
                            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-[var(--color-accent)]/20 z-0"></div>

                            {/* Floating Stats Card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute bottom-8 right-8 z-20 glass p-6 rounded-xl border border-[var(--color-accent)]/20 max-w-[200px]"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <Award className="text-[var(--color-accent)]" size={24} />
                                    <span className="text-white font-bold text-lg">Especialista</span>
                                </div>
                                <p className="text-[var(--color-text-muted)] text-xs leading-relaxed">
                                    Diagnóstico médico avanzado con excelencia académica y humana.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-3 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs font-bold tracking-widest uppercase mb-6">
                            Líder en Radiología
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-[family-name:var(--font-heading)] leading-tight">
                            Excelencia en <br />
                            <span className="text-gradient-cyan">Imagenología Médica</span>
                        </h2>

                        <div className="space-y-6 text-[var(--color-text-muted)] text-lg leading-relaxed mb-10">
                            <p>
                                El <strong className="text-white">Dr. Cristian Machado Otero</strong> combina experiencia clínica con tecnología de vanguardia para ofrecer diagnósticos precisos. Formado en instituciones de prestigio, su enfoque integra la precisión científica con una atención humanizada.
                            </p>
                            <p>
                                Especialista en diagnóstico por imágenes, lidera un equipo comprometido con la detección temprana y el análisis detallado para su tranquilidad y salud.
                            </p>
                        </div>

                        {/* Credentials Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: <GraduationCap />, text: "Formación Superior" },
                                { icon: <Stethoscope />, text: "Diagnóstico Preciso" },
                                { icon: <ShieldCheck />, text: "Tecnología Segura" },
                                { icon: <Heart />, text: "Atención Humana" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
                                    <div className="text-[var(--color-accent)]">
                                        {item.icon}
                                    </div>
                                    <span className="text-white font-medium text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
