export default function Home() {
  return (
    <div style={{ padding: 50, fontFamily: 'Arial', textAlign: 'center' }}>
      <h1 style={{ color: '#D32F2F', fontSize: '3rem' }}>🎵 BALALAIKA</h1>
      <p style={{ fontSize: '1.2rem', color: '#666' }}>Платформа для аренды оборудования</p>
      
      <div style={{ marginTop: 40 }}>
        <a href="/api/test" style={{ 
          padding: '12px 24px', 
          background: '#D32F2F', 
          color: 'white', 
          borderRadius: '5px',
          textDecoration: 'none',
          margin: '0 10px'
        }}>
          🔧 Проверить API
        </a>
        <a href="http://localhost:5050" target="_blank" style={{ 
          padding: '12px 24px', 
          background: '#1976D2', 
          color: 'white', 
          borderRadius: '5px',
          textDecoration: 'none',
          margin: '0 10px'
        }}>
          📊 pgAdmin
        </a>
      </div>

      <div style={{ marginTop: 50, maxWidth: 800, margin: '50px auto' }}>
        <h2>Статус системы</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: 20, 
          marginTop: 20 
        }}>
          <div style={{ padding: 20, background: '#f5f5f5', borderRadius: 10 }}>
            <h3>🌐 Веб-приложение</h3>
            <p><strong>Статус:</strong> ✅ Работает</p>
            <p><strong>Порт:</strong> 3000</p>
          </div>
          <div style={{ padding: 20, background: '#f5f5f5', borderRadius: 10 }}>
            <h3>🗄️ База данных</h3>
            <p><strong>Статус:</strong> ✅ PostgreSQL</p>
            <p><strong>Порт:</strong> 5432</p>
          </div>
          <div style={{ padding: 20, background: '#f5f5f5', borderRadius: 10 }}>
            <h3>🔧 API</h3>
            <p><strong>Статус:</strong> ✅ Работает</p>
            <p><a href="/api/test">/api/test</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}