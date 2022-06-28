import { ComponentStory, ComponentMeta } from '@storybook/react'
import HistoryFinanceCard from '.'

export default {
  title: 'HistoryFinanceCard',
  component: HistoryFinanceCard
} as ComponentMeta<typeof HistoryFinanceCard>

export const Default: ComponentStory<typeof HistoryFinanceCard> = (args) => (
  <HistoryFinanceCard {...args}></HistoryFinanceCard>
)
