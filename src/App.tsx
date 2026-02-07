import { DragDropContext } from "@hello-pangea/dnd";
import {
  useGetAllTaskQuery,
  useUpdateTaskMutation,
} from "./redux/features/task/task.api";
import toast from "react-hot-toast";
import { TaskCol } from "./components/TaskCol";
import { CreateTaskButton } from "./components/CreateTaskButton";
import { taskStatus } from "./interface-type/interfaceAndTypes";

function App() {
  const [updateTask] = useUpdateTaskMutation();
  const { data: tasks } = useGetAllTaskQuery(null);
  const { todo, inProgress, done } = tasks || {
    todo: [],
    inProgress: [],
    done: [],
  };
  // console.log(todo, inProgress, done);

  const handleOnDragEnd = async (e: any) => {
    const { destination, draggableId } = e;
    if (!destination) return;

    try {
      const res = await updateTask({
        id: draggableId,
        data: {
          status: destination.droppableId,
        },
      }).unwrap();
      // console.log(res);
      if (res.data) {
        toast.success("Task updated successfully");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message);
    }
  };

  return (
    <div>
      <div className="w-full text-center pt-12 pb-12">
        <h1 className="text-3xl font-black">Match Day Task Manager</h1>
        <p className="text-lg mt-2 text-gray-500 font-medium">
          Organize and track your match day activities with ease.
        </p>
      </div>

      <div className="flex justify-end px-24 mb-4">
        <CreateTaskButton />
      </div>

      <div className="px-24">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div className="w-full bg-white flex gap-5 items-start">
            <TaskCol
              status={taskStatus.ToDo}
              colColor="#5046E4"
              colName={"Todo"}
              tasks={todo}
            />

            <TaskCol
              status={taskStatus.InProgress}
              colColor="#F59D0C"
              colName={"In Progress"}
              tasks={inProgress}
            />

            <TaskCol
              status={taskStatus.Done}
              colColor="#23C660"
              colName={"Done"}
              tasks={done}
            />
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
