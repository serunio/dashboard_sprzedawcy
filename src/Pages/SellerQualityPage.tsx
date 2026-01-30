import {useTranslation} from "react-i18next";
import {BigText} from "../Components/Atomy/Label.tsx";

export function SellerQualityPage() {
  const {t} = useTranslation('sellerQuality')
  return <BigText>{t('title')}</BigText>
}