import {MessageSquare} from "lucide-react";
import Widget from "../Molekuły/Widget.tsx";
import {Review} from "../Molekuły/Review.tsx";
import {useState} from "react";
import {Group, Stack} from "@mantine/core";
import * as React from "react";
import {Button} from "../Atomy/Button/Button.tsx";
import {useTranslation} from "react-i18next";

export type ReviewData = { review: string, stars: number, date: Date }
type ReviewFilter = 'all' | 'positive' | 'negative'
const filterDict = {
  'all': (r: ReviewData) => r,
  'positive': (r: ReviewData) => r.stars >= 3.5,
  'negative': (r: ReviewData) => r.stars < 3.5
}

export function CustomerReviews({reviews}: { reviews: Array<ReviewData> }) {
  const [filter, setFilter] = useState<ReviewFilter>('all')
  const filteredReviews = reviews.filter(filterDict[filter])
  const {t} = useTranslation("reviews")

  return (
    <Widget title={t("title")} Icon={MessageSquare}>
      <Stack>
        <Group>
          <FilterButton filter={'all'} text={t("all")} filterState={{filter, setFilter}}/>
          <FilterButton filter={'positive'} text={t("positive")} filterState={{filter, setFilter}}/>
          <FilterButton filter={'negative'} text={t("negative")} filterState={{filter, setFilter}}/>
        </Group>
        {filteredReviews.map(r => <Review review={r.review} stars={r.stars} date={r.date.toDateString()}/>)}
        <Button variant={'filled'} size={'sm'} fullWidth>{t("details")}</Button>
      </Stack>
    </Widget>
  )

}

type FilterButtonProps = {
  filter: ReviewFilter,
  text: string,
  filterState: { filter: ReviewFilter, setFilter: React.Dispatch<React.SetStateAction<ReviewFilter>> }
}

function FilterButton({filter, text, filterState}: FilterButtonProps) {
  return <Button variant={filterState.filter === filter ? 'filled' : 'default'}
                 onClick={() => filterState.setFilter(filter)}>{text}</Button>
}