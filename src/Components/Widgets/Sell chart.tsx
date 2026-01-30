import Widget from "../Molekuły/Widget.tsx";
import {useTranslation} from "react-i18next";
import {ChartColumn} from "lucide-react";
import {type BoxProps, Group, Space, Stack} from "@mantine/core";
import {BarChart, LineChart} from '@mantine/charts';
import {DefaultText} from "../Atomy/Label.tsx";
import {useState} from "react";
import {chartData} from "../../fakeAPI.ts";
import {colors} from "../../Colors.ts";
import {Dropdown} from "../Atomy/Dropdown/Dropdown.tsx";
import {Tooltip} from "../Molekuły/Tooltip.tsx";
import {Checkbox} from "../Atomy/Checkbox/Checkbox.tsx";

const metrics = ['revenue', 'units']
const periods = ['day', 'week', 'year']
const types = ['bar', 'line']

export function SellChart(props:BoxProps) {
  const {t} = useTranslation('sellChart')
  const [metric, setMetric] = useState('revenue');
  const [period, setPeriod] = useState('day');
  const [type, setType] = useState('line');
  const [seePrevious, setSeePrevious] = useState<boolean>(false)

  const list = [
    {name: 'metric', list: metrics, value: metric, set: setMetric},
    {name: 'period', list: periods, value: period, set: setPeriod},
    {name: 'type', list: types, value: type, set: setType}
  ]

  const Chart = type === 'line' ? LineChart : BarChart
  const series = [{name: metric, color: colors.primary}]

  return <Widget {...props} title={t('title')} Icon={ChartColumn}>
    <Group align={'end'}>
      {list.map(c => (
        <Stack gap={'1'}>
          <DefaultText>{t(c.name)}</DefaultText>
          <Dropdown value={c.value}
                    onChange={(event) => {
                    const value = event.currentTarget.value
                    if (c.list.includes(value)) {
                      c.set(value)
                    }
                  }}
                    data={c.list.map(m => ({
                    value: m,
                    label: t(m)
                  }))}
          />
        </Stack>
      ))}
      <Group gap={'xs'}>
        <Checkbox color={colors.primary} checked={seePrevious}
                  onChange={(event) => setSeePrevious(event.currentTarget.checked)}/>
        <DefaultText>{t('seePrevious')}</DefaultText>
      </Group>
    </Group>
    <Space h={'md'}/>
    <Chart h={'70%'}
           data={(period === 'day' ? chartData.day : period === 'week' ? chartData.week : chartData.year)}
           dataKey="time"
           series={seePrevious ? [...series, {name: metric + 'Last',color: colors.yellowStroke}] : series}
           curveType="monotone"
           tickLine="xy"
           gridAxis="none"
           tooltipProps={{
             content: ({ label, payload }) => <Tooltip label={label} payload={payload} />,
           }}/>
  </Widget>
}