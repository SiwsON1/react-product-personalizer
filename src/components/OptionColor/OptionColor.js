import styles from './OptionColor.module.scss';
import clsx from 'clsx';


const OptionColor = ({colors, currentColor,setCurrentColor}) => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }
  return  <div className={styles.colors}>
  <h3 className={styles.optionLabel}>Colors</h3>
  <ul className={styles.choices}>
    {colors.map(item =>
      <li key={item}>
        <button type="button" className={clsx(prepareColorClassName(item), item === currentColor && styles.active)} onClick={() => setCurrentColor(item)} />  
      </li> 
    )}
  </ul>
</div>
}

export default OptionColor;