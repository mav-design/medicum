# Форум — Техническое описание и требования

**Стек:** Angular (Angular Material) + Go  
**Хранилища данных:** MongoDB, Redis

---

## 1. Архитектура системы

### 1.1 Общее описание

Система построена по **клиент–серверной архитектуре** с четким разделением ответственности:

- **Frontend:** SPA на Angular с использованием Angular Material
- **Backend:** REST API на Go
- **База данных:** MongoDB (постоянное хранилище)
- **Кэш / сессии:** Redis
- **Аутентификация:** JWT
- **Развертывание:** Docker + Nginx (reverse proxy)

```
[ Браузер ]
|
v
[ Angular SPA ]
|
HTTPS (REST / JSON)
|
[ Go API Server ]
| |
| +--> [ Redis ]
|
+--> [ MongoDB ]
```

---

### 1.2 Архитектура Frontend (Angular)

- **Фреймворк:** Angular (LTS)
- **UI:** Angular Material
- **Управление состоянием:** RxJS сервисы (NgRx — опционально)
- **Маршрутизация:** Angular Router с lazy loading
- **Аутентификация:** JWT (HttpOnly cookies или in-memory)
- **API:** HttpClient + interceptors

**Основные модули**

- CoreModule — глобальные сервисы, interceptors
- SharedModule — общие компоненты Material
- AuthModule — авторизация
- ForumModule — форум
- AdminModule — админка

---

### 1.3 Архитектура Backend (Go)

- **Стиль API:** REST (JSON)
- **HTTP-фреймворк:** net/http / Gin / Fiber
- **Аутентификация:** JWT (access + refresh)
- **Валидация:** go-playground/validator
- **Логирование:** zap / logrus
- **Конфигурация:** переменные окружения

**Принципы**

- Clean Architecture
- Разделение по доменам
- Stateless-сервисы (Redis для состояния)

---

### 1.4 Архитектура данных

#### MongoDB (основные коллекции)

- users
- threads
- posts
- categories
- votes
- reports

#### Redis

- Сессии пользователей
- Rate limiting
- Счетчики просмотров тем
- Кэш популярных тем

---

## 2. Маршруты веб-страниц (Angular)

### 2.1 Публичные маршруты

| Маршрут           | Описание                 |
| ----------------- | ------------------------ |
| `/`               | Главная / последние темы |
| `/login`          | Вход                     |
| `/register`       | Регистрация              |
| `/categories`     | Список категорий         |
| `/category/:slug` | Темы категории           |
| `/thread/:id`     | Просмотр темы            |

---

### 2.2 Маршруты для авторизованных пользователей

| Маршрут            | Описание                  |
| ------------------ | ------------------------- |
| `/profile`         | Профиль                   |
| `/profile/edit`    | Редактирование профиля    |
| `/thread/create`   | Создание темы             |
| `/thread/:id/edit` | Редактирование своей темы |
| `/notifications`   | Уведомления               |

---

### 2.3 Административные маршруты

| Маршрут          | Описание                  |
| ---------------- | ------------------------- |
| `/admin`         | Дашборд                   |
| `/admin/users`   | Управление пользователями |
| `/admin/threads` | Модерация тем             |
| `/admin/reports` | Жалобы                    |

---

### 2.4 Route Guards

- `AuthGuard` — доступ только для авторизованных
- `AdminGuard` — доступ для администраторов
- `OwnerGuard` — проверка владельца ресурса

---

## 3. Структура Go-проекта и сервисы

### 3.1 Структура каталогов

/cmd
/api
main.go

/internal
/config
config.go

/server
http.go
router.go

/auth
handler.go
service.go
middleware.go
jwt.go

/user
handler.go
service.go
repository.go
model.go

/forum
/thread
handler.go
service.go
repository.go
model.go
/post
handler.go
service.go
repository.go
model.go
/category
handler.go
service.go
repository.go
model.go

/admin
handler.go
service.go

/common
response.go
errors.go
middleware.go

/pkg
/db
mongo.go
redis.go

/logger
logger.go

---

### 3.2 Основные сервисы

#### Auth Service

- Регистрация и вход
- Генерация и обновление JWT
- Хеширование паролей (bcrypt / argon2)
- RBAC (роли)

#### User Service

- Управление профилем
- Репутация пользователя
- Метаданные аккаунта

#### Thread Service

- CRUD операций с темами
- Фильтрация и пагинация
- Счетчики просмотров (Redis)

#### Post Service

- Ответы в темах
- Markdown-разметка
- Голосование

#### Admin Service

- Модерация контента
- Блокировки пользователей
- Работа с жалобами

---

### 3.3 Примеры API эндпоинтов

POST /api/auth/login
POST /api/auth/register
GET /api/categories
GET /api/threads?category=go&page=1
POST /api/threads
GET /api/threads/:id
POST /api/posts
DELETE /api/admin/threads/:id

---

## 4. Нефункциональные требования

### Производительность

- Кэширование через Redis
- Индексы MongoDB (categoryId, authorId, createdAt)
- Пагинация всех списков

### Безопасность

- Только HTTPS
- Ограничение частоты запросов
- Валидация входных данных
- Ограничение прав доступа

### Масштабируемость

- Stateless Go-сервисы
- Горизонтальное масштабирование
- CDN для статики

### Поддерживаемость

- Модульная архитектура Angular
- Четкие границы доменов в Go
- Централизованное логирование

---

## 5. Возможные расширения

- WebSocket для live-обновлений
- Полнотекстовый поиск
- Email-уведомления
- Интеграция ElasticSearch


