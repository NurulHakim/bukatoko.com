import * as React from 'react';
import * as Modal from 'react-modal';
import RaisedButton from 'material-ui/RaisedButton';
import { ModalProps } from '@typings/modal';
import '@styles/OrderSuccessModal.css';

const OrderSuccessModal: React.SFC<ModalProps> = ({ isOpen, setActiveModal }) => (
  <Modal
    className="order-success-modal"
    isOpen={isOpen}
    onRequestClose={() => setActiveModal(null)}
  >
    <div className="success">
      <h1>Berhasil!</h1>
      <img src="/img/success.gif" />
      <br/>
      <p>
        Terimakasih telah berbelanja di BukaToko.com :)
      </p>
      <RaisedButton
        onClick={() => setActiveModal(null)}
        className="btn"
        label="OK"
        primary={true}
      />
    </div>
  </Modal>
);

export default OrderSuccessModal;
