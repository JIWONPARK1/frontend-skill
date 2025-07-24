import { useEffect, useState } from 'react'
import styles from './App.module.scss'

function App() {
  const [wedding, setWedding] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8888/wedding2')
      .then((response) => {
        if (!response.ok) {
          throw new Error('청첩장 정보를 불러오는데 실패했습니다.')
        }
        return response.json()
      })
      .then((data) => {
        setWedding(data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  if (loading) return <div>Loading...</div>
  if (error) return <div>에러가 발생했습니다.</div>
  return <div className={styles.container}>{JSON.stringify(wedding)}</div>
}

export default App
