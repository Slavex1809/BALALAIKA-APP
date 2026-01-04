export async function GET() {
  return Response.json({
    success: true,
    message: "BALALAIKA API работает! 🎵",
    version: "1.0.0",
    endpoints: {
      home: "/",
      api_test: "/api/test",
      api_database: "/api/database",
      pgadmin: "http://localhost:5050"
    },
    status: {
      web: "✅ Запущен (порт 3000)",
      database: "✅ PostgreSQL (порт 5432)",
      mobile: "⏳ Готово к запуску"
    }
  });
}