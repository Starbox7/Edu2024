package com.example.demo.repository

import com.example.demo.model.Todo
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface TodoRepository : JpaRepository<Todo, Long> {
    // 기본적인 CRUD 메서드들이 JpaRepository에 의해 자동으로 제공됩니다.
}
