import { ComponentStory} from '@storybook/react';
import {Button} from "./index";
import {ButtonProps} from "./Button";

export default {
    title: 'shared/lib/Button',
    component: Button
}

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => Button(args)

export const Default = Template.bind({})

Default.args = {
    iconLeft: 'placeholder',
    children: 'Text'
}
