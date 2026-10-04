# Command: create-actions

## Передумови

Проєкт із налаштованими скриптами складання та тестування.

## Дії

Викликає skill `github-actions` і створює CI workflow.

## Очікувані файли

- `.github/workflows/ci.yml`

## Команди перевірки

Перевірка наявності файлу `ci.yml` та коректності YAML-синтаксису.

## Повідомлення про помилку

"Actions creation failed: ci.yml not generated".
