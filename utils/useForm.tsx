import { useState } from "react"

export default function useForm(defaults: any) {
  const [values, setValues] = useState<any>(defaults)

  function updateValue(e: any) {
    let { value } = e.target
    if (e.target.type === "number") {
      value = parseInt(value)
    }
    setValues({
      ...values,
      [e.target.name]: value,
    })
  }
  return { values, updateValue }
}
