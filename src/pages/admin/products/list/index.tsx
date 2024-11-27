import { useQuery } from '@tanstack/react-query'
import { baseService } from '../../../../api/baseService'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { queryClient } from '../../../..'

function List() {

  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      return baseService.getAll('api/products')
    },
    staleTime: 20000
  })

  const deleteProduct = (id: any) => {

    var result = window.confirm("Do you want to delete this product?")

    if (!result) return

    baseService.delete('api/products', id)
      .then(() => {
        queryClient.invalidateQueries({
          queryKey: ['products']
        })
      })
      .catch((error) => {
        console.log('Error: ', error)
      })
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1
    },
    {
      field: "name",
      headerName: "Name",
      flex: 2
    },
    {
      field: "unitPrice",
      headerName: "Unit Price",
      flex: 2
    },
    {
      field: "unitsInStock",
      headerName: "Units In Stock",
      flex: 2
    },
    {
      field: "Delete",
      headerName: "Delete",
      flex: 1,
      renderCell: (params: any) => {
        return <Button onClick={() => deleteProduct(params.row.id)} variant="contained" color="error">Delete</Button>
      }
    }
  ]

  return <>
    <h1>Length: {data?.length}</h1>
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
      />
    </div>
  </>
}

export default List