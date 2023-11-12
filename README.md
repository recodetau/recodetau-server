# Сайт для bytehub.kz

Для сборки и запуска требуются `docker` и `docker-compose`.

### Как запустить

1. Скопируйте `.env.template` в `.env`

   ```shell
   cp .env.template .env
   ```

2. Заполните данные для базы данных и хост сервера (IP-адрес своей сети, например `http://192.168.1.1`)

3. Запустите бэкенд командой:

   ```shell
   sudo docker-compose up --build
   ```

   Для разработки используйте:

   ```shell
   sudo docker-compose -f docker-compose.dev.yml up --build
   ```
