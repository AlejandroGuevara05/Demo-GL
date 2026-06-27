import { useState } from 'react'
import Header from '../../components/Header'
import Card from '../../components/Card'
import WizardNav from '../../components/WizardNav'
import ProgressIndicator from '../../components/ProgressIndicator'
import SeleccionEdificio from './secciones/SeleccionEdificio'
import InformacionContacto from './secciones/InformacionContacto'
import InformacionFiscal from './secciones/InformacionFiscal'
import TransferenciaElectronica from './secciones/TransferenciaElectronica'
import Confirmacion from './secciones/Confirmacion'

const TOTAL_STEPS = 5

const initialFormState = {
  edificio: '',
  contacto: {
    nombreComercial: '',
    contactoVenta: '',
    puestoContacto: '',
    telefono: '',
    celular: '',
    correo: '',
  },
  fiscal: {
    razonSocial: '',
    rfc: '',
    domicilio: '',
    ciudad: '',
    estado: '',
    codigoPostal: '',
    pais: 'México',
    curp: '',
    regimen: '',
  },
  transferencia: {
    nombreCuenta: '',
    banco: '',
    numeroCuenta: '',
    clabe: '',
    moneda: '',
    correoPago: '',
    constanciaSituacionFiscal: null,
    caratulaEstadoCuenta: null,
    opinionCumplimiento: null,
  },
  confirmacion: {
    codigoRegistro: '',
    avisoPrivacidad: false,
  },
}

function RegistroProveedor() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState(initialFormState)
  const [submitted, setSubmitted] = useState(false)

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1)
  }

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((s) => s + 1)
    } else {
      console.log('Formulario completado:', formData)
      setSubmitted(true)
    }
  }

  const isLastStep = currentStep === TOTAL_STEPS

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
          <Header />
          <Card className="px-6 py-12 text-center md:px-12 md:py-16">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/20">
              <span aria-hidden="true" className="text-3xl text-brand-brown">
                ✓
              </span>
            </div>
            <h2 className="mt-6 font-serif text-2xl font-semibold text-brand-brown md:text-3xl">
              Registro enviado
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-ink-soft md:text-base">
              Recibimos tu información correctamente. El equipo de Grupo Legado
              se pondrá en contacto contigo en breve.
            </p>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <Header />

        <ProgressIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />

        <Card>
          {currentStep === 1 && (
            <SeleccionEdificio
              value={formData.edificio}
              onChange={(value) => updateField('edificio', value)}
            />
          )}
          {currentStep === 2 && (
            <InformacionContacto
              value={formData.contacto}
              onChange={(value) => updateField('contacto', value)}
            />
          )}
          {currentStep === 3 && (
            <InformacionFiscal
              value={formData.fiscal}
              onChange={(value) => updateField('fiscal', value)}
            />
          )}
          {currentStep === 4 && (
            <TransferenciaElectronica
              value={formData.transferencia}
              onChange={(value) => updateField('transferencia', value)}
            />
          )}
          {currentStep === 5 && (
            <Confirmacion
              value={formData.confirmacion}
              onChange={(value) => updateField('confirmacion', value)}
            />
          )}
        </Card>

        <WizardNav
          onBack={handleBack}
          onNext={handleNext}
          canGoBack={currentStep > 1}
          canGoNext={true}
          nextLabel={isLastStep ? 'Enviar' : 'Siguiente'}
        />
      </div>
    </div>
  )
}

export default RegistroProveedor
