import http from '@/services/api'
import { useQuery } from 'react-query'

export const useGet = <T = unknown>(cacheName: string, urlRequest: string) => {
  const { data, error } = useQuery<T>(
    cacheName,
    async () => {
      const { data } = await http.get(urlRequest)
      return data
    },
    {
      staleTime: 1000 * 60, // 1 minute
    }
  )
  return { data, error }
}
