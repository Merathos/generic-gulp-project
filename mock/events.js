export default {
  mainTitle: `IT Evenings`,
  completedTitle: `Прошедшие мероприятия`,
  resetButtonText: `Сбросить фильтр`,
  mailing: {
    link: `Подпишись на рассылку `,
    linkHref: `#`,
    text: ` и будь в курсе наших мероприятий`,
  },
  cards: {
    active: [
      {
        type: `QA Evening`,
        color: `#53B443`,
        date: { day: `11.04`, time: `Начало в 18:00` },
        status: { img: `icons/online.png`, name: `Онлайн` },
        topics: [
          {
            title: `Эволюция систем мониторинга Prometheus и Zabbix`,
            speakers: [
              {
                img: `images/speaker1.png`,
                name: `Вячеслав Швецов`,
                job: `DINS`,
              },
              {
                img: `images/speaker2.png`,
                name: `Александр Калошин`,
                job: `DINS`,
              },
            ],
          },
          {
            title: `Эволюция систем мониторинга Prometheus и Zabbix`,
            speakers: [
              {
                img: `images/speaker1.png`,
                name: `Вячеслав Швецов`,
                job: `DINS`,
              },
            ],
          },
        ],
        location: `Мероприятие проводится онлайн`,
      },
      {
        type: `JS Evening`,
        color: `#FEB251`,
        date: { day: `11.04`, time: `Начало в 18:00` },
        status: { img: `icons/streaming.png`, name: `Идет трансляция` },
        topics: [
          {
            title: `Эволюция систем мониторинга Prometheus и Zabbix`,
            speakers: [
              {
                img: `images/speaker1.png`,
                name: `Вячеслав Швецов`,
                job: `DINS`,
              },
              {
                img: `images/speaker2.png`,
                name: `Александр Калошин`,
                job: `DINS`,
              },
            ],
          },
          {
            title: `Эволюция систем мониторинга Prometheus и Zabbix`,
            speakers: [
              {
                img: `images/speaker1.png`,
                name: `Вячеслав Швецов`,
                job: `DINS`,
              },
            ],
          },
        ],
        location: `Старо-Петергофский проспект 19. Офис DINS`,
      },
    ],
    completed: [
      {
        type: `JаVa Evening`,
        color: `#FB5235`,
        date: { day: `11.04`, time: `Начало в 18:00` },
        status: { img: `icons/recording.png`, name: `Есть запись` },
        topics: [
          {
            title: `Эволюция систем мониторинга Prometheus и Zabbix`,
            speakers: [
              {
                img: `images/speaker1.png`,
                name: `Вячеслав Швецов`,
                job: `DINS`,
              },
              {
                img: `images/speaker2.png`,
                name: `Александр Калошин`,
                job: `DINS`,
              },
            ],
          },
          {
            title: `Эволюция систем мониторинга Prometheus и Zabbix`,
            speakers: [
              {
                img: `images/speaker1.png`,
                name: `Вячеслав Швецов`,
                job: `DINS`,
              },
            ],
          },
        ],
        location: `Старо-Петергофский проспект 19. Офис DINS`,
      },
      {
        type: `QA Evening`,
        color: `#53B443`,
        date: { day: `11.04.19`, time: `Начало в 18:00` },
        status: { img: `icons/recording.png`, name: `Есть запись` },
        topics: [
          {
            title: `Эволюция систем мониторинга Prometheus и Zabbix`,
            speakers: [
              {
                img: `images/speaker1.png`,
                name: `Вячеслав Швецов`,
                job: `DINS`,
              },
              {
                img: `images/speaker2.png`,
                name: `Александр Калошин`,
                job: `DINS`,
              },
            ],
          },
          {
            title: `Эволюция систем мониторинга Prometheus и Zabbix`,
            speakers: [
              {
                img: `images/speaker1.png`,
                name: `Вячеслав Швецов`,
                job: `DINS`,
              },
            ],
          },
        ],
        location: `Старо-Петергофский проспект 19. Офис DINS`,
      },
    ],
  },
  newsModal: {
    mainTitle: 'Хочу получать новости о мероприятиях DINs',
    contact: {
      title: 'Оставь  контактные данные',
      inputs: ['Фамилия *', 'Имя *', 'Email *'],
    },
    directions: {
      title: 'Выбери направления мероприятий, про которые хочешь знать',
      question: 'Какие направления в IT тебе интересны? *',
      inputs: ['Development', 'Big Data', 'QA ', 'QA Automation', 'DevOps '],
    },
    agreement: {
      dataText: 'Подтверждаю свое согласие на ',
      dataLink: ' обработку персональных данных',
      dataHref: '#',
      mailing:
        'Я согласен получать рассылку о вакансиях и мероприятиях от DINS®',
    },
    buttonText: 'Отправить заявку',
    confirmation: {
      title: 'Спасибо!',
      text: 'Теперь ты будешь в курсе всех самых свежих мероприятий DINS!',
      btnText: 'Хорошо',
    },
  },
};
