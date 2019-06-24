angular.module('auction').config(['$translateProvider',
  function($translateProvider) {
    $translateProvider.useLocalStorage();
    $translateProvider.useSanitizeValueStrategy(null);
    $translateProvider.translations('en', {
      'at': 'at',
      'Announcement': 'Announcement',
      'Bid': 'Bid',
      'Bidder': 'Bidder',
      'Bidders': ' Bidders',
      'Bidding': 'Bidding',
      'English': 'English',
      'Russian': 'Russian',
      'Ukrainian': 'Ukrainian',
      'Client': 'Client',
      'Edit': 'Edit',
      'Step': 'Step',
      'Info': 'Info',
      'Initial bids': 'Initial bids',
      'Language': 'Language',
      'Login in as viewer': 'Login in as viewer',
      'Login': 'Login',
      'Logout': 'Logout',
      'Place a bid': 'Place a bid',
      'Cancel': 'Cancel',
      'Preliminary bids': 'Preliminary bids',
      'Round': 'Round',
      'Settings': 'Settings',
      'Time': 'Time',
      'You': 'You',
      'All bidders': 'All bidders',
      'Pause': 'Pause',
      'Results Release': 'Results Release',
      'Waiting': 'Waiting',
      'or lower': 'or lower',
      'or higher': 'or higher',
      'UAH': 'UAH',
      'shortTime': 'h:mm a',
      'Restart sync': 'Restart sync',
      'Too low value': 'Too low value',
      'Too high value': 'Too high value',
      'Not valid bidder': 'Not valid bidder',
      'Stage not for bidding': 'Stage not for bidding',
      'Bid placed': 'Bid placed',
      'Normilized Price': 'Normalized price:',
      'Full Price': 'Full price:',
      'Bidder Coeficient':'Coeficient:',
      'Your proposal': 'Your proposal',
      'Finish': 'Finish',
      'days': 'days',
      'hours': 'hr',
      'minutes': 'min',
      'seconds': 'sec',
      'minimum': 'minimum',
      'Internet connection is lost. Attempt to restart after 1 sec': 'Internet connection is lost. Attempt to restart after 1 sec',
      'Synchronization failed': 'Synchronization failed',
      'Possible results': 'Possible results',
      'In the room came a new user': 'In the room came a new user',
      'until the auction starts': 'until the auction starts',
      'until your turn': 'until your turn',
      'until your turn ends': 'until your turn ends',
      'until the round starts': 'until the part starts',
      'until the step ends': 'until the step ends',
      'until the round ends': 'until the part ends',
      'until the results announcement': 'until the results announcement',
      'Аuction was completed': 'Аuction was completed on',
      'prohibit connection': 'prohibit connection',
      'Step reduction of Bid': 'Step reduction of Bid',
      'Start value': 'Start value',
      'Your bid appears too low': 'Your bid appears too low',
      'Return to Tender': 'Return to Auction',
      'Your latest bid': 'Your latest bid',
      'Tender cancelled': 'Auction cancelled',
      'Bid canceled': 'Bid canceled',
      'Login is currently closed.': 'Login is currently closed.',
      'Please try again later.': 'Please try again later.',
      'Cancel Bid': 'Cancel Bid',
      'Ability to submit bids has been lost. Wait until page reloads, and retry.': 'Ability to submit bids has been lost. Wait until page reloads, and retry.',
      'Ability to submit bids has been lost. Wait until page reloads.': 'Ability to submit bids has been lost. Wait until page reloads',
      'You are registered as a bidder. Wait for the start of the auction.': 'You are registered as a bidder. Wait for the start of the auction.',
      'You are an observer and cannot bid.': 'You are an observer and cannot bid.',
      'Your browser is out of date, and this site may not work properly.': 'Your browser is out of date, and this site may not work properly.',
      'Learn how to update your browser.': 'Learn how to update your browser.',
      'Not Found': 'Not Found',
      'to Mine': 'to Mine',
      'Clear': 'Clear',
      'to General': 'to General',
      'The proposal you have submitted coincides with a proposal of the other participant. His proposal will be considered first, since it has been submitted earlier.': 'The proposal you have submitted coincides with a proposal of the other participant. His proposal will be considered first, since it has been submitted earlier.',
      'Waiting for the disclosure of the participants\' names': 'Waiting for the disclosure of the participants\' names',
      'Unable to place a bid. Check that no more than 2 auctions are simultaneously opened in your browser.': 'Unable to place a bid. Check that no more than 2 auctions are simultaneously opened in your browser.',
      'Dutch part': 'Dutch part',
      'Sealed bid part': 'Sealed bid part',
      'Best bid part': 'Best bid part',
      'Dutch winner':'Dutch winner',
      'Sealed bid winner': 'Sealed bid winner',
      'Part': 'Part',
      'sealedbid': 'Sealed Bid',
      'bestbid': 'Best Bid',
      'dutch_0': 'Dutch',
      'Bid value can\'t be less or equal current amount': 'Bid value can\'t be less or equal current amount',
      'Please wait for the bestbid part to place a bid.': 'Please wait for the bestbid part to place a bid.',
      'You are not allowed to place bids during the bestbid part.': 'You are not allowed to place bids during the bestbid part.',
      'Your bid should be greater than the one made by the sealed bid winner at least for one step (1% of the primary lot value).': 'Your bid should be greater than the one made by the sealed bid winner at least for one step (1% of the primary lot value).',
      'Please use the correct link to view the auction.': 'Please use the correct link to view the auction.',
      'Auction has not started and will be rescheduled': 'Auction has not started and will be rescheduled',
      'Please wait for the auction start.': 'Please wait for the auction start.',
      'List of IP addresses of registered participants': 'List of IP addresses of registered participants'
    });

    $translateProvider.translations('uk', {
      'at': 'о',
      'Announcement': 'Оголошення результатів',
      'Bid': 'Ставка',
      'Bidder': 'Учасник',
      'Bidders': ' Учасники',
      'Bidding': 'Торги',
      'English': 'Англійська',
      'Russian': 'Російська',
      'Ukrainian': 'Українська',
      'Client': 'Клієнт',
      'Edit': 'Змінити',
      'Step': 'Крок',
      'Info': 'Інформація',
      'Initial bids': 'Початкові ставки',
      'Language': 'Мова',
      'Login in as viewer': 'Вхід в якості глядача',
      'Login': 'Вхід',
      'Logout': 'Вийти',
      'Place a bid': 'Зробити ставку',
      'Cancel': 'Відмінити',
      'Preliminary bids': 'Попередні ставки',
      'Round': 'Раунд',
      'Settings': 'Налаштування',
      'Time': 'Час',
      'You': 'Ви',
      'All bidders': 'Всі учасники торгів',
      'Pause': 'Пауза',
      'Results Release': 'Результати',
      'Waiting': 'Очікування',
      'or lower': 'або менше',
      'or higher': 'або більше',
      'UAH': 'грн',
      'shortTime': 'HH:mm',
      'Restart sync': 'Перезапуск синхронізації',
      'Too low value': 'Надто низька ставка',
      'Too high value': 'Надто висока ставка',
      'Not valid bidder': 'Ви не є валідний користувачем',
      'Stage not for bidding': 'Даний етап аукціону не передбачає приймання ставок',
      'Bid placed': 'Ставку прийнято',
      'Normilized Price': 'Приведена ціна:',
      'Full Price': 'Повна ціна:',
      'Bidder Coeficient':'Коефіцієнт:',
      'Your proposal': 'Ваша ставка',
      'Finish': 'Завершено',
      'Step': 'Крок',
      'days': 'дн',
      'hours': 'год',
      'minutes': 'хв',
      'seconds': 'сек',
      'minimum': 'мінімум',
      'Internet connection is lost. Attempt to restart after 1 sec': 'З\'єднання з інтернетом втрачено. спроба перезавантаження через 1 сек',
      'Synchronization failed': 'Помилка синхронізації',
      'Possible results': 'Можливі результати',
      'In the room came a new user': 'В кабінет зайшов новий користувач',
      'until the auction starts': 'до початку аукціону',
      'until your turn': 'до вашої черги',
      'until your turn ends': 'до закінчення вашої черги',
      'until the round starts': 'до початку етапу',
      'until the step ends': 'до закінчення кроку',
      'until the round ends': 'до закінчення етапу',
      'until the results announcement': 'до оголошення результатів',
      'Аuction was completed': 'Аукціон завершився',
      'prohibit connection': 'заборонити підключення',
      'Step reduction of Bid': 'Крок зменшення торгів',
      'Start value': 'Стартова сума',
      'Your bid appears too low': 'Ви ввели дуже малу суму, ви впевнені?',
      'Return to Tender': 'Повернутися до Аукціону',
      'Your latest bid': 'Ваша остання ставка',
      'Tender cancelled': 'Аукціон скасовано',
      'Bid canceled': 'Ставку відмінено',
      'Login is currently closed.': 'Вхід на даний момент закритий.',
      'Please try again later.': 'Спробуйте пізніше.',
      'Cancel Bid': 'Відмінити ставку',
      'Ability to submit bids has been lost. Wait until page reloads, and retry.': 'Втрачено можливість подавати ставки. Дочекайтесь перевантаження сторінки і повторіть спробу.',
      'Ability to submit bids has been lost. Wait until page reloads.': 'Втрачено можливість подавати ставки. Дочекайтесь перевантаження сторінки.',
      'You are registered as a bidder. Wait for the start of the auction.': 'Ви зареєстровані як учасник. Очікуйте старту аукціону.',
      'You are an observer and cannot bid.': 'Ви спостерігач і не можете робити ставки.',
      'Your browser is out of date, and this site may not work properly.': 'Ваш переглядач застарів, і цей сайт може некоректно працювати.',
      'Learn how to update your browser.': 'Дізнайтесь, як оновити Ваш браузер.',
      'Not Found': 'Аукціону із даною Id не знайдено',
      'to Mine': 'до Моєї',
      'Clear': 'Очистити',
      'to General': 'до Загальної',
      'The proposal you have submitted coincides with a proposal of the other participant. His proposal will be considered first, since it has been submitted earlier.': 'Подана вами пропозиція співпадає з пропозицією іншого учасника. Його пропозиція розглядатиметься першою, оскільки вона подана раніше.',
      'Waiting for the disclosure of the participants\' names': 'Очікуємо на розкриття імен учасників',
      'Unable to place a bid. Check that no more than 2 auctions are simultaneously opened in your browser.': 'Не вдається зробити ставку. Перевірте, що в переглядачі відкрито не більше 2-ох аукціонів.',
      'Dutch part': 'Голландський етап',
      'Sealed bid part': 'Етап подання закритих цінових пропозицій',
      'Best bid part': 'Етап подання відкритих цінових пропозицій',
      'Dutch winner':'Переможець голландського етапу',
      'Sealed bid winner': 'Переможець етапу закритих цінових пропозицій',
      'Part': 'Етап',
      'sealedbid': 'Sealed Bid',
      'bestbid': 'Best Bid',
      'dutch_0': 'Голландського',
      'Bid value can\'t be less or equal current amount': 'Значення пропозиції не може бути меншою чи рівною поточній сумі',
      'Please wait for the bestbid part to place a bid.': 'Щоб подати ставку, будь ласка, дочекайтесь етапу подання відкритих цінових пропозицій.',
      'You are not allowed to place bids during the bestbid part.': 'Ви не маєте змоги робити ставки на етапі подання відкритих цінових пропозицій.',
      'Your bid should be greater than the one made by the sealed bid winner at least for one step (1% of the primary lot value).': 'Ваша ставка повинна перевищувати ставку переможця попередньої стадії як мінімум на 1 крок (1% від початкової вартості).',
      'Please use the correct link to view the auction.': 'Будь ласка, використовуйте правильне посилання для перегляду аукціону.',
      'Auction has not started and will be rescheduled': 'Аукціон не розпочався і буде перепланований',
      'Please wait for the auction start.': 'Будь ласка, дочекайтесь початку аукціону.',
      'List of IP addresses of registered participants': 'Список IP-адрес зареєстрованих учасників',
    });

    $translateProvider.translations('ru', {
      'at': 'о',
      'Announcement': 'Объявление результатов',
      'Bid': 'Ставка',
      'Bidder': ' Участник',
      'Bidders': ' Учасники',
      'Bidding': 'Торги',
      'English': 'Английский',
      'Russian': 'Русский',
      'Ukrainian': 'Украинский',
      'Client': 'Клиент',
      'Edit': 'Изменить',
      'Info': 'Информация',
      'Initial bids': 'Первоначальные ставки',
      'Language': 'Язык',
      'Login in as viewer': 'Вход в качестве зрителя',
      'Login': 'Вход',
      'Logout': 'Выйти',
      'Place a bid': 'Сделать ставку',
      'Cancel': 'Отменить',
      'Preliminary bids': 'Предварительные ставки',
      'Round': 'Раунд',
      'Settings': 'Настройки',
      'Time': 'Время',
      'You': 'Вы',
      'All bidders': 'Все участники торгов',
      'Pause': 'Пауза',
      'Results Release': 'Результаты',
      'Waiting': 'Ожидание',
      'or lower': 'или меньше',
      'or higher': 'или больше',
      'UAH': 'грн',
      'shortTime': 'HH:mm',
      'Restart sync': 'Перезапуск синхронизации',
      'Too low value': 'Слишком низкая ставка',
      'Too high value': 'Слишком высокая ставка',
      'Not valid bidder': ' Вы не являетесь валидный пользователем',
      'Stage not for bidding': 'Данный этап аукциона не предусматривает приема ставок',
      'Bid placed': 'Ставку принято',
      'Normilized Price': 'Приведённая цена:',
      'Full Price': 'Фактическая цена:',
      'Bidder Coeficient':'Коэффициент:',
      'Your proposal': 'Ваше предложение',
      'Finish': 'Окончен',
      'days': 'дн',
      'hours': 'час',
      'minutes': 'мин',
      'seconds': 'сек',
      'minimum': 'минимум',
      'Internet connection is lost. Attempt to restart after 1 sec': 'Cоединения с интернетом потеряно. попытка перезагрузки через 1 сек',
      'Synchronization failed': 'Ошибка синхронизации',
      'Possible results': 'Возможные результаты',
      'In the room came a new user': 'В кабинет зашел новый пользователь',
      'until the auction starts': 'до начала аукциона',
      'until your turn': 'до вашей очереди',
      'until your turn ends': 'до завершения вашей очереди',
      'until the round starts': 'до начала этапа',
      'until the step ends': ' до окончания шага',
      'until the round ends': ' до окончания этапа',
      'until the results announcement': 'до объявления результатов',
      'Аuction was completed': 'Аукцион закончился',
      'prohibit connection': 'запретить подключение',
      'Step reduction of Bid': 'Шаг уменьшения торгов',
      'Start value': 'Стартовая сумма',
      'Your bid appears too low': 'Вы ввели очень маленькую сумму, вы уверены?',
      'Return to Tender': 'Вернуться к Аукциону',
      'Your latest bid': 'Ваша последняя ставка',
      'Tender cancelled': 'Аукцион отменен',
      'Bid canceled': 'Ставку отменено',
      'Login is currently closed.': 'Вход на данный момент закрыт.',
      'Please try again later.': 'Попробуйте позже.',
      'Cancel Bid': 'Отменить ставку',
      'Ability to submit bids has been lost. Wait until page reloads, and retry.': 'Потеряна возможность делать ставки. Подождите перезагрузки страницы и попробуйте еще раз.',
      'Ability to submit bids has been lost. Wait until page reloads.': 'Потеряна возможность делать ставки. Подождите перезагрузки страницы.',
      'You are registered as a bidder. Wait for the start of the auction.': 'Вы зарегистрированы как участник. Ожидайте старта аукциона.',
      'You are an observer and cannot bid.': 'Вы наблюдатель и не можете делать ставки.',
      'Your browser is out of date, and this site may not work properly.': 'Ваш браузер устарел, и этот сайт может некорректно работать.',
      'Learn how to update your browser.': 'Узнайте, как обновить Ваш браузер.',
      'Not Found': 'Аукциона по данной Id не найдена',
      'to Mine': 'к Моей',
      'Clear': 'Очистить',
      'to General': 'к Общей',
      'The proposal you have submitted coincides with a proposal of the other participant. His proposal will be considered first, since it has been submitted earlier.': 'Поданное вами предложение совпадает с предложением другого участника. Его предложение будет рассматриваться первым, поскольку оно подано раньше.',
      'Waiting for the disclosure of the participants\' names': 'Ожидаем раскрытия имен участников',
      'Unable to place a bid. Check that no more than 2 auctions are simultaneously opened in your browser.': 'Невозможно сделать ставку. Проверьте, что в браузере открыто не более 2-х аукционов.',
      'Dutch part': 'Голландский этап',
      'Sealed bid part': 'Этап подачи закрытых ценовых предложений',
      'Best bid part': 'Этап подачи открытых ценовых предложений',
      'Dutch winner':'Победитель голландского этапа',
      'Sealed bid winner': 'Победитель этапа закрытых ценовых предложений',
      'Part': 'Этап',
      'sealedbid': 'Sealed Bid',
      'bestbid': 'Best Bid',
      'dutch_0': 'Голландского',
      'Bid value can\'t be less or equal current amount': 'Значение предложения не может быть меньше или равной текущей сумме',
      'Please wait for the bestbid part to place a bid.': 'Чтобы сделать ставку, пожалуйста, дождитесь этапа открытых ценовых предложений.',
      'You are not allowed to place bids during the bestbid part.': 'Вы не имеете возможности делать ставки на этапе открытых ценовых предложений.',
      'Your bid should be greater than the one made by the sealed bid winner at least for one step (1% of the primary lot value).': 'Ваша ставка должна превышать ставку победителя предыдущего этапа как минимум на 1 шаг (1% от изначальной стоимости).',
      'Please use the correct link to view the auction.': 'Пожалуйста, используйте правильную ссылку для просмотра аукциона.',
      'Auction has not started and will be rescheduled': 'Аукцион не начался и будет перепланирован',
      'Please wait for the auction start.': 'Пожалуйста, дождитесь начала аукциона.',
      'List of IP addresses of registered participants': 'Список IP-адресов зарегистрированных участников',
    });

  }

]);
