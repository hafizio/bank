## Project
- Banking System
  - Demo of 3 back-end web services such as balance checking, perform transfers of monies from their bank account to transferor's and calculate monthly repayments for car loan. 

## Team Members
- WQD180041 - MUHAMMAD HAFIZ BIN KHAIRUDIN
- WQD190039 - JONATHAN KOW YEE SENG
- WQD170100 - SYAIFUL ANUAR BIN ABD LATIF
- WQD180027 - LIM SHIEN LONG

## Application Architecture
- Microservices are isolated using Docker and orchestrated using Docker Compose
- Each service has a webserver on a dedicated port in localhost
- 3 web services are written in Go (https://golang.org/) - Backend
- 1 client service is written in JavaScript - Frontend

## Application Features
### User can check balance
- User will be able to check their account balance from their 'Savings Account'
- User even display user's unique ID

### User can transfer money from their balance
- User will input his/her bank account, transferee's bank account, and transfer amount.
- The program will calculate if the transferor's balance is sufficient to transfer.
- If not, the program will abort the request; whereas, if yes, the transfer will succeed
- The balance amount of transferor will be deducted and the balance amount of transferee will be added with the amount of transfer.

### User can calculate loan
- User will be able to calculate monthly car loan payments required. 
- Input parameters are: Car price, downpayment, loan period (years), interest rate.
- Output parameter: Monthly payment.
- The car loan calculation formula:
  - (((carprice - downpayment) * (interest / 100) * periodyear) + (carprice - downpayment))/(periodyear * 12)

## Client Service (Frontend) 

### Microservices Orchestration using Docker
![Microservices](/screenshots/microservices.png?raw=true "Microservices")

### Home Page
![Homepage](/screenshots/homepage.png?raw=true "Home Page")

### Balance Page
![Balance](/screenshots/balance.png?raw=true "Balance Page")

### Transfer Page
![Transfer](/screenshots/transfer.png?raw=true "Transfer Page")