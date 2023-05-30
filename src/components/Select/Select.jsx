import { Filter } from "./styles";

export default function Select({ name, code, text, options, handleOnChange }) {
  return (
    <Filter id={code}>
      <option>{text}</option>
      { options?.map((option) => {
        return <option key={option.name}>{option.name}</option>
    })}
    </Filter>
  )
}