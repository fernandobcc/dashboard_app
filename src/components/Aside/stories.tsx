import { ComponentStory, ComponentMeta } from '@storybook/react'
import Aside from '.'

export default {
  title: 'Aside',
  component: Aside
} as ComponentMeta<typeof Aside>

export const Default: ComponentStory<typeof Aside> = () => <Aside />
