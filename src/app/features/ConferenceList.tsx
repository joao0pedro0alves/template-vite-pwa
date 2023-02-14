import { useState } from 'react'
import clsx from 'clsx'
import { Card } from '../components/Card'
import { Switch } from '../components/Switch'

export interface Transaction {
    dsc_abreviado: string
    cod_produto: string
    cod_pedido: string
    ctm_qtd_etiq: number
    ctm_qtd_etiq_baixada: number
    bit_ton_lot: number
}
interface ConferenceListProps {
    data: Transaction[]
    showList?: boolean
    loading?: boolean
}

export function ConferenceList({
    data = [],
    showList,
    loading,
}: ConferenceListProps) {
    const [allOrPending, setAllOrPending] = useState(false)

    function isSample(item: Transaction) {
        return item.cod_produto === 'AMOSTRAS'
    }

    function isCompleted(item: Transaction) {
        return item.ctm_qtd_etiq - item.ctm_qtd_etiq_baixada === 0
    }

    const transactions = allOrPending ? data : data.filter(i => !isCompleted(i))

    return (
        <div className={clsx('flex-1 relative', { hidden: !showList })}>
            <Switch
                label="Pendentes/Todos"
                id="show-completed"
                checked={allOrPending}
                onCheckedChange={setAllOrPending}
            />

            <ul
                className={clsx('flex flex-col gap-2', {
                    'animate-pulse': loading,
                })}
            >
                {transactions.map((item, i) => (
                    <Card
                        key={`conference-card-${i}`}
                        title={item.dsc_abreviado}
                        highlight="Restante"
                        highlightValue={
                            item.ctm_qtd_etiq - item.ctm_qtd_etiq_baixada
                        }
                        completed={isCompleted(item)}
                    >
                        {isSample(item) ? (
                            <span className="text-sm">{item.cod_pedido}</span>
                        ) : (
                            <>
                                <span className="text-sm">{item.cod_produto}</span>
                                <span className="pl-2 text-sm">{item.bit_ton_lot}</span>
                            </>
                        )}
                    </Card>
                ))}
            </ul>
        </div>
    )
}
