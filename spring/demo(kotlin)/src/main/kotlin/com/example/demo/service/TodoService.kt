package com.example.demo.service

import com.example.demo.model.Todo
import com.example.demo.repository.TodoRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class TodoService(private val todoRepository: TodoRepository) {

    fun listTodos(): List<Todo> = todoRepository.findAll()

    fun createTodo(todo: Todo): Todo = todoRepository.save(todo)

    fun getTodoById(id: Long): Todo? = todoRepository.findById(id).orElse(null)

    @Transactional
    fun updateTodo(id: Long, updatedTodo: Todo): Todo {
        val todo = todoRepository.findById(id).orElseThrow { Exception("Todo not found") }
        todo.title = updatedTodo.title
        todo.completed = updatedTodo.completed
        return todoRepository.save(todo)
    }

    fun deleteTodo(id: Long) = todoRepository.deleteById(id)
}
