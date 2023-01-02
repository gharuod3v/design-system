import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@haruo-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, sapiente at! Amet, itaque error corporis totam impedit sapiente, dicta molestias, eos voluptas dolorem dolore deleniti velit cum quam delectus sunt.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: 'select',
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Exemplo',
    as: 'strong',
  },
}
