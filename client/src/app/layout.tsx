import { Providers } from '@/redux/provider';
import { Header } from './components';
import './tailwind.globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es' data-theme='cupcake'>
      <body>
        <Providers>
          <Header />

          {children}
        </Providers>
      </body>
    </html>
  );
}
