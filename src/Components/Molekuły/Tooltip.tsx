import { Paper, Text } from '@mantine/core';
import {colors} from "../../Colors.ts";
import {useTranslation} from "react-i18next";

interface ChartTooltipProps {
  label: React.ReactNode;
  payload: readonly Record<string, any>[] | undefined;
}

export function Tooltip({ label, payload }: ChartTooltipProps) {
  const {t} = useTranslation('sellChart')
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="md" radius="md" bg={colors.background} bd={'none'}>
      <Text fw={500} mb={5} c={colors.text}>
        {label}
      </Text>
      {payload.map((item) => (
        <Text key={item.name} c={item.color} fz="sm">
          {item.name.includes('Last') ? t('previous') : t('current')}: {item.value}
        </Text>
      ))}
    </Paper>
  );
}