import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { useCreateTaskMutation } from "@/redux/features/task/task.api";
import toast from "react-hot-toast";
import { Plus } from "lucide-react";

export const CreateTaskButton = () => {
  const [createTask] = useCreateTaskMutation();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await createTask(data).unwrap();
      toast.success("Task created successfully");
      reset();
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#5046E4] hover:bg-[#4338CA] text-white rounded-full px-6 py-5 transition-all duration-200 shadow-md hover:shadow-lg flex gap-2 border-none">
          <span className="font-medium">Create Task</span>
          <Plus className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className=" p-0 overflow-hidden rounded-3xl border-none shadow-2xl bg-white">
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">
              Title
            </label>
            <input
              className="w-full mt-2 bg-white border border-gray-200 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#5046E4]/20 focus:border-[#5046E4] transition-all placeholder:text-gray-400"
              {...register("title", { required: true })}
              type="text"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">
              Description
            </label>
            <textarea
              className="w-full mt-2 bg-white border border-gray-200 rounded-2xl p-4 text-sm min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#5046E4]/20 focus:border-[#5046E4] transition-all resize-none placeholder:text-gray-400"
              {...register("description")}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#5046E4] hover:bg-[#4338CA] text-white rounded-2xl py-7 font-bold text-lg transition-all shadow-lg hover:shadow-[#5046E4]/25 border-none"
          >
            Create Task
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
