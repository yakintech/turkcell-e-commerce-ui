import {Box, Card, CardContent, CardMedia, Button, Typography} from '@mui/material'
import { useTranslation } from 'react-i18next';

function ProductItem({item, index, dispatch}:any) {
    const { t } = useTranslation()
  return <Box key={index}>
  <Card>
      <CardMedia
          component="img"
          height="240"
          width={350}
          image={`https://via.placeholder.com/150?text=Ürün+${index + 1}`}
          alt={`Ürün ${index + 1}`}
      />
      <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              {item.unitPrice.toFixed(2)} TL
          </Typography>
      </CardContent>
      <Button onClick={() => dispatch({type:"cart/addToCart", payload:item})} size="small" color="primary">
          {t("addToCart")}
      </Button>
  </Card>
</Box>
}

export default ProductItem