import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { Button } from "./components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm, type FieldValues } from "react-hook-form";
import { useCreateTaskMutation } from "./redux/features/task/task.api";
import toast from "react-hot-toast";

function App() {
  const { register, handleSubmit } = useForm();
  const [createTask] = useCreateTaskMutation();

  const onSubmit = async (data: FieldValues) => {
    const res = await createTask(data);
    console.log(res);
    if (res.data) {
      toast.success("Task created successfully");
    }
  };

  return (
    <div>
      <div className="w-full text-3xl font-bold text-center py-16 bg-[#FAFBFC]">
        Test Match Day Task Manager
      </div>

      <div className="flex justify-end px-16 mb-4">
        <Dialog>
          <DialogTrigger>
            <Button>Create Task</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4"
                >
                  <input
                    {...register("title")}
                    type="text"
                    placeholder="Title"
                  />
                  <input
                    {...register("description")}
                    type="text"
                    placeholder="Description"
                  />
                  <button type="submit">Create</button>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="px-16">
        <DragDropContext
          onDragEnd={(e) => {
            console.log(e);
          }}
        >
          <div className="w-full h-screen bg-white flex">
            <div className="w-full h-full bg-gray-100">
              <div className="p-4 bg-[#5046E4] text-white">To-Do</div>
              <Droppable droppableId="todo">
                {(provided) => (
                  <div
                    className="flex flex-col gap-4"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <Draggable draggableId="todo-1" index={0}>
                      {(provided) => (
                        <div
                          className="w-full h-16 bg-black"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          asd
                        </div>
                      )}
                    </Draggable>
                    <Draggable draggableId="todo-1" index={0}>
                      {(provided) => (
                        <div
                          className="w-full h-16 bg-black"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          asd
                        </div>
                      )}
                    </Draggable>
                  </div>
                )}
              </Droppable>
            </div>
            <div className="w-full h-full bg-gray-100">
              <Droppable droppableId="doing">
                {(provided) => (
                  <div
                    className="flex flex-col gap-4"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <Draggable draggableId="doing-1" index={0}>
                      {(provided) => (
                        <div
                          className="w-full h-16 bg-green-500"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          asd
                        </div>
                      )}
                    </Draggable>
                    <Draggable draggableId="doing-2" index={1}>
                      {(provided) => (
                        <div
                          className="w-full h-16 bg-green-500"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          asd
                        </div>
                      )}
                    </Draggable>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
            <div className="w-full h-full bg-gray-100">
              <Droppable droppableId="done">
                {(provided) => (
                  <div
                    className="flex flex-col gap-4"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <Draggable draggableId="done-1" index={0}>
                      {(provided) => (
                        <div
                          className="w-full h-16 bg-blue-500"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          asd
                        </div>
                      )}
                    </Draggable>
                    <Draggable draggableId="done-2" index={1}>
                      {(provided) => (
                        <div
                          className="w-full h-16 bg-blue-500"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          asd
                        </div>
                      )}
                    </Draggable>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
