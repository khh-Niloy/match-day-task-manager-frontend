import { taskStatus, type ITaskArr } from "@/interface-type/interfaceAndTypes";
import { baseApi } from "../../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["task"],
    }),
    getAllTask: builder.query({
      query: () => ({
        url: "/tasks",
        method: "GET",
      }),
      transformResponse: (response: { data: ITaskArr[] }) => {
        const tasks = response.data || [];
        return {
          todo: tasks.filter((t: ITaskArr) => t.status === taskStatus.ToDo),
          inProgress: tasks.filter(
            (t: ITaskArr) => t.status === taskStatus.InProgress,
          ),
          done: tasks.filter((t: ITaskArr) => t.status === taskStatus.Done),
        };
      },
      providesTags: ["task"],
    }),
    updateTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}/status`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["task"],
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useGetAllTaskQuery,
  useUpdateTaskMutation,
} = authApi;
