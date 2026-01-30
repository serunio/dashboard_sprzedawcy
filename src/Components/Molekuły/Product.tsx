import {Frame} from "../Atomy/Frame.tsx";
import {Group, Image, Stack} from "@mantine/core";
import {BigText, SmallHeader, SmallIconLabel} from "../Atomy/Label.tsx";
import type {ProductFilter} from "../Widgets/Products ranking.tsx";
import {DollarSign, Eye, ShoppingCart} from "lucide-react";
import {colors} from "../../Colors.ts";

export type ProductData = { name: string, img: string, views: number, trade: number, sold: number }

export function Product({product, filter, index}: { product: ProductData, filter: ProductFilter, index: number }) {
  const [secondValue, secondColor, secondIcon] =  filter === "mostBought" ? [product.trade, colors.greenStroke, DollarSign] : [product.views, colors.blueStroke, Eye]
  return <Frame py={'17'}>
    <Group>
      <BigText>{index}</BigText>
      <Image src={product.img} w={100} h={50}/>
      <Stack align={'start'} justify={'start'} gap={'1'}>
        <SmallHeader>{product.name}</SmallHeader>
        <Group>
          <SmallIconLabel Icon={ShoppingCart} color={colors.secondaryText}>{product.sold}</SmallIconLabel>
          <SmallIconLabel Icon={secondIcon} color={secondColor}>{secondValue}</SmallIconLabel>
        </Group>
      </Stack>
    </Group>
  </Frame>
}