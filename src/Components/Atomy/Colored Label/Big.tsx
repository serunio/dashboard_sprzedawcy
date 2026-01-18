import {Group, Paper, ThemeIcon, Title} from "@mantine/core";
import type {LucideIcon} from "lucide-react";

type BigColoredLabelProps = { title: string, Icon: LucideIcon, count?: number, color: string, textColor: string }

export function BigColoredLabel({title, Icon, count, color, textColor}: BigColoredLabelProps) {
    return <Paper bg={color} p={'sm'} bdrs={'md'} shadow={'0'}>
        <Group justify={'space-between'}>
            <Group gap={'xs'}>
                <ThemeIcon color={textColor} variant={'transparent'} size={'sm'}>
                    <Icon size={'80%'}/>
                </ThemeIcon>
                <Title c={textColor} order={4}>{title}</Title>
            </Group>
            <Title c={textColor} order={4}>{count}</Title>
        </Group>
    </Paper>
}