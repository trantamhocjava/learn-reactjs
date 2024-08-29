import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

ToDoFeature.propTypes = {};

function ToDoFeature(props) {
	const initTodoList = [
		{
			id: 1,
			title: "Eat",
			status: "new",
		},

		{
			id: 2,
			title: "Sleep",
			status: "completed",
		},
		{
			id: 3,
			title: "Code",
			status: "new",
		},
	];

	const [todoList, setTodoList] = useState(initTodoList);

	const handleTodoClick = (todo, idx) => {
		// clone current array to the new one
		const newTodoList = [...todoList];

		console.log(todo, idx);

		// toggle state
		newTodoList[idx] = {
			...newTodoList[idx],
			status:
				newTodoList[idx].status === "new" ? "completed" : "new",
		};

		// update todoList
		setTodoList(newTodoList);
	};

	return (
		<div>
			<h3>Todo List</h3>
			<TodoList todoList={todoList} onTodoClick={handleTodoClick} />
		</div>
	);
}

export default ToDoFeature;
