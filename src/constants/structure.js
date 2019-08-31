import InputLabel from '~components/InputLabel';

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
        edit: true,
        create: true,
        component: InputLabel,
        componentAttributes: {
          label: 'name',
          name: 'name',
          inputId: 'name',
          dataFor: 'name',
          inputType: "text"
        }
      },
      {
        name: 'name',
        edit: true,
        create: true,
        component: InputLabel,
        componentAttributes: {
          label: 'name',
          name: 'name',
          inputId: 'name',
          dataFor: 'name',
          inputType: "text"
        }
      },
      {
        name: 'name',
        edit: true,
        create: true,
        component: InputLabel,
        componentAttributes: {
          label: 'name',
          name: 'name',
          inputId: 'name',
          dataFor: 'name',
          inputType: "text"
        }
      },
      {
        name: 'name',
        edit: true,
        create: true,
        component: InputLabel,
        componentAttributes: {
          label: 'name',
          name: 'name',
          inputId: 'name',
          dataFor: 'name',
          inputType: "text"
        }
      },
      {
        name: 'location',
        edit: true,
        create: true,
        component: InputLabel,
        componentAttributes: {
          label: 'location',
          name: 'location',
          inputId: 'location',
          dataFor: 'location',
          inputType: "text"
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
        placeholder: 'Match name'
      }
    ]
  }
];
