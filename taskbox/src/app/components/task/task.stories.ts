import { Meta, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { TaskComponent } from './task.component';

export default {
  component: TaskComponent,
  title: 'Task', // how to refer to the component in the sidebar of the Storybook app
  excludeStories: /.*Data$/, //exports in the story file that should not be rendered as stories by Storybook
} as Meta;

export const actionData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
};

const Template: Story = (args) => ({
  props: {
    ...args,
    onPinTask: actionData.onPinTask,
    onArchiveTask: actionData.onArchiveTask
  }
});

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX'
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args['task'],
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args['task'],
    state: 'TASK_ARCHIVED'
  },
};
