import './globals.css';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'Zip Search App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
