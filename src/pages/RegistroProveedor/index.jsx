import { useState } from 'react'
import Header from '../../components/Header'
import Card from '../../components/Card'
import WizardNav from '../../components/WizardNav'
import ProgressIndicator from '../../components/ProgressIndicator'
import SeleccionEdificio from './secciones/SeleccionEdificio'
import InformacionContacto from './secciones/InformacionContacto'

const TOTAL_STEPS = 2

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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
}

function RegistroProveedor() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState(initialFormState)

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isStepValid = (step) => {
    if (step === 1) return formData.edificio !== ''
    if (step === 2) {
      const c = formData.contacto
      return (
        c.nombreComercial.trim() !== '' &&
        c.contactoVenta.trim() !== '' &&
        c.puestoContacto.trim() !== '' &&
        c.telefono.length === 10 &&
        c.celular.length === 10 &&
        EMAIL_REGEX.test(c.correo)
      )
    }
    return true
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1)
  }

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((s) => s + 1)
    } else {
      console.log('Formulario completado:', formData)
    }
  }

  const isLastStep = currentStep === TOTAL_STEPS

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
        </Card>

        <WizardNav
          onBack={handleBack}
          onNext={handleNext}
          canGoBack={currentStep > 1}
          canGoNext={isStepValid(currentStep)}
          nextLabel={isLastStep ? 'Enviar' : 'Siguiente'}
        />
      </div>
    </div>
  )
}

export default RegistroProveedor
