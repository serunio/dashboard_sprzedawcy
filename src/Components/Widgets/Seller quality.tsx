import Widget from "../Molekuły/Widget.tsx";
import {type BoxProps, Divider, Space, Stack} from "@mantine/core";
import {ProgressBar} from "../Atomy/Progress bar.tsx";
import {CircleStar} from "lucide-react";
import {useTranslation} from "react-i18next";
import {QualityCategory} from "../Molekuły/Quality category.tsx";
import {Button} from "../Atomy/Button/Button.tsx";
import {colors} from "../../Colors.ts";
import {SmallHeader} from "../Atomy/Label.tsx";

export type QualityAspect = { name: string, value: number, maxValue: number }
interface SellerQualityProps extends BoxProps {
  aspects: QualityAspect[];
}
export function SellerQuality({aspects, ...props}: SellerQualityProps) {
  aspects.sort((a, b) => a.value / a.maxValue - b.value / b.maxValue)
  const sum = aspects.reduce((a, b) => ({
    name: '',
    value: a.value + b.value,
    maxValue: a.maxValue + b.maxValue
  }))
  const {t} = useTranslation("sellerQuality")
  return (
    <Widget {...props} title={t("title")} Icon={CircleStar}>
      <QualityCategory sum={sum.value} maxSum={sum.maxValue}/>
      <Space h={'md'}/>
      <Divider color={colors.secondary}/>
      <Space h={'md'}/>
      <SmallHeader>{t("subTitle")}</SmallHeader>
      <Stack mx={'xl'}>
        {aspects.slice(0, 3).map(a => (
          <ProgressBar name={t(a.name)} value={a.value + '/' + a.maxValue}/>
        ))}
        <Button variant={'filled'} size={'sm'} fullWidth>{t("details")}</Button>
      </Stack>
    </Widget>)
}