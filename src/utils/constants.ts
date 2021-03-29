import { Book } from "./types";

export const books: Array<Book> = [
  {
    id: 1,
    pathName: 'ivanov-interesting-book-1',
    imageLink: 'https://www.iphones.ru/wp-content/uploads/2018/03/booksheader1-1240x580.jpg',
    author: 'Ivanov Artem',
    name: 'Interesting book 1',
    publishingYear: '2021',
    annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    genre: 'fantasy',
    rating: [1],
    averageRating: 1,
    comments: [
      {
        id: 1,
        userName: 'Ivan',
        message: 'Интересная книга!',
        date: '24 марта, 2021'
      },
      {
        id: 2,
        userName: 'Max',
        message: 'Cool book!',
        date: '25 марта, 2021'
      },
      {
        id: 3,
        userName: 'Valery',
        message: 'Классно!',
        date: '26 марта, 2021'
      }
    ]
  },
  {
    id: 2,
    pathName: 'petrov-interesting-book-2',
    imageLink: 'https://www.mgpu.ru/wp-content/uploads/2018/01/books2.jpg',
    author: 'Petrov Maxim',
    name: 'Interesting book 2',
    publishingYear: '2012',
    annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    genre: 'drama',
    rating: [2],
    averageRating: 2,
    comments: [
      {
        id: 1,
        userName: 'Ivan',
        message: 'Понравилось!',
        date: '24 марта, 2021'
      },
      {
        id: 2,
        userName: 'Max',
        message: 'Cool book!',
        date: '25 марта, 2021'
      },
      {
        id: 3,
        userName: 'Valery',
        message: 'Классно!',
        date: '26 марта, 2021'
      }
    ]
  },
  {
    id: 3,
    pathName: 'petrov-interesting-book-3',
    imageLink: 'https://cdnimg.rg.ru/img/content/186/45/44/iStock-949118068_d_850.jpg',
    author: 'Petrov Maxim',
    name: 'Interesting book 3',
    publishingYear: '2003',
    annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    genre: 'comedy',
    rating: [3],
    averageRating: 3,
    comments: [
      {
        id: 1,
        userName: 'Ivan',
        message: 'Понравилось!',
        date: '24 марта, 2021'
      },
      {
        id: 2,
        userName: 'Max',
        message: 'Cool book!',
        date: '25 марта, 2021'
      },
      {
        id: 3,
        userName: 'Valery',
        message: 'Классно!',
        date: '26 марта, 2021'
      }
    ]
  },
  {
    id: 4,
    pathName: 'denisov-interesting-book-4',
    imageLink: 'https://r5.readrate.com/img/pictures/basic/752/752781/7527813/w585h345-crop-stretch-02d11873.jpg',
    author: 'Denisov Ivan',
    name: 'Interesting book 4',
    publishingYear: '2014',
    annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    genre: 'fantasy',
    rating: [4],
    averageRating: 4,
    comments: [
      {
        id: 1,
        userName: 'Ivan',
        message: 'Понравилось!',
        date: '24 марта, 2021'
      },
      {
        id: 2,
        userName: 'Max',
        message: 'Cool book!',
        date: '25 марта, 2021'
      },
      {
        id: 3,
        userName: 'Valery',
        message: 'Классно!',
        date: '26 марта, 2021'
      }
    ]
  },
  {
    id: 5,
    pathName: 'vetrov-interesting-book-4',
    imageLink: 'https://cdn.recyclemag.ru/main/4/47b7ae0fee74aa3e935ecafd69b089de.jpg',
    author: 'Vetrov Artem',
    name: 'Interesting book 4',
    publishingYear: '2011',
    annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    genre: 'comedy',
    rating: [5],
    averageRating: 5,
    comments: [
      {
        id: 1,
        userName: 'Ivan',
        message: 'Понравилось!',
        date: '24 марта, 2021'
      },
      {
        id: 2,
        userName: 'Max',
        message: 'Cool book!',
        date: '25 марта, 2021'
      },
      {
        id: 3,
        userName: 'Valery',
        message: 'Классно!',
        date: '26 марта, 2021'
      }
    ]
  },
  {
    id: 6,
    pathName: 'kuleshov-interesting-book-4',
    imageLink: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    author: 'Kuleshov Ignat',
    name: 'Interesting book 4',
    publishingYear: '2012',
    annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    genre: 'drama',
    rating: [1],
    averageRating: 1,
    comments: [
      {
        id: 1,
        userName: 'Ivan',
        message: 'Понравилось!',
        date: '24 марта, 2021'
      },
      {
        id: 2,
        userName: 'Max',
        message: 'Cool book!',
        date: '25 марта, 2021'
      },
      {
        id: 3,
        userName: 'Valery',
        message: 'Классно!',
        date: '26 марта, 2021'
      }
    ]
  },
  {
    id: 7,
    pathName: 'sokolov-interesting-book-5',
    imageLink: 'https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    author: 'Sokolov Alex',
    name: 'Interesting book 5',
    publishingYear: '2008',
    annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    genre: 'fantasy',
    rating: [2],
    averageRating: 2,
    comments: [
      {
        id: 1,
        userName: 'Ivan',
        message: 'Понравилось!',
        date: '24 марта, 2021'
      },
      {
        id: 2,
        userName: 'Max',
        message: 'Cool book!',
        date: '25 марта, 2021'
      },
      {
        id: 3,
        userName: 'Valery',
        message: 'Классно!',
        date: '26 марта, 2021'
      }
    ]
  },
  {
    id: 8,
    pathName: 'kuznetsov-interesting-book-6',
    imageLink: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    author: 'Kuznetsov Vitaly',
    name: 'Interesting book 6',
    publishingYear: '2015',
    annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    genre: 'comedy',
    rating: [3],
    averageRating: 3,
    comments: [
      {
        id: 1,
        userName: 'Ivan',
        message: 'Понравилось!',
        date: '24 марта, 2021'
      },
      {
        id: 2,
        userName: 'Max',
        message: 'Cool book!',
        date: '25 марта, 2021'
      },
      {
        id: 3,
        userName: 'Valery',
        message: 'Классно!',
        date: '26 марта, 2021'
      }
    ]
  },
  {
    id: 9,
    pathName: 'smirnov-interesting-book-7',
    imageLink: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9va3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    author: 'Smirnov Ivan',
    name: 'Interesting book 7',
    publishingYear: '2020',
    annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    genre: 'drama',
    rating: [4],
    averageRating: 4,
    comments: [
      {
        id: 1,
        userName: 'Ivan',
        message: 'Понравилось!',
        date: '24 марта, 2021'
      },
      {
        id: 2,
        userName: 'Max',
        message: 'Cool book!',
        date: '25 марта, 2021'
      },
      {
        id: 3,
        userName: 'Valery',
        message: 'Классно!',
        date: '26 марта, 2021'
      }
    ]
  },
]
