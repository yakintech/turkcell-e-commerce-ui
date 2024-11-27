import { useQuery } from '@tanstack/react-query'
import { baseService } from '../../../../api/baseService'

function List() {

  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      return baseService.getAll('api/products')
    }
  })


  console.log("data", data)

  return <>
  </>
}

export default List