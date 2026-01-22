import {SmallColoredLabel} from "../Atomy/ColoredLabel/ColoredLabel.tsx";
import {useTranslation} from "react-i18next";
import {Stack, Text} from "@mantine/core";

export function QualityCategory({score}:{score:number}) {
  const {t} = useTranslation("sellerQuality")
  let category:string;
  if (score < 20) {
    category = 'awful'
  } else if (score < 40) {
    category = 'bad'
  } else if (score < 60) {
    category = 'medium'
  } else if (score < 80) {
    category = 'good'
  } else {
    category = 'excellent'
  }

  return (<Stack gap={'0'} align={'center'}><Text fz={'36'} fw={600}>{score}/100</Text><SmallColoredLabel variant={category}>{t(category)}</SmallColoredLabel></Stack>)
}