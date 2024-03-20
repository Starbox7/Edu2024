package com.example.demo.model

import javax.persistence.*
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.GeneratedValue


@Entity
@Table(name = "todos")
data class Todo(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false)
    val title: String,

    @Column(nullable = false)
    var completed: Boolean = false
)
