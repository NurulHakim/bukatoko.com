import * as React from 'react';
import { Link } from 'react-router-dom';
import * as numeral from 'numeral';
import RaisedButton from 'material-ui/RaisedButton';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';
import { ICatalogProduct } from '@typings/state/index'
import '@styles/Product.css';

interface Props {
  key: string;
  item: ICatalogProduct;
}

const Product = ({ item: {info, _id} }: Props) => {
  const {
    photo,
    name,
    displaySize,
    displayResolution,
    cpu,
    internalMemory,
    ram,
    camera,
    price
  } = info;

  return (
    <div className="product">
      <div className="content">
        <img src={photo} />
        <div className="content-left">
          <h3>{name}</h3>
          <div className="content-info">
            <div><b>CPU: </b><span>{cpu}</span></div>
            <div><b>Memory Internal: </b><span>{internalMemory}</span></div>
            <div><b>RAM: </b><span>{ram}</span></div>
            <div><b>Ukuran Layar: </b><span>{displaySize}</span></div>
            <div><b>Resolusi: </b><span>{displayResolution}</span></div>
            <div><b>Kamera: </b><span>{camera.length < 50 ? camera : camera.slice(0, 50) + '...'}</span></div>
          </div>
        </div>
        <div className="content-right">
          <div className="content-info">
            <p><b>Harga:</b></p>
            <h2>Rp.{numeral(price).format('0,0')}</h2>
          </div>
          <RaisedButton
            containerElement={<Link to={`/product/${_id}`} />}
            className="btn"
            label="Lihat"
            labelPosition="before"
            primary={true}
            icon={<NavigateNext />}
          />
        </div>
      </div>
    </div>
  )
};

export default Product;
