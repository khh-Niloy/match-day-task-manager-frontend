interface ITask {
  title: string;
  description: string;
}

interface ITaskArr {
  createdAt: string;
  description: string;
  status: string;
  title: string;
  updatedAt: string;
  _id: string;
}

const taskStatus = {
  ToDo: "To-Do",
  InProgress: "In-Progress",
  Done: "Done",
};

export { taskStatus };
export type { ITask, ITaskArr };
