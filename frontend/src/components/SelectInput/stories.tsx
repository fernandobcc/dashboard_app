import { ComponentStory, ComponentMeta } from '@storybook/react'
import SelectInput from '.'

export default {
  title: 'SelectInput',
  component: SelectInput,
  argTypes: {}
} as ComponentMeta<typeof SelectInput>

export const Default: ComponentStory<typeof SelectInput> = (args) => <SelectInput {...args} />
