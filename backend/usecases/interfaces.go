package usecases

import "github.com/caioh123/todo-golang/backend/entities"

type TodosRepository interface {
	GetAllTodos() ([]entities.Todo, error)
}
