export default {
  header: [
    {
      title: `О компании`,
      href: `about`,
    },
    {
      title: `Вакансии`,
      href: `vacancies`,
    },
    {
      title: `Команды`,
      href: `teams`,
    },
  ],
  headerMenu: {
    menuList: [
      { title: 'О компании' },
      { title: 'IT Evenings' },
      { title: 'Команды' },
      { title: 'Блог' },
      { title: 'Вакансии', isSpecial: true },
      { title: 'Релокация' },
      { title: 'Стажировки' },
      { title: 'Контакты' },
    ],
    contacts: ['phoneNumber', 'email'],
    contact: {
      phoneNumber: {
        title: 'Телефон',
        value: '+7 (812) 740-77-61',
        href: 'tel:+78127407761',
      },
      email: {
        title: 'E-mail',
        value: 'jobs@dins.ru',
        href: 'mailto:jobs@dins.ru',
      },
    },
  },
  footer: {
    copyright: `DINS © — зарегистрированный товарный знак ООО «Нордиджи». 2020`,

    social: [
      {
        link: `https://spb.hh.ru/employer/168307`,
        title: `hh`,
      },
      {
        link: `https://www.linkedin.com/company/dino-systems`,
        title: `linkedin`,
      },
      {
        link: `https://www.youtube.com/channel/UCmJYB3hvbF3AlVh9HFeXX3A`,
        title: `youtube`,
      },
      {
        link: `https://vk.com/dins_spb`,
        title: `vk`,
      },
      {
        link: `https://www.instagram.com/dins_team/`,
        title: `instagram`,
      },
    ],
    suscribe: `Подписаться на вакансии`,
    labour: {
      link: `/sout.html`,
      text: `Оценка условий труда`,
    },
    nimaxText: 'Сделали в',
    producersText: 'Дизайн и разработка',
    producersLink: `https://www.nimax.ru/`,
  },
};
