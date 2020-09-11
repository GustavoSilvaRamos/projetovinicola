export function Invite() {
  return (
    <div className="bg-white">
      <div className="container flex flex-col items-center pt-10 pb-10 mx-auto">
        <h2 className="text-5xl tracking-tighter text-danger-800">
          Conheça-nos e faça uma degustação
        </h2>
        <div className="flex flex-row justify-center pt-5">
          <div>
            <img className="w-10/12 h-auto" src="desc1.png" alt="" />
          </div>
          <div className="flex flex-col w-5/12 space-y-5 leading-relaxed">
            <p className="text-lg font-light text-gray-800 ">
              Aqui é onde o seu texto começa. Basta clicar e começar a escrever.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta.
            </p>
            <p className="text-lg font-light text-gray-800 ">
              Ea commodi consequatur quis autem vel eum iure reprehenderit qui
              in ea voluptate velit esse quam nihil molestiae consequatur vel
              illum qui dolorem eum fugiat quo voluptas nulla.
            </p>
            <p className="text-lg font-light text-gray-800 ">
              Quia non numquam eius modi tempora incidunt ut labore et dolore
              magnam aliquam quaerat voluptatem ut enim ad minima veniam quis
              nostrum exercitationem ullam corporis
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
