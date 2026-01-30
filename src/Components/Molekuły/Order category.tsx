import {BigColoredLabel, type BigColoredLabelProps} from "../Atomy/ColoredLabel/ColoredLabel.tsx";
import {CreditCard, RotateCcw, Send} from "lucide-react";
import {colors} from "../../Colors.ts";
import {useTranslation} from "react-i18next";
import {UnstyledButton} from "@mantine/core";
import {useNavigate} from "react-router";

type Props = {count: number}

export function Unsent({count}:Props) {
    return <OrderCategory title={"unsent"} Icon={Send} count={count} color={colors.blueLabel} textColor={colors.blueStroke}/>
}

export function Unpaid({count}:Props) {
    return <OrderCategory title={"unpaid"} Icon={CreditCard} count={count} color={colors.orangeLabel} textColor={colors.orangeStroke}/>
}

export function Returned({count}:Props) {
    return <OrderCategory title={"returns"} Icon={RotateCcw} count={count} color={colors.redLabel} textColor={colors.redStroke}/>
}

function OrderCategory({title, Icon, count, color, textColor}: BigColoredLabelProps) {
    const navigate = useNavigate()
    const { t } = useTranslation("orders")
    return <UnstyledButton onClick={() => navigate(`/orders/${title}`)}>
        <BigColoredLabel title={t(title)} Icon={Icon} color={color} textColor={textColor} count={count}/>
        </UnstyledButton>
}