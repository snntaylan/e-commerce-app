import { Box, Select, Option, Typography, FormControl, FormLabel, Slider, Button } from '@mui/joy';
import useSWR from 'swr';
import { fetcher } from '../../utils/helpers';
import { FilterState, setFilterState } from '../../store/features/filterSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function CatalogFilter() {

  const [filter, setFilter] = useState<FilterState>({ categoryId: null, minPrice: 0, maxPrice: 100 })

  const dispatch = useDispatch();
  // const { categoryId, minPrice, maxPrice } = useAppSelector((state) => state.filter)

  const categoryResponse = useSWR(
    "https://api.escuelajs.co/api/v1/categories",
    fetcher
  );


  return (
    <>

      <Box 
        sx={{
          padding: '15px 15px',
          flex: '0 0 300px',
          backgroundColor: '#fbfcfe',
          borderColor: '#cdd7e1',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderRadius: '9px',
        }}
        >

          <Typography level="h2" sx={{ fontSize: 'xl', mb: '30px' }}>
            Filters
          </Typography>

          <FormControl>
            <FormLabel>Category</FormLabel>
            <Select
              value={filter.categoryId}
              onChange={(_ev, value) => setFilter({...filter, categoryId: value})}
            >
              <Option value=""><em>None</em></Option>
              {
                categoryResponse.data && categoryResponse.data.map((category: any) => (
                  <Option value={category.id}>{category.name}</Option>
                ))
              }
            </Select>
          </FormControl>

          <FormControl style={{ marginTop: '20px' }}>
            <FormLabel>Price Range</FormLabel>
            
            <Slider
              value={[filter.minPrice, filter.maxPrice]}
              onChange={(_ev, value) => {
                
                if (Array.isArray(value)) {
                  setFilter({...filter, minPrice: value[0], maxPrice: value[1]})
                }
              }}
              valueLabelDisplay="auto"
            />

          </FormControl>

          <Button
            variant="solid"
            size="md"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
            onClick={() => {
              dispatch(setFilterState(filter))
            }}
          >
            Filter
          </Button>


      </Box>

    </>
  )
}

export default CatalogFilter
