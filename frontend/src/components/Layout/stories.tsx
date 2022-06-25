import { ComponentStory, ComponentMeta } from '@storybook/react'
import Layout from '.'

export default {
  title: 'Layout',
  component: Layout
} as ComponentMeta<typeof Layout>

export const Default: ComponentStory<typeof Layout> = () => <Layout />
