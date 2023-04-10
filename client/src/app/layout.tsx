import { Providers } from '@/redux/provider';
import ProvidersSession from './ProvidersSession';
import './tailwind.globals.css';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body>
        <ProvidersSession>
          <Providers>{children}</Providers>
        </ProvidersSession>
      </body>
    </html>
  );
}
