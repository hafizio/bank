package main

import (
	"net/http"
	"strconv"
	"math"
	"fmt"
	"math/rand"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

type Transfer struct {
	//not sure if bankaccount needed to include in the struct
	//Bankaccount_transferor string `json:"bankaccount_transferor"`
	//Bankaccount_transferee string `json:"bankaccount_transferee"`
	Message string `json:"message"`
	Balance_transferor float64 `json:"balance_transferor"`
	//Balance_transferee float64 `json:"balance_transferee"`
	
}

func status(balance_transferor, balance_transferee, transfer_amount float64) string {
	var balance_remaining float64
	var status string
	balance_remaining = balance_transferor - transfer_amount
	if balance_remaining < 0 {
		status = fmt.Sprintf("Balance is insufficient. Request aborted. Balance is short in amount of MYR %0.2f ", math.Abs(balance_remaining))
	} else {
		status = fmt.Sprintf("Transfer succeeds: Balance remain MYR %0.2f", balance_remaining)
	}
	return status
}

func result(balance_transferor, balance_transferee, transfer_amount float64) (float64, float64) {
	var balance_remaining float64
	balance_remaining = balance_transferor - transfer_amount

	if balance_remaining < 0 {
	} else {
		balance_transferee += transfer_amount
		balance_transferor -= transfer_amount
	}
	return balance_transferor, balance_transferee
}

func main() {
	e := echo.New()
	e.Use(middleware.CORS())

	e.POST("/", func(c echo.Context) error {
		//bankaccount_transferor, _ := c.FormValue("bankaccount_transferor")
		//bankaccount_transferee, _ := c.FormValue("bankaccount_transferee")
		balance_transferor, _ := strconv.ParseFloat(c.FormValue("balance_transferor"), 64)
		balance_transferee := math.Ceil((rand.Float64() * 1000) * 100) / 100
		transfer_amount, _ := strconv.ParseFloat(c.FormValue("transfer_amount"), 64)
		ans := status(balance_transferor, balance_transferee, transfer_amount)
		balance_transferor, balance_transferee = result(balance_transferor, balance_transferee, transfer_amount)

			transfer := &Transfer{
				Message: ans,
				Balance_transferor: balance_transferor,
				//Balance_transferee: balance_transferee,
			}

		return c.JSON(http.StatusOK, transfer)
	})

	e.Logger.Fatal(e.Start(":3000"))
}
