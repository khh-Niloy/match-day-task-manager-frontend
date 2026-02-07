import { baseApi } from "../../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: (data) => ({
        url: "/task",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["task"],
    }),
    getAllTask: builder.query({
      query: () => ({
        url: "/task",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        const tasks = response.data || [];
        return {
          todo: tasks.filter((t: any) => t.status === "To-Do"),
          inProgress: tasks.filter((t: any) => t.status === "In-Progress"),
          done: tasks.filter((t: any) => t.status === "Done"),
        };
      },
      providesTags: ["task"],
    }),
  }),
});

export const { useCreateTaskMutation, useGetAllTaskQuery } = authApi;
