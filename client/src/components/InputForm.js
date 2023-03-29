import React from 'react'

const InputForm = ({
  label,
  styleLabel,
  styleInput,
  type,
  value,
  setValue,
  stylleGroup,
  invalidFields,
  setInvalidFields,
}) => {
  return (
    <div className={`flex-col ${stylleGroup}`}>
      <label htmlFor="phone" className={`${styleLabel}`}>
        {label}
      </label>
      <input
        type={type || 'text'}
        id="phone"
        className={`${styleInput} `}
        value={value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, [type]: e.target.value }))
        }
        onFocus={() => {
          setInvalidFields([])
        }}
      />
      {invalidFields.length > 0 &&
        invalidFields.some((i) => i.name === type) && (
          <small className="text-red-500 italic mb-[15px]">
            {invalidFields.find((i) => i.name === type)?.msg}
          </small>
        )}
    </div>
  )
}

export default InputForm
