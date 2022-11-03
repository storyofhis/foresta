package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/storyofhis/foresta/src/server/config"
	"github.com/storyofhis/foresta/src/server/httpserver"
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

	app := httpserver.NewRouter(router)
	app.Start(":" + os.Getenv("PORT"))
}
