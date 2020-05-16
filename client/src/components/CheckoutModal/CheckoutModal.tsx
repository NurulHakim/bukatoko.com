import * as React from 'react';
import * as numeral from 'numeral';
import * as Modal from 'react-modal';
import { ICartProduct } from '@typings/state/index';
import { ModalProps } from '@typings/modal';
// import Button from '@material-ui/core/Button';
import RaisedButton from 'material-ui/RaisedButton';
import '@styles/CheckoutModal.css';

const CheckoutModal: React.SFC<ModalProps> = ({ cart, isOpen, setActiveModal, makeOrder }): JSX.Element => (
  <Modal
    className="checkout-modal"
    isOpen={isOpen}
    onRequestClose={() => setActiveModal(null)}
  >
    <div className="order">
      <h1>Informasi Pembayaran</h1>
      <p>
        <i>Pastikan barang dan jumlah yang ada pesan sesuai.</i>
      </p>
      <table>
        <thead>
          <tr>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th>Jumlah</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart!.length && cart!.map((item: ICartProduct) => {
            return (
              <tr key={item.product.info.name} >
                <td>{item.product.info.name}</td>
                <td>Rp. {numeral(item.product.info.price).format('0,0')}</td>
                <td>{item.quantity}</td>
                <td>Rp. {numeral(item.product.info.price * item.quantity!).format('0,0')}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p className="total">
        <b>TOTAL : </b>
        <span>Rp. {numeral(cart!.length && cart!.reduce((acc, item) => acc += item.product.info.price * item.quantity!, 0)).format('0,0')}</span>
      </p>
      <div className="btns">
        <RaisedButton
          className="btn"
          onClick={() => setActiveModal(null)}>
          Batal
        </RaisedButton>
        <RaisedButton
          className="btn"
          onClick={makeOrder}>
          Konfirmasi
        </RaisedButton>
      </div>
    </div>
  </Modal>
);

export default CheckoutModal;
