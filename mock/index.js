export default {
  header: [
    {
      title: 'О компании',
      href: 'about'
    },
    {
      title: 'Вакансии',
      href: 'vacansies'
    },
    {
      title: 'Проекты',
      href: 'projects'
    }
  ],
  article: {
    mainTitle: {
      title: 'Как написать запрос для Checkmarx SAST и найти крутые уязвимости',
      date: '30 окт 2019',
      description: `В статье я хочу рассказать о нашем опыте создания своих запросов
  в Checkmarx SAST. При первом знакомстве с этим анализатором может сложиться впечатление,
   что кроме поиска слабых алгоритмов шифрования/ хеширования и кучи false positive,
    он ничего больше не выдает. Но при правильной настройке, это супермощный инструмент,
     который умеет искать серьезные баги. Мы разберемся в тонкостях языка запросов Checkmarx SAST
      и напишем 2 запроса для поиска SQL-инъекций и Insecure Direct Object References.`
    },
    introduction: {
      title: 'Вступление',
      text: `После долгих поисков каких-либо гайдов или статей по Checkmarx мне
       стало ясно, что кроме официальной документации, полезной информации мало. Да
        и в официальной документации не сказать, что все становится очень ясно и понятно.
         Например, я не смог найти каких либо best practices, как правильно организовать
          override запросов, как писать query «для чайников», и т. д. Да, есть документация
           по функциям CMx Query Language, но вот как объединять эти функции в единый запрос,
            в документации не написано.`
    },
    imageNormal: {
      src: '/images/article-normal.png',
      subtitle: 'Подпись к картинке'
    },
    sidebarSlider: [
      {
        image: '/images/article.png',
        title: 'Заголовок',
        description: `Если вы проживаете в другом городе или стране, но хотите работать у нас,
          то мы предложим поможем с переездом.`,
      },
      {
        image: '/images/article.png',
        title: 'Заголовок',
        description: `Если вы проживаете в другом городе или стране, но хотите работать у нас,
          то мы предложим поможем с переездом.`,
      },
      {
        image: '/images/article.png',
        title: 'Заголовок',
        description: `Если вы проживаете в другом городе или стране, но хотите работать у нас,
          то мы предложим поможем с переездом.`,
      }
    ],
    features: [
      {
        title: 'Not exploitabl',
        text: `На моем опыте я больше вижу, что SAST используется скорее для соблюдения формальностей,
         связанных с различными требованиями со стороны заказчиков, чем для поиска реальных багов. `
      },
      {
        title: 'Not exploitabl',
        text: `При таком подходе, в результате, имеем в лучшем случае,
         относительно небольшое количество «уязвимостей», которые чуть ли не автоматически прокликиваются как
          «not exploitable» (потому что таковыми и являются в 99.9% случаев).`
      }
    ],
    definitions: {
      title: 'Сокращения и определения',
      text: `Возможно, отсутствие статей и гайдов от сообщества Checkmarx
       связано с высокой стоимостью инструмента и, как следствие, небольшой аудиторией.
        А может быть просто мало кто заморачивается тонкой настройкой и используют решение как есть, из коробки.`
    },
    reductions: [
      {
        title: 'CMx',
        text: 'Cтрока, имеющая определенное значение'
      },
      {
        title: 'CMxQL',
        text: 'Checkmarx SAST query language'
      },
      {
        title: '95',
        text: 'строка, имеющая определенное значение'
      }
    ],
    sectionNote: `Возможно, отсутствие статей и гайдов от сообщества Checkmarx связано
        с высокой стоимостью инструмента и, как следствие, небольшой аудиторией.
        А может быть просто мало кто заморачивается тонкой настройкой и используют решение как есть, из коробки.`,
    imageBig: {
      src: '/images/image-office-big.png',
      subtitle: 'Подпись к картинке'
    },
    sidebarArticleMiddle: {
      title: 'Как написать запрос для Checkmarx SAST',
      subtitle: 'Читайте также',
    },
    list: [
      {
        icon: '',
        text: `/getTransaction – на вход принимает id транзакции и выдает инфу
         по ней, id принимает как строку, и передает ее в getTransactionInfo(transactionId)
          =>getTransactionInfo (transactoinId) – делает конкат transactionId к SQL запросу (то есть получается SQL инъекция);`
      },
      {
        icon: '',
        text: `/getSecureSettings — на вход принимает также userId и mailboxId
         и выдает настройки мейлбокса. НО проверяет что mailboxid принадлежит пользователю.`
      },
      {
        icon: '',
        text: `/getSettings — на вход принимает userId и mailboxId – и выдает
        настройки мейлбокса. Не проверяет что mailboxid принадлежит пользователю;`
      }
    ],
    cmx: {
      title: 'CMx',
      text: `Возможно, отсутствие статей и гайдов от сообщества Checkmarx
       связано с высокой стоимостью инструмента и, как следствие, небольшой аудиторией.
        А может быть просто мало кто заморачивается тонкой настройкой и используют
         решение как есть, из коробки. /getTransaction – на вход принимает id транзакции
          и выдает инфу по ней, id принимает.`
    },
    sidebarArticleBottom: {
      title: 'Какое-то уточнение',
      description: `А может быть просто мало кто заморачивается тонкой настройкой и используют решение как есть, из коробки.`
    },
    noteWithPictures: [
      {
        src: '/images/note.png',
        title: 'Not exploitabl',
        text: `На моем опыте я больше вижу, что SAST используется скорее
         для соблюдения формальностей, связанных с различными требованиями со стороны заказчиков, чем для поиска реальных багов. `
      },
      {
        src: '/images/note.png',
        title: 'Not exploitabl',
        text: `При таком подходе, в результате, имеем в лучшем случае,
         относительно небольшое количество «уязвимостей», которые чуть ли не автоматически прокликиваются как «not exploitable» (потому что таковыми и являются в 99.9% случаев).`
      }
    ],
    text: `Возможно, отсутствие статей и гайдов от сообщества Checkmarx связано
     с высокой стоимостью инструмента и, как следствие, небольшой аудиторией.
      А может быть просто мало кто заморачивается тонкой настройкой и используют
       решение как есть, из коробки. /getTransaction – на вход принимает id транзакции и выдает инфу по ней, id принимает.`,
    video: {
      src: '/images/video.png',
      subtitle: 'Подпись к видео',
      srcPoster: '/images/video.png'
    },
    listNumbers: [
      {
        number: '01',
        text: `/getTransaction – на вход принимает id транзакции и выдает инфу
         по ней, id принимает как строку, и передает ее в getTransactionInfo(transactionId)
          =>getTransactionInfo (transactoinId) – делает конкат transactionId к SQL запросу (то есть получается SQL инъекция);`
      },
      {
        inumber: '02',
        text: `/getSecureSettings — на вход принимает также userId и mailboxId
         и выдает настройки мейлбокса. НО проверяет что mailboxid принадлежит пользователю.`
      },
      {
        number: '03',
        text: `/getSettings — на вход принимает userId и mailboxId – и выдает
        настройки мейлбокса. Не проверяет что mailboxid принадлежит пользователю;`
      }
    ],
    listIcons: [
      {
        icon: 'ec-fire',
        text: 'Cтрока, имеющая определенное значение'
      },
      {
        icon: 'ec-fire',
        text: 'Checkmarx SAST query language'
      },
      {
        icon: 'ec-fire',
        text: 'строка, имеющая определенное значение'
      }
    ],
    quote: {
      text: `В компании я работаю около трех лет. Начинал с позиции разработчика,
       тимлидом работаю последние три месяца.`,
      src: '/images/quote.png',
      name: 'Иван Иванов',
      company: 'Динс'
    },
    feedback: {
      src: '/images/feedback-foto.png',
      src_mob: '/images/feedback-foto-mob.png',
      name: 'Иван Иванов',
      company: 'Компания Динс',
      text: `При таком подходе, в результате, имеем в лучшем случае, относительно
       небольшое количество «уязвимостей», которые чуть ли не автоматически прокликиваются
        как «not exploitable» (потому что таковыми и являются в 99.9% случаев).`
    },
    comments: [
      {
        text: `Привет! Расскажи, как давно ты работаешь в Dins?`,
        src: '/images/user-pic-1.png',
        name: 'Настя'
      },
      {
        text: `В компании я работаю около трех лет. Начинал с позиции разработчика,
         тимлидом работаю последние три месяца. В IT я уже более 10 лет, но со Sсala,
          кстати, начал плотно общаться только в этой компании. Мне это нравится: я люблю
           использовать хорошие инструменты для работы, а Sсala благодаря типизации и другим
            особенностям позволяет минимизировать количество возможных ошибок.`,
        src: '/images/user-pic-2.png',
        name: 'Иван Иванов'
      }
    ],
    articles: [
      {
        subtitle: 'Предыдущая статья',
        src: '/images/article.png',
        title: 'Как написать запрос для Checkmarx SAST'
      },
      {
        subtitle: 'Следующая статья',
        src: '/images/article.png',
        title: 'Как написать запрос для Checkmarx SAST'
      }
    ],
    slider: {
      subtitle: 'Подпись к картинке',
      pictures: [
        {
          src: '/images/slider-1.png',
          alt: 'Image'
        },
        {
          src: '/images/slider-1.png',
          alt: 'Image'
        },
        {
          src: '/images/slider-1.png',
          alt: 'Image'
        }
      ]
    }
  },
  vacancy: {
    mainTitle: {
      title: `Java developer (Big Data team)`,
      subtitle1: `English Speaking Team`,
      subtitle2: `Стажировка`,
      button1: `Отправить резюме`,
      button2: `Порекомендовать друга`,
      stackTitle: `Technology stack:`,
      technologies: `Spark, Hadoop (HDFS, YARN), Apache Flume, HP Vertica, MongoDB,
      different data formats (Avro, Parquet, etc).`,
      projectTitle: `Проект:`,
      project: `Technology stack: Spark, Hadoop (HDFS, YARN), Apache Flume,
      HP Vertica, MongoDB, different data formats (Avro, Parquet, etc).`
    },
    intro: `You will become a part of Big Data team at large US-based
     international company, leader in enterprise VoIP communication solutions,
      messaging and video conferencing. The team is primarily focusing on developing
       software for processing large amounts of data and performing various maintenance
        and data mining tasks using Hadoop ecosystem.`
  },
  socialSticker: [
    {
      title: 'twitter',
      link: 'https://www.google.com/'
    },
    {
      title: 'facebook',
      link: 'https://www.google.com/'
    },
    {
      title: 'vk',
      link: 'https://www.google.com/'
    }
  ],
  footer: {
    copyright: 'DINS © — зарегистрированный товарный знак ООО «Нордиджи». 2020',

    social: {
      hh: 'https://www.google.com/',
      youtube: 'https://www.google.com/',
      instagram: 'https://www.google.com/',
      linkedin: 'https://www.google.com/',
      vk: 'https://www.google.com/'
    },
    suscribe: 'Подписаться на вакансии',
    labour: {
      link: 'https://www.dins.ru/downloads/2019.11.28-SP-SOUT.pdf?v=1592826998',
      text: 'Оценка условий труда'
    }
  }
};
