import * as React from 'react';
import * as Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { ModalProps } from '@typings/modal';
import '@styles/RegisterModal.css';

const RegisterModal = ({ isOpen, onRequestClose, setActiveModal }: ModalProps) => (
  <Modal
    className="register-modal"
    isOpen={isOpen}
    onRequestClose={onRequestClose}
  >
    <form className="form" action="/auth/register" method="POST">
      <h1>Daftar</h1>
      <TextField
        hintText="Masukan username"
        floatingLabelText="Username"
        name="username"
        autoFocus
      /><br />
      <TextField
        hintText="Masukan Password"
        floatingLabelText="Password"
        name="password"
        type="password"
      /><br />
      <TextField
        hintText="Masukan E-mail"
        floatingLabelText="E-mail"
        name="email"
      /><br />
      <TextField
        hintText="Alamat lengkap"
        floatingLabelText="Address"
        name="address"
      /><br />
      <TextField
        hintText="Nomor Handphone"
        floatingLabelText="Telephone Number"
        name="phone"
      /><br />
      <RaisedButton 
        className="btn" 
        label="Submit"
        primary={true} 
        type="submit"
      />
      <p>Sudah punya akun? <a onClick={() => setActiveModal('login')}>Login</a>.</p>
    </form>
  </Modal>
);

export default RegisterModal;
