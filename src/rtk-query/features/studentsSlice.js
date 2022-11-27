import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const studentsApi = createApi({
    reducerPath: "studentsApi",
    baseQuery: fetchBaseQuery({baseUrl : "http://localhost:3001"}),
    endpoints: (builder) => {
        return {
            getallStudents: builder.query({
                query: () => ({url : "/students"})
            })
        }
    }
})

export const {useGetallStudentsQuery,reducer,middleware,reducerPath} = studentsApi