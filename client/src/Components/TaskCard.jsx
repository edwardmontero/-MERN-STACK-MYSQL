import { useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskProvider';
function TaskCard({ task }) {
	const { deleteTask, toggleTaskDone } = useTasks();
	const navigate = useNavigate();

	const handleDone = async () => {
		await toggleTaskDone(task.id);
	};

	return (
		<div className="bg-zinc-700 text-white rounded-md p-4">
			<header className="flex justify-between">
				<h2 className="text-sm font-bold">{task.title}</h2>
				<span>{task.done == 1 ? '✅' : '❌'}</span>
			</header>
			<p className="text-xs">{task.description}</p>
			<span>{task.createAt}</span>
			<div className="flex gap-x-2">
				<button className="bg-red-700 px-2 py-1 text-white" onClick={() => deleteTask(task.id)}>
					delete
				</button>
				<button
					className="bg-slate-400 px-2 py-1 text-black"
					onClick={() => navigate(`/edit/${task.id}`)}
				>
					edit
				</button>
				<button className="bg-green-500 px-2 py-1 text-black" onClick={() => handleDone(task.done)}>
					toggle task
				</button>
			</div>
		</div>
	);
}

export default TaskCard;
