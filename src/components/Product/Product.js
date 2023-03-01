import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import {useState} from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  
  const getPrice = () =>{

    const result = props.sizes.find(({name}) => name === currentSize)
    return props.basePrice + result.additionalPrice;
  }
  const handleAddToCart = e => {
    e.preventDefault();
   console.log('Summary',
    {
    
    name :props.title,
    Color: currentColor, 
    Size:currentSize, 
    price:getPrice()
    });
    
}
  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{getPrice()}$</span>
        </header>
        <ProductOptions sizes = {props.sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} colors={props.colors} currentColor={currentColor}  handleAddToCart={handleAddToCart} setCurrentColor={setCurrentColor} />
      </div>
    </article>
  )
};


Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired
};

export default Product;