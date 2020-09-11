export function Desc() {
  return (
    <div className="bg-gray-100">
      <div className="container w-full pt-5 pb-10 mx-auto ">
        <div className="flex flex-col items-center mt-10 text-center">
          <h2 className="text-5xl tracking-tighter text-danger-800 ">
            Vinhos para todos os gostos
          </h2>
          <p className="w-8/12 pt-5 text-lg font-light text-gray-700">
            Aqui é onde o seu texto começa. Basta clicar e começar a escrever.
            Voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
            neque porro quisquam est qui dolorem
          </p>
        </div>
        <div className="grid justify-center grid-flow-col mt-10 space-x-10 grid-row-3">
          <div>
            <img className="w-64 h-64" src="itemdesc1.png" alt="" />
            <p className="mt-8 font-semibold text-gray-800">Vinhos Tintos</p>
            <p className="w-64 mt-2 text-sm leading-relaxed text-gray-700">
              Consequuntur magni dolores eos qui ratione voluptatem.
            </p>
          </div>
          <div>
            <img className="w-64 h-64" src="itemdesc2.png" alt="" />
            <p className="mt-8 font-semibold text-gray-800 ">
              Vinhos exclusivos
            </p>
            <p className="w-64 mt-2 text-sm leading-relaxed text-gray-700">
              Adipisci velit sed quia non numquam eius modi tempora.
            </p>
          </div>
          <div>
            <img className="w-64 h-64" src="itemdesc3.png" alt="" />
            <p className="mt-8 font-semibold text-gray-800 ">Vinhos Brancos</p>
            <p className="w-64 mt-2 text-sm leading-relaxed text-gray-700">
              Ut aliquid ex ea commodi consequatur quis autem vel.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
