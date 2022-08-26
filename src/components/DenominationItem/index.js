// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsDetails, updatedBalance} = props
  const {value} = denominationsDetails

  const onClickValueDeduction = () => {
    updatedBalance(value)
  }

  return (
    <li className="button-lists">
      <button
        className="value-btn"
        type="button"
        onClick={onClickValueDeduction}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
