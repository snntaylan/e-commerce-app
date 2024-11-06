import { Box, CircularProgress, Container, Grid, Typography } from '@mui/joy';
import { useAppSelector } from '../../store/hook';
import CatalogItem from './CatalogItem';
import useSWRInfinite from 'swr/infinite';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setItems } from '../../store/features/catalogSlice';
import CatalogFilter from './CatalogFilter';

function Catalog() {

  const [shouldFetch, setShouldFetch] = useState(false);

  const LIMIT = 5;
  const dispatch = useDispatch();
  const items = useAppSelector((state) => state.catalog.items); // Get Items from Redux Store
  const { maxPrice, minPrice, categoryId } = useAppSelector((state) => state.filter); // Get Items from Redux Store

  // Fetch Items from API call and setSize (infinite) changes
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, mutate, size, setSize, isLoading } = useSWRInfinite(
    (index) =>
      {
        let params = "";
        if (shouldFetch) {
          params = "&" + new URLSearchParams({
            ...(categoryId && { categoryId: categoryId.toString() }),
            ...(minPrice && { price_min: minPrice.toString() }),
            ...(maxPrice && { price_max: maxPrice.toString() }),
          }).toString();
        }

        return `https://api.escuelajs.co/api/v1/products?offset=${index}&limit=${LIMIT}${params}`
      },
    fetcher
  );

  // Update Redux State whenever data is retrieved
  useEffect(() => {
    if (data) {
      const items = data ? [].concat(...data) : [];
      dispatch(setItems(items));
    }
  }, [data])

  // Update Redux State whenever data is retrieved
  useEffect(() => {
    if ((maxPrice && minPrice) || categoryId) {
      setSize(1);
      setShouldFetch(true);
      mutate();
    }
  }, [maxPrice, minPrice, categoryId])



  const observer = useRef<IntersectionObserver>();

  const isLoadingMore = isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < LIMIT);

  // Intersection Observer when element is in view
  const lastPostElementRef = useCallback(
    (node: any) => {
      if (isLoading || isReachingEnd) return;
      if (observer.current) observer.current?.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setSize(size + 1); // trigger loading of new posts by chaging page no
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  return (
    <>

      <Container maxWidth="xl">

        <Box display={"flex"} gap={"10px"}>
          <CatalogFilter />

          <Box flexGrow={1}>

            {
              isEmpty && (
                <Typography level="h3" textAlign={"center"}>No Data Found</Typography>
              )
            }

            <Grid container spacing={2}>
              {items && items.map((item: any, index) => (
                <CatalogItem key={index} item={item} />
              ))}
            </Grid>

            {isLoadingMore && (
              <p style={{ textAlign: 'center', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}> <CircularProgress variant="soft" /> Data is loading...</p>
            )}

            <Grid ref={lastPostElementRef} className="load-more" height={'10px'}></Grid>
          </Box>
        </Box>


      </Container>

    </>
  )
}

export default Catalog
