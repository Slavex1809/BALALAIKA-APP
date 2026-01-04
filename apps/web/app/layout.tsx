import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BALALAIKA - Аренда оборудования',
  description: 'Платформа для аренды оборудования для мероприятий',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
        <header style={{ 
          backgroundColor: '#D32F2F', 
          color: 'white', 
          padding: '20px 50px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '24px' }}>🎵 BALALAIKA</h1>
            <p style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: 0.8 }}>
              Аренда оборудования для мероприятий
            </p>
          </div>
          <nav>
            <a href="/" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Главная</a>
            <a href="/api/test" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>API</a>
            <a href="http://localhost:5050" target="_blank" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>База данных</a>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer style={{
          backgroundColor: '#333',
          color: 'white',
          padding: '30px 50px',
          marginTop: '50px',
          textAlign: 'center'
        }}>
          <p>© 2024 BALALAIKA Platform. Все права защищены.</p>
          <p style={{ fontSize: '14px', opacity: 0.7 }}>
            Контакты: support@balalalka.app
          </p>
        </footer>
      </body>
    </html>
  )
}