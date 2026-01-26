import {Orders} from "../Components/Widgets/Orders.tsx";
import {TipList} from "../Components/Widgets/Tip list.tsx";
import {Stack} from "@mantine/core";
import {CustomerReviews} from "../Components/Widgets/Customer reviews.tsx";
import {SellerQuality} from "../Components/Widgets/Seller quality.tsx";
import {ProductsRanking} from "../Components/Widgets/Products ranking.tsx";
import {reviews, qualityAspects, products} from "../fakeAPI.ts";

export function Dashboard() {
  return <>
    <Stack>
      <Orders unsent={2} unpaid={6} returned={5}/>
      <TipList/>
      <CustomerReviews reviews={reviews}/>
      <SellerQuality aspects={qualityAspects}/>
      <ProductsRanking products={products}/>
    </Stack>
  </>
}