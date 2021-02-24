export default {
  main: {
    intro: {
      title: `Работай в${'\u00A0'}DINS`,
      text: `Мы${'\u00A0'}участвуем в${'\u00A0'}разработке UCaaS-платформы для${'\u00A0'}бизнеса. Она помогает компаниям управлять всеми коммуникациями:`,
      communicationsList: [
        'Корпоративный чат',
        'Видеоконференции',
        'Облачная телефония',
        'Контактный центр',
        'Факс',
      ],
      buttonText: 'Присоединиться к команде',
    },
    infographics: {
      titles: ['Создавай', `высокo${'\u00AD'}нагруженный популярный сервис`],
      infographicsData: [
        {
          name: 'centers-quantity',
          title: 'Дата-центр \nна 5 континентах',
          value: '31',
        },
        {
          name: 'accessibility',
          title: 'Доступность \nсервиса',
          value: '99,999%',
        },
        {
          name: 'subscribers',
          title: 'Абонентов',
          value: '>2 млн',
        },
        {
          name: 'calls-quantity',
          title: 'Звонков \nодновременно',
          value: '>125 тыс',
        },
        {
          name: 'iterations-quantity',
          title: 'Интеграций \nпо API',
          value: '>1400',
        },
        {
          name: 'changes-quantity',
          title: 'Изменений на \nпродакшн в день',
          value: '>120',
        },
      ],
    },
    aboutCompany: {
      benefits: [
        {
          title: 'Работа',
          explanation:
            'Популярный продукт для\nбизнес-коммуникаций, современный стек,\nзабота о сотрудниках.',
          details: 'Подробнее',
          href: '/about',
        },
        {
          title: 'Релокация',
          explanation:
            'Поможем переехать в Санкт-Петербург: выплатим бонус и подскажем, куда обратиться по поводу жилья. ',
          details: 'Подробнее',
          href: '/relocation',
        },
        {
          title: 'Стажировки',
          explanation:
            'Официальное оформление и зарплата, реальные задачи и поддержка на протяжении всей стажировки.  ',
          details: 'Подробнее',
          href: '/internship',
        },
      ],
      showEvent: true,
      bannersData: {
        blogLinksData: {
          link1: {
            buttonText: 'Перейти в блог ',
            image: '/images/banner-picture-man.png',
            bg: '/backgrounds/banner-green-square.png',
          },
          link2: {
            buttonText: 'Перейти в блог ',
            image: '/images/banner-picture-woman.png',
            bg: '/backgrounds/banner-circle-with-square.png',
          },
        },
      },
      blogLinkDefault: 'link1',
    },
    technologies: [
      'Kubernetes',
      'DDC',
      'Marathon',
      'Amazon AWS',
      'Terraform',
      'CloudFoundry',
      'Rabbit',
      'Google GCP',
      'Zabbix',
      'Git',
      'Influx',
      'Mercurial',
      'Jenkins',
      'Elasticsearch',
      'GitLab',
      'GridGain',
      'Kafka',
      'Coherence',
      'ZeroMQ',
    ],
  },
};
