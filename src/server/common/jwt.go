package common

import (
	"errors"

	"github.com/golang-jwt/jwt"
	"github.com/storyofhis/foresta/src/server/config"
)

var (
	ErrTokenInvalid  = errors.New("token invalid")
	ErrTokenInactive = errors.New("token inactive")
)

type CustomClaims struct {
	Id int `json:"id"`
	jwt.StandardClaims
}

func ValidateToken(tokenString string) (*CustomClaims, error) {
	token, err := jwt.ParseWithClaims(tokenString, &CustomClaims{}, func(token *jwt.Token) (interface{}, error) {
		return config.GetJwtSignature(), nil
	})
	if err != nil {
		return nil, err
	}

	if token.Valid {
		if claims, ok := token.Claims.(*CustomClaims); ok {
			return claims, nil
		} else {
			return nil, ErrTokenInvalid
		}
	} else if ve, ok := err.(*jwt.ValidationError); ok {
		if ve.Errors&jwt.ValidationErrorMalformed != 0 {
			return nil, ErrTokenInvalid
		} else if ve.Errors&(jwt.ValidationErrorExpired|jwt.ValidationErrorNotValidYet) != 0 {
			return nil, ErrTokenInactive
		} else {
			return nil, ErrTokenInvalid
		}
	} else {
		return nil, ErrTokenInvalid
	}
}
