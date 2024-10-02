

function App() {
  

  return (
    <div className="min-h-screen flex flex-col" >
      <header className="p-3 flex justify-center items-center flex-col bg-indigo-600 text-slate-100">
          <h1 className="text-2xl">Aula Tailwind</h1>
          <p>Exemplo de Página</p>
      </header>

      <main className="grow">
        <h2 className="text-2xl text-center text-bold m-4">Ficha dos Clientes</h2>
        <div className="card p-6 flex justify-evenly">
            <div className="w-64 p-4 shadow-2xl text-center rounded-xl border border-indigo-950">
              <h3 className="text-2xl m-2">Título</h3>
              <img className="w-2/3 block m-auto" src="vite.svg" alt="logo" />
              <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, placeat voluptatem. Quo quidem cumque dolorem ducimus eos libero possimus tempore facere vitae qui sapiente vel, explicabo iste deleniti quos natus.</p>
            </div>

            <div className="w-64 p-4 shadow-2xl text-center rounded-xl border border-indigo-950">
              <h3 className="text-2xl m-2">Título</h3>
              <img className="w-2/3 block m-auto" src="vite.svg" alt="logo" />
              <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, placeat voluptatem. Quo quidem cumque dolorem ducimus eos libero possimus tempore facere vitae qui sapiente vel, explicabo iste deleniti quos natus.</p>
            </div>

            <div className="w-64 p-4 shadow-2xl text-center rounded-xl border border-indigo-950">
              <h3 className="text-2xl m-2">Título</h3>
              <img className="w-2/3 block m-auto" src="vite.svg" alt="logo" />
              <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, placeat voluptatem. Quo quidem cumque dolorem ducimus eos libero possimus tempore facere vitae qui sapiente vel, explicabo iste deleniti quos natus.</p>
            </div>

        </div>
      </main>

      <footer className="p-3 flex justify-center items-center bg-black text-white">
        <p>Av. Paulista, 1060 - Bela Vista - SP</p>
      </footer>

    </div>
  )
}

export default App