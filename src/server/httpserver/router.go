package httpserver

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type router struct {
	router *gin.Engine
}

func NewRouter(r *gin.Engine) *router {
	return &router{
		router: r,
	}
}

func (r *router) Start(port string) {
	r.router.GET("/", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"status": "server-run",
		})
	})

	r.router.Run(port)
}
