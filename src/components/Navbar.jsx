"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Sobre Mí', href: '#about' },
        { name: 'Servicios', href: '#services' },
        { name: 'Galería', href: '#gallery' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled
                ? 'py-3 bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(11,29,53,0.08)] border-b border-gray-100'
                : 'py-5 bg-transparent'
                }`}
        >
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${scrolled
                        ? 'bg-[var(--color-primary)] text-[var(--color-accent)]'
                        : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white'
                        }`}>
                        CM
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-[var(--color-primary)]' : 'text-white'
                            }`}>
                            Dr. Machado
                        </span>
                        <span className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${scrolled ? 'text-[var(--color-accent)]' : 'text-[var(--color-accent-light)]'
                            }`}>
                            Diagnóstico por Imágenes
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${scrolled
                                ? 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-gray-50'
                                : 'text-white/80 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--color-accent)] rounded-full transition-all duration-300 group-hover:w-6"></span>
                        </Link>
                    ))}
                    <a
                        href="#contact"
                        className="ml-4 flex items-center gap-2 bg-gradient-to-r from-[var(--color-accent)] to-[#7EC8E3] text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-[var(--shadow-gold)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <CalendarCheck size={16} />
                        Agendar Cita
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-[var(--color-primary)] hover:bg-gray-100' : 'text-white hover:bg-white/10'
                        }`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
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
                        className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-lg"
                    >
                        <div className="flex flex-col p-6 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="block py-3 px-4 text-base font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] hover:bg-gray-50 rounded-lg transition-all"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <a
                                href="#contact"
                                className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--color-accent)] to-[#7EC8E3] text-white px-6 py-3 rounded-xl font-semibold text-base"
                                onClick={() => setIsOpen(false)}
                            >
                                <CalendarCheck size={18} />
                                Agendar Cita
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
