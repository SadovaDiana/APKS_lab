# Skill: github-actions

## Призначення

Створення CI workflow для перевірки проєкту на різних операційних системах[cite: 7].

## Вхідні дані

- Готовий проєкт із налаштованим `npm test`[cite: 7].

## Очікуваний результат

Агент повинен створити файл `.github/workflows/ci.yml` із матрицею для Windows, Linux і macOS (`windows-latest`, `ubuntu-latest`, `macos-latest`)[cite: 7, 8]. Workflow повинен виконувати: checkout, встановлення залежностей (`npm install`) та запуск тестів (`npm test`)[cite: 7, 8]. Не повинно бути жодних секретів у файлі[cite: 8].

## Перевірка

- Файл `.github/workflows/ci.yml` існує.
- Файл містить `strategy: matrix` з трьома ОС[cite: 8].

## Типовий сценарій помилки

- **Помилка:** Відсутня одна з ОС у матриці або workflow містить секрети[cite: 8].
- **Дія:** Оркестратор видає помилку "CI setup failed: invalid OS matrix or secrets exposed"[cite: 8].
