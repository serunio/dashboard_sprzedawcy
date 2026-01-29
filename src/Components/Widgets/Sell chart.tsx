import Widget from "../Molekuły/Widget.tsx";
import {useTranslation} from "react-i18next";
import {ChartColumn} from "lucide-react";
import {Checkbox, Group, Space, Stack} from "@mantine/core";
import { LineChart } from '@mantine/charts';
import {DefaultText} from "../Atomy/Label.tsx";
import {useState} from "react";
import {chartData} from "../../fakeAPI.ts";
import {colors} from "../../Colors.ts";
import {Select} from "../Atomy/Select/Select.tsx";

const metrics = ['revenue', 'units']
const periods = ['day', 'week', 'year']
const types = ['bar', 'line']

export function SellChart() {
  const {t} = useTranslation('sellChart')
  const [metric, setMetric] = useState('revenue');
  const [period, setPeriod] = useState('day');
  const [type, setType] = useState('line');
  const [seePrevious, setSeePrevious] = useState<boolean>(false)

  const list = [
    {name:'metric', list:metrics, value:metric, set:setMetric},
    {name:'period', list:periods, value:period, set:setPeriod},
    {name:'type', list:types, value:type, set:setType}
  ]


  return <Widget title={t('title')} Icon={ChartColumn}>
    <Group align={'end'}>
      {list.map(c => (
        <Stack gap={'1'}>
          <DefaultText>{t(c.name)}</DefaultText>
          <Select classNames={{wrapper: 'background-color: red'}}
            value={c.value}
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
        <Checkbox color={colors.primary} checked={seePrevious} onChange={(event) => setSeePrevious(event.currentTarget.checked)}/>
        <DefaultText>{t('seePrevious')}</DefaultText>
      </Group>
    </Group>
    <Space h={'md'}/>
    <LineChart h={300}
               data={(period === 'day' ? chartData.day : period === 'week' ? chartData.week : chartData.year)}
               dataKey="time"
               series={[{name:metric, color: colors.primary}, (seePrevious ? {name:metric+'Last', color: colors.yellowStroke} : {name:'', color:''})]}
               curveType="linear"/>
  </Widget>
}