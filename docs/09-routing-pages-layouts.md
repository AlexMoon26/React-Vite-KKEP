# 9. Роутинг: страницы, layouts и React Router

## Цель занятия

На прошлом этапе мы разложили проект по файлам. Теперь добавим роутинг: приложение сможет показывать разные страницы по разным адресам.

В этой методичке мы используем React Router:

- `createBrowserRouter`;
- `RouterProvider`;
- `Outlet`;
- `NavLink`;
- `Link`;
- страницы в папке `pages`;
- общий layout в папке `layouts`.

После занятия студент должен уметь:

- объяснить, что такое роутинг в SPA;
- отличать страницу от компонента;
- понимать, зачем нужен layout;
- понимать, зачем нужен `Outlet`;
- создавать маршруты через `createBrowserRouter`;
- подключать маршрутизатор через `RouterProvider`;
- создавать навигацию через `NavLink`;
- понимать, что такое index route;
- добавлять страницу 404.

## 1. Что такое роутинг

Роутинг - это связь между адресом в браузере и тем, что пользователь видит на экране.

Примеры:

```text
/          -> главная страница
/learn     -> страница учебных ссылок
/feedback  -> страница формы
```

В обычном многостраничном сайте браузер часто загружает новый HTML-файл с сервера.

В React SPA обычно загружается один `index.html`, а React Router решает, какой компонент показать для текущего адреса.

## 2. Что такое SPA

SPA - Single Page Application, одностраничное приложение.

Это не значит, что в приложении только один экран. Это значит, что у приложения один HTML-вход, а разные страницы переключаются внутри JavaScript.

Схема:

```text
index.html
    ↓
React
    ↓
React Router смотрит URL
    ↓
Показывает нужную страницу
```

## 3. Установка React Router

Для этапа установлен пакет:

```bash
npm install react-router
```

В `package.json` появляется:

```json
{
  "dependencies": {
    "react-router": "^7.17.0"
  }
}
```

Версия может отличаться, если проект устанавливается позже.

## 4. Структура после добавления роутинга

В `src` появились новые папки:

```text
src/
├── layouts/
│   └── RootLayout.jsx
├── pages/
│   ├── FeedbackPage.jsx
│   ├── HomePage.jsx
│   ├── LearnPage.jsx
│   └── NotFoundPage.jsx
├── router.jsx
└── App.jsx
```

Назначение:

| Файл или папка | За что отвечает |
|---|---|
| `router.jsx` | Описывает маршруты приложения. |
| `layouts/RootLayout.jsx` | Общая оболочка страниц: шапка, навигация, `<Outlet />`. |
| `pages/HomePage.jsx` | Главная страница. |
| `pages/LearnPage.jsx` | Страница учебных ссылок. |
| `pages/FeedbackPage.jsx` | Страница формы. |
| `pages/NotFoundPage.jsx` | Страница для неизвестного адреса. |
| `App.jsx` | Подключает `RouterProvider`. |

## 5. Что такое страница

Страница - это компонент, который связан с маршрутом.

Пример:

```javascript
export function HomePage() {
  return <h1>Главная</h1>
}
```

Если маршрут `/` связан с `HomePage`, пользователь увидит эту страницу по адресу:

```text
/
```

Компоненты и страницы технически похожи: и то, и другое функции, которые возвращают JSX. Разница в роли.

```text
Компонент -> маленькая часть интерфейса
Страница  -> экран, связанный с URL
```

## 6. Что такое layout

Layout - это общий каркас для нескольких страниц.

Например:

- шапка сайта;
- навигация;
- общий контейнер;
- футер;
- место, куда вставляется текущая страница.

В нашем проекте layout называется `RootLayout`.

```javascript
export function RootLayout() {
  return (
    <>
      <header>...</header>
      <Outlet />
    </>
  )
}
```

`header` будет виден на всех дочерних страницах, а `<Outlet />` покажет текущую страницу.

## 7. Что такое `Outlet`

`Outlet` - место, куда React Router вставляет дочерний маршрут.

Пример:

```javascript
import { Outlet } from "react-router";

export function RootLayout() {
  return (
    <>
      <header>Навигация</header>
      <Outlet />
    </>
  )
}
```

Если пользователь открыл `/learn`, внутри `<Outlet />` появится `LearnPage`.

Если открыл `/feedback`, появится `FeedbackPage`.

## 8. Навигация через `NavLink`

`NavLink` похож на ссылку, но умеет понимать, активен ли текущий маршрут.

```javascript
<NavLink to="/learn">
  Learn
</NavLink>
```

Можно менять класс в зависимости от активности:

```javascript
<NavLink
  className={({ isActive }) =>
    isActive ? "active-link" : "link"
  }
  to="/learn"
>
  Learn
</NavLink>
```

В нашем проекте активная ссылка получает другой фон и цвет.

## 9. Файл `router.jsx`

Маршруты описаны так:

```javascript
import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout.jsx";
import { FeedbackPage } from "./pages/FeedbackPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { LearnPage } from "./pages/LearnPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "learn",
        element: <LearnPage />,
      },
      {
        path: "feedback",
        element: <FeedbackPage />,
      },
    ],
  },
]);
```

Разберем:

- `path: "/"` - корневой маршрут;
- `element: <RootLayout />` - общий layout;
- `children` - дочерние страницы;
- `index: true` - страница по умолчанию внутри `/`;
- `path: "learn"` - путь `/learn`;
- `path: "feedback"` - путь `/feedback`;
- `errorElement` - что показать при ошибке маршрута.

## 10. Index route

Index route - это дочерний маршрут по умолчанию.

```javascript
{
  index: true,
  element: <HomePage />,
}
```

Это значит:

```text
Когда пользователь находится на /,
в Outlet показывается HomePage.
```

Index route не имеет собственного `path`.

## 11. Подключение RouterProvider

`App.jsx` стал очень коротким:

```javascript
import { RouterProvider } from "react-router/dom";
import { router } from "./router.jsx";
import "./App.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

`RouterProvider` получает объект маршрутизатора и включает роутинг для приложения.

## 12. Главная страница `HomePage`

`HomePage` содержит то, что раньше было верхней частью `App`:

```javascript
export function HomePage() {
  const [count, setCount] = useState(0)
  const [isHintVisible, setIsHintVisible] = useState(false)

  return (
    <section id="center">
      <Hero />
      <PageTitle title="Get started" fileName="src/App.jsx" toolName="HMR" />
      ...
    </section>
  )
}
```

Теперь логика счетчика живет на главной странице.

## 13. Страница `LearnPage`

`LearnPage` показывает ссылки:

```javascript
export function LearnPage() {
  return (
    <section id="next-steps">
      ...
    </section>
  )
}
```

Эта страница использует массивы `documentationLinks` и `socialLinks`.

## 14. Страница `FeedbackPage`

`FeedbackPage` показывает форму:

```javascript
import { ContactForm } from "../components/ContactForm.jsx";

export function FeedbackPage() {
  return <ContactForm />;
}
```

Это хороший пример страницы-обертки: страница может быть короткой, если основная логика уже лежит в компоненте.

## 15. Страница `NotFoundPage`

Если пользователь откроет неизвестный путь, например:

```text
/unknown
```

React Router покажет страницу ошибки:

```javascript
export function NotFoundPage() {
  return (
    <section>
      <h1>Page not found</h1>
      <Link to="/">Back home</Link>
    </section>
  )
}
```

`Link` используется для перехода внутри приложения без полной перезагрузки страницы.

## 16. `Link` и `NavLink`

`Link` - обычная внутренняя ссылка React Router.

```javascript
<Link to="/">Back home</Link>
```

`NavLink` - ссылка, которая знает, активна она или нет.

```javascript
<NavLink to="/learn">Learn</NavLink>
```

Обычно:

- `Link` используют для простых переходов;
- `NavLink` используют в меню навигации.

## 17. Частые ошибки новичков

### Ошибка 1. Использовать обычный `<a>` для внутренних переходов

Нежелательно:

```javascript
<a href="/learn">Learn</a>
```

Лучше:

```javascript
<NavLink to="/learn">Learn</NavLink>
```

Обычный `<a>` может перезагрузить страницу. React Router-ссылки переключают маршрут внутри SPA.

### Ошибка 2. Забыть `Outlet`

Если в layout нет:

```javascript
<Outlet />
```

то дочерние страницы не появятся.

### Ошибка 3. Поставить `/` перед дочерним path

Внутри children пишем:

```javascript
path: "learn"
```

А не:

```javascript
path: "/learn"
```

Для учебного проекта так проще понять вложенность маршрутов.

### Ошибка 4. Забыть RouterProvider

Если не подключить:

```javascript
<RouterProvider router={router} />
```

маршруты не начнут работать.

## 18. Мини-практика

### Задание 1

Установите React Router:

```bash
npm install react-router
```

### Задание 2

Создайте файл:

```text
src/router.jsx
```

### Задание 3

Создайте layout:

```text
src/layouts/RootLayout.jsx
```

Внутри используйте:

```javascript
<Outlet />
```

### Задание 4

Создайте страницы:

```text
src/pages/HomePage.jsx
src/pages/LearnPage.jsx
src/pages/FeedbackPage.jsx
src/pages/NotFoundPage.jsx
```

### Задание 5

Подключите маршрутизатор в `App.jsx`:

```javascript
function App() {
  return <RouterProvider router={router} />
}
```

## 19. Контрольные вопросы

1. Что такое роутинг?
2. Что такое SPA?
3. Чем страница отличается от обычного компонента?
4. Что такое layout?
5. Для чего нужен `Outlet`?
6. Что делает `createBrowserRouter`?
7. Что делает `RouterProvider`?
8. Что такое index route?
9. Чем `Link` отличается от `NavLink`?
10. Почему для внутренних переходов лучше использовать `Link` или `NavLink`?
11. Где в проекте описаны маршруты?
12. Где находится общий layout?
13. Что показывает `NotFoundPage`?
14. Почему `App.jsx` стал коротким?
15. Как добавить новый маршрут `/about`?

## 20. Краткий итог

React Router позволяет связывать URL с React-компонентами. Страницы лежат в `pages`, общий каркас - в `layouts`, а маршруты описаны в `router.jsx`.

Главная схема:

```text
App.jsx
  -> RouterProvider
      -> router.jsx
          -> RootLayout
              -> Outlet
                  -> текущая page
```


