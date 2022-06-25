import { ComponentStory, ComponentMeta } from '@storybook/react'
import Content from '.'

export default {
  title: 'Content',
  component: Content
} as ComponentMeta<typeof Content>

export const Default: ComponentStory<typeof Content> = () => <Content />
