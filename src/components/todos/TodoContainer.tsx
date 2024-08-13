import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5 px-5">
        <AddTodoModal />
        <TodoFilter/>
      </div>
      <div className="w-full h-full rounded-xl bg-primary-gradient p-[5px] space-y-3">
        <div className="bg-white w-full h-full rounded-lg space-y-5 p-5">
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>

        {/* <div className="bg-white p-5 text-2xl font-bold flex justify-center items-center rounded-xl">
          <p>Tere Is nothing to Do</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
