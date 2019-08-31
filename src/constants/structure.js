export default [
  {
    name: 'sports',
    endpoint: 'sports',
    attributes: [
      {
        name: 'id',
        type: 'text',
        placeholder: 'Sport name',
        edit: false,
        create: false
      },
      {
        name: 'name',
        type: 'text',
        placeholder: 'Sport name',
        edit: true,
        create: true
      },
      {
        name: 'location',
        type: 'text',
        placeholder: 'sport location',
        edit: true,
        create: true
      }
    ]
  },
  {
    name: 'matches',
    endpoint: 'matches',
    attributes: [
      {
        name: 'name',
        type: 'text',
        placeholder: 'Match name'
      }
    ]
  }
];
