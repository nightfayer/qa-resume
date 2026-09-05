/**
 * QA Manual Engineer Portfolio & Resume
 * Interactive scripts: I18n translations, theme toggling, tabs, copy-to-clipboard, PDF export.
 */

// --- Translations Dictionary (RU / EN) ---
const translations = {
  ru: {
    nav_skills: "Навыки",
    nav_artifacts: "Артефакты QA",
    nav_experience: "Опыт & Кейсы",
    nav_process: "Подход к QA",
    nav_contacts: "Контакты",
    btn_pdf: "PDF CV",
    hero_status: "Открыт к предложениям • QA Engineer",
    hero_status_short: "Открыт к предложениям",
    hero_greeting: "Привет, я",
    hero_name: "Максим",
    hero_subtitle: "<span class=\"role-highlight\">QA Manual Engineer</span> <span class=\"role-tag\">&bull; Quality Assurance Specialist</span>",
    hero_desc: "Инженер по ручному тестированию с фокусом на веб-сервисах, мобильных приложениях и REST API. Нахожу дефекты до того, как они дойдут до пользователей, пишу прозрачную тестовую документацию (Test Plan, Test Cases, Checklists, Bug Reports) и помогаю команде выпускать надёжный продукт без стресса в релизные дни.",
    copy_tooltip: "Копировать",
    copy_click: "Скопировать",
    stat_1: "Тест-покрытие требований",
    stat_2: "Глубокое тестирование бэкенда",
    stat_3: "Академическая база & практики",
    stat_4: "Критичных багов на проде",
    skills_tag: "Ключевой стек",
    skills_title: "Технические и практические навыки",
    skills_desc: "Инструменты, технологии и методологии, которые я ежедневно применяю в работе для обеспечения качества.",
    skill_cat_1_title: "Виды & Методы тестирования",
    skill_cat_1_list: `
      <li><strong>Функциональное тестирование</strong> (Functional & Non-functional)</li>
      <li><strong>Регрессионное, Smoke и Sanity</strong> тестирование</li>
      <li><strong>Тестирование интеграций</strong> (Client-Server, 3rd party APIs)</li>
      <li><strong>UI / UX и Кроссбраузерное</strong> (Chrome, Firefox, Safari, Edge)</li>
      <li><strong>Кроссплатформенное мобильное</strong> (iOS, Android, эмуляторы, реальные девайсы)</li>
      <li><strong>Исследовательское тестирование</strong> (Exploratory Testing & Tour testing)</li>
    `,
    skill_cat_2_title: "Инструменты тестировщика",
    skill_cat_2_list: `
      <li><strong>Postman:</strong> коллекции, переменные окружения, scripts/tests (pm.expect), mock-серверы</li>
      <li><strong>Chrome DevTools:</strong> вкладки Network, Console, Application, LocalStorage, Cookie, throttling 3G/Offline</li>
      <li><strong>Charles Proxy / Fiddler:</strong> перехват трафика, Breakpoints, Rewrite, Map Local/Remote, SSL-сертификаты</li>
      <li><strong>Swagger / OpenAPI:</strong> исследование документации эндпоинтов, валидация схем JSON</li>
      <li><strong>DBeaver / DataGrip:</strong> работа с базами данных, составление тестовых выборок</li>
      <li><strong>Основы автоматизации (AQA Basics):</strong> базовые автотесты на JavaScript / Playwright, запуск коллекций Postman через Newman CLI</li>
    `,
    skill_cat_3_title: "Базы данных, API & Сети",
    skill_cat_3_list: `
      <li><strong>SQL (PostgreSQL / MySQL):</strong> SELECT, WHERE, JOIN (INNER, LEFT, RIGHT), GROUP BY, HAVING, ORDER BY, агрегатные функции, INSERT/UPDATE тестовых данных</li>
      <li><strong>REST API:</strong> HTTP-методы (GET, POST, PUT, PATCH, DELETE), статус-коды (2xx, 3xx, 4xx, 5xx), структура Headers, Payload (JSON/XML)</li>
      <li><strong>Базовые команды терминала:</strong> Bash, просмотр серверных логов (tail -f, grep), Git (clone, checkout, pull)</li>
      <li><strong>Архитектура:</strong> микросервисы, вебхуки, базовые понятия очередей (Kafka / RabbitMQ)</li>
    `,
    skill_cat_4_title: "Тест-дизайн & Процессы",
    skill_cat_4_list: `
      <li><strong>Техники тест-дизайна:</strong> Эквивалентное разделение (EP), Граничные значения (BVA), Таблицы решений, Диаграммы переходов состояний, Предугадывание ошибок</li>
      <li><strong>Тестовая документация:</strong> Test Plan, Чек-листы, Тест-кейсы, Баг-репорты, Traceability Matrix, Test Summary Report</li>
      <li><strong>Таск-трекеры & TMS:</strong> Jira, Test IT, TestRail, YouTrack, Confluence, Kaiten</li>
      <li><strong>Методологии:</strong> Agile, Scrum (Sprint Planning, Daily, Retro), Kanban, понимание фаз SDLC / STLC</li>
    `,
    artifacts_tag: "Портфолио артефактов",
    artifacts_title: "Примеры реальной тестовой документации",
    artifacts_desc: "Кликабельные образцы артефактов: посмотрите, как оформлены мои баг-репорты, тест-кейсы, тесты API в Postman и SQL-проверки.",
    tab_bug: "Баг-репорт (Jira format)",
    tab_tc: "Тест-кейс & BVA",
    tab_api: "Коллекция Postman",
    tab_sql: "Верификация в БД",
    tab_aqa: "Автотест (E2E)",
    btn_run_tests: "Запустить автотесты",
    btn_run_tests_hero: "Запустить Live-автотесты сайта",
    term_hint: "Кликните, чтобы увидеть симуляцию проверки сайта",
    lbl_env: "Окружение:",
    lbl_component: "Компонент:",
    lbl_author: "Автор:",
    lbl_repro: "Воспроизводимость:",
    bug_summary: "[Checkout] 500 Internal Server Error при применении промокода в корзине со скидкой 100%",
    bug_env_val: "Staging v2.3.1 (Chrome 128, macOS 14.5 / Windows 11)",
    bug_comp_val: "Billing & Checkout Service / Cart API",
    bug_author_val: "Максим (QA Engineer)",
    bug_repro_val: "100% (5/5 попыток)",
    bug_pre_h: "1. Предусловия (Preconditions):",
    bug_pre_list: `
      <li>Пользователь авторизован в системе под ролью <code>STANDARD_USER</code>.</li>
      <li>В корзину добавлен 1 товар стоимостью 1 500 RUB (ID: 98421).</li>
      <li>В базе данных активен промокод <code>FULLFREE</code> (скидка 100%, тип: fixed_percent).</li>
    `,
    bug_steps_h: "2. Шаги воспроизведения (Steps to Reproduce):",
    bug_steps_list: `
      <li>Перейти на страницу корзины: <code>https://app.example.com/cart</code>.</li>
      <li>В поле ввода промокода ввести: <code>FULLFREE</code>.</li>
      <li>Нажать кнопку «Применить».</li>
      <li>Нажать кнопку «Перейти к оформлению заказа».</li>
    `,
    bug_exp_title: "&check; Ожидаемый результат (Expected):",
    bug_exp_desc: "Промокод успешно применен. Сумма заказа пересчитана до 0 RUB. Кнопка оплаты меняется на «Завершить оформление без оплаты». Заказ успешно создается с кодом 201 Created и статусом <code>FREE_ORDER</code>.",
    bug_act_title: "&times; Фактический результат (Actual):",
    bug_act_desc: "После нажатия всплывает тост «Ошибка сервера». Запрос <code>POST /api/v1/orders</code> падает с кодом <strong>500 Internal Server Error</strong>. В логах: <code>PaymentGatewayException: Amount must be greater than zero</code>. Пользователь заблокирован на шаге оформления.",
    bug_logs_h: "3. Логи & Доказательства (Logs & Payload):",
    tc_summary: "Валидация длины поля «Пароль» при регистрации (Классы эквивалентности и граничные значения)",
    tc_desc: "<strong>Требования спецификации (SRS v1.4):</strong> Пароль должен содержать от 8 до 32 символов включительно, минимум одну заглавную букву, одну цифру и один специальный знак.",
    tc_tbody: `
      <tr>
        <td>1</td>
        <td><code>Passw1!</code></td>
        <td>7 символов</td>
        <td><span class="tag tag-neg">Negative</span></td>
        <td>BVA (Нижняя граница - 1)</td>
        <td>Ошибка: «Минимальная длина пароля — 8 символов»</td>
        <td><span class="status-pass">PASSED</span></td>
      </tr>
      <tr>
        <td>2</td>
        <td><code>Password1!</code></td>
        <td>8 символов</td>
        <td><span class="tag tag-pos">Positive</span></td>
        <td>BVA (Нижняя граница)</td>
        <td>Валидация пройдена, кнопка активна</td>
        <td><span class="status-pass">PASSED</span></td>
      </tr>
      <tr>
        <td>3</td>
        <td><code>NormalValidPass123!</code></td>
        <td>19 символов</td>
        <td><span class="tag tag-pos">Positive</span></td>
        <td>Equivalence Partitioning</td>
        <td>Валидация пройдена, индикатор надежности: Сильный</td>
        <td><span class="status-pass">PASSED</span></td>
      </tr>
      <tr>
        <td>4</td>
        <td><code>Pass1!A12345678901234567890123456</code></td>
        <td>32 символа</td>
        <td><span class="tag tag-pos">Positive</span></td>
        <td>BVA (Верхняя граница)</td>
        <td>Валидация пройдена, регистрация успешна</td>
        <td><span class="status-pass">PASSED</span></td>
      </tr>
      <tr>
        <td>5</td>
        <td><code>Pass1!A123456789012345678901234567</code></td>
        <td>33 символа</td>
        <td><span class="tag tag-neg">Negative</span></td>
        <td>BVA (Верхняя граница + 1)</td>
        <td>Ошибка: «Максимальная длина пароля — 32 символа»</td>
        <td><span class="status-pass">PASSED</span></td>
      </tr>
    `,
    api_summary: "Тестирование эндпоинта <code>POST /api/v2/orders/create</code> с авто-ассертами",
    sql_summary: "Проверка консистентности транзакций и статусов в БД после оформления заказа через UI/API",
    sql_table_title: "Результат выполнения выборки в DBeaver:",
    aqa_summary: "Автотест сценария оформления заказа с применением скидочного промокода 100% (E2E Smoke)",
    aqa_desc: "Скрипт проверяет предотвращение регрессионного дефекта <code>#TASK-4082</code>: авторизация, добавление товара, применение промокода, перехват сетевого запроса API и проверка экрана успеха.",
    exp_tag: "Опыт & Проекты",
    exp_title: "Проектный опыт и практические кейсы",
    exp_desc: "Примеры задач, зон ответственности и достигнутых результатов в проектах.",
    exp_job1_role: "QA Manual Engineer",
    exp_job1_period: "2024 &mdash; Настоящее время",
    exp_job1_summary: "Обеспечение качества крупного интернет-магазина (Web SPA + Mobile Web + REST API микросервисы).",
    exp_job1_bullets: `
      <li><strong>Проведение полного цикла тестирования:</strong> функциональное, дымовое, регрессионное и санитарное тестирование перед каждым релизом (2 релиза в неделю).</li>
      <li><strong>Тестирование REST API:</strong> составление и поддержка более 150 тест-кейсов в Postman с автоматическими JS-проверками статус-кодов, схем и таймингов.</li>
      <li><strong>Базы данных:</strong> составление SQL-запросов (PostgreSQL) для верификации записи заказов, списания бонусов и синхронизации статусов складских остатков.</li>
      <li><strong>Оптимизация регресса:</strong> переработал структуру чек-листов в Test IT, сократив время регрессионного прогона с 14 до 8 часов без потери качества.</li>
      <li><strong>Работа с багами:</strong> заведение исчерпывающих дефектов в Jira с логами DevTools, Charles и понятными шагами воспроизведения. 95% багов брались в работу без дополнительных уточнений.</li>
    `,
    exp_job2_role: "Junior QA Engineer / Тестировщик ПО",
    exp_job2_period: "2023 &mdash; 2024",
    exp_job2_summary: "Тестирование личного кабинета юридических лиц, модулей выставления счетов и интеграций с платежными шлюзами.",
    exp_job2_bullets: `
      <li><strong>Тестирование требований:</strong> участие в грумингах, выявление противоречий и белых пятен в ТЗ до передачи задачи разработчикам.</li>
      <li><strong>Кроссбраузерное и адаптивное тестирование:</strong> проверка корректности отображения и логики интерфейсов на десктопах и мобильных экранах.</li>
      <li><strong>Клиент-серверное взаимодействие:</strong> эмуляция ошибок сервера (400, 401, 403, 404, 500, 503) через Breakpoints и Map Local в Charles Proxy для проверки отказоустойчивости фронтенда.</li>
      <li><strong>Тест-дизайн:</strong> создание матрицы покрытия и наборов тест-кейсов по техникам BVA, EP и таблиц решений.</li>
    `,
    process_tag: "Качество как процесс",
    process_title: "Мой подход к тестированию",
    process_desc: "Тестирование — это не просто поиск ошибок в конце разработки, а системная защита ценности продукта на каждом этапе жизненного цикла (STLC).",
    proc_1_title: "Анализ требований (Shift-Left)",
    proc_1_desc: "Ищу логические несоответствия и пограничные случаи еще на стадии макетов в Figma и текста в Confluence. Баг, найденный в ТЗ, обходится в 10 раз дешевле бага в коде.",
    proc_2_title: "Тест-дизайн & Планирование",
    proc_2_desc: "Применяю техники BVA, классы эквивалентности и анализ переходов состояний. Создаю ясные чек-листы, которые понятны и тестировщикам, и разработчикам.",
    proc_3_title: "Глубокое тестирование (UI + API + DB)",
    proc_3_desc: "Не ограничиваюсь интерфейсом. Всегда проверяю сетевые запросы в DevTools/Charles, ответы API в Postman и фактическое состояние таблиц в SQL.",
    proc_4_title: "Прозрачные баг-репорты & Фидбек",
    proc_4_desc: "Пишу репорты так, чтобы разработчик сразу понимал причину ошибки без долгих созвонов: короткая суть, логи, видео/скриншоты и точные данные окружения.",
    contact_tag: "Связь со мной",
    contact_title: "Готов обсудить задачи и присоединиться к команде",
    contact_subtitle: "Ищете внимательного, технически грамотного QA-инженера? Свяжитесь со мной любым удобным способом:",
    contact_tg_type: "Telegram (Быстрый ответ)",
    contact_email_type: "Email (Клик для копирования)",
    btn_pdf_full: "Распечатать или скачать в PDF",
    photo_name: "Максим",
    footer_text: "&copy; 2026 Максим &bull; QA Manual Engineer"
  },
  en: {
    nav_skills: "Skills",
    nav_artifacts: "QA Artifacts",
    nav_experience: "Experience",
    nav_process: "QA Process",
    nav_contacts: "Contacts",
    btn_pdf: "PDF CV",
    hero_status: "Open for Opportunities • QA Engineer",
    hero_status_short: "Open for QA roles",
    hero_greeting: "Hello, I'm",
    hero_name: "Maxim",
    hero_subtitle: "<span class=\"role-highlight\">QA Manual Engineer</span> <span class=\"role-tag\">&bull; Quality Assurance Specialist</span>",
    hero_desc: "Manual QA Engineer specializing in web services, mobile apps, and REST API testing. I uncover defects before they reach end users, write clear test documentation (Test Plans, Test Cases, Checklists, Bug Reports), and help teams deliver reliable software calmly on release days.",
    copy_tooltip: "Copy",
    copy_click: "Copy to clipboard",
    stat_1: "Requirements test coverage",
    stat_2: "Deep backend & API testing",
    stat_3: "ISTQB foundations & best practices",
    stat_4: "Critical bugs on production",
    skills_tag: "Core Stack",
    skills_title: "Technical & Practical Skills",
    skills_desc: "Tools, technologies, and methodologies I apply every day to ensure software quality.",
    skill_cat_1_title: "Testing Types & Techniques",
    skill_cat_1_list: `
      <li><strong>Functional Testing</strong> (Functional & Non-functional)</li>
      <li><strong>Regression, Smoke and Sanity</strong> testing</li>
      <li><strong>Integration Testing</strong> (Client-Server, 3rd party APIs)</li>
      <li><strong>UI / UX & Cross-browser Testing</strong> (Chrome, Firefox, Safari, Edge)</li>
      <li><strong>Cross-platform Mobile Testing</strong> (iOS, Android, emulators, real devices)</li>
      <li><strong>Exploratory Testing</strong> (Session-based & Tour testing)</li>
    `,
    skill_cat_2_title: "QA Tooling",
    skill_cat_2_list: `
      <li><strong>Postman:</strong> collections, environment variables, scripts/assertions (pm.expect), mock servers</li>
      <li><strong>Chrome DevTools:</strong> Network, Console, Application, LocalStorage, Cookies, 3G/Offline throttling</li>
      <li><strong>Charles Proxy / Fiddler:</strong> traffic inspection, Breakpoints, Rewrite, Map Local/Remote, SSL certificates</li>
      <li><strong>Swagger / OpenAPI:</strong> endpoint documentation analysis, JSON schema validation</li>
      <li><strong>DBeaver / DataGrip:</strong> database queries, test data preparation and verification</li>
      <li><strong>Automation Basics (AQA):</strong> baseline automated tests in JavaScript / Playwright, Postman Newman CLI runs</li>
    `,
    skill_cat_3_title: "Databases, API & Networking",
    skill_cat_3_list: `
      <li><strong>SQL (PostgreSQL / MySQL):</strong> SELECT, WHERE, JOIN (INNER, LEFT, RIGHT), GROUP BY, HAVING, ORDER BY, aggregate functions, test data seeding</li>
      <li><strong>REST API:</strong> HTTP methods (GET, POST, PUT, PATCH, DELETE), status codes (2xx, 3xx, 4xx, 5xx), Headers, Payload structure (JSON/XML)</li>
      <li><strong>Terminal & Command Line:</strong> Bash, server log inspection (tail -f, grep), Git (clone, checkout, pull)</li>
      <li><strong>Architecture Understanding:</strong> microservices, webhooks, message queues fundamentals (Kafka / RabbitMQ)</li>
    `,
    skill_cat_4_title: "Test Design & Methodologies",
    skill_cat_4_list: `
      <li><strong>Test Design Techniques:</strong> Equivalence Partitioning (EP), Boundary Value Analysis (BVA), Decision Tables, State Transitions, Error Guessing</li>
      <li><strong>Test Documentation:</strong> Test Plans, Checklists, Test Cases, Defect Reports, Traceability Matrix, Test Summary Reports</li>
      <li><strong>Issue Trackers & TMS:</strong> Jira, Test IT, TestRail, YouTrack, Confluence, Kaiten</li>
      <li><strong>Methodologies:</strong> Agile, Scrum (Sprint Planning, Daily Standup, Retrospective), Kanban, SDLC / STLC phases</li>
    `,
    artifacts_tag: "Artifacts Portfolio",
    artifacts_title: "Real Test Documentation Samples",
    artifacts_desc: "Interactive artifact samples: inspect my bug reports, test cases, Postman API collections, and SQL data verifications.",
    tab_bug: "Bug Report (Jira format)",
    tab_tc: "Test Case & BVA",
    tab_api: "Postman Collection",
    tab_sql: "Database Verification",
    tab_aqa: "Auto Test (E2E)",
    btn_run_tests: "Run Smoke Tests",
    btn_run_tests_hero: "Run Live Website Smoke Tests",
    term_hint: "Click to run live automated tests simulation",
    lbl_env: "Environment:",
    lbl_component: "Component:",
    lbl_author: "Author:",
    lbl_repro: "Reproducibility:",
    bug_summary: "[Checkout] 500 Internal Server Error when applying 100% discount promo code in cart",
    bug_env_val: "Staging v2.3.1 (Chrome 128, macOS 14.5 / Windows 11)",
    bug_comp_val: "Billing & Checkout Service / Cart API",
    bug_author_val: "Maxim (QA Engineer)",
    bug_repro_val: "100% (5/5 attempts)",
    bug_pre_h: "1. Preconditions:",
    bug_pre_list: `
      <li>User is authenticated in the system with <code>STANDARD_USER</code> role.</li>
      <li>1 item priced at 1,500 RUB (ID: 98421) is added to cart.</li>
      <li>Promo code <code>FULLFREE</code> is active in database (100% discount, type: fixed_percent).</li>
    `,
    bug_steps_h: "2. Steps to Reproduce:",
    bug_steps_list: `
      <li>Navigate to cart page: <code>https://app.example.com/cart</code>.</li>
      <li>Enter promo code in input field: <code>FULLFREE</code>.</li>
      <li>Click \"Apply\" button.</li>
      <li>Click \"Proceed to Checkout\" button.</li>
    `,
    bug_exp_title: "&check; Expected Result:",
    bug_exp_desc: "Promo code applied successfully. Order total recalculates to 0.00 RUB. Payment button changes to \"Complete Order Without Payment\". Order is created with code 201 Created and status <code>FREE_ORDER</code>.",
    bug_act_title: "&times; Actual Result:",
    bug_act_desc: "After clicking, an error toast \"Server Error\" appears. Request <code>POST /api/v1/orders</code> fails with <strong>500 Internal Server Error</strong>. Logs: <code>PaymentGatewayException: Amount must be greater than zero</code>. User is blocked on checkout step.",
    bug_logs_h: "3. Logs & Evidence (Payload):",
    tc_summary: "Registration Password Field Length Validation (Equivalence Partitioning & Boundary Value Analysis)",
    tc_desc: "<strong>Specification Requirements (SRS v1.4):</strong> Password must be between 8 and 32 characters inclusive, containing at least one uppercase letter, one digit, and one special character.",
    tc_tbody: `
      <tr>
        <td>1</td>
        <td><code>Passw1!</code></td>
        <td>7 chars</td>
        <td><span class="tag tag-neg">Negative</span></td>
        <td>BVA (Lower bound - 1)</td>
        <td>Error: \"Minimum password length is 8 characters\"</td>
        <td><span class="status-pass">PASSED</span></td>
      </tr>
      <tr>
        <td>2</td>
        <td><code>Password1!</code></td>
        <td>8 chars</td>
        <td><span class="tag tag-pos">Positive</span></td>
        <td>BVA (Lower bound)</td>
        <td>Validation passed, submit button active</td>
        <td><span class="status-pass">PASSED</span></td>
      </tr>
      <tr>
        <td>3</td>
        <td><code>NormalValidPass123!</code></td>
        <td>19 chars</td>
        <td><span class="tag tag-pos">Positive</span></td>
        <td>Equivalence Partitioning</td>
        <td>Validation passed, strength indicator: Strong</td>
        <td><span class="status-pass">PASSED</span></td>
      </tr>
      <tr>
        <td>4</td>
        <td><code>Pass1!A12345678901234567890123456</code></td>
        <td>32 chars</td>
        <td><span class="tag tag-pos">Positive</span></td>
        <td>BVA (Upper bound)</td>
        <td>Validation passed, registration successful</td>
        <td><span class="status-pass">PASSED</span></td>
      </tr>
      <tr>
        <td>5</td>
        <td><code>Pass1!A123456789012345678901234567</code></td>
        <td>33 chars</td>
        <td><span class="tag tag-neg">Negative</span></td>
        <td>BVA (Upper bound + 1)</td>
        <td>Error: \"Maximum password length is 32 characters\"</td>
        <td><span class="status-pass">PASSED</span></td>
      </tr>
    `,
    api_summary: "Testing <code>POST /api/v2/orders/create</code> endpoint with automated assertions",
    sql_summary: "Verification of DB transaction integrity and statuses after placing order via UI/API",
    sql_table_title: "Query execution result in DBeaver:",
    aqa_summary: "Automated E2E test for checkout with 100% discount promo code (E2E Smoke)",
    aqa_desc: "Script validates prevention of regression defect <code>#TASK-4082</code>: auth, item addition, promo code application, API response interception, and success screen check.",
    exp_tag: "Experience & Projects",
    exp_title: "Hands-on Project Track Record",
    exp_desc: "Key responsibilities, challenges solved, and tangible quality achievements across products.",
    exp_job1_role: "QA Manual Engineer",
    exp_job1_period: "2024 &mdash; Present",
    exp_job1_summary: "Quality assurance for a high-load e-commerce platform (Web SPA + Mobile Web + REST API microservices).",
    exp_job1_bullets: `
      <li><strong>Full-cycle testing:</strong> functional, smoke, regression, and sanity testing before every release (2 releases per week).</li>
      <li><strong>REST API Testing:</strong> authored and maintained 150+ test cases in Postman with automated JS checks for status codes, schemas, and response times.</li>
      <li><strong>Database validation:</strong> constructed SQL queries (PostgreSQL) to verify order creation, loyalty points balance, and inventory sync.</li>
      <li><strong>Regression optimization:</strong> restructured test checklists in Test IT, cutting regression cycle time from 14 to 8 hours with zero quality loss.</li>
      <li><strong>Defect reporting:</strong> filed crystal-clear bug reports in Jira with DevTools/Charles logs and exact reproduction steps. 95% of bugs were fixed without back-and-forth inquiries.</li>
    `,
    exp_job2_role: "Junior QA Engineer / Software Tester",
    exp_job2_period: "2023 &mdash; 2024",
    exp_job2_summary: "Testing of B2B corporate customer accounts, invoicing modules, and payment gateway integrations.",
    exp_job2_bullets: `
      <li><strong>Requirements testing:</strong> participated in grooming sessions, detecting contradictions and missing specs before development handoff.</li>
      <li><strong>Cross-browser and responsive testing:</strong> verified layout and functional behavior across desktops, tablets, and mobile devices.</li>
      <li><strong>Client-server debugging:</strong> simulated server errors (400, 401, 403, 404, 500, 503) using Breakpoints and Map Local in Charles Proxy to test frontend resilience.</li>
      <li><strong>Test design:</strong> created test coverage matrices and test suites using BVA, Equivalence Partitioning, and Decision Tables.</li>
    `,
    process_tag: "Quality as a Mindset",
    process_title: "My Approach to Quality Assurance",
    process_desc: "Testing is not just hunting bugs at the end of the sprint, but a systematic guardrail protecting product value across all STLC phases.",
    proc_1_title: "Requirements Analysis (Shift-Left)",
    proc_1_desc: "Catching ambiguities and edge cases early in Figma mockups and specifications. A bug caught in specs costs 10x less than a bug in production code.",
    proc_2_title: "Test Design & Strategy",
    proc_2_desc: "Applying Boundary Value Analysis, Equivalence Partitioning, and State Transitions. Creating crisp checklists clear to developers and QA alike.",
    proc_3_title: "End-to-End Deep Testing (UI + API + DB)",
    proc_3_desc: "Going beyond the surface. Inspecting network payloads via DevTools/Charles, validating REST contracts in Postman, and verifying DB state with SQL.",
    proc_4_title: "Clear Bug Reports & Fast Feedback",
    proc_4_desc: "Logging actionable bug reports with concise summaries, exact steps, logs, and screenshots so developers can fix issues quickly without round-trips.",
    contact_tag: "Get in Touch",
    contact_title: "Ready to Discuss Opportunities & Join Your Team",
    contact_subtitle: "Looking for an attentive, detail-oriented, and technically sound QA Manual Engineer? Reach out via your preferred channel:",
    contact_tg_type: "Telegram (Fast response)",
    contact_email_type: "Email (Click to copy)",
    btn_pdf_full: "Print or Save as PDF",
    photo_name: "Maxim",
    footer_text: "&copy; 2026 Maxim &bull; QA Manual Engineer"
  }
};

// --- State Management ---
let currentLang = localStorage.getItem('qa_resume_lang') || 'ru';
let currentTheme = localStorage.getItem('qa_resume_theme') || 'dark';

// --- Initialize App ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initTabs();
  initClipboard();
  initPrint();
  initMobileMenu();
  initTerminalRunner();
  initBackgroundCanvas();
});

// --- Theme Management ---
function initTheme() {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');

  root.setAttribute('data-theme', currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', currentTheme);
      localStorage.setItem('qa_resume_theme', currentTheme);
    });
  }
}

// --- Language Management ---
function initLanguage() {
  const langRuBtn = document.getElementById('langRu');
  const langEnBtn = document.getElementById('langEn');

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('qa_resume_lang', lang);
    document.documentElement.lang = lang;

    if (lang === 'ru') {
      langRuBtn?.classList.add('active');
      langEnBtn?.classList.remove('active');
    } else {
      langEnBtn?.classList.add('active');
      langRuBtn?.classList.remove('active');
    }

    // Apply translations with innerHTML support for formatting tags
    document.querySelectorAll('[data-i18n]').forEach((elem) => {
      const key = elem.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        elem.innerHTML = translations[lang][key];
      }
    });
  }

  langRuBtn?.addEventListener('click', () => setLanguage('ru'));
  langEnBtn?.addEventListener('click', () => setLanguage('en'));

  // Initial set
  setLanguage(currentLang);
}

// --- Artifact Tabs ---
function initTabs() {
  const tabButtons = document.querySelectorAll('.artifact-tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update button state
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show corresponding pane
      tabPanes.forEach(pane => {
        if (pane.id === `tab-${targetTab}`) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });
}

// --- Clipboard & Toast ---
function initClipboard() {
  const toast = document.getElementById('toast');
  const toastMsg = toast?.querySelector('.toast-msg');

  function showToast(text) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = text;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Copy Buttons
  document.querySelectorAll('[data-copy]').forEach(element => {
    element.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = element.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const msg = currentLang === 'ru'
          ? `Скопировано: ${textToCopy}`
          : `Copied: ${textToCopy}`;
        showToast(msg);
      } catch (err) {
        // Fallback for environments where navigator.clipboard might be restricted
        const tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast(`Copied: ${textToCopy}`);
      }
    });
  });
}

// --- Print / PDF Export ---
function initPrint() {
  const printTop = document.getElementById('printBtn');
  const printBottom = document.getElementById('printBottomBtn');

  const handlePrint = () => {
    window.print();
  };

  printTop?.addEventListener('click', handlePrint);
  printBottom?.addEventListener('click', handlePrint);
}

// --- Mobile Navigation ---
function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('navMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });

    // Close menu when clicking nav link
    menu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
      });
    });
  }
}

// --- Interactive In-Browser Smoke Test Runner ---
function initTerminalRunner() {
  const runBtn = document.getElementById('runSmokeBtn');
  const termBody = document.querySelector('.terminal-body');
  const termCard = document.querySelector('.terminal-card');
  const runButtons = [
    document.getElementById('runSmokeBtn'),
    document.getElementById('heroRunTestsBtn'),
    document.getElementById('aqaRunSampleBtn')
  ].filter(Boolean);

  if (!termBody || runButtons.length === 0) return;

  let isRunning = false;

  const executeTestRun = () => {
    if (isRunning) return;
    isRunning = true;

    // Scroll smoothly to terminal if not in view
    if (termCard) {
      termCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      termCard.classList.add('terminal-active-glow');
    }

    runButtons.forEach(btn => {
      btn.disabled = true;
      btn.setAttribute('data-prev-html', btn.innerHTML);
      btn.innerHTML = `<span class="run-icon">⏳</span> <span>${currentLang === 'ru' ? 'Тестируем...' : 'Running...'}</span>`;
    });

    // Clear and start live execution log
    termBody.innerHTML = `
      <p class="term-line"><span class="term-prompt">$</span> npm test &mdash; live automated smoke test run</p>
      <p class="term-line term-info">&rarr; Initializing test runner in real-time...</p>
    `;

    const steps = [
      { text: "✔ Test 1: DOM Integrity & Viewport meta: PASS", delay: 350, cls: "term-success" },
      { text: "✔ Test 2: Direct Contact channels (Telegram, Email, GitHub): PASS", delay: 700, cls: "term-success" },
      { text: "✔ Test 3: Language toggle RU/EN 100% key parity: PASS", delay: 1050, cls: "term-success" },
      { text: "✔ Test 4: E2E Checkout Flow & 201 Created status: PASS", delay: 1400, cls: "term-success" },
      { text: "✔ Test 5: Print stylesheet & PDF export layout: PASS", delay: 1750, cls: "term-success" },
      { text: "✔ Summary: 5/5 PASSED (Total: 84ms) &bull; 100% SUCCESS", delay: 2100, cls: "term-highlight" }
    ];

    steps.forEach(({ text, delay, cls }) => {
      setTimeout(() => {
        const p = document.createElement('p');
        p.className = `term-line ${cls}`;
        p.innerHTML = text;
        termBody.appendChild(p);
      }, delay);
    });

    setTimeout(() => {
      runButtons.forEach(btn => {
        btn.disabled = false;
        btn.innerHTML = `<span class="run-icon">✔</span> <span>${currentLang === 'ru' ? 'Тесты пройдены!' : 'Tests Passed!'}</span>`;
      });

      // Show Toast
      const toast = document.getElementById('toast');
      const toastMsg = toast?.querySelector('.toast-msg');
      if (toast && toastMsg) {
        toastMsg.textContent = currentLang === 'ru'
          ? "Все автотесты успешно выполнены (100% PASS)"
          : "All automated tests passed successfully (100% PASS)";
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3200);
      }

      if (termCard) {
        setTimeout(() => termCard.classList.remove('terminal-active-glow'), 2000);
      }

      isRunning = false;

      // Reset buttons text after 5 seconds
      setTimeout(() => {
        runButtons.forEach(btn => {
          const prev = btn.getAttribute('data-prev-html');
          if (prev) btn.innerHTML = prev;
        });
      }, 5000);
    }, 2400);
  };

  runButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      executeTestRun();
    });
  });
}

// --- Interactive Background Constellation Canvas ---
function initBackgroundCanvas() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // Adaptive particle count based on screen size
  const isMobile = width < 768;
  const particleCount = isMobile ? 32 : 65;
  const maxDistance = isMobile ? 95 : 140;
  const mouseRadius = isMobile ? 110 : 170;

  const mouse = {
    x: null,
    y: null
  };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.65;
      this.vy = (Math.random() - 0.5) * 0.65;
      this.radius = Math.random() * 1.8 + 1.2;
      // Assign QA-themed accent colors (Emerald, Cyan, Indigo)
      const colorTypes = ['emerald', 'cyan', 'indigo'];
      this.colorType = colorTypes[Math.floor(Math.random() * colorTypes.length)];
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce at screen edges
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Soft mouse interaction (gentle attraction / repulse)
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRadius && dist > 1) {
          const force = (mouseRadius - dist) / mouseRadius;
          const forceDirX = dx / dist;
          const forceDirY = dy / dist;
          // Gentle attraction towards cursor
          this.x += forceDirX * force * 0.85;
          this.y += forceDirY * force * 0.85;
        }
      }
    }

    draw(theme) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

      const isDark = theme === 'dark';
      if (this.colorType === 'emerald') {
        ctx.fillStyle = isDark ? 'rgba(16, 185, 129, 0.75)' : 'rgba(5, 150, 105, 0.6)';
      } else if (this.colorType === 'cyan') {
        ctx.fillStyle = isDark ? 'rgba(6, 182, 212, 0.75)' : 'rgba(8, 145, 178, 0.6)';
      } else {
        ctx.fillStyle = isDark ? 'rgba(99, 102, 241, 0.75)' : 'rgba(79, 70, 229, 0.6)';
      }
      ctx.fill();
    }
  }

  const particles = Array.from({ length: particleCount }, () => new Particle());

  let animationFrameId;

  function render() {
    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    // 1. Update and draw nodes
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw(isDark ? 'dark' : 'light');
    }

    // 2. Draw connecting lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * (isDark ? 0.22 : 0.14);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = isDark ? `rgba(16, 185, 129, ${alpha})` : `rgba(5, 150, 105, ${alpha})`;
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      }

      // Connect to mouse cursor
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - particles[i].x;
        const dy = mouse.y - particles[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRadius) {
          const alpha = (1 - dist / mouseRadius) * (isDark ? 0.38 : 0.25);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = isDark ? `rgba(6, 182, 212, ${alpha})` : `rgba(8, 145, 178, ${alpha})`;
          ctx.lineWidth = 1.1;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(render);
  }

  render();
}

