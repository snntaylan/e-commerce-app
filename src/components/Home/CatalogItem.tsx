import { Card, Typography, IconButton, AspectRatio, CardContent, Button, Grid } from '@mui/joy';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { useDispatch } from 'react-redux';
import { addItemInCart } from '../../store/features/cartSlice';
import { CatalogItemType } from '../../store/features/catalogSlice';

interface CatalogItemProps {
  item: CatalogItemType
}

function CatalogItem({ item }: CatalogItemProps) {

  const dispatch = useDispatch();

  const getItemImage = (images: string | string[]) => {
    if (Array.isArray(images)) {
      return images[0]
    } else {
      return images ? JSON.parse(images)?.[0] : "";
    }
  }

  return (
    <Grid component={"div"} >
      <Card sx={{ width: 320 }}>
        <div>
          <Typography level="title-lg" paddingRight={'15px'} >{item.title}</Typography>
          <IconButton
            aria-label="bookmark Bahamas Islands"
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
          >
            <BookmarkAdd />
          </IconButton>
        </div>
        <AspectRatio minHeight="120px" maxHeight="500px">
          <img
            src={getItemImage(item.images)}
            srcSet={`${getItemImage(item.images)} 2x`}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <div>
            <Typography level="body-xs">Total price:</Typography>
            <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>${item.price}</Typography>
          </div>
          <Button
            variant="solid"
            size="md"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
            onClick={() => {
              dispatch(addItemInCart({ id: item.id, quantity: 1 }));
            }}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default CatalogItem
