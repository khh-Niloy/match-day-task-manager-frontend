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
  }),
});

export const { useCreateTaskMutation } = authApi;
