import './ResultList.css'
export function ResultList(props) {
    return (
        <div className='list'>
            <ul>
                <li>{props.nickname}</li><span>Top</span>
                <li>{props.nickname}</li><span>Jg</span>
                <li>{props.nickname}</li><span>Mid</span>
                <li>{props.nickname}</li><span>Adc</span>
                <li>{props.nickname}</li><span>Sup</span>
            </ul>
        </div>
    )
}