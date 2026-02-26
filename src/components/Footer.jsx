import React from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, Heart, Activity, Stethoscope } from 'lucide-react';

const footerLinks = [
    { name: 'Tecnología', href: '#technology' },
    { name: 'Especialidades', href: '#services' },
    { name: 'Expertos', href: '#about' },
    { name: 'Contacto', href: '#contact' },
];

export default function Footer() {
    return (
        <footer className="bg-[var(--color-primary)] text-white relative overflow-hidden pt-24 pb-14">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent)]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="grid md:grid-cols-12 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-12 lg:col-span-4">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 flex items-center justify-center border border-[var(--color-accent)]/80 rounded-lg bg-[var(--color-primary)]/80 backdrop-blur-md shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                                <Stethoscope className="text-[var(--color-accent)]" size={20} />
                            </div>
                            <div className="flex flex-col">
                                <div className="leading-none">
                                    <span className="text-white font-bold text-base tracking-wide font-[family-name:var(--font-heading)] uppercase mr-1">
                                        Dr. Cristian
                                    </span>
                                    <span className="text-[var(--color-accent)] font-bold text-base tracking-wide font-[family-name:var(--font-heading)] uppercase">
                                        Machado
                                    </span>
                                </div>
                                <span className="text-[var(--color-text-muted)] text-[10px] uppercase tracking-[0.2em]">Diagnóstico Avanzado</span>
                            </div>
                        </div>
                        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6 max-w-sm">
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
                                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] hover:border-transparent transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-6 lg:col-span-4">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-semibold text-sm uppercase tracking-wider text-white mb-6">Navegación</h4>
                                <ul className="space-y-3">
                                    {footerLinks.map((link) => (
                                        <li key={link.name}>
                                            <a href={link.href} className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] text-sm transition-colors block py-1">
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm uppercase tracking-wider text-white mb-6">Legal</h4>
                                <ul className="space-y-3">
                                    <li><a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] text-sm transition-colors block py-1">Privacidad</a></li>
                                    <li><a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] text-sm transition-colors block py-1">Términos</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-6 lg:col-span-4">
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-white mb-6">Contacto</h4>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3 group">
                                <div className="p-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-colors">
                                    <Phone size={16} />
                                </div>
                                <div>
                                    <span className="block text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Teléfono</span>
                                    <span className="text-white text-sm">+57 300 123 4567</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 group">
                                <div className="p-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-colors">
                                    <Mail size={16} />
                                </div>
                                <div>
                                    <span className="block text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Email</span>
                                    <span className="text-white text-sm">contacto@radiologiaelite.com</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 group">
                                <div className="p-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-colors">
                                    <MapPin size={16} />
                                </div>
                                <div>
                                    <span className="block text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Ubicación</span>
                                    <span className="text-white text-sm">Clínica de Especialistas, Cons. 401<br />Bogotá, Colombia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[var(--color-text-muted)] text-xs">
                        &copy; {new Date().getFullYear()} Dr. Cristian Machado Otero. Todos los derechos reservados.
                    </p>
                    <p className="text-[var(--color-text-muted)] text-xs flex items-center gap-1">
                        Hecho con <Heart size={12} className="text-[var(--color-accent)]" /> para la excelencia médica
                    </p>
                </div>
            </div>
        </footer>
    );
}
