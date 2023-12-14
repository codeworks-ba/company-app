import {
  AuthUser,
  CompanyDto,
  MyBusinessItems,
  NewsDto,
  PaginatedCompanyDto,
  SearchWithFilters
} from '../services/types';

export const newsMainText = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
  }
];

export const secondaryNews = [
  {
    date: '26.11.2023',
    author: 'John Doe',
    text: 'gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus'
  },
  {
    date: '25.11.2023',
    author: 'Johnny Doe',
    text: 'faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi'
  },
  {
    date: '21.11.2023',
    author: 'Jenny Doe',
    text: 'eget est lorem ipsum dolor sit amet consectetur adipiscing elit'
  },
  {
    date: '19.11.2023',
    author: 'John Q. Public',
    text: 'aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl'
  },
  {
    date: '05.11.2023',
    author: 'John Smith',
    text: 'eget est lorem ipsum dolor sit amet consectetur adipiscing elit'
  }
];

export const companies = [
  {
    header: 'Naziv biznisa',
    subtitle: 'Kategorija'
  },
  {
    header: 'Naziv biznisa',
    subtitle: 'Kategorija'
  },
  {
    header: 'Naziv biznisa',
    subtitle: 'Kategorija'
  },
  {
    header: 'Naziv biznisa',
    subtitle: 'Kategorija'
  },

  {
    header: 'Naziv biznisa',
    subtitle: 'Kategorija'
  },
  {
    header: 'Naziv biznisa',
    subtitle: 'Kategorija'
  },
  {
    header: 'Naziv biznisa',
    subtitle: 'Kategorija'
  },
  {
    header: 'Naziv biznisa',
    subtitle: 'Kategorija'
  },
  {
    header: 'Naziv biznisa',
    subtitle: 'Kategorija'
  },
  {
    header: 'Naziv biznisa',
    subtitle: 'Kategorija'
  },
  {
    header: 'Naziv biznisa',
    subtitle: 'Kategorija'
  },
  {
    header: 'Naziv biznisa',
    subtitle: 'Kategorija'
  }
];

export const services = [
  {
    text: 'Naziv usluge'
  },
  {
    text: 'Naziv usluge'
  },
  {
    text: 'Naziv usluge'
  },
  {
    text: 'Naziv usluge'
  },
  {
    text: 'Naziv usluge'
  }
];

export const businesses = [
  {
    text: 'Naziv biznisa'
  },
  {
    text: 'Naziv biznisa'
  },
  {
    text: 'Naziv biznisa'
  },
  {
    text: 'Naziv biznisa'
  }
];

export const myBusinesses: MyBusinessItems[] = [
  {
    key: 'biznis1',
    value: 'Biznis 1'
  },
  {
    key: 'biznis2',
    value: 'Biznis 2'
  },
  {
    key: 'biznis3',
    value: 'Biznis 3'
  },
  {
    key: 'biznis4',
    value: 'Biznis 4'
  },
  {
    key: 'biznis5',
    value: 'Biznis 5'
  }
];

export const templateBusiness: CompanyDto = {
  _id: 'null',
  name: 'Naziv biznisa',
  category: 'Kategorija',
  tags: ['TAG', 'TAG', 'TAG', 'TAG'],
  zip: '75000',
  about:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
  address: 'Simple Address 5; ZIP Code, City',
  country: 'Naziv drzave',
  city: 'Naziv grada',
  phone: '+387 33 111 111',
  email: 'name@company.com',
  web: 'www.mywebsite.com',
  program: 'EU4BBusiness',
  otherSiteLink: 'www.google.com',
  monWorkTime: '09:00 - 17:00',
  tueWorkTime: '09:00 - 17:00',
  wedWorkTime: '09:00 - 17:00',
  thuWorkTime: '09:00 - 17:00',
  friWorkTime: '09:00 - 17:00',
  year: 2023,
  userId: 'null'
};

export const templateBusinessArray: PaginatedCompanyDto = {
  count: 1,
  data: [
    {
      _id: 'null',
      name: 'Naziv biznisa',
      category: 'Kategorija',
      tags: ['TAG', 'TAG', 'TAG', 'TAG'],
      zip: '75000',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
      address: 'Simple Address 5; ZIP Code, City',
      country: 'Naziv drzave',
      city: 'Naziv grada',
      phone: '+387 33 111 111',
      email: 'name@company.com',
      web: 'www.mywebsite.com',
      program: 'EU4BBusiness',
      otherSiteLink: 'www.google.com',
      monWorkTime: '09:00 - 17:00',
      tueWorkTime: '09:00 - 17:00',
      wedWorkTime: '09:00 - 17:00',
      thuWorkTime: '09:00 - 17:00',
      friWorkTime: '09:00 - 17:00',
      year: 2023,
      userId: 'null'
    }
  ]
};

export const templateFilterData: SearchWithFilters = {
  input: '',
  category: '',
  city: '',
  service: '',
  tag: '',
  program: ''
};

export const tempateUser: AuthUser = {
  firstName: 'Ime',
  lastName: 'Prezime',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
  address: 'Simple Address 5',
  phone: '+387 33 111 111',
  email: 'name@company.com',
  city: 'Naziv grada',
  _id: 'null',
  createdAccountTimestamp: 'null',
  role: 'null',
  dateOfBirth: 'null',
  occupation: 'Zanimanje',
  shouldHideAddress: false,
  shouldHideEmail: false,
  shouldHidePhone: false
};

export const tempateNews: NewsDto[] = [
  {
    _id: 'klj',
    title: 'Lorem ipsum dolor sit amet',
    text: 'Test',
    category: 'Kategorija',
    userId: 'blabla',
    createdAt: '2023-12-10T09:42:21.430Z',
    imageUrl: 'null'
  }
];

export const templateStory: NewsDto = {
  _id: 'klj',
  title: 'Lorem ipsum dolor sit amet',
  text: 'Test',
  category: 'Kategorija',
  userId: 'blabla',
  createdAt: '2023-12-10T09:42:21.430Z',
  imageUrl: 'null'
};
