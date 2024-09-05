'use client'

import React from 'react';
import { useParams } from 'next/navigation';
import TaskView1 from '@/components/TaskView/TaskView1';
import TaskView2 from '@/components/TaskView/TaskView2';
import TaskView3 from '@/components/TaskView/TaskView3';

const TaskPage = () => {
  const params = useParams();
  const taskId = params.id as string;

  const renderTaskView = () => {
    switch (taskId) {
      case '1':
        return <TaskView1 />;
      case '2':
        return <TaskView2 />;
      case '3':
        return <TaskView3 />;
      default:
        return <div>Task not found</div>;
    }
  };

  return renderTaskView();
};

export default TaskPage;