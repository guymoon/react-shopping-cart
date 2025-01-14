import { Meta, Story } from '@storybook/react';

import { COLOR } from '../../../shared/constants/css';
import Spinner, { Props } from './Spinner';

export default {
  component: Spinner,
  title: 'Spinner',
} as Meta;

const Template: Story<Props> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const RedSpinner = Template.bind({});
RedSpinner.args = {
  color: COLOR.RED_700,
};
