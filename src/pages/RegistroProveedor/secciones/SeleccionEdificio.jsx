import SectionTitle from '../../../components/SectionTitle'
import { EDIFICIOS } from '../../../constants/edificios'

function SeleccionEdificio({ value, onChange }) {
  return (
    <div className="px-6 py-7 md:px-10 md:py-9">
      <SectionTitle>Edificio</SectionTitle>

      <p className="mt-7 text-center text-sm text-ink-soft md:text-base">
        Seleccione el edificio al que brindará servicios
      </p>

      <fieldset className="mt-5">
        <legend className="sr-only">Edificios disponibles</legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {EDIFICIOS.map((edificio) => {
            const isSelected = value === edificio.id
            return (
              <button
                key={edificio.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => onChange(edificio.id)}
                className={`group relative rounded-xl border px-4 py-5 text-center text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-card ${
                  isSelected
                    ? 'border-brand-gold bg-brand-gold/10 text-brand-brown shadow-md shadow-brand-gold/20'
                    : 'border-brand-tan/30 bg-white/40 text-brand-brown hover:border-brand-tan/60 hover:bg-white/70'
                }`}
              >
                <span className="block leading-tight">{edificio.nombre}</span>
                {isSelected && (
                  <span
                    aria-hidden="true"
                    className="absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold text-[10px] font-bold text-brand-brown"
                  >
                    ✓
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </fieldset>
    </div>
  )
}

export default SeleccionEdificio
