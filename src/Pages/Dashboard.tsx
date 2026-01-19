import {Orders} from "../Components/Widgets/Orders.tsx";
import {TipList} from "../Components/Widgets/Tip list.tsx";
import {Stack} from "@mantine/core";
import {CustomerReviews} from "../Components/Widgets/Customer reviews.tsx";
import type {ReviewData} from "../Components/Widgets/Customer reviews.tsx";
import {ProgressBar} from "../Components/Atomy/Progress bar.tsx";
import Widget from "../Components/Molekuły/Widget.tsx";
import {Moon} from "lucide-react";

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

export function Dashboard() {

  return <>
    <Stack>
      <Orders unsent={2} unpaid={6} returned={5}/>
      <TipList/>
      <CustomerReviews reviews={reviews}/>
      <Widget title={"aaa"} Icon={Moon}>
        <Stack>
          <ProgressBar name={'Nazwa'} value={'2/10'}/>
          <ProgressBar name={'Nazwa'} value={'21/37'}/>
          <ProgressBar name={'Nazwa'} value={'24/72'}/>
        </Stack>

      </Widget>

    </Stack>
  </>
}