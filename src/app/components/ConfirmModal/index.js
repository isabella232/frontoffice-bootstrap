import React from 'react';
import Modal from 'react-responsive-modal';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

import { actionCreators as modalActions } from '~redux/modal/actions';

import Routes from '~constants/routes';

import styles from './styles.module.scss';

function ConfirmModal({ open, toggleCancelModal, callBack }) {
  return (
    <Modal open={open} onClose={toggleCancelModal} center classNames={{ modal: styles.modalWrapper, closeIcon: "modal-close" }}>
      <div className={`${styles.modalContent} column center`}>
        <h2 className="subtitle m-bottom-6">¿Estás seguro que querés cancelar esta acción?</h2>
        <div className="row center">
          <button type="button" onClick={callBack} className="button-primary m-right-2">
            Confirmar
          </button>
          <button type="button" onClick={toggleCancelModal} className="button-secondary">
            cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleCancelModal: () => dispatch(modalActions.toggleCancelModal()),
  callBack: () => {
    dispatch(push(Routes.HOME));
    dispatch(modalActions.toggleCancelModal());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(ConfirmModal);
