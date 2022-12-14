package gorm

import (
	"context"
	"strings"
	"time"

	"github.com/storyofhis/foresta/src/server/httpserver/repositories"
	"github.com/storyofhis/foresta/src/server/httpserver/repositories/models"
	"gorm.io/gorm"
)

type userRepo struct {
	db *gorm.DB
}

func NewUserRepo(db *gorm.DB) repositories.UserRepo {
	return &userRepo{
		db: db,
	}
}

func (r *userRepo) CreateUser(ctx context.Context, user *models.User) error {
	user.CreatedAt = time.Now()
	return r.db.WithContext(ctx).Create(user).Error
}

func (r *userRepo) FindUserByID(ctx context.Context, id int) (*models.User, error) {
	user := new(models.User)
	err := r.db.WithContext(ctx).Where("id = ?", id).Take(user).Error
	return user, err
}

func (r *userRepo) FindUserByEmail(ctx context.Context, email string) (*models.User, error) {
	user := new(models.User)
	err := r.db.WithContext(ctx).Where("LOWER(email) = ?", strings.ToLower(email)).Take(user).Error
	return user, err
}

func (r *userRepo) FindUserByUsername(ctx context.Context, username string) (*models.User, error) {
	user := new(models.User)
	err := r.db.WithContext(ctx).Where("LOWER(username) = ?", strings.ToLower(username)).Take(user).Error
	return user, err
}

func (r *userRepo) UpdateUser(ctx context.Context, user *models.User) error {
	user.UpdatedAt = time.Now()
	return r.db.WithContext(ctx).Model(user).Updates(*user).Error
}

func (r *userRepo) DeleteUser(ctx context.Context, id int) error {
	return r.db.WithContext(ctx).Delete(&models.User{}, "id = ?", id).Error
}
