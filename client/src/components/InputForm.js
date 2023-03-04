import React from 'react'

const InputForm = ({
  label,
  styleLabel,
  styleInput,
  type,
  value,
  setValue,
}) => {
  return (
    <div className="flex-col">
      <label htmlFor="phone" className={`${styleLabel}`}>
        {label}
      </label>
      <input
        type={type || 'text'}
        id="phone"
        className={`${styleInput} `}
        autocomplete="off"
        value={value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, [type]: e.target.value }))
        }
      />
    </div>
  )
}

export default InputForm
