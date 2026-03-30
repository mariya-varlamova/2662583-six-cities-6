export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Review = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: User;
}

export const reviews: Review[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 4
  },
  {
    id: 'c78eefd6-c064-5b41-9e9e-ce194e7c73bc',
    date: '2020-03-15T10:30:00.000Z',
    user: {
      name: 'Emma Watson',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    comment: 'Beautiful apartment with amazing views. Would definitely recommend to everyone!',
    rating: 5

  },
  {
    id: 'd89ffeg7-d175-6c52-0f0f-df305f8d84cd',
    date: '2021-07-22T09:15:00.000Z',
    user: {
      name: 'John Smith',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    comment: 'Great location, clean and comfortable. The host was very helpful.',
    rating: 4
  }
];
