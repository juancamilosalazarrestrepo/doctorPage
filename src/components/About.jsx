"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Stethoscope, ShieldCheck, Heart } from 'lucide-react';

const highlights = [
    { icon: <GraduationCap size={22} />, title: 'Formación de Excelencia', desc: 'Instituto Universitario CEMIC' },
    { icon: <Stethoscope size={22} />, title: 'Especialista Certificado', desc: 'Diagnóstico por Imágenes' },
    { icon: <ShieldCheck size={22} />, title: 'Tecnología Avanzada', desc: 'Equipos de última generación' },
    { icon: <Heart size={22} />, title: 'Atención Humanizada', desc: 'El paciente es lo primero' },
];

export default function About() {
    return (
        <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent)]/3 rounded-full blur-[120px]"></div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-[var(--shadow-xl)]">
                                <img
                                    src="/imagen2.jpeg"
                                    alt="Dr. Cristian Machado Otero"
                                    className="w-full h-[550px] object-cover object-top"
                                />
                            </div>

                            {/* Secondary Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-[var(--shadow-lg)] border-4 border-white z-20"
                            >
                                <img
                                    src="/Gemini_Generated_Image_vl2yb6vl2yb6vl2y.png"
                                    alt="Dr. Machado en consultorio"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Decorative Frame */}
                            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-[var(--color-accent)]/15 z-0"></div>

                            {/* Experience Badge */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute top-6 -right-4 z-20 bg-gradient-to-br from-[var(--color-accent)] to-[#D4B85A] rounded-2xl p-4 shadow-[var(--shadow-gold)]"
                            >
                                <p className="text-3xl font-bold text-[var(--color-primary)]">10+</p>
                                <p className="text-xs font-semibold text-[var(--color-primary)]/70 uppercase tracking-wider">Años</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[var(--color-accent)] font-semibold uppercase tracking-[0.15em] text-sm mb-4 block">
                            Sobre el Doctor
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-6 tracking-tight">
                            Dedicación y Precisión al{' '}
                            <span className="text-gradient-gold">Servicio de tu Salud</span>
                        </h2>

                        <div className="space-y-5 text-[var(--color-text-muted)] leading-relaxed mb-10">
                            <p>
                                El Dr. Cristian Machado Otero es un destacado médico especialista en diagnóstico
                                por imágenes, formado en el prestigioso Instituto Universitario CEMIC. Su dedicación
                                por la excelencia clínica y la innovación tecnológica lo han convertido en un referente
                                en su campo.
                            </p>
                            <p>
                                Con más de 15 años de experiencia, combina un profundo conocimiento médico con un
                                enfoque humanizado, asegurando que cada paciente reciba un diagnóstico certero y la
                                atención que merece.
                            </p>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {highlights.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="flex items-start gap-3 p-4 rounded-2xl bg-[var(--color-bg)] hover:bg-[var(--color-bg-warm)] transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/5 flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-all shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm text-[var(--color-primary)]">{item.title}</p>
                                        <p className="text-xs text-[var(--color-text-muted)]">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
