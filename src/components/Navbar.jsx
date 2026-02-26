"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Stethoscope } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Especialidades', href: '/#services' },
        { name: 'Certificaciones', href: '/certificaciones' },
        { name: 'Publicaciones', href: '/publicaciones' },
        { name: 'Contacto', href: '/#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-[var(--color-primary)]/90 backdrop-blur-2xl backdrop-saturate-150 shadow-lg shadow-[var(--color-primary)]/40 py-3'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 flex items-center justify-center border border-[var(--color-accent)]/80 rounded-lg bg-[var(--color-primary)]/80 backdrop-blur-md shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                        <Stethoscope className="text-[var(--color-accent)]" size={20} />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="leading-tight">
                            <span className="text-white font-bold text-sm md:text-base tracking-wide font-[family-name:var(--font-heading)] uppercase mr-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                                Dr. Cristian
                            </span>
                            <span className="text-[var(--color-accent)] font-bold text-sm md:text-base tracking-wide font-[family-name:var(--font-heading)] uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                                Machado
                            </span>
                        </div>
                        <span className="text-[var(--color-text-muted)] text-[9px] md:text-[10px] uppercase tracking-[0.2em] leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">Diagnóstico Avanzado</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white/80 hover:text-[var(--color-accent)] transition-colors uppercase tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/80 text-[var(--color-primary)] px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-glow hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                        AGENDAR CITA
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-white hover:text-[var(--color-accent)] transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden glass-dark border-t border-[var(--color-accent)]/10"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="block py-2 text-lg font-medium text-white hover:text-[var(--color-accent)] transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <button
                                className="w-full mt-4 bg-[var(--color-accent)] text-[var(--color-primary)] px-6 py-3 rounded-lg font-bold shadow-glow"
                                onClick={() => setIsOpen(false)}
                            >
                                AGENDAR CITA
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
