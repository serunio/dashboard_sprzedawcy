import {Orders} from "../Components/Widgets/Orders.tsx";
import {TipList} from "../Components/Widgets/Tip list.tsx";
import {Grid, Stack} from "@mantine/core";
import {CustomerReviews} from "../Components/Widgets/Customer reviews.tsx";
import {SellerQuality} from "../Components/Widgets/Seller quality.tsx";
import {ProductsRanking} from "../Components/Widgets/Products ranking.tsx";
import {reviews, qualityAspects, products} from "../fakeAPI.ts";
import {SellChart} from "../Components/Widgets/Sell chart.tsx";

export function Dashboard() {
  return <>
      <Grid h={'100%'} my={'20px'}>
        <Grid.Col span={8}>
          <Stack align={"stretch"}>
            <Grid align={"stretch"}>
              <Grid.Col span={4}>
                <Stack>
                  <Orders unsent={2} unpaid={6} returned={5}/>
                  <TipList/>
                </Stack>
              </Grid.Col>
              <Grid.Col span={8}>
                <SellChart h={'100%'}/>
              </Grid.Col>
            </Grid>
            <CustomerReviews h={'630'} reviews={reviews}/>
          </Stack>
        </Grid.Col>

        <Grid.Col span={4}>
          <Stack align={'stretch'} justify={'space-between'} h={'100%'}>
            <SellerQuality h={'40%'} aspects={qualityAspects}/>
            <ProductsRanking h={'60%'} products={products}/>
          </Stack>
        </Grid.Col>
      </Grid>
  </>
}