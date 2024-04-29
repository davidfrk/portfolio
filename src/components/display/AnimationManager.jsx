function AnimationManager({ Animation: Animation, container }) {
  return (
    <div className="relative">
      {Animation && <Animation container={container} />}
    </div>
  )
}


export default AnimationManager
