import styles from "./Container.module.css"

function Container ({ customClass, children }) {
  const customClasses = customClass ? customClass.split(' ') : [];
  const containerClasses = [styles.container, ...customClasses.map(customClass => styles[customClass])].join(' ');

  return (
    <div className={containerClasses}>
      {children}
    </div>
  )
}

export default Container;