-- Создаем таблицу пользователей
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  full_name TEXT NOT NULL,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Создаем таблицу оборудования
CREATE TABLE IF NOT EXISTS equipment (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  price_per_day INTEGER NOT NULL,
  deposit INTEGER DEFAULT 0,
  supplier_id UUID REFERENCES users(id),
  images TEXT[],
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Создаем таблицу бронирований
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  equipment_id UUID REFERENCES equipment(id),
  user_id UUID REFERENCES users(id),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  total_price INTEGER NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Вставляем тестовые данные
INSERT INTO users (email, phone, full_name, role) VALUES
('test@user.com', '+79161234567', 'Тестовый Пользователь', 'user'),
('supplier@test.com', '+79167654321', 'Поставщик Оборудования', 'supplier');

INSERT INTO equipment (title, description, category, price_per_day, deposit, supplier_id) VALUES
('JBL EON712', 'Мощная акустическая система', 'sound', 5000, 10000, (SELECT id FROM users WHERE email = 'supplier@test.com')),
('Behringer X32', 'Цифровой микшерный пульт', 'sound', 8000, 20000, (SELECT id FROM users WHERE email = 'supplier@test.com'));