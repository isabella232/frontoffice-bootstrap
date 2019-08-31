import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from './styles.module.scss';

function CreationLayout({ modelData, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className="row full-width space-between">
        <h1 className="title m-bottom-1">{modelData.name} Creation</h1>
        <button type="button" className="m-right-1">
          Borrar
        </button>
      </div>
      {modelData.attributes &&
        modelData.attributes.map(attribute => (
          <Field
            key={attribute.name}
            className="input"
            component="input"
            placeholder={attribute.name}
            {...attribute}
          />
        ))}
      <div className="full-width row end">
        <button type="button" className="m-right-1 m-top-1">
          Cancelar
        </button>
        <button type="submit" className="m-right-1 m-top-1">
          Guardar
        </button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'creation'
})(CreationLayout);
