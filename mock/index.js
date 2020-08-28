export default {
  header: [
    {
      title: `О компании`,
      href: `about`
    },
    {
      title: `Вакансии`,
      href: `catalog`
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
          ],
          multi: false
        },
        {
          title: `Технологии`,
          list: [
            `Java`, `C++`, `Erlang`, `JavaScript`, `Node.JS`, `Scala`, `Python`,
            `RocksDB`, `MongoDB`, `Cassandra`, `Oracle`, `Vertica`, `Neo4J`, `Hadoop`,
            `VMWare`, `Kubernetes`, `DDC`, `Marathon`, `Terraform`, `CloudFoundry`,
            `Amazon`, `AWS`, `Google GCP`, `Zabbix`, `Influx`, `Elasticsearch`, `Git`,
            `Mercurial`, `Jenkins`, `GitLab`, `GridGain`, `Coherence`, `Rabbit`, `Kafka`,
            `ZeroMQ,`
          ],
          multi: true
        },
        {
          title: `Проект`,
          list: [
            `Contact Center`, `Platform A`, `Platform D`, `Analytics`, `Telco`, `Billing`,
            `RCV (Video-conference)`, `Core`, `SWAT`, `Relies IT`, `Features`, `AI`, `CRM SPB`,
            `Glip`, `Deployment`, `SysOps`, `Lab`
          ],
          multi: true
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
         ELK, TICK. Сервис базируется в AWS и Private Cloud.`,
        features: [
          {
            icon: `ec-earth-americas`,
            title: `English Speaking Team`
          },
          {
            icon: `ec-mortar-board`,
            title: `Стажировка`
          }
        ]
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
      icon: `ec-fire`,
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
  about: {
    intro: {
      title: `O компании`,
      text: `DINS — это центр разработки, который участвует в создании UCaaS-платформы
       для американской компании RingCentral — ведущего разработчика и провайдера облачных
        коммуникационных услуг для бизнеса.`,
      list: [
        {
          title: `22 года`,
          text: `Со дня основания DINS. Гордимся, что некоторые коллеги работают с нами
          всё это время.`
        },
        {
          title: `1000 +`,
          text: `Человек работает в штате, большая часть из них — инженеры.`
        },
        {
          title: `450+ тыс`,
          text: `Компаний пользуются решением, в создании которого мы участвуем.`
        }
      ],
      sidebar: {
        subtitle: `RingCentral – Лидер Gartner UCaaS Magic Quadrant в течение последних 5 лет (июль, 2019)`
      }
    },
    details: {
      block1: {
        title: `Что мы делаем`,
        text: `Очень много всего. Решение, в разработке которого участвуем, содержит большой набор
         функций. Сюда входят:`,
        list: [
          {
            icon: `ec-earth-americas`,
            title: `облачная телефония`
          },
          {
            icon: `ec-earth-americas`,
            title: `видеоконференции`
          },
          {
            icon: `ec-earth-americas`,
            title: `факс`
          },
          {
            icon: `ec-earth-americas`,
            title: `контактный центр`
          },
          {
            icon: `ec-earth-americas`,
            title: `корпоративный чат`
          },
          {
            icon: `ec-earth-americas`,
            title: `и много е другое`
          }
        ],
        subtitle: `Еще больше о проектах и командах, которые развивают эту функциональность. `,
        button: `Узнать подробнее`
      },
      block2: {
        title: `Обмен опытом`,
        text: `DINS — сообщество увлеченных инженеров.
        Для нас важна возможность обмениваться накопленным опытом и знаниями с другими специалистами. 
        Поэтому мы пишем в блог на Habr, организуем внутренние Tech Party и ежеквартальные митапы DINS IT EVENING, поддерживаем IT-сообщества Петербурга и участвуем в масштабных IT-конференциях. `,
        links: [
          {
          title: `IT EVENING`,
          link: `/events`
        },
        {
          title: `Habr`,
          link: `/habr`
        }
      ],
        picture: `/images/about-details.png`,
      }
    },
    animation: {

    },
    values: {
      title: `В DINS мы ценим`,
      items: [
        {
          icon: `ec-earth-americas`,
          title: `Технические навыки`,
          text: `Накопленный опыт и высокий уровень профессионализма помогают нашим инженерам
           создавать надежные, удобные и функциональные решения.`
        },
        {
          icon: `ec-earth-americas`,
          title: `Ответственность`,
          text: `Качество нашей работы напрямую влияет на успех тысяч компаний
          по всему миру. Поэтому мы не можем допустить даже малейших перебоев
          в работе сервиса и обеспечиваем его доступность на уровне 99,999 %.`
        },
        {
          icon: `ec-earth-americas`,
          title: `Инициативу`,
          text: `Мы верим, что неравнодушие и увлеченность наших инженеров позволяют платформе, в
           развитии которой мы участвуем, занимать лидирующие позиции на рынке. Поэтому в DINS есть все условия,
            чтобы проявлять инициативу, предлагать новые решения или инструменты.`
        },
        {
          icon: `ec-earth-americas`,
          title: `Командную работу`,
          text: `DINS — команда профессионалов, которые работают сообща ради отличного результата. 
          Мы ценим умение слышать своих коллег и находить общий язык друг с другом. `
        },
        {
          icon: `ec-earth-americas`,
          title: `Открытость`,
          text: `У нас принято свободно делиться идеями и мыслями, обсуждать задачи
          и давать обратную связь. Остаемся честными и на уровне компании: менеджеры всегда открыто говорят
          о приоритетах и перспективах развития организации. `
        },
        {
          icon: `ec-earth-americas`,
          title: `Самое главное`,
          text: `Мы любим свое дело, получаем удовольствие и радость как
          от результатов, так и от самого процесса. И да, мы каждый день пользуемся решением,
           в создании которого участвуем.`
        }
      ]
    },
    gallery: {
      title: `У нас хорошо`,
      pictures: [
        {
          src: `/images/gallery-1.jpg`,
          title: `Комфортное рабочее место: от желаемого количества мониторов до комнатных цветов
          и увлажнителя воздуха`
        },
        {
          src: `/images/gallery-1.jpg`,
          title: `Комфортное рабочее место: от желаемого количества мониторов до комнатных цветов
          и увлажнителя воздуха`
        },
        {
          src: `/images/gallery-1.jpg`,
          title: `Комфортное рабочее место: от желаемого количества мониторов до комнатных цветов
          и увлажнителя воздуха`
        },
        {
          src: `/images/gallery-1.jpg`,
          title: `Комфортное рабочее место: от желаемого количества мониторов до комнатных цветов
          и увлажнителя воздуха`
        }
      ]
    },
    greyFooter: [
      {
        title: `Вакансии`,
        text: `Тебе интересна компания и близки наши ценности? Откликайся на открытые позиции в этом разделе.`
      },
      {
        title: `IT evenings`,
        text: `Присоединяйся к ежеквартальным встречам DINS IT EVENING. `
      },
      {
        title: `Блог`,
        text: `Читай наш блог, чтобы узнать последние новости из жизни компании.`
      }
    ]
  },
  relocation: {
    intro: {
      title: `Релокация`,
      text: `Мы живем и работаем в Санкт-Петербурге. Если ты живешь
      в другом городе, но успешно пройдешь все этапы отбора,
      мы поможем тебе переехать.`,
      list: [
        {
          icon: `ec-earth-americas`,
          text: `Предоставим Relocation Bonus`
        },
        {
          icon: `ec-earth-americas`,
          text: `Поможем в поиске жилья`
        }
      ],
      sidebar: {
        picture: `/images/relocate-header.jpg`,
        decorations: ``
      }
    },
    advantages: {
      title: `В петербурге здорово`,
      list: [
        {
          title: `Культурное наследие`,
          text: `По этим улицам ходили Петр I, Цой 
          и Боярский. Последний все еще ходит.`,
          image: `/images/spb-1.jpg`
        },
        {
          title: `Отличная инфраструктура`,
          text: `В Петербурге самое глубокое в России метро,
           самая большая протяженность трамвайных путей и примерно 800 мостов.`,
          image: `/images/spb-2.jpg`
        },
        {
          title: `Ночная жизнь`,
          text: `Большой выбор заведений и поводов: 
          от посиделок за крафтовым с джазменами 
          и учеными до молекулярной кухни 
          и гастробаров.`,
          image: `/images/spb-3.jpg`
        },
        {
          title: `Природа`,
          text: `Мы живем на море. Почти.`,
          image: `/images/spb-4.jpg`
        },
        {
          title: `Досуг`,
          text: `Кино, музеи, театры, лекции, детские центры и городские фестивали  — отдых
          на любой вкус обеспечен.`,
          image: `/images/spb-5.jpg`
        }
      ],
    },
    promo: {
      title: `Хочу в Dins`,
      text: `Мы растем, и нам всегда нужны яркие, умные, талантливые люди: те, кто хочет
       созидать и создавать полезный продукт для миллионов людей во всем мире. `,
      button: `Смотреть вакансии`,
      picture: `/images/relocation-promo.jpg`
    },
    blogs: {
      title: `Переезжать сложно?`,
      text: `Если все еще сомневаешься, прочитай истории наших ребят: они переехали
       в Петербург, когда получили оффер от DINS.`,
      note: `В некоторых командах можно работать удаленно. Присылай резюме 
      на jobs@dins.ru с пометкой «удаленка», и наши HR расскажут об этой возможности.`
    },
    map: {
      title: `Офисы на карте`,
      coords: ``
    },
    greyFooter: [
      {
        title: `Вакансии`,
        text: `Тебе интересна компания и близки наши ценности? Откликайся на открытые позиции в этом разделе.`
      },
      {
        title: `IT evenings`,
        text: `Присоединяйся к ежеквартальным встречам DINS IT EVENING. `
      },
      {
        title: `Блог`,
        text: `Читай наш блог, чтобы узнать последние новости из жизни компании.`
      }
    ]
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
      HP Vertica, MongoDB, different data formats (Avro, Parquet, etc).`,
      features: [
        {
          icon: `ec-earth-americas`,
          title: `English Speaking Team`
        },
        {
          icon: `ec-mortar-board`,
          title: `Стажировка`
        }
      ]
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
      button: `Отправить резюме`,
      button2: `Порекомендовать друга`
    },
    vacancies: {
      title: `Вакансии в ЭТОЙ категории`,
      catalog: [
        {
          name: `Java developer (Big Data team)`,
          descr: `Стек: Java, Redis, Kafka, MongoDB, Docker, ELK, TICK. Сервис базируется в AWS и Private Cloud.`
        },
        {
          name: `Java developer (Big Data team)`,
          descr: `We are looking for a talented and energetic team leader to head our Integration Team.`
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
  contacts: {
    mainTitle: {
      title: `Контакты`,
      text: `Мы растем, и нам всегда нужны яркие, умные, талантливые люди:
      те, кто хочет созидать и создавать полезный продукт для миллионов людей во всем мире.`,
      list: [
        {
          icon: `ec-earth-americas`,
          title: `+7 (812) 740-77-61`,
          subtitle: `Телефон для связи`
        },
        {
          icon: `ec-earth-americas`,
          title: `jobs@dins.ru`,
          subtitle: `E-mail для резюме`
        }
      ]
    },
    offices: [
      {
        title: `Офис  на Старо-Петергофском проспекте`,
        location: `БЦ “Петергофский”`,
        adress: `190020, Санкт-Петербург, Старо-Петергофский проспект, д. 19.`,
        stations: [
          {
            title: `Нарвская`,
            image: `/images/red-line.svg`,
            subtitle: `Можно добраться пешком за 15 минут или на автобусах: 2, 6, К-1, К-6, К-195 и К-306.`
          },
          {
            title: `Технологический институт`,
            image: `/images/red-blue-line.svg`,
            subtitle: `Автобусы: К-90, К-115 и К-177 — от 1-й Красноармейской.`
          },
          {
            title: `Балтийская`,
            image: `/images/red-line.svg`,
            subtitle: `Можно добраться пешком 
            за 15 минут.`
          },
          {
            title: `Сенная площадь, Спасская, Садовая`,
            image: `/images/three-lines.svg`,
            subtitle: `Автобусы: 49, К-195 — 
            от Садовой д. 39 или 1 — 
            от наб. Канала Грибоедова д. 56.`
          }
        ]
      },
      {
        title: `Офис на проспекте Обуховской Обороны`,
        location: `БЦ “Фидель”`,
        adress: `192029, Санкт-Петербург, пр. Обуховской обороны, д. 70, корп. 3`,
        stations: [
          {
            title: `Елизаровская`,
            image: `/images/green-line.svg`,
            subtitle: `Можно добраться пешком за 10 минут.`
          }
        ]
      }
    ]
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

    social: [
      {
        link: `https://www.google.com/`,
        title: `hh`,
        picture: `/icons/hh.svg`
      },
      {
        link: `https://www.google.com/`,
        title: `youtube`,
        picture: `/icons/youtube.svg`
      },
      {
        link: `https://www.google.com/`,
        title: `instagram`,
        picture: `/icons/instagram.svg`
      },
      {
        link: `https://www.google.com/`,
        title: `linkedin`,
        picture: `/icons/in.svg`
      },
      {
        link: `https://www.google.com/`,
        title: `vk`,
        picture: `/icons/vk.svg`
      }
    ],
    suscribe: `Подписаться на вакансии`,
    labour: {
      link: `https://www.dins.ru/downloads/2019.11.28-SP-SOUT.pdf?v=1592826998`,
      text: `Оценка условий труда`
    },
    nimaxText: 'Сделали в'
  }
};
