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

## Рекомендация

Для просмотра старого состояния без риска что-то испортить можно создать временную ветку:

```bash
git checkout -b practice-lesson-02 lesson-02-jsx-components
```

Так студент сможет экспериментировать с кодом, а основная ветка останется чистой.
