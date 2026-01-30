import {useTranslation} from "react-i18next";
import {BigText} from "../Components/Atomy/Label.tsx";

export function ReviewsPage() {
  const {t} = useTranslation('reviews')
  return <BigText>{t('title')}</BigText>
}