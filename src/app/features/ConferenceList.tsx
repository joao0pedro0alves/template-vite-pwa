import { Card } from '../components/Card'
import { Switch } from '../components/Switch'

export function ConferenceList() {
    return (
        <div className='flex-1'>
            <Switch 
                label='Todos/Pendentes'
                id='show-completed'
                defaultChecked
            />
            
            <ul className="flex flex-col gap-3">
                <Card
                    title="PISO ESMALTADO AVÓRIO"
                    highlight="Restante"
                    highlightValue={0}
                    completed
                >
                    <span>000001/23</span>
                    <span className="pl-4">1 - 0 - 0003</span>
                </Card>

                {Array.from({length: 10}).map((_, i) => (
                    <Card
                        key={`uncompleted-card-${i}`}
                        title="PISO ESMALTADO ZIRCO"
                        highlight="Restante"
                        highlightValue={2}
                        completed={false}
                    >
                        <span>000001/23</span>
                        <span className="pl-4">1 - 0 - 0003</span>
                    </Card>
                ))}
            </ul>
        </div>
    )
}
