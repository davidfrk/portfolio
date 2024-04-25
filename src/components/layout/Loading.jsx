import loading from '/images/loading.svg'

function Loading () {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img className="w-[50px]" src={loading} alt="Loading" />
    </div>
  )
}

export default Loading;