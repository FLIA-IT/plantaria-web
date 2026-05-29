import plantLeft from '/plant-left.gif'

interface PlantProps {
  src: string
  className: string
  flip?: boolean
  style?: React.CSSProperties
}

function Plant({ src, className, flip, style }: PlantProps) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className={`pointer-events-none select-none ${className}`}
      style={{
        ...(flip ? { transform: 'scaleX(-1)' } : null),
        ...style,
      }}
    />
  )
}

export function PlantDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <Plant
        src={plantLeft}
        className="absolute left-0 top-[12vh] w-[18vw] min-w-[180px] max-w-[320px] opacity-80"
      />
      <Plant
        src={plantLeft}
        flip
        className="absolute right-0 bottom-[14vh] w-[20vw] min-w-[200px] max-w-[360px] opacity-75"
      />
      <Plant
        src={plantLeft}
        className="absolute left-[-4vw] bottom-[2vh] w-[14vw] min-w-[140px] max-w-[240px] opacity-60"
        style={{ transform: 'rotate(-12deg)' }}
      />
      <Plant
        src={plantLeft}
        flip
        className="absolute right-[-3vw] top-[55vh] w-[12vw] min-w-[120px] max-w-[220px] opacity-55"
        style={{ transform: 'scaleX(-1) rotate(10deg)' }}
      />
    </div>
  )
}
