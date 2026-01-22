import {BigColoredLabel} from "../Atomy/ColoredLabel/ColoredLabel.tsx";
import {CreditCard, RotateCcw, Send} from "lucide-react";
import {colors} from "../../Colors.ts";
import {useTranslation} from "react-i18next";

type Props = {count: number}

export function Unsent({count}:Props) {
    const { t } = useTranslation("orders")
    return <BigColoredLabel title={t("unsent")} Icon={Send} count={count} color={colors.blueLabel} textColor={colors.blueStroke}/>
}

export function Unpaid({count}:Props) {
    const { t } = useTranslation("orders")
    return <BigColoredLabel title={t("unpaid")} Icon={CreditCard} count={count} color={colors.orangeLabel} textColor={colors.orangeStroke}/>
}

export function Returned({count}:Props) {
    const { t } = useTranslation("orders")
    return <BigColoredLabel title={t("returns")} Icon={RotateCcw} count={count} color={colors.redLabel} textColor={colors.redStroke}/>
}