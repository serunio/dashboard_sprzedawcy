import {Group, Rating, Stack} from "@mantine/core";
import {colors} from "../../Colors.ts";
import {DefaultText} from "../Atomy/Label.tsx";
import {Frame} from "../Atomy/Frame.tsx";

type Props = { review: string, stars: number, date: string }

export function Review({review, stars, date}: Props) {

  return <Frame>
    <Group justify={'space-between'} align={'flex-start'}>
      <Stack gap={0}>
        <Rating color={colors.star} fractions={2} value={stars} readOnly/>
        <DefaultText>{review}</DefaultText>
      </Stack>
      <DefaultText>{date}</DefaultText>
    </Group>
  </Frame>
}