import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const studentsApi = createApi({
    reducerPath: "studentsApi",
    tagTypes: ["Students","Student"],
    baseQuery: fetchBaseQuery({baseUrl : "http://localhost:3001"}),
    endpoints: (builder) => {
        return {
            getallStudents: builder.query({
                query: () => ({url : "/students"}),
                providesTags: ["Students"]
            }),
            getStudent: builder.query({
                query: (id) => ({url : `/students/${id}`}),
                providesTags: ["Student"]
            }),
            addStudent: builder.mutation({
                query: (studentData) => ({url : `/students/`, method: "POST", body: studentData}),
                invalidatesTags: ["Students"]
            }),
            updateStudent: builder.mutation({
                query: ({id, ...rest}) => ({url : `/students/${id}`, method: "PUT", body: rest}),
                invalidatesTags: ["Students","Student"]
            }),
            updateFavoriteStudent: builder.mutation({
                query: ({id, ...rest}) => ({url : `/students/${id}`, method: "PUT", body: rest}),
                invalidatesTags: ["Student"]
            }),
            deleteStudent: builder.mutation({
                query: (id) => ({url : `/students/${id}`, method: "DELETE"}),
                invalidatesTags: ["Students"]
            }),
        }
    }
})

export const {useGetallStudentsQuery,reducer,middleware,useUpdateStudentMutation,useAddStudentMutation,useGetStudentQuery,useDeleteStudentMutation,useUpdateFavoriteStudentMutation,reducerPath} = studentsApi