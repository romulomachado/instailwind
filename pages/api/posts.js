export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      id: 1,
      username: 'djthegolden',
      location: 'Austin, TX',
      profileImageUrl:
        'https://images.unsplash.com/photo-1565386135310-41fdfde17ad5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
      imageUrl:
        'https://images.unsplash.com/photo-1560145836-d22431066353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      caption: 'Dad and I are enjoying our Saturday',
    },
    {
      id: 2,
      username: 'googlethegolden',
      profileImageUrl:
        'https://images.unsplash.com/photo-1559604138-6ee75709612f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
      imageUrl:
        'https://images.unsplash.com/photo-1559604138-6ee75709612f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=758&q=80',
      caption:
        'Meu 46° dias de quarentena ,ainda estou feliz e vim latir para vocês humanos usarem a mascara mesmo se estiverem sozinhos em um ambiente no trabalho ou precisar caminhar na rua ou em uma praça meditando 😷 porque se alguem espirrar 🤧 o virus fica no ar flutuando por 3 horas , o vento pode levar ele para passear na sua varanda , quintal e se voce passar por esses lugares vai respirar o virus e ficar dodoi . 🦠 O certo mesmo é #ficaremcasa',
    },
    {
      id: 3,
      username: 'thegoldenzara',
      profileImageUrl:
        'https://images.unsplash.com/photo-1526520112421-5054395689a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
      location: 'Brasília, DF',
      imageUrl:
        'https://images.unsplash.com/photo-1526520112421-5054395689a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
  ]);
};
