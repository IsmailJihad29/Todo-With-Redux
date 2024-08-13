import TodoContainer from "@/components/todos/todoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-3xl font-semibold text-center my-10">Todo App</h1>
      <TodoContainer/>
    </Container>
  );
};

export default Todo
