import {SmallColoredLabel} from "../Atomy/ColoredLabel/ColoredLabel.tsx";
import {useTranslation} from "react-i18next";
import {Stack} from "@mantine/core";
import {BigText} from "../Atomy/Label.tsx";

export function QualityCategory({sum, maxSum}:{sum:number, maxSum:number}) {
  const {t} = useTranslation("sellerQuality")
  const score = sum/maxSum
  let category:string;
  if (score < .2) {
    category = 'awful'
  } else if (score < .4) {
    category = 'bad'
  } else if (score < .6) {
    category = 'medium'
  } else if (score < .8) {
    category = 'good'
  } else {
    category = 'excellent'
  }

  return (<Stack gap={'0'} align={'center'}><BigText>{sum}/{maxSum}</BigText><SmallColoredLabel variant={category}>{t(category)}</SmallColoredLabel></Stack>)
}