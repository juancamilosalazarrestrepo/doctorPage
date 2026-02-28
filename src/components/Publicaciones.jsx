"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, ArrowRight, ExternalLink, Quote, BarChart3, Globe, Users, Presentation } from 'lucide-react';
import Link from 'next/link';

const featuredArticle = {
    title: 'Avances en Inteligencia Artificial aplicada al Diagnóstico por Imagen: Revisión Sistemática',
    journal: 'Revista Colombiana de Radiología, Vol. 34, No. 2, 2023',
    abstract: 'Este artículo analiza los últimos avances en algoritmos de aprendizaje profundo aplicados a la detección temprana de patologías en imágenes médicas, incluyendo tomografía computarizada y resonancia magnética. Se evaluaron 47 estudios publicados entre 2019 y 2023, demostrando una mejora significativa en la precisión diagnóstica cuando se integran herramientas de IA en el flujo de trabajo radiológico.',
    image: '/article_ai_radiology.webp',
    tags: ['Inteligencia Artificial', 'Deep Learning', 'Diagnóstico'],
};

const articles = [
    {
        image: '/article_doppler.webp',
        title: 'Ecografía Doppler en la detección de trombosis venosa profunda',
        journal: 'Biomédica',
        year: '2018',
        category: 'Ultrasonido',
        description: 'Evaluación prospectiva del rendimiento diagnóstico de la ecografía Doppler color en pacientes con sospecha clínica de TVP en extremidades inferiores.',
    },
    {
        image: '/article_ct_trauma.webp',
        title: 'Protocolo optimizado de TC multicorte para trauma abdominal',
        journal: 'Revista Radiología',
        year: '2019',
        category: 'Tomografía',
        description: 'Propuesta de un protocolo de adquisición rápida con menor dosis de radiación manteniendo la sensibilidad diagnóstica en trauma cerrado.',
    },
    {
        image: '/article_mri_brain.webp',
        title: 'Resonancia magnética funcional en evaluación de ACV',
        journal: 'Acta Médica Colombiana',
        year: '2020',
        category: 'Resonancia',
        description: 'Análisis del valor predictivo de secuencias de difusión y perfusión en la evaluación del penumbra isquémica en pacientes con ACV agudo.',
    },
    {
        image: '/article_3d_prenatal.webp',
        title: 'Avances en ecografía 3D para diagnóstico prenatal',
        journal: 'Revista de Ginecología',
        year: '2021',
        category: 'Obstetricia',
        description: 'Revisión de las nuevas capacidades de la ecografía 3D/4D en la detección de malformaciones congénitas durante el segundo trimestre.',
    },
    {
        image: '/article_biopsy.webp',
        title: 'Papel de la imagen guiada en biopsias percutáneas',
        journal: 'Colombian Journal of Radiology',
        year: '2022',
        category: 'Intervencionismo',
        description: 'Experiencia institucional con biopsias guiadas por TC y ecografía en lesiones hepáticas, renales y pulmonares sospechosas.',
    },
    {
        image: '/article_lung_ct.webp',
        title: 'TC de baja dosis en screening pulmonar: Experiencia institucional',
        journal: 'Archivos de Medicina',
        year: '2023',
        category: 'Tomografía',
        description: 'Resultados de un programa piloto de tamizaje de cáncer pulmonar mediante tomografía de baja dosis en población de alto riesgo.',
    },
];

const stats = [
    { icon: <FileText size={24} />, number: '25+', label: 'Artículos Publicados' },
    { icon: <Globe size={24} />, number: '12', label: 'Revistas Internacionales' },
    { icon: <BarChart3 size={24} />, number: '300+', label: 'Citaciones' },
    { icon: <Presentation size={24} />, number: '8', label: 'Ponencias en Congresos' },
];

export default function Publicaciones() {
    return (
        <>
            {/* Hero Banner */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--color-primary)]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[var(--color-accent)]/10 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
                </div>
                <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[var(--color-accent)]/8 rounded-full blur-[120px] animate-pulse"></div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs font-bold tracking-widest uppercase mb-6"
                    >
                        <BookOpen size={14} />
                        Investigación Científica
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]"
                    >
                        Publicaciones y <span className="text-gradient-cyan">Artículos</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto"
                    >
                        Contribuciones científicas y publicaciones académicas del Dr. Cristian Machado Otero en el campo de la radiología y el diagnóstico por imágenes.
                    </motion.p>
                </div>
            </section>

            {/* Featured Article */}
            <section className="py-24 relative overflow-hidden" style={{
                background: `
                    radial-gradient(ellipse 80% 50% at 80% 20%, rgba(30, 64, 175, 0.08) 0%, transparent 60%),
                    linear-gradient(200deg, #020617 0%, #020a1a 30%, #03112a 50%, #020a1a 70%, #020617 100%)
                `,
                backgroundAttachment: 'fixed'
            }}>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-[#1e40af]/8 rounded-full blur-[120px] animate-pulse"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]"
                        >
                            Artículo <span className="text-[var(--color-accent)]">Destacado</span>
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="section-divider"
                        ></motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="glass rounded-3xl border border-white/10 overflow-hidden hover:border-[var(--color-accent)]/20 transition-all duration-300"
                    >
                        <div className="grid lg:grid-cols-2 gap-0">
                            <div className="relative h-64 lg:h-auto overflow-hidden">
                                <img
                                    src={featuredArticle.image}
                                    alt={featuredArticle.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-primary)]/60 hidden lg:block"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] to-transparent lg:hidden"></div>
                            </div>
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {featuredArticle.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-heading)] leading-tight">
                                    {featuredArticle.title}
                                </h3>
                                <p className="text-[var(--color-accent)] text-sm font-medium mb-4">{featuredArticle.journal}</p>
                                <div className="flex items-start gap-3 mb-6">
                                    <Quote size={20} className="text-[var(--color-accent)]/40 flex-shrink-0 mt-1" />
                                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed italic">
                                        {featuredArticle.abstract}
                                    </p>
                                </div>
                                <button className="bg-[var(--color-accent)] text-[var(--color-primary)] px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-glow w-fit">
                                    Leer Artículo Completo
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Publications Grid */}
            <section className="py-24 bg-[var(--color-primary)] relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[150px]"></div>

                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]"
                        >
                            Artículos <span className="text-[var(--color-accent)]">Publicados</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[var(--color-text-muted)] max-w-2xl mx-auto"
                        >
                            Investigaciones publicadas en revistas científicas de alto impacto en el campo de la radiología.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {articles.map((article, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group glass rounded-2xl border border-white/5 hover:border-[var(--color-accent)]/30 transition-all duration-300 overflow-hidden hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                            >
                                <div className="grid sm:grid-cols-5 gap-0">
                                    <div className="relative sm:col-span-2 h-48 sm:h-auto overflow-hidden">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-primary)]/50 hidden sm:block"></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] to-transparent sm:hidden"></div>
                                    </div>
                                    <div className="p-6 sm:col-span-3 flex flex-col justify-center">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                                                {article.category}
                                            </span>
                                            <span className="text-[var(--color-text-muted)] text-xs">{article.year}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors font-[family-name:var(--font-heading)] leading-snug">
                                            {article.title}
                                        </h3>
                                        <p className="text-[var(--color-accent)]/80 text-sm font-medium mb-2">{article.journal}</p>
                                        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4 line-clamp-2">
                                            {article.description}
                                        </p>
                                        <a href="#" className="inline-flex items-center text-[var(--color-accent)] text-sm font-bold uppercase tracking-wider hover:gap-2 transition-all group-hover:gap-2">
                                            Leer más
                                            <ArrowRight size={14} className="ml-1" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Research Stats */}
            <section className="py-20 relative overflow-hidden" style={{
                background: `
                    radial-gradient(ellipse 80% 50% at 50% 50%, rgba(30, 64, 175, 0.08) 0%, transparent 60%),
                    linear-gradient(200deg, #020617 0%, #020a1a 30%, #03112a 50%, #020a1a 70%, #020617 100%)
                `,
                backgroundAttachment: 'fixed'
            }}>
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass p-8 rounded-2xl border border-white/5 text-center hover:border-[var(--color-accent)]/20 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] mb-4 mx-auto">
                                    {stat.icon}
                                </div>
                                <p className="text-4xl font-bold text-[var(--color-accent)] mb-2 font-[family-name:var(--font-heading)]">{stat.number}</p>
                                <p className="text-[var(--color-text-muted)] text-sm">{stat.label}</p>
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
                        ¿Interesado en colaborar en <span className="text-[var(--color-accent)]">investigación</span>?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[var(--color-text-muted)] mb-10 max-w-xl mx-auto"
                    >
                        Estamos abiertos a colaboraciones con instituciones académicas y centros de investigación en el área de diagnóstico por imágenes.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a href="/#contact" className="bg-[var(--color-accent)] text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-glow">
                            CONTACTAR
                            <ArrowRight size={20} />
                        </a>
                        <Link href="/certificaciones" className="glass px-8 py-4 rounded-xl font-bold text-white border border-white/10 hover:bg-white/5 transition-all text-center flex items-center justify-center gap-2">
                            VER CERTIFICACIONES
                            <ExternalLink size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
