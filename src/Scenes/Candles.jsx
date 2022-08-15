{
  /* Candles */
}
import { Candle } from '../Models/Objects/Candle'

export const Candles = () => {
  return (
    <>
      <Candle position={[-1, 0, 3]} /> {/* east candle */}
      <Candle position={[1, 0, 3]} /> {/* west candle */}
      <Candle position={[0, 0, 4]} /> {/* north candle */}
      <Candle position={[0, 0, 2]} /> {/* south candle */}
      <Candle position={[0, 1, 3]} /> {/* center candle */}
      <Candle position={[-0.8, 0, 2.3]} /> {/* southeast candle */}
      <Candle position={[0.8, 0, 2.3]} /> {/* southwest candle */}
      <Candle position={[0.8, 0, 3.8]} /> {/* northwest candle */}
      <Candle position={[-0.8, 0, 3.8]} /> {/* northeast candle */}
      <pointLight position={[-1, 0, 3]} intensity={0.08} />
      <pointLight position={[1, 0, 3]} intensity={0.08} />
      <pointLight position={[0, 0, 4]} intensity={0.08} />
      <pointLight position={[0, 0, 2]} intensity={0.08} />
      <pointLight position={[0, 1, 3]} intensity={0.1} />
      <pointLight position={[-0.8, 0, 2.3]} intensity={0.08} />
      <pointLight position={[0.8, 0, 2.3]} intensity={0.08} />
      <pointLight position={[0.8, 0, 3.8]} intensity={0.08} />
      <pointLight position={[-0.8, 0, 3.8]} intensity={0.08} />
    </>
  )
}
