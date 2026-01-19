import {Group, Progress} from "@mantine/core";
import {colors} from "../../Colors.ts";
import {DefaultText} from "./Label.tsx";

export function ProgressBar({name, value}: { name: string, value: string }) {
  const [numerator, denominator] = value.split('/')
  const numValue = 100 * ~~numerator / ~~denominator
  return (
    <Group justify={'space-between'} >
      <DefaultText style={{width: '200px'}}>{name}</DefaultText>
      <Group justify={'flex-end'} style={{flex: 1}}>
        <Progress radius={"xl"} size={"lg"} value={numValue} color={colors.orangeStroke} style={{flex: 1}}/>
        <DefaultText style={{width: '50px', textAlign: 'end'}}>{value}</DefaultText>
      </Group>
    </Group>
  )


}