import Widget from "../Molekuły/Widget.tsx";
import {Divider, Space, Stack} from "@mantine/core";
import {ProgressBar} from "../Atomy/Progress bar.tsx";
import {CircleStar} from "lucide-react";
import {useTranslation} from "react-i18next";
import {QualityCategory} from "../Molekuły/Quality category.tsx";
import {Button} from "../Atomy/Button/Button.tsx";
import {colors} from "../../Colors.ts";

export type QualityAspect = {name:string, value:number, maxValue:number}

export function SellerQuality({aspects}:{aspects:Array<QualityAspect>}) {
  const {t} = useTranslation("sellerQuality")
  return (
    <Widget title={t("title")} Icon={CircleStar}>
      <QualityCategory score={10}/>
      <Space h={'md'}/>
      <Divider color={colors.secondary}/>
      <Space h={'md'}/>
      <Stack>
        <ProgressBar name={'Nazwa'} value={'2/10'}/>
        <ProgressBar name={'Nazwa'} value={'21/37'}/>
        <ProgressBar name={'Nazwa'} value={'24/72'}/>
        <Button variant={'filled'} size={'sm'} fullWidth>{t("details")}</Button>
      </Stack>
    </Widget>)
}