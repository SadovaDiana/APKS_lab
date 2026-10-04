# Command: create-build

## Передумови

Створений проєкт із `package.json` та `src/index.js`[cite: 7].

## Дії

Викликає skill `build-and-test`, створює конфігурацію складання і тести[cite: 7].

## Очікувані файли

- `tests/index.test.js`
- Оновлений `package.json` із залежністю Jest та скриптом тестування.

## Команди перевірки

Запуск `npm install` та `npm test`.

## Повідомлення про помилку

"Build creation failed: tests were not created or configured properly".
