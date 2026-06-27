import SectionTitle from '../../../components/SectionTitle'
import Field from '../../../components/Field'
import Checkbox from '../../../components/Checkbox'

function Confirmacion({ value, onChange }) {
  const update = (field) => (val) => onChange({ ...value, [field]: val })

  return (
    <div className="px-6 py-7 md:px-10 md:py-9">
      <SectionTitle>Confirmación</SectionTitle>

      <div className="mt-7 flex flex-col gap-6">
        <Field
          label="Código de registro *"
          value={value.codigoRegistro}
          onChange={update('codigoRegistro')}
        />

        <Checkbox
          checked={value.avisoPrivacidad}
          onChange={update('avisoPrivacidad')}
        >
          Acepto el{' '}
          <span className="font-medium text-brand-tan underline underline-offset-2">
            aviso de privacidad
          </span>
          {' '}y autorizo el tratamiento de mis datos personales *
        </Checkbox>
      </div>
    </div>
  )
}

export default Confirmacion
