function Header() {
  return (
    <header className="w-full bg-brand-brown shadow-md shadow-brand-brown/10">
      <div className="relative flex items-center px-6 py-7 md:px-10 md:py-9">
        <div className="shrink-0">
          <p className="font-serif text-xl leading-none tracking-[0.18em] text-cream md:text-2xl">
            GRUPO
          </p>
          <p className="mt-1 font-serif text-xl leading-none tracking-[0.18em] text-cream md:text-2xl">
            LEGADO
          </p>
        </div>
        <h1 className="absolute left-1/2 -translate-x-1/2 font-serif text-xl font-semibold text-cream md:text-3xl">
          Registro de Proveedor
        </h1>
      </div>
    </header>
  )
}

export default Header
