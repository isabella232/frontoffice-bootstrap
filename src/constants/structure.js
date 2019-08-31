export default [
  {
    name: 'products',
    endpoint: 'products',
    attributes: [
      {
        name: 'id',
        type: 'text',
        edit: false,
        create: false
      },
      {
        name: 'name',
        type: 'text',
        placeholder: 'Product name',
        edit: true,
        create: true
      },
      {
        name: 'description',
        type: 'text',
        placeholder: 'Product description',
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
