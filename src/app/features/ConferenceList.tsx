import { Card } from '../components/Card'

export function ConferenceList() {
    return (
        <ul className="flex flex-col gap-3 max-h-[70vh] overflow-auto">
            <Card
                title="PISO ESMALTADO AVÓRIO"
                highlight="Restante"
                highlightValue={0}
                completed
            >
                <span>000001/23</span>
                <span className="pl-4">1 - 0 - 0003</span>
            </Card>

            {Array.from({length: 15}).map((_, i) => (
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
    )
}
