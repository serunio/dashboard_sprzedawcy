import {BigColoredLabel} from "../Atomy/ColoredLabel/ColoredLabel.tsx";
import {Lightbulb} from "lucide-react";
import {colors} from "../../Colors.ts";

type Props = {tip: string};

export function Tip({tip}:Props) {
    return <BigColoredLabel title={tip} Icon={Lightbulb} color={colors.yellowLabel} textColor={colors.yellowStroke}/>
}