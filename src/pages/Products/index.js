import { Grid, Box, Flex, Button} from "@chakra-ui/react"
import Card from "../../components/Card";
import { useInfiniteQuery } from 'react-query'
import { fetchProductList } from "../../api";
import React from "react";
function Products() {

    const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status, } = useInfiniteQuery("products", fetchProductList,
        {
            getNextPageParam: (lastGroup, allGroups) => {
                const morePageExist = lastGroup?.length === 12;
                if (!morePageExist) {
                    return;
                }
                return allGroups.length + 1;
            }

        })

    if (status === "loading") return 'Loading...'

    if (status === "error") return 'An error has occurred: ' + error.message


    return (
        <div>
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
              
                {data.pages.map((group, i) => (
                    <React.Fragment key={i}>{
                        group.map((item) => (
                            <Box width="100%" key={item._id}>
                                <Card item={item}></Card>
                            </Box>
                        ))
                    }</React.Fragment>
                ))
                }
            </Grid>
            <Flex mt="10" justifyContent="center">
                <Button
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                >
                    {isFetchingNextPage
                        ? 'Loading more...'
                        : hasNextPage
                            ? 'Load More'
                            : 'Nothing more to load'}
                </Button>
          
            <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>

        </Flex>
        </div>
    );
}

export default Products;