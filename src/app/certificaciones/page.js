import Certificaciones from '../../components/Certificaciones';

export const metadata = {
    title: 'Diplomas y Certificaciones | Dr. Cristian Machado Otero',
    description: 'Formación académica, diplomas, certificaciones profesionales y reconocimientos del Dr. Cristian Machado Otero, especialista en diagnóstico por imágenes.',
};

export default function CertificacionesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Certificaciones />
        </div>
    );
}
