import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Dr. Cristian Machado Otero | Diagnóstico por Imágenes',
  description: 'Especialista en diagnóstico por imágenes. Ultrasonido, Rayos X, Tomografía, Resonancia Magnética.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
