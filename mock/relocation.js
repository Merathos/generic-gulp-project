export default {
  relocation: {
    intro: {
      title: `Релокация`,
      text: `У\u00A0нас есть коллеги, которые работают удаленно, но\u00A0большая часть инженеров находится в\u00A0Санкт-Петербурге. Если ты\u00A0живешь в\u00A0другом городе, но\u00A0разделяешь нашу любовь к\u00A0Петербургу и\u00A0хочешь переехать, мы\u00A0поможем тебе:`,
      list: [
        {
          icon: `/emodzi/gem.png`,
          text: `Предоставим \nRelocation Bonus`,
        },
        {
          icon: `/emodzi/house.png`,
          text: `Поможем \nв\u00A0поиске\u00A0жилья`,
        },
      ],
      picture: `/images/relocate-header.jpg`,
      mobPicture: `/images/relocate-header-mob.jpg`,
    },
    advantages: {
      title: `В петербурге здорово`,
      list: [
        {
          title: `Культурное наследие`,
          text: `По\u00A0этим улицам ходили Петр\u00A0I, В.\u00A0Цой и\u00A0М.\u00A0Боярский. Последний все еще ходит.`,
          image: `/images/spb-1.jpg`,
        },
        {
          title: `Отличная инфраструктура`,
          text: `В\u00A0Петербурге самое глубокое в\u00A0России метро,
          самая большая протяженность трамвайных путей и\u00A0примерно 800\u00A0мостов.`,
          image: `/images/spb-2.jpg`,
        },
        {
          title: `Ночная жизнь`,
          text: `Большой выбор заведений и\u00A0поводов:
          от\u00A0посиделок за\u00A0крафтовым с\u00A0джазменами
          и\u00A0учеными до\u00A0молекулярной кухни
          и\u00A0гастробаров.`,
          image: `/images/spb-3.jpg`,
        },
        {
          title: `Природа`,
          text: `Мы\u00A0живем на\u00A0море. Почти.`,
          image: `/images/spb-4.jpg`,
        },
        {
          title: `Досуг`,
          text: `Кино, музеи, театры, лекции, детские центры и\u00A0городские фестивали\u00A0\u2014 отдых
          на\u00A0любой вкус обеспечен.`,
          image: `/images/spb-5.jpg`,
        },
      ],
    },
    promo: {
      title: `Хочу в Dins`,
      text: `Если хочешь работать из\u00A0другого города, присылай резюме на\u00A0jobs@dins.ru с\u00A0пометкой «удаленка», и\u00A0наши\u00A0HR расскажут об\u00A0этой возможности.`,
      button: `Смотреть вакансии`,
      picture: `/images/relocation-promo.jpg`,
    },
    blogs: {
      title: `Переезжать сложно?`,
      text: `Если все еще сомневаешься, прочитай истории наших ребят: они переехали
       в\u00A0Петербург, когда получили оффер от DINS.`,
      noteIcon: `/icons/fire.png`,
      note: `В некоторых командах можно работать удаленно. Присылай резюме
      на\u00A0jobs@dins.ru с пометкой «удаленка», и наши HR расскажут об этой возможности.`,
    },
    map: {
      title: `Офисы на карте`,
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
  },
};