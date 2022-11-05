package services

import (
	"context"

	"github.com/storyofhis/foresta/src/server/httpserver/controllers/params"
	"github.com/storyofhis/foresta/src/server/httpserver/controllers/views"
)

type UserSvc interface {
	Register(ctx context.Context, user *params.Register) *views.Response
	Login(ctx context.Context, user *params.Login) *views.Response
	UpdateUser(ctx context.Context, id int, user *params.UpdateUser) *views.Response
	DeleteUser(ctx context.Context, id int) *views.Response
}
