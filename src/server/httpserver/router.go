package httpserver

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/storyofhis/foresta/src/server/common"
	"github.com/storyofhis/foresta/src/server/httpserver/controllers"
)

type router struct {
	router *gin.Engine
	user   *controllers.UserController
}

func NewRouter(r *gin.Engine, user *controllers.UserController) *router {
	return &router{
		router: r,
		user:   user,
	}
}

func (r *router) Start(port string) {
	v1 := r.router.Group("/v1")
	v1.GET("/", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"status": "server-run",
		})
	})
	v1.POST("/users/register", r.user.Register)
	v1.POST("/users/login", r.user.Login)
	v1.PUT("/users/:userId", r.verifyToken, r.user.Update)
	v1.DELETE("/users", r.verifyToken, r.user.Delete)

	r.router.Run(port)
}

func (r *router) verifyToken(ctx *gin.Context) {
	bearerToken := strings.Split(ctx.Request.Header.Get("Authorization"), "Bearer ")
	if len(bearerToken) != 2 {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
			"error": "invalid bearer token",
		})
		return
	}
	claims, err := common.ValidateToken(bearerToken[1])
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
			"error": err.Error(),
		})
		return
	}
	ctx.Set("userData", claims)
	// ctx.Set("socialMediaData", claims)
}
