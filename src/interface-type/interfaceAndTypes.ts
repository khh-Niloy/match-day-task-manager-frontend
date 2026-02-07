interface ITask {
  title: string;
  description: string;
}

const taskStatus = {
  ToDo: "To-Do",
  InProgress: "In-Progress",
  Done: "Done",
};

export { taskStatus };
export type { ITask };
