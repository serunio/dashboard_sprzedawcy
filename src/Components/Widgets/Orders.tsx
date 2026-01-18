import {Package} from "lucide-react";
import {Stack} from "@mantine/core";
import {Returned, Unpaid, Unsent} from "../Molekuły/Order category.tsx";
import Widget from "../Molekuły/Widget.tsx";

import { useTranslation } from "react-i18next";

type Props = {unsent: number, unpaid: number, returned: number}

export function Orders({unsent, unpaid, returned}:Props) {
    const { t } = useTranslation("orders")
    return <Widget title={t("title")} Icon={Package}>
        <Stack>
            <Unsent count={unsent}/>
            <Unpaid count={unpaid}/>
            <Returned count={returned}/>
        </Stack>
    </Widget>
}