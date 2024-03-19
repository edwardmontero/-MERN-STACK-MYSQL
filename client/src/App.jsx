import { Route, Routes } from 'react-router-dom';
import TaskForm from './pages/TaskForm';
import NotFound from './pages/NotFound';
import Navbar from './Components/Navbar';
import TasksPage from './pages/TasksPage';
import { TaskContextProvider } from './context/TaskProvider';
function App() {
	return (
		<div className="bg-zinc-200 h-screen">
			taskP
			<Navbar />
			<div className="container mx-auto py-4 px-10">
				<TaskContextProvider>
					<Routes>
						<Route path="/" element={<TasksPage />} />
						<Route path="/new" element={<TaskForm />} />
						<Route path="/edit/:id" element={<taskForm />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</TaskContextProvider>
			</div>
		</div>
	);
}

export default App;
