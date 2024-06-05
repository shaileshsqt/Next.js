// import '@/app/ui/global.css';
import './ui/global.css'
// import { inter } from '@/app/ui/font';
import {inter} from './ui/font'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
