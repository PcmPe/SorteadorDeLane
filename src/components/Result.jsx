import './Result.css'
import { ResultList } from './ResultList'

export function Result(props) {
    let result = document.getElementsByClassName('text-label')
    return (
        <div className='result'>
            <section>
                <ResultList nickname='Bosta'/>
            </section>
            <section>
                <ResultList nickname='Peceme'/>
            </section>
        </div>
    )
} 