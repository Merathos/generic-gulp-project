export default {
  header: [
    {
      title: `О компании`,
      href: `about`
    },
    {
      title: `Вакансии`,
      href: `vacansies`
    },
    {
      title: `Проекты`,
      href: `projects`
    }
  ],
  catalog: {
    mainTitle: `Вакансии`,
    filter: {
      fields: [
        {
          title: `Категории`,
          list: [
            `QA`, `DevOps`, `Management`, `UX/UI and design`, `HR and Finance`,
            `Architect and Analyst`, `Product and Project management`, `Telco`,
            `Network`, `Security` , `DBA` , `Sys Admin`, `AI`, `BigData`, `Other`
          ]
        },
        {
          title: `Технологии`,
          list: [
            `Java`, `C++`, `Erlang`, `JavaScript`, `Node.JS`, `Scala`, `Python`,
            `RocksDB`, `MongoDB`, `Cassandra`, `Oracle`, `Vertica`, `Neo4J`, `Hadoop`,
            `VMWare`, `Kubernetes`, `DDC`, `Marathon`, `Terraform`, `CloudFoundry`,
            `Amazon`, `AWS`, `Google GCP`, `Zabbix`, `Influx`, `Elasticsearch`, `Git`,
            `Mercurial`, `Jenkins`, `GitLab`, `GridGain`, `Coherence`, `Rabbit`, `Kafka`,
            `ZeroMQ`
          ]
        },
        {
          title: `Проект`,
          list: [
            `Contact Center`, `Platform A`, `Platform D`, `Analytics`, `Telco`, `Billing`,
            `RCV (Video-conference)`, `Core`, `SWAT`, `Relies IT`, `Features`, `AI`, `CRM SPB`,
            `Glip`, `Deployment`, `SysOps`, `Lab`
          ]
        }
      ],
      internship: `Стажировки`,
      english: `English Speaking Team`,
      discard: `Сбросить фильтр`
    },
    cards: [
      {
        title: `Java developer (Big Data team)`,
        text: `Стек: Java, Redis, Kafka, MongoDB, Docker,
         ELK, TICK. Сервис базируется в AWS и Private Cloud.`
      },
      {
        title: `Java developer (Big Data team)`,
        text: `We are looking for a talented and energetic team leader to head our Integration Team.`
      },
      {
        title: `Java developer (Big Data team)`,
        text: `People and technical management the team (up to 6 members)`
      },
      {
        title: `QA Intern (Performance team)`,
        text: `Команда RCV занимается разработкой сервиса видео-конференций
         нового поколения, построенного с использованием WebRTC, качество...`
      }
    ],
    search: `Введите название вакансии`,
    article: {
      text: `Отправь резюме, и мы свяжемся с тобой, если появится подходящая позиция.`,
      button: `Отправить`
    }
  },
  article: {
    mainTitle: {
      title: `Как написать запрос для Checkmarx SAST и найти крутые уязвимости`,
      date: `30 окт 2019`,
      description: `В статье я хочу рассказать о нашем опыте создания своих запросов
  в Checkmarx SAST. При первом знакомстве с этим анализатором может сложиться впечатление,
   что кроме поиска слабых алгоритмов шифрования/ хеширования и кучи false positive,
    он ничего больше не выдает. Но при правильной настройке, это супермощный инструмент,
     который умеет искать серьезные баги. Мы разберемся в тонкостях языка запросов Checkmarx SAST
      и напишем 2 запроса для поиска SQL-инъекций и Insecure Direct Object References.`
    },
    introduction: {
      title: `Вступление`,
      text: `После долгих поисков каких-либо гайдов или статей по Checkmarx мне
       стало ясно, что кроме официальной документации, полезной информации мало. Да
        и в официальной документации не сказать, что все становится очень ясно и понятно.
         Например, я не смог найти каких либо best practices, как правильно организовать
          override запросов, как писать query «для чайников», и т. д. Да, есть документация
           по функциям CMx Query Language, но вот как объединять эти функции в единый запрос,
            в документации не написано.`
    },
    imageNormal: {
      src: `/images/article-normal.png`,
      subtitle: `Подпись к картинке`
    },
    sidebarSlider: [
      {
        image: `/images/article.png`,
        title: `Заголовок`,
        description: `Если вы проживаете в другом городе или стране, но хотите работать у нас,
          то мы предложим поможем с переездом.`,
      },
      {
        image: `/images/article.png`,
        title: `Заголовок`,
        description: `Если вы проживаете в другом городе или стране, но хотите работать у нас,
          то мы предложим поможем с переездом.`,
      },
      {
        image: `/images/article.png`,
        title: `Заголовок`,
        description: `Если вы проживаете в другом городе или стране, но хотите работать у нас,
          то мы предложим поможем с переездом.`,
      }
    ],
    features: [
      {
        title: `Not exploitabl`,
        text: `На моем опыте я больше вижу, что SAST используется скорее для соблюдения формальностей,
         связанных с различными требованиями со стороны заказчиков, чем для поиска реальных багов. `
      },
      {
        title: `Not exploitabl`,
        text: `При таком подходе, в результате, имеем в лучшем случае,
         относительно небольшое количество «уязвимостей», которые чуть ли не автоматически прокликиваются как
          «not exploitable» (потому что таковыми и являются в 99.9% случаев).`
      }
    ],
    definitions: {
      title: `Сокращения и определения`,
      text: `Возможно, отсутствие статей и гайдов от сообщества Checkmarx
       связано с высокой стоимостью инструмента и, как следствие, небольшой аудиторией.
        А может быть просто мало кто заморачивается тонкой настройкой и используют решение как есть, из коробки.`
    },
    reductions: [
      {
        title: `CMx`,
        text: `Cтрока, имеющая определенное значение`
      },
      {
        title: `CMxQL`,
        text: `Checkmarx SAST query language`
      },
      {
        title: `95`,
        text: `строка, имеющая определенное значение`
      }
    ],
    sectionNote: `Возможно, отсутствие статей и гайдов от сообщества Checkmarx связано
        с высокой стоимостью инструмента и, как следствие, небольшой аудиторией.
        А может быть просто мало кто заморачивается тонкой настройкой и используют решение как есть, из коробки.`,
    imageBig: {
      src: `/images/image-office-big.png`,
      subtitle: `Подпись к картинке`
    },
    sidebarArticleMiddle: {
      title: `Как написать запрос для Checkmarx SAST`,
      subtitle: `Читайте также`,
    },
    list: [
      {
        icon: ``,
        text: `/getTransaction – на вход принимает id транзакции и выдает инфу
         по ней, id принимает как строку, и передает ее в getTransactionInfo(transactionId)
          =>getTransactionInfo (transactoinId) – делает конкат transactionId к SQL запросу (то есть получается SQL инъекция);`
      },
      {
        icon: ``,
        text: `/getSecureSettings — на вход принимает также userId и mailboxId
         и выдает настройки мейлбокса. НО проверяет что mailboxid принадлежит пользователю.`
      },
      {
        icon: ``,
        text: `/getSettings — на вход принимает userId и mailboxId – и выдает
        настройки мейлбокса. Не проверяет что mailboxid принадлежит пользователю;`
      }
    ],
    cmx: {
      title: `CMx`,
      text: `Возможно, отсутствие статей и гайдов от сообщества Checkmarx
       связано с высокой стоимостью инструмента и, как следствие, небольшой аудиторией.
        А может быть просто мало кто заморачивается тонкой настройкой и используют
         решение как есть, из коробки. /getTransaction – на вход принимает id транзакции
          и выдает инфу по ней, id принимает.`
    },
    sidebarArticleBottom: {
      title: `Какое-то уточнение`,
      description: `А может быть просто мало кто заморачивается тонкой настройкой и используют решение как есть, из коробки.`
    },
    noteWithPictures: [
      {
        src: `/images/note.png`,
        title: `Not exploitabl`,
        text: `На моем опыте я больше вижу, что SAST используется скорее
         для соблюдения формальностей, связанных с различными требованиями со стороны заказчиков, чем для поиска реальных багов. `
      },
      {
        src: `/images/note.png`,
        title: `Not exploitabl`,
        text: `При таком подходе, в результате, имеем в лучшем случае,
         относительно небольшое количество «уязвимостей», которые чуть ли не автоматически прокликиваются как «not exploitable» (потому что таковыми и являются в 99.9% случаев).`
      }
    ],
    text: `Возможно, отсутствие статей и гайдов от сообщества Checkmarx связано
     с высокой стоимостью инструмента и, как следствие, небольшой аудиторией.
      А может быть просто мало кто заморачивается тонкой настройкой и используют
       решение как есть, из коробки. /getTransaction – на вход принимает id транзакции и выдает инфу по ней, id принимает.`,
    video: {
      src: `/images/video.png`,
      subtitle: `Подпись к видео`,
      srcPoster: `/images/video.png`
    },
    listNumbers: [
      {
        text: `/getTransaction – на вход принимает id транзакции и выдает инфу
         по ней, id принимает как строку, и передает ее в getTransactionInfo(transactionId)
          =>getTransactionInfo (transactoinId) – делает конкат transactionId к SQL запросу (то есть получается SQL инъекция);`
      },
      {
        text: `/getSecureSettings — на вход принимает также userId и mailboxId
         и выдает настройки мейлбокса. НО проверяет что mailboxid принадлежит пользователю.`
      },
      {
        text: `/getSettings — на вход принимает userId и mailboxId – и выдает
        настройки мейлбокса. Не проверяет что mailboxid принадлежит пользователю;`
      }
    ],
    listIcons: [
      {
        icon: `ec-fire`,
        text: `Cтрока, имеющая определенное значение`
      },
      {
        icon: `ec-fire`,
        text: `Checkmarx SAST query language`
      },
      {
        icon: `ec-fire`,
        text: `строка, имеющая определенное значение`
      }
    ],
    quote: {
      text: `В компании я работаю около трех лет. Начинал с позиции разработчика,
       тимлидом работаю последние три месяца.`,
      src: `/images/quote.png`,
      name: `Иван Иванов`,
      company: `Динс`
    },
    feedback: {
      src: `/images/feedback-foto.png`,
      src_mob: `/images/feedback-foto-mob.png`,
      name: `Иван Иванов`,
      company: `Компания Динс`,
      text: `При таком подходе, в результате, имеем в лучшем случае, относительно
       небольшое количество «уязвимостей», которые чуть ли не автоматически прокликиваются
        как «not exploitable» (потому что таковыми и являются в 99.9% случаев).`
    },
    comments: [
      {
        text: `Привет! Расскажи, как давно ты работаешь в Dins?`,
        src: `/images/user-pic-1.png`,
        name: `Настя`
      },
      {
        text: `В компании я работаю около трех лет. Начинал с позиции разработчика,
         тимлидом работаю последние три месяца. В IT я уже более 10 лет, но со Sсala,
          кстати, начал плотно общаться только в этой компании. Мне это нравится: я люблю
           использовать хорошие инструменты для работы, а Sсala благодаря типизации и другим
            особенностям позволяет минимизировать количество возможных ошибок.`,
        src: `/images/user-pic-2.png`,
        name: `Иван Иванов`
      }
    ],
    articles: [
      {
        subtitle: `Предыдущая статья`,
        src: `/images/article.png`,
        title: `Как написать запрос для Checkmarx SAST`
      },
      {
        subtitle: `Следующая статья`,
        src: `/images/article.png`,
        title: `Как написать запрос для Checkmarx SAST`
      }
    ],
    slider: {
      subtitle: `Подпись к картинке`,
      pictures: [
        {
          src: `/images/slider-1.png`,
          alt: `Image`
        },
        {
          src: `/images/slider-1.png`,
          alt: `Image`
        },
        {
          src: `/images/slider-1.png`,
          alt: `Image`
        }
      ]
    }
  },
  vacancy: {
    mainTitle: {
      title: `Java developer (Big Data team)`,
      icon1: `ec-earth-americas`,
      icon2: `ec-mortar-board`,
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
    intro: {
      title: ``,
      text: `You will become a part of Big Data team at large US-based
      international company, leader in enterprise VoIP communication solutions,
       messaging and video conferencing. The team is primarily focusing on developing
        software for processing large amounts of data and performing various maintenance
         and data mining tasks using Hadoop ecosystem.`
    },
    requirements: {
      title: `Skills & Requirements`,
      list: [
        {
          text: `Solid Java knowledge (collections, serialization, multi-threading, lambda expressions, etc).`
        },
        {
          text: `Solid experience in working with databases (ANSI SQL).`
        },
        {
          text: `Understanding of computer algorithms and data structures.`
        },
        {
          text: `Ability to quickly learn and understand new technologies.`
        }
      ]
    },
    extraRequirements: {
      title: `Would Be a Plus`,
      list: [
        {
          text: `Hands-on experience with Hadoop, Spark or Kafka.`
        },
        {
          text: `Scala.`
        },
        {
          text: `Hands-on experience with designing ETL processes.`
        },
        {
          text: `Confident user of Linux.`
        },
        {
          text: `Experience with cloud-based infrastructure (AWS).`
        }
      ]
    },
    qualifications: {
      title: `Desired Qualifications`,
      text: `You will become a part of Big Data team at large
      US-based international company, leader in enterprise VoIP
        communication solutions, messaging and video conferencing.
        The team is primarily focusing on developing software for
          processing large amounts of data and performing various
          maintenance and data mining tasks using Hadoop ecosystem.

      Technology stack includes Spark, Hadoop (HDFS, YARN), Apache
      Flume, HP Vertica, MongoDB, different data formats (Avro, Parquet, etc).`
    },
    conditions: {
      title: `Conditions`,
      list: [
        {
          icon: `ec-fire`,
          text: `28 day vacation 100% paid in accordance with the current salary`
        },
        {
          icon: `ec-lock`,
          text: `Business trips to foreign branch offices (the USA, China) and further work H1-B`
        },
        {
          icon: `ec-purple-heart`,
          text: `Corporate training programs, English language `
        },
        {
          icon: `ec-fire`,
          text: `Job placement and payment of salary take place according to the labor codey`
        },
        {
          icon: `ec-lock`,
          text: `Nonresident applicants are granted Relocation Bonus`
        },
        {
          icon: `ec-speech-balloon`,
          text: `28 day vacation 100% paid in accordance with the current salary`
        },
        {
          icon: `ec-fire`,
          text: `Sick leaves 100% paid.`
        }
      ]
    },
    steps: {
      title: `Этапы отбора`,
      list: [
        {
          title: `Знакомство с рекрутером и вакансией`,
          text: `Расскажем о вакансии, зададим несколько вопросов об опыте и договоримся о дате собеседования.`,
          subtitle: ``
        },
        {
          title: `Интервью с рекрутером и техническим специалистом `,
          text: `Познакомимся, зададим вопросы об опыте работы и технических знаниях, расскажем о проекте.`,
          subtitle: `1,5-2 часа`
        },
        {
          title: `Финальная встреча с руководителем департамента`,
          text: `Познакомим с будущим руководителем, подробнее расскажем о проекте,
          поговорим о предстоящих задачах и ожиданиях, зададим уточняющие вопросы.`,
          subtitle: `30 мин-1 час`
        }
      ]
    },
    application: {
      title: `Откликнуться на вакансию`,
      button1: `Отправить резюме`,
      button2: `Порекомендовать друга`
    },
    vacancies: {
      title: `Вакансии в ЭТОЙ категории`,
      catalog: [
        {
          title: `Java developer (Big Data team)`,
          text: `Стек: Java, Redis, Kafka, MongoDB, Docker, ELK, TICK. Сервис базируется в AWS и Private Cloud.`
        },
        {
          title: `Java developer (Big Data team)`,
          text: `We are looking for a talented and energetic team leader to head our Integration Team.`
        }
      ]
    },
    sidebarSlider: [
      {
        image: `/images/article.png`,
        title: `Заголовок`,
        description: `Если вы проживаете в другом городе или стране, но хотите работать у нас,
          то мы предложим поможем с переездом.`,
      },
      {
        image: `/images/article.png`,
        title: `Заголовок`,
        description: `Если вы проживаете в другом городе или стране, но хотите работать у нас,
          то мы предложим поможем с переездом.`,
      },
      {
        image: `/images/article.png`,
        title: `Заголовок`,
        description: `Если вы проживаете в другом городе или стране, но хотите работать у нас,
          то мы предложим поможем с переездом.`,
      }
    ],
    sidebarArticle: {
      title: `Релокация`,
      subtitle: `Если вы проживаете в другом городе или стране,
      но хотите работать у нас, то мы предложим поможем с переездом.`,
    },
    map: {
      title: `Офисы на карте`,
      coords: ``
    }
  },
  socialSticker: [
    {
      title: `twitter`,
      link: `https://www.google.com/`
    },
    {
      title: `facebook`,
      link: `https://www.google.com/`
    },
    {
      title: `vk`,
      link: `https://www.google.com/`
    }
  ],
  footer: {
    copyright: `DINS © — зарегистрированный товарный знак ООО «Нордиджи». 2020`,

    social: {
      hh: `https://www.google.com/`,
      youtube: `https://www.google.com/`,
      instagram: `https://www.google.com/`,
      linkedin: `https://www.google.com/`,
      vk: `https://www.google.com/`
    },
    suscribe: `Подписаться на вакансии`,
    labour: {
      link: `https://www.dins.ru/downloads/2019.11.28-SP-SOUT.pdf?v=1592826998`,
      text: `Оценка условий труда`
    }
  }
};
