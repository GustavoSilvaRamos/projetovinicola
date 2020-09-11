export function Hero() {
  return (
    <div className="relative w-full fundo">
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-black opacity-25" />
      <div className="flex flex-row items-center justify-between pt-20 mx-10 ">
        <div className="z-20">
          <p className="text-3xl text-white text-semibold">VINÍCOLA MILANI</p>
        </div>
        <div className="z-20 flex flex-row space-x-3 ">
          <p className="text-sm text-white cursor-pointer text-semibold hover:text-white">
            INICIO /
          </p>
          <p className="text-sm text-white cursor-pointer text-semibold hover:text-white">
            VINHOS /{' '}
          </p>
          <p className="text-sm text-white cursor-pointer text-semibold hover:text-white">
            NOSSAS HISTORIAS /
          </p>
          <p className="text-sm text-white cursor-pointer text-semibold hover:text-white">
            CONTATO
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center pt-32 pb-32">
        <h1 className="z-20 text-6xl text-white text-bold">Vinícola Milani</h1>
        <h1 className="z-20 text-xl text-white text-bold">
          O sabor da Serra Gaúcha
        </h1>
      </div>
    </div>
  )
}
