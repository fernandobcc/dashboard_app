import { ComponentStory, ComponentMeta } from '@storybook/react'
import MainHeader from '.'

export default {
  title: 'MainHeader',
  component: MainHeader
} as ComponentMeta<typeof MainHeader>

export const Default: ComponentStory<typeof MainHeader> = () => <MainHeader />
