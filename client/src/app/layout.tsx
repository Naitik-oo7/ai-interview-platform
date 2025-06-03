import Link from 'next/link';

export const metadata = {
  title: 'AI Interview Prep Platform',
  description: 'Your AI-powered coding interview coach',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <nav>
            <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        <main style={{ padding: '1rem' }}>{children}</main>
        <footer style={{ padding: '1rem', borderTop: '1px solid #ccc', marginTop: '2rem' }}>
          <p>© 2025 AI Interview Prep Platform</p>
        </footer>
      </body>
    </html>
  );
}
