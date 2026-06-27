import SectionTitle from '../../../components/SectionTitle'
import Field from '../../../components/Field'
import SelectField from '../../../components/SelectField'
import FileField from '../../../components/FileField'
import { BANCOS } from '../../../constants/bancos'
import { MONEDAS } from '../../../constants/monedas'

const onlyDigits = (str) => str.replace(/\D/g, '')

function TransferenciaElectronica({ value, onChange }) {
  const update = (field) => (val) => onChange({ ...value, [field]: val })

  return (
    <div className="px-6 py-7 md:px-10 md:py-9">
      <SectionTitle>Información para Transferencia Electrónica</SectionTitle>

      <div className="mt-7 flex flex-col gap-5">
        <Field
          label="Nombre de cuenta"
          value={value.nombreCuenta}
          onChange={update('nombreCuenta')}
        />

        <SelectField
          label="Banco"
          value={value.banco}
          onChange={update('banco')}
          options={BANCOS}
          placeholder="Seleccione un banco"
        />

        <Field
          label="Número de cuenta"
          placeholder="10 a 12 dígitos numéricos"
          inputMode="numeric"
          maxLength={12}
          value={value.numeroCuenta}
          onChange={(val) => update('numeroCuenta')(onlyDigits(val))}
        />

        <Field
          label="CLABE"
          hint="18 dígitos"
          placeholder="18 dígitos numéricos"
          inputMode="numeric"
          maxLength={18}
          value={value.clabe}
          onChange={(val) => update('clabe')(onlyDigits(val))}
        />

        <SelectField
          label="Moneda"
          value={value.moneda}
          onChange={update('moneda')}
          options={MONEDAS}
          placeholder="Seleccione tipo de moneda"
        />

        <Field
          label="Correo para notificaciones de pago"
          type="email"
          value={value.correoPago}
          onChange={update('correoPago')}
          autoComplete="email"
        />

        <FileField
          label="Constancia de Situación Fiscal"
          value={value.constanciaSituacionFiscal}
          onChange={update('constanciaSituacionFiscal')}
        />

        <FileField
          label="Carátula de Estado de Cuenta PDF"
          value={value.caratulaEstadoCuenta}
          onChange={update('caratulaEstadoCuenta')}
        />

        <FileField
          label="Opinión de Cumplimiento de Obligaciones Fiscales PDF"
          value={value.opinionCumplimiento}
          onChange={update('opinionCumplimiento')}
        />
      </div>
    </div>
  )
}

export default TransferenciaElectronica
