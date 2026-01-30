import {Group, Paper, ThemeIcon, Title} from "@mantine/core";
import {colors} from "../../Colors.ts";
import * as React from "react";
import type {LucideIcon} from "lucide-react";

type WidgetProps = { children?: React.ReactNode, title: string, Icon: LucideIcon }

function Widget({children, title, Icon, ...props}: WidgetProps) {
    return <>
        <Paper {...props} bg={colors.widget} p={"20px"} radius={'lg'} shadow={'sm'} >
            <Group gap={'8'} mb={'lg'}>
                <ThemeIcon variant={'transparent'} color={colors.text} size={'lg'} mt={'3'}>
                    <Icon size={'100%'}/>
                </ThemeIcon>
                <Title order={3} c={colors.text}>{title}</Title>
            </Group>

            {children}
        </Paper>
    </>
}

export default Widget