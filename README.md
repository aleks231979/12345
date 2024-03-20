## [Проект: Movies(frontend)]
### 🌕 Краткое описание:
Дипломный проект.
Frontend часть одностраничного, адаптивного приложения на react.js, с сервером(backend) на node.js framework express.js.

Интерактивная страница, где можно осуществлять поиск фильмов и сохранять их в избранное.
Дипломная работа по курсу [Front-end-разработчик]

В проекте реализовано взаимодействие с двумя серверами(api). Из первого мы получаем список всех фильмов, фильтруем, сортируем, сохраняем и отображаем часть фильмов по фильтру. Данные поисковой строки и чекбокса сохраняются до выходы из приложения в локальном хранилище. При отметке фильма лайком, фильм добавляется в избранные и сохраняется на сервере приложения. В проекте есть регистрация и авторизация пользователей. Изменение рагистрационных данных пользователя. Генерируется токен и передается в куках. При повторном входе на сайт идет проверка токена на сервере. Для удобства разработки, при запуске локально токен сохраняется в headers. Загрузка с серверов осуществляется один раз. Далее мы только добавляем или удаляем фильмы в избранном. Используется локальное хранилище и принципы рендеринга react.

[Макет](https://www.figma.com/file/6fm51PDoEs7H5uLtmrJnPt/final_graduation_project_black_theme?node-id=932%3A3228)
### 🌕 Запуск проекта

✅ Скачать проект в архиве .zip;
✅ `npm i` — установка зависимостей;
✅ `npm run build` — сборка production;
✅ `npm run start` — запуск веб сервера в режиме develop.


### 🌕 Используемые Технологии:

<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="ReactJS" alt="NodeJS" width="40" height="40"/>&nbsp;
<img src="https://user-images.githubusercontent.com/94468513/187542776-f4aaee57-c8b2-4de6-9d84-48b7cdf0b1a9.svg" title="VSCode" alt="VSCode" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
<img src="https://user-images.githubusercontent.com/78322084/162064174-194ac89a-024d-4839-aae3-22d9ee4e3a33.png"  title="GitHub" alt="GitHub" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
<img src="https://user-images.githubusercontent.com/94468513/187526649-ea43f3cc-3b08-4054-9af2-ec81af5bc2e6.svg" title="Git" alt="Git" width="40" height="40"/>&nbsp;
<img src="https://user-images.githubusercontent.com/94468513/187550880-a4d2a9ef-6267-4d05-b459-8a241c85109c.svg" title="NodeJS" alt="NodeJS" width="40" height="40"/>&nbsp;
<img src="https://user-images.githubusercontent.com/94468513/187539690-03d3bff8-3360-4b55-a9cc-57b6c2ac547c.svg" title="WebPack" alt="WebPack" height="40"/>&nbsp;


### 🌕 Произведена работа:

✅ Регистрация пользователя на сервере
✅ Авторизация пользователя на сервере
✅ Защищенные страницы от не авторизованных пользователей
✅ Загрузка информации о пользователе с сервера
✅ Загрузка избранных карточек с сервера
✅ Добавление новой карточки
✅ Обновлять информации о пользователе
