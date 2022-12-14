package repositories

import (
	"context"

	"github.com/storyofhis/foresta/src/server/httpserver/repositories/models"
)

type UserRepo interface {
	CreateUser(ctx context.Context, user *models.User) error
	UpdateUser(ctx context.Context, user *models.User) error
	FindUserByID(ctx context.Context, id int) (*models.User, error)
	FindUserByEmail(ctx context.Context, email string) (*models.User, error)
	FindUserByUsername(ctx context.Context, username string) (*models.User, error)
	DeleteUser(ctx context.Context, id int) error
}
