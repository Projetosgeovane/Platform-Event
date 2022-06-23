import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"


const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title 


      teacher {
        name
      }
      
    }
  }


`


interface Lesson {
  id: String;
  title: string;
}


function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  console.log(data);


  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
