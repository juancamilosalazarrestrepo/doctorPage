import Publicaciones from '../../components/Publicaciones';

export const metadata = {
    title: 'Publicaciones y Artículos | Dr. Cristian Machado Otero',
    description: 'Artículos científicos, publicaciones académicas y contribuciones a la investigación en radiología e imágenes diagnósticas del Dr. Cristian Machado Otero.',
};

export default function PublicacionesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Publicaciones />
        </div>
    );
}
