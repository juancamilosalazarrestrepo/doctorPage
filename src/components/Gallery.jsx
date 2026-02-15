"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    { src: '/imagen4.jpeg', alt: 'Dr. Machado en su consultorio', caption: 'Consultorio profesional' },
    { src: '/imagen6.jpeg', alt: 'Dr. Machado', caption: 'Elegancia y profesionalismo' },
    { src: '/imagen3.jpeg', alt: 'Dr. Machado en la oficina', caption: 'Ambiente de trabajo' },
    { src: '/imagen8.jpeg', alt: 'Graduación IUC', caption: 'Graduación - Instituto Universitario CEMIC' },
    { src: '/imagen9.jpeg', alt: 'Ceremonia de graduación', caption: 'Ceremonia de graduación IUC' },
    { src: '/imagen7.jpeg', alt: 'Dr. Machado con colegas', caption: 'Con colegas del ámbito médico' },
];

export default function Gallery() {
    const [selected, setSelected] = useState(null);

    const navigate = (direction) => {
        if (selected === null) return;
        const newIndex = direction === 'next'
            ? (selected + 1) % images.length
            : (selected - 1 + images.length) % images.length;
        setSelected(newIndex);
    };

    return (
        <section id="gallery" className="py-24 lg:py-32 bg-[var(--color-primary)] relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[150px]"></div>

            <div className="container-custom relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[var(--color-accent)] font-semibold uppercase tracking-[0.15em] text-sm mb-4 block">
                        Galería
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                        Trayectoria{' '}
                        <span className="text-gradient-gold">Profesional</span>
                    </h2>
                    <div className="section-divider"></div>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className={`relative rounded-2xl overflow-hidden cursor-pointer group ${index === 0 ? 'md:row-span-2' : ''
                                }`}
                            onClick={() => setSelected(index)}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${index === 0 ? 'h-full min-h-[300px] md:min-h-[500px]' : 'h-60 md:h-64'
                                    }`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-white text-sm font-medium">{img.caption}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selected !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setSelected(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-20"
                            onClick={() => setSelected(null)}
                        >
                            <X size={28} />
                        </button>

                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 bg-white/10 rounded-full backdrop-blur-sm z-20"
                            onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 bg-white/10 rounded-full backdrop-blur-sm z-20"
                            onClick={(e) => { e.stopPropagation(); navigate('next'); }}
                        >
                            <ChevronRight size={24} />
                        </button>

                        <motion.div
                            key={selected}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-4xl max-h-[85vh] relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={images[selected].src}
                                alt={images[selected].alt}
                                className="max-w-full max-h-[80vh] object-contain rounded-2xl"
                            />
                            <p className="text-white/70 text-center mt-4 text-sm">
                                {images[selected].caption}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
