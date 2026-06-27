function Header() {
  return (
    <header className="bg-brand-brown rounded-2xl shadow-lg shadow-brand-brown/10">
      <div className="flex items-center gap-6 px-8 py-7 md:px-12 md:py-9">
        <div className="shrink-0 border-r border-brand-tan/40 pr-6 md:pr-8">
          <p className="font-serif text-xl leading-none tracking-[0.18em] text-cream md:text-2xl">
            GRUPO
          </p>
          <p className="mt-1 font-serif text-xl leading-none tracking-[0.18em] text-cream md:text-2xl">
            LEGADO
          </p>
        </div>
        <div className="min-w-0">
          <h1 className="font-serif text-2xl font-semibold text-cream md:text-3xl">
            Registro de Proveedor
          </h1>
          <p className="mt-1 text-sm italic text-cream/70 md:text-base">
            Complete la información requerida
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
