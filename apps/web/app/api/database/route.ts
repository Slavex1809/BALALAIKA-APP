export async function GET() {
  try {
    // Для теста просто возвращаем статус
    return Response.json({
      success: true,
      message: "API базы данных работает",
      database: "PostgreSQL",
      status: "Доступна (порт 5432)",
      pgadmin: "http://localhost:5050"
    });
  } catch (error: any) {
    return Response.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}