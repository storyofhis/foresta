package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/storyofhis/foresta/src/server/config"
	"github.com/storyofhis/foresta/src/server/httpserver"
	"github.com/storyofhis/foresta/src/server/httpserver/controllers"
	"github.com/storyofhis/foresta/src/server/httpserver/repositories/gorm"
	"github.com/storyofhis/foresta/src/server/httpserver/services"
)

func init() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Println(err)
	}
}
func main() {
	db, err := config.ConnectDB()
	if err != nil {
		log.Println(err)
		panic(err)
	}

	router := gin.Default()
	config.GenerateJwtSignature()

	userRepo := gorm.NewUserRepo(db)
	userSvc := services.NewUserSvc(userRepo)
	userHandler := controllers.NewUserController(userSvc)

	app := httpserver.NewRouter(router, userHandler)
	app.Start(":" + os.Getenv("PORT"))
}
