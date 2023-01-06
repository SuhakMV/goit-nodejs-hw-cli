# Получаем и выводим весь список контакстов в виде таблицы (console.table)
node index.js --action="list"
["https://ibb.co/dj73P23"]

# Получаем контакт по id
node index.js --action="get" --id=5
["https://ibb.co/vdqk4fj"]

# Добавялем контакт
node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
["https://ibb.co/fr41rGm"]

# Удаляем контакт
node index.js --action="remove" --id=3
["https://ibb.co/bgVPHZn"]