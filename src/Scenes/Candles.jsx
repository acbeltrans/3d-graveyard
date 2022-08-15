import { Candle } from '../Models/Objects/Candle'

export const Candles = () => {
  return (
    <>
      <Candle position={[-1, 0, 3]} />
      <Candle position={[1, 0, 3]} />
      <Candle position={[0, 0, 4]} />
      <Candle position={[0, 0, 2]} />
      <Candle position={[0, 1, 3]} />
      <Candle position={[-0.8, 0, 2.3]} />
      <Candle position={[0.8, 0, 2.3]} />
      <Candle position={[0.8, 0, 3.8]} />
      <Candle position={[-0.8, 0, 3.8]} />

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
