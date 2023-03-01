import { FormEvent, useState, useRef } from 'react'
import { Warning } from 'phosphor-react'
import { Divider } from '../../app/components/Divider'
import { Screen } from '../../app/components/Screen'
import { TextField } from '../../app/components/TextField'
import { ToolsHeader } from '../../app/components/ToolsHeader'
import { ConferenceList, Transaction } from '../../app/features/ConferenceList'
import { LoadingButton } from '../../app/features/LoadingButton'
import { api } from '../../lib/axios'

enum Operation {
    Open = 1,
    Load = 2,
    Reset = 3,
}

const conferenceLabels: Record<Operation, string> = {
    '1': 'Iniciar conferência',
    '2': 'Baixar etiqueta',
    '3': 'Reiniciar conferência',
}

export function Conference() {
    const [activeStep, setActiveStep] = useState<Operation>(Operation.Open)
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [loading, setLoading] = useState(false)

    const documentNumberRef = useRef<HTMLInputElement>()
    const labelCodeRef = useRef<HTMLInputElement>()

    async function updateTransactions() {
        const documentNumber = documentNumberRef.current?.value

        const response = await api.get('/transactions/order', {
            params: {
                docto: documentNumber,
                ctm_programa: 2
            }
        })

        const newTransactions = response.data.map((t: any) => ({
            dsc_abreviado: t.item.dsc_abreviado,
            cod_produto: t.cod_produto,
            cod_pedido: t.cod_pedido,
            ctm_qtd_etiq: t.ctm_qtd_etiq,
            ctm_qtd_etiq_baixada: t.ctm_qtd_etiq_baixada,
            bit_ton_lot: t.bit_ton_lot,
        }))

        setTransactions(newTransactions)
    }

    async function call(operation: Operation) {
        setLoading(true)
        await updateTransactions()
        setLoading(false)
    }

    async function open() {
        await call(Operation.Open)
        setActiveStep(Operation.Load)

        // Focus on next render...
        setTimeout(() => {
            labelCodeRef.current!.focus()
        }, 0)
    }

    async function load() {
        await call(Operation.Load)
    }

    async function reset() {
        await call(Operation.Reset)

        setActiveStep(Operation.Open)
        documentNumberRef.current!.value = ''
        labelCodeRef.current!.value = ''
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        if (activeStep === Operation.Open) {
            open()
        } else if (activeStep === Operation.Load) {
            load()
        } else {
            reset()
        }
    }

    const isLoad = activeStep === Operation.Load

    return (
        <Screen className="relative">
            <ToolsHeader title="Conferência" />

            <div className="p-4">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <TextField
                        ref={documentNumberRef}
                        autoFocus
                        placeholder="Informe a ordem"
                        name="ctm_num_docto"
                        className="h-14"
                        type="text"
                        disabled={activeStep !== Operation.Open}
                        defaultValue='0239419/20'
                    />
                    <TextField
                        ref={labelCodeRef}
                        placeholder="Informe a etiqueta"
                        name="cod_etiqueta"
                        className="h-14"
                        type={isLoad ? 'number' : 'hidden'}
                    />

                    <LoadingButton loading={loading} type="submit">
                        {conferenceLabels[activeStep]}
                    </LoadingButton>
                </form>

                <Divider />

                <ConferenceList 
                    data={transactions}
                    showList={isLoad}
                    loading={loading}
                />

                {isLoad && (
                    <button
                        onClick={reset}
                        className="mt-4 flex items-center justify-center gap-4 h-12 w-full rounded shadow text-white transition-colors bg-red-500 uppercase hover:bg-red-600"
                    >
                        <Warning weight="bold" size={24} />
                        {conferenceLabels[3]}
                    </button>
                )}
            </div>
        </Screen>
    )
}
