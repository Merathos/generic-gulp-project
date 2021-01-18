export default {
  header: {
    techTitle: 'Стек технологий:',
    techTitleEn: 'Technology Stack:',
    teamTitle: 'Команда:',
    teamTitleEn: 'Team:',
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
      Flume, HP Vertica, MongoDB, different data formats (Avro, Parquet, etc).`,
  },
  conditions: {
    title: 'Условия работы',
    titleEn: 'Conditions',
    list: [
      {
        icon: `fire`,
        text: `28 day vacation 100% paid in accordance with the current salary`,
      },
      {
        icon: `lock`,
        text: `Business trips to foreign branch offices (the USA, China) and further work H1-B`,
      },
      {
        icon: `heart`,
        text: `Corporate training programs, English language `,
      },
      {
        icon: `moai`,
        text: `Job placement and payment of salary take place according to the labor codey`,
      },
      {
        icon: `lock`,
        text: `Nonresident applicants are granted Relocation Bonus`,
      },
      {
        icon: `balloon`,
        text: `28 day vacation 100% paid in accordance with the current salary`,
      },
      {
        icon: `fire`,
        text: `Sick leaves 100% paid.`,
      },
    ],
  },
  steps: {
    title: `Этапы отбора`,
    titleEn: 'Selection Process',
    list: [
      {
        title: `Знакомство с рекрутером и вакансией`,
        text: `Расскажем о вакансии, зададим несколько вопросов об опыте и договоримся о дате собеседования.`,
        subtitle: ``,
      },
      {
        title: `Интервью с рекрутером и техническим специалистом `,
        text: `Познакомимся, зададим вопросы об опыте работы и технических знаниях, расскажем о проекте.`,
        subtitle: `1,5-2 часа`,
      },
      {
        title: `Финальная встреча с руководителем департамента`,
        text: `Познакомим с будущим руководителем, подробнее расскажем о проекте,
          поговорим о предстоящих задачах и ожиданиях, зададим уточняющие вопросы.`,
        subtitle: `30 мин-1 час`,
      },
    ],
  },
  application: {
    title: `Откликнуться на вакансию`,
    titleEn: 'Apply',
    button: `Отправить резюме`,
    buttonEn: 'Send CV',
  },
  recruiters: {
    title: `Остались вопросы?`,
    text: `Пиши на почту jobs@dins.ru или нашим рекрутерам`,
  },
  vacancies: {
    title: `Вакансии в ЭТОЙ категории`,
    titleEn: 'Vacancies in this category',
    catalog: [
      {
        name: `Java developer (Big Data team)`,
        descr: `Стек: Java, Redis, Kafka, MongoDB, Docker, ELK, TICK. Сервис базируется в AWS и Private Cloud.`,
      },
      {
        name: `Java developer (Big Data team)`,
        descr: `We are looking for a talented and energetic team leader to head our Integration Team.`,
      },
    ],
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
    },
  ],
  sidebarArticle: {
    title: `Релокация`,
    subtitle: `Если вы проживаете в другом городе или стране,
      но хотите работать у нас, то мы предложим поможем с переездом.`,
  },
  map: {
    title: `Офисы на карте`,
    titleEn: 'Our offices',
    zoom: 12,
    center: {
      lat: 59.908,
      lng: 30.348,
    },
    markers: [
      {
        id: 723,
        coordinates: {
          lat: 59.9119,
          lng: 30.2764,
        },
      },
      {
        id: 265,
        coordinates: {
          lat: 59.9017,
          lng: 30.4299,
        },
      },
    ],
    controls: [],
    behaviors: ['default'],
  },
  relocation: {
    title: `Релокация`,
    subtitle: `Если вы проживаете в другом городе или стране, но хотите работать у нас, то мы поможем
    с переездом.`,
    href: '/relocation',
  },
};
