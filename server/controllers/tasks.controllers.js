import { pool } from '../db.js';

export const getTasks = async (req, res) => {
	try {
		const [result] = await pool.query('SELECT * FROM tasks ORDER BY createAt ASC');
		res.json(result);
	} catch (error) {
		return res.status(500).json({ mensaje: error.mensaje });
	}
};
export const getTask = async (req, res) => {
	try {
		const [result] = await pool.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]);
		if (result.length === 0) res.status(404).json({ message: 'Task not found' });
	} catch (error) {
		res.json(result[0]);
		return res.status(500).json({ mensaje: error.mensaje });
	}
};
export const createTask = async (req, res) => {
	try {
		const { title, description } = req.body;
		const [result] = await pool.query('INSERT INTO tasks(title, description) VALUES (?, ?)', [
			title,
			description,
		]);
		res.json({
			id: result.insertId,
			title,
			description,
		});
	} catch (error) {
		return res.status(500).josn({ mensaje: error.mensaje });
	}
};
export const updateTask = async (req, res) => {
	try {
		const result = await pool.query('UPDATE tasks SET ? WHERE id = ?', [req.body, req.params.id]);
		res.json(result);
	} catch (error) {
		return res.status(500).josn({ mensaje: error.mensaje });
	}
};
export const deleteTask = async (req, res) => {
	try {
		const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [req.params.id]);
		if (result.affectedRows === 0) return res.status(404).json({ message: 'Task not found' });
		return res.sendStatus(204);
	} catch (error) {
		return res.status(500).josn({ mensaje: error.mensaje });
	}
};
