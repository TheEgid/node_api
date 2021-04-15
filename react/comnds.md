
npx create-react-app formatting-project --template typescript

cd formatting-project

npm i -D --save-exact eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-prettier eslint-config-react-app eslint-import-resolver-typescript eslint-webpack-plugin eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks babel-eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin


npm i -D --save-exact prettier prettier-eslint prettier-eslint-cli eslint-plugin-prettier

npm install --save-exact reactstrap react react-dom


#npm install --save-exact @types/jsdom


https://feralamillo.medium.com/create-react-app-typescript-eslint-and-prettier-699277b0b913#765d

**Запуск сервера - npm start. 
А дальше уже удаляешь из папки SRC всё, кроме index.js и из него все, что не используешь. 
Остальные файлы, которые на что-то влияют в корне и в папке public (index.html и стили)**