
import styles from './ProductOptions.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductOptions = ({sizes, currentSize, setCurrentSize, colors, currentColor, handleAddToCart, setCurrentColor}) => {
  return <form>
  <OptionSize sizes={sizes} setCurrentSize={setCurrentSize} currentSize={currentSize} />
  <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
  <Button className={styles.button} onClick={handleAddToCart}>
    <span className="fa fa-shopping-cart" />
  </Button>
</form>
}

export default ProductOptions;