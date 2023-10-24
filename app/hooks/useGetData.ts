import { useState, useEffect } from "react"
import { BASE_URL } from "../constants/constants"

interface FetchData<T> {
  data: T | null
  isLoading: boolean
}

export const useGetData = <T>(section: string) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${section}`)
        const data = await response.json()
        setData(data)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])
  return { data, isLoading } as FetchData<T>
}