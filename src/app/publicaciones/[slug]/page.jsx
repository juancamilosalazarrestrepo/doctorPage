import { articlesData } from '../../../data/articles';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar, BookOpen, Tag } from 'lucide-react';

export function generateStaticParams() {
    return articlesData.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const article = articlesData.find(a => a.slug === slug);
    if (!article) return { title: 'Artículo no encontrado' };
    
    return {
        title: `${article.title} | Dr. Cristian Machado Otero`,
        description: article.description,
    };
}

export default async function ArticleDetail({ params }) {
    const { slug } = await params;
    const article = articlesData.find(a => a.slug === slug);
    
    if (!article) {
        notFound();
    }
    
    return (
        <div className="min-h-screen bg-[var(--color-primary)] pt-32 pb-20 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[var(--color-accent)]/5 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
            </div>
            
            <div className="container-custom max-w-4xl mx-auto relative z-10">
                <Link href="/publicaciones" className="inline-flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-8 group font-medium">
                    <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Volver a Publicaciones
                </Link>
                
                <div className="glass rounded-3xl border border-white/10 overflow-hidden p-8 md:p-12 mb-8 relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/10 rounded-full blur-[80px] -z-10"></div>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                            <BookOpen size={14} />
                            {article.category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/5 text-[var(--color-text-muted)] border border-white/10 text-xs font-bold flex items-center gap-1">
                            <Calendar size={14} />
                            {article.year}
                        </span>
                        {article.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-[var(--color-text-muted)] border border-white/10 text-xs font-bold flex items-center gap-1">
                                <Tag size={12} />
                                {tag}
                            </span>
                        ))}
                    </div>
                    
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-heading)] leading-tight">
                        {article.title}
                    </h1>
                    
                    <p className="text-xl text-[var(--color-accent)] font-medium mb-10">
                        {article.journal}
                    </p>
                    
                    <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-lg">
                        <img 
                            src={article.banner || article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 via-transparent to-transparent"></div>
                    </div>
                    
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4 font-[family-name:var(--font-heading)] flex items-center gap-2">
                                Resumen
                            </h2>
                            <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
                                {article.abstract}
                            </p>
                        </div>
                        
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4 font-[family-name:var(--font-heading)] flex items-center gap-2">
                                Descripción
                            </h2>
                            <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
                                {article.description}
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center">
                        <a 
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[var(--color-accent)] text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-glow w-full sm:w-auto text-center"
                        >
                            Ver Artículo Original
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
