import './TextLabel.css'

export function TextLabel(props) {
    return (
        <div className='div-text-label'>
            <input className='text-label'
                type="text" 
                placeholder={props.placeholder}
            />

        </div>
    )
}