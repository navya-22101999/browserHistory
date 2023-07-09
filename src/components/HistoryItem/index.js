/* eslint-disable react/button-has-type */
import './index.css'
import React from 'react'

const HistoryItem = props => {
  const {historyItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li>
      <div>
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>

        <p>{domainUrl}</p>
      </div>
      <button data-testid="delete" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
