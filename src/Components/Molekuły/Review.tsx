import {Group, Paper, Rating, Stack} from "@mantine/core";
import {colors} from "../../Colors.ts";
import {DefaultText} from "../Atomy/Label.tsx";

type Props = { review: string, stars: number, date: string }

export function Review({review, stars, date}: Props) {
  return <Paper bg={colors.widget} py={'7'} px={'10'} shadow={'0'} withBorder bdrs={'lg'} bd={`2px solid ${colors.secondary}`}>
    <Group justify={'space-between'} align={'flex-start'}>
      <Stack gap={0}>
        <Rating color={colors.star} fractions={2} value={stars} readOnly/>
        <DefaultText>{review}</DefaultText>
      </Stack>
      <DefaultText>{date}</DefaultText>
    </Group>
  </Paper>
}