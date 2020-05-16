import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as numeral from 'numeral';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import { IUser, ICatalogProduct } from '@typings/state/index';
import '@styles/ProductDetails.css';

interface Props {
  loggedUser: IUser;
  product: ICatalogProduct;
}

interface State {
  postData: {
    user: string;
    product: string;
    quantity: number;
  };
  snackbarOpen: boolean;
}

class ProductDetails extends React.Component<Props, State> {
  state = {
    postData: {
      user: this.props.loggedUser._id,
      product: this.props.product._id,
      quantity: 1
    },
    snackbarOpen: false
  }

  onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    this.setState((prevState: State) => ({
      postData: { ...prevState.postData, quantity: parseInt(value) }
    }));
  }

  addToCart = async () => {
    await axios.post('/api/cart', this.state.postData);

    this.setState({ snackbarOpen: true });
  }

  render() {
    const {
      loggedUser,
      product: { info }
    } = this.props;

    return (
      <div className="product-details-container">
        <h1>{info.name}</h1>
        <div className="product-details">
          <div className="product-image">
            <img src={info.photo} />
          </div>
          <div className="product-info">
            <table>
              <tr>
                <th>Model</th>
                <td>{info.name}</td>
              </tr>
              <tr>
                <th>Dimensions</th>
                <td>{info.dimensions}</td>
              </tr>
              <tr>
                <th>Berat</th>
                <td>{info.weight}</td>
              </tr>
              <tr>
                <th>Display</th>
                <td>{info.displayType}</td>
              </tr>
              <tr>
                <th>Ukuran</th>
                <td>{info.displaySize}</td>
              </tr>
              <tr>
                <th>Resolusi</th>
                <td>{info.displayResolution}</td>
              </tr>
              <tr>
                <th>OS</th>
                <td>{info.os}</td>
              </tr>
              <tr>
                <th>CPU</th>
                <td>{info.cpu}</td>
              </tr>
              <tr>
                <th>Memori Internal</th>
                <td>{info.internalMemory}</td>
              </tr>
              <tr>
                <th>RAM</th>
                <td>{info.ram}</td>
              </tr>
              <tr>
                <th>Kamera</th>
                <td>{info.camera}</td>
              </tr>
              <tr>
                <th>Batery</th>
                <td>{info.batery}</td>
              </tr>
              <tr>
                <th>Warna</th>
                <td>{info.color}</td>
              </tr>
            </table>
            <Snackbar
              open={this.state.snackbarOpen}
              message={loggedUser ? 'Item titambahkan ke keranjang' : 'Silahkan Login terlebih dahulu'}
              autoHideDuration={4000}
              bodyStyle={loggedUser ? { 'background': '#64DD17' } : { 'background': '#FF0000' }}
            />
          </div>
        </div>
        <div className="product-handle">
          <div className="left">
            <RaisedButton
              containerElement={<Link to="/" />}
              className="btn"
              label="Home"
              labelPosition="after"
              secondary={true}
              icon={<KeyboardArrowLeft />}
            />
          </div>
          <div className="right">
            <div className="price">
              <span className="price-text">Harga: </span>
              <span className="price-num">Rp.{numeral(info.price).format('0,0')}</span>
            </div>
            <div className="quantity">
              <span className="price-text">Jumlah: </span>
              <span><input type="number" value={this.state.postData.quantity} min="1" max="3" onChange={this.onQuantityChange} /></span>
            </div>
            <div className="btn">
              <RaisedButton
                onClick={this.addToCart}
                label="Tambah"
                labelPosition="before"
                primary={true}
                icon={<AddShoppingCart />}
              />
            </div>
           </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
