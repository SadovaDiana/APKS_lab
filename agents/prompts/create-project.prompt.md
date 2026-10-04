# Command: create-project

## Передумови

Наявність порожньої папки `src/`.

## Дії

Виклич skill `project-scaffold` та створи початковий проєкт[cite: 7].

## Очікувані файли

- `package.json`
- `src/index.js`
- `.gitignore`

## Команди перевірки

Перевір наявність файлів. Спробуй виконати `node src/index.js`.

## Повідомлення про помилку

"Project creation failed: missing package.json or src/index.js".
