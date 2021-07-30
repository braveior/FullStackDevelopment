
import TaskList from "./TaskList";
import useFetch from "../useFetch";
import Container from '@material-ui/core/Container';
const Home = () => {
  const { error, isPending, data: tasks } = useFetch('http://localhost:28908/Task/getTasks') 
  
  
  return (
    <Container maxWidth="sm">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { tasks && <TaskList tasks={tasks} /> }
      </Container>
    )
  }
  
  export default Home