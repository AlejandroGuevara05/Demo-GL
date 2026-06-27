import SectionTitle from '../../../components/SectionTitle'
import Field from '../../../components/Field'

const onlyDigits = (str) => str.replace(/\D/g, '')

function InformacionContacto({ value, onChange }) {
  const update = (field) => (val) => onChange({ ...value, [field]: val })

  return (
    <div className="px-6 py-7 md:px-10 md:py-9">
      <SectionTitle>Información de contacto</SectionTitle>

      <div className="mt-7 flex flex-col gap-5">
        <Field
          label="Nombre comercial"
          value={value.nombreComercial}
          onChange={update('nombreComercial')}
          autoComplete="organization"
        />

        <Field
          label="Contacto de venta"
          placeholder="Nombre"
          value={value.contactoVenta}
          onChange={update('contactoVenta')}
          autoComplete="name"
        />

        <Field
          label="Puesto contacto"
          value={value.puestoContacto}
          onChange={update('puestoContacto')}
          autoComplete="organization-title"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field
            label="Teléfono"
            hint="10 dígitos"
            placeholder="10 dígitos numéricos"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            value={value.telefono}
            onChange={(val) => update('telefono')(onlyDigits(val))}
            autoComplete="tel"
          />
          <Field
            label="Celular"
            hint="10 dígitos"
            placeholder="10 dígitos numéricos"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            value={value.celular}
            onChange={(val) => update('celular')(onlyDigits(val))}
            autoComplete="tel"
          />
        </div>

        <Field
          label="Correo"
          type="email"
          value={value.correo}
          onChange={update('correo')}
          autoComplete="email"
        />
      </div>
    </div>
  )
}

export default InformacionContacto
