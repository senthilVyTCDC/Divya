package com.example.backend.repository;

import com.example.backend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

// This interface gives you built-in methods like save(), findAll(), deleteById(), etc.
public interface StudentRepository extends JpaRepository<Student, Long> {
}
