import React from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, Heart } from 'lucide-react';

const footerLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Contacto', href: '#contact' },
];

export default function Footer() {
    return (
        <footer className="bg-[var(--color-primary)] text-white relative overflow-hidden pt-24 pb-14">
            {/* Decorative */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent"></div>

            <div className="container-custom pt-24 pb-14">
                <div className="grid md:grid-cols-12 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)] flex items-center justify-center font-bold text-[var(--color-primary)]">
                                CM
                            </div>
                            <div>
                                <p className="font-bold text-lg">Dr. Cristian Machado Otero</p>
                                <p className="text-[var(--color-accent)] text-xs uppercase tracking-widest">Diagnóstico por Imágenes</p>
                            </div>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
                            Comprometido con la precisión diagnóstica y el cuidado integral del paciente,
                            utilizando tecnología de última generación.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { Icon: Instagram, href: '#' },
                                { Icon: Facebook, href: '#' },
                                { Icon: Linkedin, href: '#' },
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] hover:border-transparent transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-white/70 mb-6">Navegación</h4>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-white/50 hover:text-[var(--color-accent)] text-sm transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-4">
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-white/70 mb-6">Contacto</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Phone size={16} className="text-[var(--color-accent)] mt-0.5 shrink-0" />
                                <span className="text-white/50 text-sm">+57 300 123 4567</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Mail size={16} className="text-[var(--color-accent)] mt-0.5 shrink-0" />
                                <span className="text-white/50 text-sm">contacto@drmachado.com</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="text-[var(--color-accent)] mt-0.5 shrink-0" />
                                <span className="text-white/50 text-sm">Clínica de Especialistas, Cons. 401<br />Bogotá, Colombia</span>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5">
                            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">Horarios</p>
                            <div className="space-y-1 text-sm text-white/50">
                                <p className="flex justify-between"><span>Lunes - Viernes</span><span className="text-white/70">8:00 - 18:00</span></p>
                                <p className="flex justify-between"><span>Sábados</span><span className="text-white/70">8:00 - 13:00</span></p>
                                <p className="flex justify-between"><span>Domingos</span><span className="text-white/40">Cerrado</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-xs">
                        &copy; {new Date().getFullYear()} Dr. Cristian Machado Otero. Todos los derechos reservados.
                    </p>
                    <p className="text-white/20 text-xs flex items-center gap-1">
                        Hecho con <Heart size={12} className="text-[var(--color-accent)]" /> para la excelencia médica
                    </p>
                </div>
            </div>
        </footer>
    );
}
