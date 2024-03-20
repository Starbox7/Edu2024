package com.example.demo.controller

import com.example.demo.model.Todo
import com.example.demo.service.TodoService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@GetMapping("/")
fun index(model: Model): String {
    val todos = todoService.listTodos() // TodoService를 통해 모든 Todo 항목을 가져옵니다.
    model.addAttribute("todos", todos) // 모델에 Todo 리스트를 추가합니다.
    return "index" // Thymeleaf 템플릿 이름을 반환합니다.
}


@RestController
@RequestMapping("/api/todos")
class TodoController(private val todoService: TodoService) {

    @GetMapping
    fun listTodos(): List<Todo> = todoService.listTodos()

    @PostMapping
    fun createTodo(@RequestBody todo: Todo): Todo = todoService.createTodo(todo)

    @GetMapping("/{id}")
    fun getTodoById(@PathVariable id: Long): ResponseEntity<Todo> =
        todoService.getTodoById(id)?.let {
            ResponseEntity(it, HttpStatus.OK)
        } ?: ResponseEntity(HttpStatus.NOT_FOUND)

    @PutMapping("/{id}")
    fun updateTodo(@PathVariable id: Long, @RequestBody todo: Todo): ResponseEntity<Todo> =
        try {
            ResponseEntity(todoService.updateTodo(id, todo), HttpStatus.OK)
        } catch (e: Exception) {
            ResponseEntity(HttpStatus.NOT_FOUND)
        }

    @DeleteMapping("/{id}")
    fun deleteTodo(@PathVariable id: Long): ResponseEntity<Void> =
        todoService.getTodoById(id)?.let {
            todoService.deleteTodo(id)
            ResponseEntity<Void>(HttpStatus.NO_CONTENT)
        } ?: ResponseEntity(HttpStatus.NOT_FOUND)
}
