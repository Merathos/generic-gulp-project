export default {
  mainTitle: `IT Evenings`,
  completedTitle: `Прошедшие мероприятия`,
  resetButtonText: `Сбросить фильтр`,
  mailing: {
    link: `Подпишись на рассылку `,
    linkHref: `#`,
    text: ` и будь в курсе наших мероприятий`,
  },
  announcement: {
    text: `Анонсы предстоящих мероприятий появятся здесь в ближайщее время`,
    emodzi: `face-with-monocle`,
  },
  newsModal: {
    mainTitle: 'Хочу получать новости о мероприятиях DINs',
    contact: {
      title: 'Оставь  контактные данные',
      inputs: [
        {
          name: 'lastname',
          label: 'Фамилия *',
          error: 'Поле является необходимым для заполнения',
        },
        {
          name: 'name',
          label: 'Имя *',
          error: 'Поле является необходимым для заполнения',
        },
        {
          name: 'email',
          label: 'Email *',
          error: 'Поле является необходимым для заполнения',
          warning: 'Введите действительный email',
        },
      ],
    },
    directions: {
      title: 'Выбери направления мероприятий, про которые хочешь знать',
      question: 'Какие направления в IT тебе интересны? *',
      inputs: ['Development', 'Big Data', 'QA ', 'QA Automation', 'DevOps '],
    },
    agreement: {
      name: 'personal',
      dataText: 'Подтверждаю свое согласие на ',
      dataLink: ' обработку персональных данных',
      dataHref: 'https://dins.ru/downloads/policy.pdf',
    },
    mailing: {
      name: 'newsletter',
      value: 'Я согласен получать рассылку о вакансиях и мероприятиях от DINS®',
    },
    buttonText: 'Отправить заявку',
    confirmation: {
      title: 'Спасибо!',
      text: 'Теперь ты будешь в курсе всех самых свежих мероприятий DINS!',
      btnText: 'Хорошо',
    },
  },
};
