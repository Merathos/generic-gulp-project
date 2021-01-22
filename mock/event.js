export default {
  event: {
    type: `JavaScript EVENING`,
    isActive: true,
    bgImg: `/backgrounds/javascript.svg`,
    status: { img: `/icons/online.png`, name: `Online` },
    date: { day: `29 мая,`, time: `19:30-21:30`, zone: '(MSK)' },
    location: `Санкт-Петербург. Старо-Петергофский проспект 19, БЦ «Петергофский»`,
    speakers: {
      title: `Спикеры`,
    },
    description: `На встрече, в рамках доклада про React, поговорим зачем нужен ConcurrentMode и как его использовать, познакомимся с ленивыми импортами (lazy) и компонентом для удобства их использования (Suspense). Наш гость из VK расскажет несколько историй про баги
      и некоторые технические решения, учитывающие специфику проекта. Нас ждут не только доклады, но и наша традиционная пицца.`,
    schedule: {
      title: `Программа мероприятия`,
    },
    stream: {
      title: `Прямая трансляция`,
      video: {
        src: `https://www.youtube.com/watch?v=5qap5aO4i9A`,
        srcPoster: `/images/event-details1.jpg`,
        stretched: true,
      },
    },
  },
};
