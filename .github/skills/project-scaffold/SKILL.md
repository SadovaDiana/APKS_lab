# Skill: project-scaffold

## Призначення

Створення мінімального Hello World-проєкту для JavaScript, ініціалізація структури каталогів та базових файлів[cite: 7].

## Вхідні дані

- Мова: JavaScript (Node.js)[cite: 5, 7].
- Назва проєкту: "Hello World JS"[cite: 7].

## Очікуваний результат

Агент повинен створити:

1. Файл `package.json` із базовою конфігурацією[cite: 7].
2. Файл `src/index.js`, який виводить "Hello World" у консоль[cite: 7].
3. Файл `.gitignore`, що включає ігнорування `node_modules/`, `coverage/` та `.env`[cite: 7].

## Перевірка

- Файл `src/index.js` існує[cite: 7].
- Файл `package.json` містить скрипт `"start": "node src/index.js"`.

## Типовий сценарій помилки

- **Помилка:** Відсутній `package.json` або `src/index.js`[cite: 7].
- **Дія:** Оркестратор зупиняє процес із повідомленням "Scaffold failed: missing required initialization files"[cite: 7].
