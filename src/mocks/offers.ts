export type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type ExtendedOffer = Offer & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

export const cities = {
  Amsterdam: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 10
    }
  },
  Paris: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 10
    }
  },
  Cologne: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 10
    }
  },
  Brussels: {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 10
    }
  },
  Hamburg: {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 10
    }
  },
  Dusseldorf: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 10
    }
  }
};


export const offers: Offer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    previewImage: 'img/room.jpg'
  },
  {
    id: '2d2d2d2d-2d2d-2d2d-2d2d-2d2d2d2d2d2d',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.4,
    previewImage: 'img/room.jpg'
  },
  {
    id: '3c3c3c3c-3c3c-3c3c-3c3c-3c3c3c3c3c3c',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.6,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: '4d4d4d4d-4d4d-4d4d-4d4d-4d4d4d4d4d4d',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 12
    },
    isFavorite: false,
    isPremium: true,
    rating: 5.0,
    previewImage: 'img/apartment-03.jpg'
  }
];

export const parisOffers: Offer[] = [
  {
    id: 'paris-1',
    title: 'Eiffel Tower View Apartment',
    type: 'apartment',
    price: 250,
    city: cities.Paris,
    location: {
      latitude: 48.858889,
      longitude: 2.320041,
      zoom: 12
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
    previewImage: 'img/apartment-01.jpg'
  },
  {
    id: 'paris-2',
    title: 'Cozy Studio near Louvre',
    type: 'room',
    price: 95,
    city: cities.Paris,
    location: {
      latitude: 48.861111,
      longitude: 2.335556,
      zoom: 12
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    previewImage: 'img/room.jpg'
  },
  {
    id: 'paris-3',
    title: 'Luxury Apartment in Marais',
    type: 'apartment',
    price: 320,
    city: cities.Paris,
    location: {
      latitude: 48.856667,
      longitude: 2.361944,
      zoom: 12
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: 'paris-4',
    title: 'Montmartre Artist Studio',
    type: 'studio',
    price: 150,
    city: cities.Paris,
    location: {
      latitude: 48.886667,
      longitude: 2.343333,
      zoom: 12
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.7,
    previewImage: 'img/apartment-03.jpg'
  }
];

export const allOffers: Offer[] = [
  ...offers,
  ...parisOffers
];

export const extendedOffers: ExtendedOffer[] = [
  {
    ...offers[0],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    bedrooms: 3,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    host: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg'
    ],
    maxAdults: 4
  },
  {
    ...offers[1],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 1,
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge'
    ],
    host: {
      name: 'Oliver',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg'
    ],
    maxAdults: 2
  },
  {
    ...offers[2],
    description: 'Beautiful apartment with direct view to the canal. Perfect for romantic getaway or business trip.',
    bedrooms: 2,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Kitchen',
      'Dishwasher'
    ],
    host: {
      name: 'Maria',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-02.jpg',
      'img/room.jpg',
      'img/apartment-03.jpg'
    ],
    maxAdults: 3
  },
  {
    ...offers[3],
    description: 'Cozy apartment in the heart of the city. Close to all attractions and public transport.',
    bedrooms: 2,
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'Towels'
    ],
    host: {
      name: 'John',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    images: [
      'img/apartment-03.jpg',
      'img/room.jpg',
      'img/studio-01.jpg'
    ],
    maxAdults: 4
  },
  {
    ...parisOffers[0],
    description: 'Stunning apartment with breathtaking view of the Eiffel Tower. Located in the heart of Paris, close to all major attractions.',
    bedrooms: 2,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Kitchen',
      'Dishwasher',
      'Air conditioning',
      'Elevator'
    ],
    host: {
      name: 'Sophie',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg'
    ],
    maxAdults: 4
  },
  {
    ...parisOffers[1],
    description: 'Stunning apartment with breathtaking view of the Eiffel Tower. Located in the heart of Paris, close to all major attractions.',
    bedrooms: 2,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Kitchen',
      'Dishwasher',
      'Air conditioning',
      'Elevator'
    ],
    host: {
      name: 'Sophie',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg'
    ],
    maxAdults: 4
  },
  {
    ...parisOffers[2],
    description: 'Stunning apartment with breathtaking view of the Eiffel Tower. Located in the heart of Paris, close to all major attractions.',
    bedrooms: 2,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Kitchen',
      'Dishwasher',
      'Air conditioning',
      'Elevator'
    ],
    host: {
      name: 'Sophie',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg'
    ],
    maxAdults: 4
  },
  {
    ...parisOffers[3],
    description: 'Stunning apartment with breathtaking view of the Eiffel Tower. Located in the heart of Paris, close to all major attractions.',
    bedrooms: 2,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Kitchen',
      'Dishwasher',
      'Air conditioning',
      'Elevator'
    ],
    host: {
      name: 'Sophie',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg'
    ],
    maxAdults: 4
  }
];
