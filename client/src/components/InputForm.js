import React from 'react'

const InputForm = ({
  name,
  label,
  styleLabel,
  styleInput,
  onChange,
  type,
  keyPayload,
  value,
  setValue,
  stylleGroup,
  invalidFields,
  setInvalidFields
}) => {
  return (
    <div className={`flex-col ${stylleGroup}`}>
      <label htmlFor={name} className={`${styleLabel}`}>
        {label}
      </label>
      <input
        name={name}
        id={name}
        type={type || 'text'}
        className={`${styleInput} `}
        value={value || ''}
        onChange={onChange}
        onFocus={() => {
          setInvalidFields([])
        }}
      />
      {invalidFields.length > 0 &&
        invalidFields.some((i) => i.name === keyPayload) && (
          <small className="text-red-500 italic mb-[15px]">
            {invalidFields.find((i) => i.name === keyPayload)?.msg}
          </small>
        )}
    </div>
  )
}

export default InputForm
