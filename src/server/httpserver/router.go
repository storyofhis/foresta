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
	r.router.GET("/", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"status": "server-run",
		})
	})
	r.router.POST("/v1/users/register", r.user.Register)
	r.router.POST("/v1/users/login", r.user.Login)
	r.router.PUT("/v1/users/:userId", r.verifyToken, r.user.Update)
	r.router.DELETE("/v1/users", r.verifyToken, r.user.Delete)

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
