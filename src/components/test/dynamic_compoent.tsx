
import {cookies} from 'next/headers'
export default function DynamicComponent() {
  let _ = cookies()
  return (
    <div>
      <h1>Dynamic Component</h1>
    </div>
  )
}