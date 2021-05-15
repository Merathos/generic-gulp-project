export default {
  jobForm: {
    mainTitle: `Хочу работать в DINS`,
    subtitle: `Откликнуться на вакансию`,
    subtitleEn: 'Apply',
    contact: {
      title: `Оставь  контактные данные`,
      titleEn: 'Enter your contact details',
      inputs: [
        {
          name: 'lastname',
          label: 'Фамилия *',
          labelEn: 'Last name *',
          error: 'Поле является необходимым для заполнения',
          errorEn: 'Compulsory field',
        },
        {
          name: 'name',
          label: 'Имя *',
          labelEn: 'Name *',
          error: 'Поле является необходимым для заполнения',
          errorEn: 'Compulsory field',
        },
        {
          name: `phone`,
          label: `Телефон *`,
          labelEn: 'Phone *',
          error: 'Поле является необходимым для заполнения',
          errorEn: 'Compulsory field',
          warning: 'Введите номер телефона',
          warningEn: 'Enter phone number',
          mask: '+7 (999) 999 99 99',
        },
        {
          name: 'email',
          label: 'Email *',
          labelEn: 'Email *',
          error: 'Поле является необходимым для заполнения',
          errorEn: 'Compulsory field',
          warning: 'Введите действительный email',
          warningEn: 'Enter valid email',
        },
      ],
      select: {
        name: 'contact',
        placeholder: `Предпочтительный способ связи`,
        placeholderEn: 'Preferred contact method',
        options: [
          { value: 'phone', label: 'Телефон' },
          { value: 'email', label: 'Email' },
          { value: 'whatsapp', label: 'WhatsApp' },
          { value: 'telegram', label: 'Telegram' },
        ],
        optionsEn: [
          { value: 'phone', label: 'Phone' },
          { value: 'email', label: 'Email' },
          { value: 'whatsapp', label: 'WhatsApp' },
          { value: 'telegram', label: 'Telegram' },
        ],
      },
      telegramLabel: 'Ник в Telegram',
      telegramLabelEn: 'Telegram username',
    },
    cv: {
      title: `Прикрепи резюме или ссылку`,
      titleEn: 'Attach your CV or enter its web address',
      fileInput: {
        id: `cvFile`,
        name: `cvFile`,
        label: 'Прикрепить резюме',
        labelEn: 'Attach your CV',
        fileExt: `doc, docx, pdf, rtf, TXT`,
      },
      textInput: {
        name: `cvLink`,
        label: `Ссылка на резюме`,
        labelEn: 'Link to your CV',
        error: 'Прикрепите или добавьте ссылку на резюме',
        errorEn: 'Attach your CV or enter its web address',
      },
    },
    agreement: {
      name: 'personal',
      dataText: 'Подтверждаю свое согласие на ',
      dataLink: ' обработку персональных данных',
      dataTextEn: 'I agree to the ',
      dataLinkEn: ' processing of personal data',
      dataHref: '/downloads/policy.pdf',
    },
    mailing: {
      name: 'newsletter',
      value: 'Я согласен получать рассылку о вакансиях и мероприятиях от DINS®',
      valueEn: 'I agree to recieve DINS® newsletter',
    },
    buttonText: 'Отправить заявку',
    buttonTextEn: 'Send your application',
    confirmation: {
      title: 'Спасибо!',
      titleEn: 'Thank you!',
      text: 'Мы изучим твое резюме и свяжемся с тобой в ближайшее время.',
      textEn: 'We will contact you once we go through your CV.',
      btnText: 'Хорошо',
      btnTextEn: 'Ok',
    },
  },
  jobFormV2: {
    confirmation: {
      title: 'Спасибо!',
      text:
        'Мы изучим твою заявку и свяжемся, если появится подходящая позиция.',
      btnText: 'Хорошо',
    },
  },
  subForm: {
    mainTitle: `Подпишись на нашу рассылку и узнавай о\u00A0вакансиях первым`,
    contact: {
      title: `Оставь  контактные данные`,
      inputs: [
        {
          name: `lastname`,
          label: `Фамилия *`,
          error: 'Поле является необходимым для заполнения',
        },
        {
          name: `name`,
          label: `Имя *`,
          error: 'Поле является необходимым для заполнения',
        },
        {
          name: `email`,
          label: `Email *`,
          error: 'Поле является необходимым для заполнения',
          warning: 'Введите действительный email',
        },
      ],
    },
    agreement: {
      name: 'personal',
      dataText: 'Подтверждаю свое согласие на ',
      dataLink: ' обработку персональных данных',
      dataHref: '/downloads/policy.pdf',
    },
    mailing: {
      name: 'newsletter',
      value: 'Я согласен получать рассылку о вакансиях и мероприятиях от DINS®',
    },
    buttonText: 'Подписаться',
    confirmation: {
      title: 'Спасибо!',
      text: 'Теперь ты будешь получать рассылку DINS.',
      btnText: 'Хорошо',
    },
  },
  internForm: {
    mainTitle: 'Заявка на стажировку',
    contact: {
      title: `Оставь  контактные данные`,
      inputs: [
        {
          name: `lastname`,
          label: `Фамилия *`,
          error: 'Поле является необходимым для заполнения',
        },
        {
          name: `name`,
          label: `Имя *`,
          error: 'Поле является необходимым для заполнения',
        },
        {
          name: `birthDate`,
          label: `Дата рождения *`,
          error: 'Поле является необходимым для заполнения',
          warning: 'Введите полную дату рождения',
          date: true,
          mask: '99.99.9999',
          maskPlaceholder: 'дд.мм.гггг',
        },
        {
          name: `phone`,
          phone: true,
          label: `Телефон *`,
          error: 'Поле является необходимым для заполнения',
          warning: 'Введите номер телефона',
          mask: '+7 (999) 999 99 99',
        },
        {
          name: `email`,
          label: `Email *`,
          error: 'Поле является необходимым для заполнения',
          warning: 'Введите действительный email',
        },
      ],
      select: {
        name: 'contact',
        placeholder: `Предпочтительный способ связи`,
        options: [
          { value: 'phone', label: 'Телефон' },
          { value: 'email', label: 'Email' },
          { value: 'whatsapp', label: 'WhatsApp' },
          { value: 'telegram', label: 'Telegram' },
        ],
      },
      telegramLabel: 'Ник в Telegram',
    },
    education: {
      title: `Образование`,
      inputs: [
        {
          name: `university`,
          label: `ВУЗ *`,
          error: 'Поле является необходимым для заполнения',
        },
        {
          name: `faculty`,
          label: `Факультет / направление обучения *`,
          error: 'Поле является необходимым для заполнения',
        },
        {
          name: `course`,
          label: `Курс*`,
          error: 'Поле является необходимым для заполнения',
        },
      ],
    },
    terms: {
      title: `Условия стажировки`,
      direction: {
        question: `Какие направления в IT тебе интересны? *`,
        inputs: [`Development`, `Big Data`, `QA `, `QA Automation`, `DevOps`],
      },
      tech: [
        {
          label: `С какими технологиями тебе хотелось бы работать? *`,
          placeholder: `Введите технологии`,
          name: `techWish`,
          error: 'Поле является необходимым для заполнения',
        },
        {
          label: `Какие технологии приходилось использовать на практике или изучать? * `,
          placeholder: `Введите технологии`,
          name: `techExp`,
          error: 'Поле является необходимым для заполнения',
        },
      ],
      startingMonth: {
        name: 'month',
        question: `С какого месяца сможешь начать проходить стажировку? *`,
        placeholder: `Месяц`,
        options: [
          { value: 'january', label: 'Январь' },
          { value: 'february', label: 'Февраль' },
          { value: 'march', label: 'Март' },
          { value: 'april', label: 'Апрель' },
          { value: 'may', label: 'Май' },
          { value: 'june', label: 'Июнь' },
          { value: 'july', label: 'Июль' },
          { value: 'august', label: 'Август' },
          { value: 'september', label: 'Сентябрь' },
          { value: 'october', label: 'Октябрь' },
          { value: 'nobember', label: 'Ноябрь' },
          { value: 'december', label: 'Декабрь' },
        ],
        error: 'Поле является необходимым для заполнения',
      },
      time: {
        question: `Сколько часов в неделю ты готов стажироваться? *`,
        inputs: [
          {
            name: `time`,
            id: '30',
            value: '30',
            label: `30 часов`,
          },
          {
            name: `time`,
            id: '40',
            value: '40',
            label: `40 часов`,
          },
        ],
        error: 'Поле является необходимым для заполнения',
      },
    },
    cv: {
      title: `Прикрепи резюме или ссылку`,
      fileInput: {
        id: `cvFile`,
        name: `cvFile`,
        label: 'Прикрепить резюме',
        fileExt: `doc, docx, pdf, rtf, TXT`,
      },
      textInput: {
        name: `cvLink`,
        label: `Ссылка на резюме`,
        error: 'Прикрепите или добавьте ссылку на резюме',
      },
    },
    agreement: {
      name: 'personal',
      dataText: 'Подтверждаю свое согласие на ',
      dataLink: ' обработку персональных данных',
      dataHref: '/downloads/policy.pdf',
    },
    mailing: {
      name: 'newsletter',
      value: 'Я согласен получать рассылку о вакансиях и мероприятиях от DINS®',
    },
    buttonText: 'Отправить заявку',
    confirmation: {
      title: 'Спасибо!',
      text:
        'Мы изучим твою заявку и свяжемся по указанным контактам, если появится подходящая позиция.',
      btnText: 'Хорошо',
    },
  },
  error: {
    title: 'Что-то пошло не так :(',
    titleEn: 'Something went wrong :(',
    text: 'Пожалуйста, попробуй заполнить форму ещё раз.',
    textEn: 'Please try again later.',
    btnText: 'Хорошо',
    btnTextEn: 'Ok',
  },
};
