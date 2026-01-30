import {useParams} from "react-router";
import {useTranslation} from "react-i18next";
import {BigText, Header} from "../Components/Atomy/Label.tsx";
import {Stack} from "@mantine/core";

export function OrdersPage() {
  const { t } = useTranslation("orders")
  const {category} = useParams()
  return <Stack>
    <BigText>{t("title")}</BigText>
    <Header>{t(category as string)}</Header>
  </Stack>
}