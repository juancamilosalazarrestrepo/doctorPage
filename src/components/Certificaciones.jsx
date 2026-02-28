"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, HeartPulse, Cross, Award, Star, Trophy, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const academicDegrees = [
    {
        icon: <GraduationCap size={32} />,
        title: 'Médico Cirujano',
        institution: 'Universidad del Sinú (Unisinú)',
        year: '2019',
    },
    {
        icon: <Cross size={32} />,
        title: 'Especialista en Diagnóstico por Imágenes',
        institution: 'Universidad de Buenos Aires',
        year: '2025',
    },
];


const certifications = [
    {
        image: '/cert_ecografia.png',
        title: 'Certificación en Ecografía Abdominal',
        institution: 'Sociedad Colombiana de Radiología',
        year: '2012',
    },
    {
        image: '/cert_tomografia.png',
        title: 'Diplomado en Tomografía Multicorte',
        institution: 'Universidad de los Andes',
        year: '2013',
    },
    {
        image: '/cert_resonancia.png',
        title: 'Certificación en Resonancia Magnética Avanzada',
        institution: 'RSNA',
        year: '2014',
    },
    {
        image: '/cert_medicina.png',
        title: 'Diplomado en Intervencionismo Guiado por Imagen',
        institution: 'Hospital Universitario San Ignacio',
        year: '2016',
    },
    {
        image: '/cert_radiologia.png',
        title: 'Certificación en Ecografía Obstétrica',
        institution: 'ISUOG',
        year: '2017',
    },
    {
        image: '/cert_fellowship.png',
        title: 'IA Aplicada a Radiología',
        institution: 'ACR - American College of Radiology',
        year: '2023',
    },
];

const awards = [
    {
        icon: <Trophy size={28} />,
        title: 'Mejor Radiólogo del Año',
        institution: 'Sociedad Colombiana de Radiología',
        year: '2019',
    },
    {
        icon: <Star size={28} />,
        title: 'Excelencia en Diagnóstico por Imágenes',
        institution: 'Hospital Central',
        year: '2021',
    },
    {
        icon: <Award size={28} />,
        title: 'Contribución a la Investigación Radiológica',
        institution: 'RSNA',
        year: '2022',
    },
];

export default function Certificaciones() {
    return (
        <>
            {/* Hero Banner */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--color-primary)]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--color-accent)]/10 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
                </div>
                <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[var(--color-accent)]/8 rounded-full blur-[120px] animate-pulse"></div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs font-bold tracking-widest uppercase mb-6"
                    >
                        <GraduationCap size={14} />
                        Formación Profesional
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]"
                    >
                        Diplomas y <span className="text-gradient-cyan">Certificaciones</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto"
                    >
                        Formación académica y credenciales profesionales del Dr. Cristian Machado Otero, respaldado por instituciones de renombre nacional e internacional.
                    </motion.p>
                </div>
            </section>

            {/* Academic Degrees */}
            <section className="py-24 relative overflow-hidden" style={{
                background: `
                    radial-gradient(ellipse 80% 50% at 80% 20%, rgba(30, 64, 175, 0.08) 0%, transparent 60%),
                    radial-gradient(ellipse 60% 80% at 20% 80%, rgba(37, 99, 235, 0.05) 0%, transparent 50%),
                    linear-gradient(200deg, #020617 0%, #020a1a 30%, #03112a 50%, #020a1a 70%, #020617 100%)
                `,
                backgroundAttachment: 'fixed'
            }}>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] bg-[#1e40af]/8 rounded-full blur-[120px] animate-pulse"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]"
                        >
                            Formación <span className="text-[var(--color-accent)]">Académica</span>
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="section-divider"
                        ></motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {academicDegrees.map((degree, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                whileHover={{ y: -5 }}
                                className="group glass p-8 rounded-2xl border border-white/5 hover:border-[var(--color-accent)]/30 transition-all duration-300 relative overflow-hidden text-center"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 group-hover:shadow-glow">
                                        {degree.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors font-[family-name:var(--font-heading)]">
                                        {degree.title}
                                    </h3>
                                    <p className="text-[var(--color-accent)] text-sm font-medium mb-1">{degree.institution}</p>
                                    <p className="text-[var(--color-text-muted)] text-xs uppercase tracking-wider">{degree.year}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Professional Certifications */}
            <section className="py-24 bg-[var(--color-primary)] relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[150px]"></div>

                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]"
                        >
                            Certificaciones <span className="text-[var(--color-accent)]">Profesionales</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[var(--color-text-muted)] max-w-2xl mx-auto"
                        >
                            Certificaciones especializadas obtenidas en las instituciones más reconocidas del ámbito radiológico mundial.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group glass rounded-2xl border border-white/5 hover:border-[var(--color-accent)]/30 transition-all duration-300 overflow-hidden hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                            >
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/30 to-transparent"></div>
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-dark text-[var(--color-accent)] text-xs font-bold border border-[var(--color-accent)]/20">
                                        {cert.year}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors font-[family-name:var(--font-heading)]">
                                        {cert.title}
                                    </h3>
                                    <p className="text-[var(--color-accent)]/80 text-sm font-medium">{cert.institution}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards & Recognition */}
            <section className="py-24 relative overflow-hidden" style={{
                background: `
                    radial-gradient(ellipse 80% 50% at 20% 30%, rgba(217, 170, 0, 0.05) 0%, transparent 60%),
                    radial-gradient(ellipse 60% 80% at 80% 70%, rgba(30, 64, 175, 0.06) 0%, transparent 50%),
                    linear-gradient(200deg, #020617 0%, #020a1a 30%, #03112a 50%, #020a1a 70%, #020617 100%)
                `,
                backgroundAttachment: 'fixed'
            }}>
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]"
                        >
                            Reconocimientos y <span className="text-amber-400">Premios</span>
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="h-[3px] rounded-full mx-auto"
                            style={{ background: 'linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)' }}
                        ></motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {awards.map((award, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                whileHover={{ y: -5 }}
                                className="group glass p-8 rounded-2xl border border-amber-500/10 hover:border-amber-400/30 transition-all duration-300 relative overflow-hidden text-center hover:shadow-[0_0_30px_rgba(251,191,36,0.1)]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                        {award.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors font-[family-name:var(--font-heading)]">
                                        {award.title}
                                    </h3>
                                    <p className="text-amber-400/80 text-sm font-medium mb-1">{award.institution}</p>
                                    <p className="text-[var(--color-text-muted)] text-xs uppercase tracking-wider">{award.year}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[var(--color-primary)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-accent)]/5 via-transparent to-transparent"></div>
                <div className="container-custom relative z-10 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]"
                    >
                        ¿Necesita un diagnóstico <span className="text-[var(--color-accent)]">preciso</span>?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[var(--color-text-muted)] mb-10 max-w-xl mx-auto"
                    >
                        Confíe en la experiencia y formación de un profesional certificado por las mejores instituciones del mundo.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a href="/#contact" className="bg-[var(--color-accent)] text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-glow">
                            AGENDAR CITA
                            <ArrowRight size={20} />
                        </a>
                        <Link href="/publicaciones" className="glass px-8 py-4 rounded-xl font-bold text-white border border-white/10 hover:bg-white/5 transition-all text-center flex items-center justify-center gap-2">
                            VER PUBLICACIONES
                            <ExternalLink size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
