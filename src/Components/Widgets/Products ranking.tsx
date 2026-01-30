import Widget from "../Molekuły/Widget.tsx";
import {useTranslation} from "react-i18next";
import {ListOrdered} from "lucide-react";
import {Product, type ProductData} from "../Molekuły/Product.tsx";
import {useState} from "react";
import {type BoxProps, Group, Stack} from "@mantine/core";
import {Button} from "../Atomy/Button/Button.tsx";

export type ProductFilter = "mostBought" | "leastBought"

interface ProductsRankingProps extends BoxProps {
  products: ProductData[]
}

const filterDict = {
  "mostBought": (a:ProductData, b:ProductData)=> b.sold - a.sold,
  "leastBought": (a:ProductData, b:ProductData)=> a.sold - b.sold
}

export function ProductsRanking({products, ...props}: ProductsRankingProps) {
  const {t} = useTranslation("productsRanking")
  const [filter, setFilter] = useState<ProductFilter>("mostBought")
  const sortedProducts = [...products].sort(filterDict[filter])
  const filters:ProductFilter[] = ["mostBought", "leastBought"]
  return <Widget {...props} title={t("title")} Icon={ListOrdered}>
    <Stack gap={'xs'} >
      <Group>
        {
          filters.map(f =>
            (<Button variant={filter === f ? 'filled' : 'default'} onClick={() => setFilter(f as ProductFilter)}>{t(f)}</Button>))
        }
      </Group>
      <Stack gap={'5'}>
        {
          sortedProducts.map((p, i) => (<Product product={p} filter={filter} index={i+1}/>))
        }
      </Stack>
    </Stack>


  </Widget>
}