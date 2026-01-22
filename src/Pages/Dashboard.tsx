import {Orders} from "../Components/Widgets/Orders.tsx";
import {TipList} from "../Components/Widgets/Tip list.tsx";
import {Stack} from "@mantine/core";
import {CustomerReviews} from "../Components/Widgets/Customer reviews.tsx";
import type {ReviewData} from "../Components/Widgets/Customer reviews.tsx";
import {SellerQuality} from "../Components/Widgets/Seller quality.tsx";
import type {QualityAspect} from "../Components/Widgets/Seller quality.tsx"

const reviews: Array<ReviewData> = [
  {
    review: 'Chujowe',
    date: new Date(),
    stars: 2.5
  },
  {
    review: 'Chujowe',
    date: new Date(),
    stars: 1.5
  },
  {
    review: 'Chujowe',
    date: new Date(),
    stars: 4.5
  },
]

const qualityAspects: Array<QualityAspect> = [
  {
    name: 'aspect1',
    value: 5,
    maxValue: 10
  },
  {
    name: 'aspect2',
    value: 7,
    maxValue: 8
  },
  {
    name: 'aspect3',
    value: 1,
    maxValue: 3
  },
  {
    name: 'aspect4',
    value: 4,
    maxValue: 9
  },
  {
    name: 'aspect5',
    value: 2,
    maxValue: 3
  },
]

export function Dashboard() {

  return <>
    <Stack>
      <Orders unsent={2} unpaid={6} returned={5}/>
      <TipList/>
      <CustomerReviews reviews={reviews}/>
      <SellerQuality aspects={qualityAspects}/>

    </Stack>
  </>
}