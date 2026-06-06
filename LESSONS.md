# Учебные состояния проекта

Проект ведется как серия методичек. Для каждой ключевой темы можно сделать отдельный Git-коммит и тег, чтобы быстро перейти к нужному состоянию кода.

## Как перейти к этапу

```bash
git checkout lesson-01-architecture
```

или:

```bash
git checkout lesson-02-jsx-components
```

или:

```bash
git checkout lesson-03-events-usestate
```

или:

```bash
git checkout lesson-04-props
```

или:

```bash
git checkout lesson-05-rendering-lists
```

или:

```bash
git checkout lesson-06-conditional-rendering
```

Чтобы вернуться к основной ветке:

```bash
git checkout main
```

## Этапы

| Тег | Методичка | Что показывает код |
|---|---|---|
| `lesson-01-architecture` | `docs/01-react-vite-architecture.md` | Исходная архитектура React Vite проекта: `index.html`, `main.jsx`, `App.jsx`, стили и assets. |
| `lesson-02-jsx-components` | `docs/02-jsx-and-react-components.md` | Разбиение JSX в `App.jsx` на компоненты `Hero`, `PageTitle` и `CounterButton`. |
| `lesson-03-events-usestate` | `docs/03-events-and-usestate.md` | События и состояние: именованные обработчики, `useState`, `Reset` и переключаемая подсказка. |
| `lesson-04-props` | `docs/04-passing-props.md` | Props: `PageTitle`, `CounterButton` и `ActionButton` получают данные и функции от родителя. |
| `lesson-05-rendering-lists` | `docs/05-rendering-lists.md` | Списки: ссылки вынесены в массивы данных и отображаются через `.map()` с устойчивыми `key`. |
| `lesson-06-conditional-rendering` | `docs/06-conditional-rendering.md` | Условный рендеринг: `if`, `return null`, тернарный оператор и условный текст интерфейса. |

## Рекомендация

Для просмотра старого состояния без риска что-то испортить можно создать временную ветку:

```bash
git checkout -b practice-lesson-02 lesson-02-jsx-components
```

Так студент сможет экспериментировать с кодом, а основная ветка останется чистой.
