import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { baseService } from '../../../../api/baseService'
import { useNavigate } from 'react-router-dom'
import { queryClient } from '../../../..'

function Add() {

  const [name, setname] = useState("")
  const [unitPrice, setunitPrice] = useState("0")
  const [unitsInStock, setunitsInStock] = useState("0")

  const navigation = useNavigate()

  const add = () => {

    //full validation
    if (name === "" || unitPrice === "" || unitsInStock === "") {
      alert("Please fill all fields")
      return
    }
    //number validation unitPrice and unitsInStock
    if (isNaN(Number(unitPrice)) || isNaN(Number(unitsInStock))) {
      alert("Please enter valid number")
      return
    }

    let newProduct = {
      name: name,
      unitPrice: Number(unitPrice),
      unitsInStock: Number(unitsInStock)
    }

    baseService.post('api/products', newProduct)
    .then(res => {
      queryClient.invalidateQueries({
        queryKey: ['products']
      })
      navigation("/admin/products")
    })


  }


  return <>
    <h1>Add Product Form</h1>
    <Stack spacing={5} direction={"row"} justifyContent={"space-between"}>
      <Stack direction="column" gap={5} width={"50%"}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          fullWidth
        />
        <TextField
          label="Unit Price"
          value={unitPrice}
          onChange={(e) => setunitPrice(e.target.value)}
          fullWidth
        />
        <Button onClick={add} variant="contained" color="primary">Add Product</Button>

      </Stack>
      <Stack direction={"column"} gap={5} width={"50%"}>
        <TextField
          label="Units In Stock"
          value={unitsInStock}
          onChange={(e) => setunitsInStock(e.target.value)}
          fullWidth
        />
      </Stack>
    </Stack>
  </>
}

export default Add