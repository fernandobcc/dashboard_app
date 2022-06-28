import { ComponentStory, ComponentMeta } from '@storybook/react'
import ContentHeader from '.'

export default {
  title: 'ContentHeader',
  component: ContentHeader
} as ComponentMeta<typeof ContentHeader>

export const Default: ComponentStory<typeof ContentHeader> = (args) => (
  <ContentHeader {...args}></ContentHeader>
)
