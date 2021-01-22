export default {
  contacts: {
    mainTitle: {
      title: `Контакты`,
      text: `У${'\u00A0'}нас два офисе в${'\u00A0'}Петербурге в${'\u00A0'}шаговой доступности от${'\u00A0'}метро. Один находится в${'\u00A0'}историческом здании в${'\u00A0'}центре Петербурга, из${'\u00A0'}другого открывается потрясающий вид на${'\u00A0'}Неву.`,
      list: [
        {
          icon: `phone`,
          href: 'tel:+78127407761',
          title: `+7 (812) 740-77-61`,
          subtitle: `Телефон для связи`,
        },
        {
          icon: `yellow-envelope`,
          href: 'mailto:jobs@dins.ru',
          title: `jobs@dins.ru`,
          subtitle: `Email для резюме`,
        },
      ],
    },
    offices: [
      {
        title: `Офис  на Старо-Петергофском проспекте`,
        location: `БЦ «Петергофский»`,
        adress: `190020, Санкт-Петербург, Старо-Петергофский проспект, д. 19.`,
        stations: [
          {
            title: `Нарвская`,
            image: `/images/red-line.svg`,
            subtitle: `Можно добраться пешком за 15 минут или на автобусах: 2, 6, К-1, К-6, К-195 и К-306.`,
          },
          {
            title: `Технологический институт`,
            image: `/images/red-blue-line.svg`,
            subtitle: `Автобусы: К-90, К-115 и К-177 — от 1-й Красноармейской.`,
          },
          {
            title: `Балтийская`,
            image: `/images/red-line.svg`,
            subtitle: `Можно добраться пешком
            за 15 минут.`,
          },
          {
            title: `Сенная площадь, Спасская, Садовая`,
            image: `/images/three-lines.svg`,
            subtitle: `Автобусы: 49, К-195 —
            от Садовой д. 39 или 1 —
            от наб. Канала Грибоедова д. 56.`,
          },
        ],
        zoom: 15,
        center: {
          lat: 59.907,
          lng: 30.279,
        },
        markers: [
          {
            id: 723,
            coordinates: {
              lat: 59.9119,
              lng: 30.2764,
            },
          },
        ],
        routeFrom: [
          {
            name: `first`,
            lat: 59.9011,
            lng: 30.275,
            color: '#2F8ED9',
          },
          {
            name: `second`,
            lat: 59.9074,
            lng: 30.2997,
            color: '#53B443',
          },
        ],
        controls: ['zoomControl'],
        behaviors: ['dblClickZoom', 'drag', 'multiTouch'],
      },
      {
        title: `Офис на проспекте Обуховской Обороны`,
        location: `БЦ «Фидель»`,
        adress: `192029, Санкт-Петербург, пр. Обуховской обороны, д. 70, корп. 3`,
        stations: [
          {
            title: `Елизаровская`,
            image: `/images/green-line.svg`,
            subtitle: `Можно добраться пешком за 10 минут.`,
          },
        ],
        zoom: 16,
        center: {
          lat: 59.8992,
          lng: 30.429,
        },
        markers: [
          {
            id: 265,
            coordinates: {
              lat: 59.9017,
              lng: 30.4299,
            },
          },
        ],
        routeFrom: [
          {
            name: `first`,
            lat: 59.8966,
            lng: 30.4237,
            color: '#2F8ED9',
          },
        ],
        controls: ['zoomControl'],
        behaviors: ['dblClickZoom', 'drag', 'multiTouch'],
      },
    ],
  },
};
