import {Stack} from "@mantine/core";
import {Tip} from "../Molekuły/Tip.tsx";
import Widget from "../Molekuły/Widget.tsx";
import {Lightbulb} from "lucide-react";
import {useTranslation} from "react-i18next";

export function TipList() {
    const {t} = useTranslation("tips")
    const tips = [t("tip1"), t("tip2"), t("tip3")]
    return <Widget title={t("title")} Icon={Lightbulb}>
        <Stack>
            {tips.map(t => <Tip tip={t}/>)}
        </Stack>
    </Widget>
}