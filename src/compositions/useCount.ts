import { value } from 'vue-function-api'

export default (initialCount: number) => {
  const count = value(initialCount)
  const increment = () => {
    count.value++
  }
  return { count, increment }
}
