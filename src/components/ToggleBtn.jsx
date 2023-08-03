import collapseArrow from '/collapse-arrow.png'
import expandArrow from '/expand-arrow.png'

export default function ToggleBtn({ isVisible, handleToggle}) {
    return (
        <button type="button" className='toggle'
                    onClick={handleToggle}>
                    <img src={isVisible ? collapseArrow : expandArrow} alt="Expand arrow"/>
        </button>
    )
}