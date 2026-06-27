import SectionTitle from '../../../components/SectionTitle'
import Field from '../../../components/Field'
import SelectField from '../../../components/SelectField'
import { REGIMENES_FISCALES } from '../../../constants/regimenesFiscales'

const onlyDigits = (str) => str.replace(/\D/g, '')
const alphaNumUpper = (str) => str.replace(/[^A-Za-z0-9]/g, '').toUpperCase()

function InformacionFiscal({ value, onChange }) {
  const update = (field) => (val) => onChange({ ...value, [field]: val })

  return (
    <div className="px-6 py-7 md:px-10 md:py-9">
      <SectionTitle>Información Fiscal</SectionTitle>

      <div className="mt-7 flex flex-col gap-5">
        <Field
          label="Razón social"
          value={value.razonSocial}
          onChange={update('razonSocial')}
          autoComplete="organization"
        />

        <Field
          label="RFC"
          maxLength={13}
          value={value.rfc}
          onChange={(val) => update('rfc')(alphaNumUpper(val))}
        />

        <Field
          label="Domicilio Fiscal"
          value={value.domicilio}
          onChange={update('domicilio')}
          autoComplete="street-address"
        />

        <Field
          label="Ciudad"
          value={value.ciudad}
          onChange={update('ciudad')}
          autoComplete="address-level2"
        />

        <Field
          label="Estado"
          value={value.estado}
          onChange={update('estado')}
          autoComplete="address-level1"
        />

        <Field
          label="Código postal"
          inputMode="numeric"
          maxLength={5}
          value={value.codigoPostal}
          onChange={(val) => update('codigoPostal')(onlyDigits(val))}
          autoComplete="postal-code"
        />

        <Field
          label="País"
          value={value.pais}
          onChange={update('pais')}
          autoComplete="country-name"
        />

        <Field
          label="CURP"
          maxLength={18}
          value={value.curp}
          onChange={(val) => update('curp')(alphaNumUpper(val))}
        />

        <SelectField
          label="Régimen"
          value={value.regimen}
          onChange={update('regimen')}
          options={REGIMENES_FISCALES}
          placeholder="Seleccione un régimen fiscal"
        />
      </div>
    </div>
  )
}

export default InformacionFiscal
