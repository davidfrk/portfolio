import styles from './OndaedesAnimation.module.css'

function OndaedesAnimation({ container }) {
  return (
    <div className={styles.main}>
      <div className={styles.pole}>
        <div className={styles.flag}>
          <h2>Belo Horizonte</h2>
          <p><span className='text-rose-600'>27ºC</span> | <span className='text-blue-400'>25% Chuva de 20mm</span></p>
          <p>1100 Casos confirmados</p>
        </div>
      </div>
    </div>
  )
}

export default OndaedesAnimation
