import { Meta, Story, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { TaskListComponent } from "./task-list.component";
import { TaskComponent } from "../task/task.component";

import * as TaskStories from '../task/task.stories';
import { TaskStateEnum } from "src/app/task-state.enum";


export default {
  component: TaskListComponent,
  decorators: [
    moduleMetadata({
      declarations: [TaskListComponent, TaskComponent]
    }),
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`)
  ],
  title: 'TaskList',
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
    onPinTask: TaskStories.actionData.onPinTask,
    onArchiveTask: TaskStories.actionData.onArchiveTask,
  },
});

export const Default = Template.bind({});
Default.args = {
  tasks: [
    {...TaskStories.Default.args?.['task'], id: '1', title: 'Task 1'},
    { ...TaskStories.Default.args?.['task'], id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args?.['task'], id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args?.['task'], id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args?.['task'], id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args?.['task'], id: '6', title: 'Task 6' },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...Default.args['tasks'].slice(0,5),
    {id: '6', title: 'Task 6 (pinned)', state: TaskStateEnum.TASK_PINNED}
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};
