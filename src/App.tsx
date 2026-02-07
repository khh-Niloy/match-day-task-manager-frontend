import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

function App() {
  return (
    <div>
      <div className="w-full text-3xl font-bold text-center py-16 bg-[#FAFBFC]">
        Test Match Day Task Manager
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
