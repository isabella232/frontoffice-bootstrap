import InputLabel from '~components/InputLabel';

export default [
  {
    name: 'products',
    endpoint: 'products',
    attributes: [
      {
        name: 'id',
        type: 'text',
        edit: false,
        create: false,
        columnProportion: 0
      },
      {
        name: 'name',
        type: 'text',
        placeholder: 'Product name',
        edit: true,
        create: true,
        columnProportion: 1,
        component: InputLabel,
        componentAttributes: {
          label: 'name',
          name: 'name',
          inputId: 'name',
          dataFor: 'name',
          inputType: 'text'
        }
      },
      {
        name: 'description',
        type: 'text',
        placeholder: 'Product description',
        edit: true,
        create: true,
        columnProportion: 3,
        component: InputLabel,
        componentAttributes: {
          label: 'description',
          name: 'description',
          inputId: 'description',
          dataFor: 'description',
          inputType: 'text'
        }
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
        component: InputLabel,
        componentAttributes: {
          label: 'name',
          name: 'name',
          inputId: 'name',
          dataFor: 'name',
          inputType: 'text'
        },
        columnProportion: 1
      }
    ]
  }
];
