import type { ITaskArr } from "@/interface-type/interfaceAndTypes";
import { Draggable, Droppable } from "@hello-pangea/dnd";

export const TaskCol = ({
  colName,
  tasks,
  colColor,
  status,
}: {
  colName: string;
  tasks: ITaskArr[];
  colColor: string;
  status: string;
}) => {
  return (
    <div className="w-full bg-[#FAFBFC] border border-black/2 p-3 rounded-3xl">
      <div
        className="p-2.5 rounded-full flex items-center gap-2 text-sm"
        style={{ backgroundColor: colColor }}
      >
        <div className="rounded-xl px-3 py-1 bg-white font-medium">
          <p className="text-sm font-medium" style={{ color: colColor }}>
            {tasks?.length}
          </p>
        </div>
        <p className="text-md font-semibold text-white">{colName}</p>
      </div>
      <Droppable droppableId={status}>
        {(provided) => (
          <div
            className="flex flex-col gap-4 pt-5"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks?.map((task: ITaskArr, index: number) => (
              <Draggable key={task._id} draggableId={task._id} index={index}>
                {(provided) => (
                  <div
                    className="w-full border p-3 border-gray-100 shadow-sm/5 rounded-2xl bg-white"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <p className="font-medium">{task.title}</p>
                    <h1 className="text-sm text-gray-500 break-all">
                      {task.description}
                    </h1>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
