---
sidebar_position: 1
---

# Console-Based Library System
# Description
A library management system developed in C# that allows for the administration of books, users, loans, reviews, and statistics from a console interface. The program implements a complete CRUD system with robust validations and advanced analytical functionalities.

# Main Features
## Book Management

- *Book Registration:* Title, author, category, publication year, and availability status

- *Full Listing:* Detailed visualization of all books

- *Updating:* Modification of any field for an existing book

- *Deletion:* Removal of books from the system

- *Advanced Search:* Filtering by title, author, or category with partial matching

## User Management

- *User Registration:* Full name, numeric ID, and email address

- *Robust Validations:* Verification of email format, name validation, and unique IDs

- *User Lookup:* Listing of all registered users

- *Data Updating:* Modification of personal information

- *Secure Deletion:* Removal with user confirmation

## Loan System

- *Book Loan:* Assignment of available books to registered users

- *Availability Control:* Automatic verification of book status

- *Duplicate Prevention:* A user cannot borrow the same book twice

- *Book Return:* Registration of returns with automatic status updates

- *Loan History:* Tracking of loan and return dates

# Reviews and Ratings System

- *Book Rating:* Scoring system from 0.0 to 5.0

- *Text Reviews:* Detailed comments with a 500-character limit

- *Rating Statistics:* Average, maximum, and minimum rating per book

- *Duplicate Prevention:* A user can only rate a book once

- *Review Lookup:* Viewing of comments per book

# Statistics Module

- *General Statistics:* Count of books, users, loans, and reviews

- *Most Borrowed Book:* Popularity ranking with a top 5

- *Best Rated Books:* Ranking by average rating

- *Most Active Users:* Statistics on loans and reviews per user

- *Availability Metrics:* Percentage of available books

# System Requirements

- *.NET 6.0* or higher

- *Operating System:* Windows, Linux, or macOS

- *Memory:* Minimum 4MB RAM

- *Storage:* 1MB of free space

# Installation and Execution

## Prerequisites

### Verify .NET version
dotnet --version

## Compilation

### Compile the project
dotnet build

## Execution

### Run the program
dotnet run

# Program Structure

## Global Variables

- *books:* List of books with structure [title, author, category, year, availability]

- *usuarios:* List of users with structure [name, ID, email]

- *prestamos:* List of loans with structure [user_ID, book_title, loan_date, return_date]

- *reseñas:* List of reviews with structure [book_title, user_ID, rating, text_review]

## Main Functions

## Book Management

- AgregarLibro(): Registration of new books with validations

- ListarLibros(): Display all books

- ActualizarLibro(): Modification of existing data

- EliminarLibro(): Removal of books from the system

- BuscarLibros(): Filtering by multiple criteria

## User Management

- RegistrarUsuario(): Creation of new users

- ConsultarUsuarios(): Listing of registered users

- ActualizarUsuario(): Modification of user data

- EliminarUsuario(): Removal of users

- ValidarNombre(), ValidarId(), ValidarCorreo(): Validation functions

## Loan System

- PrestarLibro(): Assignment of books to users

- DevolverLibro(): Registration of returns

- MostrarLibrosPrestados(): Listing of active loans

- UsuarioTieneLibroPrestado(): Verification of duplicate loans

## Reviews System

- CalificarLibro(): Assignment of numeric ratings

- EscribirReseña(): Creation of text reviews

- VerCalificaciones(): Consultation of rating statistics

- VerReseñas(): Visualization of comments

## Statistics

- MostrarEstadisticasGenerales(): General system metrics

- MostrarLibroMasPrestado(): Popularity ranking

- MostrarLibrosMasCalificados(): Ranking by rating

- MostrarEstadisticasUsuarios(): User activity statistics

## Implemented Validations

## Books

- Publication Year: Valid range between 1000 and current year

- Mandatory Fields: Title, author, and category cannot be empty

- Availability Status: Boolean values (available/not available)

## Users

- Full Name: Minimum first and last name, only letters and spaces

- ID: Numbers only, must be unique in the system

- Email: Valid format according to RFC standards

## Loans

- Availability: Only available books can be loaned

- Uniqueness: A user cannot borrow the same book twice

- Existence: User and book must exist in the system

## Reviews

- Ratings: Range from 0.0 to 5.0 with one decimal place

- Text Reviews: Maximum 500 characters, cannot be empty

- Uniqueness: A user can only rate a book once

## System Navigation

## Main Menu
### BIBLIOTECA
1. Libros
2. Usuarios
3. Préstamos
4. Reseñas
5. Estadísticas
6. Salir

# Submenus

Each main module contains specific submenus for its CRUD operations and additional functionalities.

# Error Handling

- Input Validation: Verification of data types and valid ranges

- Exception Handling: Use of TryParse() for secure conversions

- Informative Messages: Clear feedback to the user about errors

- Error Recovery: The system continues to function after input errors

# Technical Features

## Optimizations

- LINQ: Extensive use for efficient queries and filtering

- Lambda Expressions: More compact and readable code

- Helper Functions: Code reuse to avoid duplication

- Inline Validations: Verifications integrated into the main flow

# Data Structure

- Generic Lists: Use of List for dynamic storage

- String Arrays: Simple structure for user and loan data

- Dynamic Objects: List object for flexibility in book data

# Current Limitations

- Persistence: Data is lost when the program closes

- Concurrency: Does not support multiple simultaneous users

- Interface: Console-only, no graphical interface

- Capacity: Limited by available system memory

# Suggested Future Improvements

- Data Persistence: Implement saving to files or a database

- Graphical Interface: Development of an application with a GUI

- Authentication System: User login and roles

- Advanced Reports: Generation of PDF reports

- Notifications: Alert system for overdue loans

- Advanced Search: Multiple filters and search by dates

- Developed as part of Sprint 1 of the Voyager project.

# Version History

- v1.0.0: Initial implementation with basic book and user management

- v1.1.0: Added loans and returns system

- v1.2.0: Implemented reviews and ratings system

- v1.3.0: Added advanced statistics module

- v1.4.0: Code optimization and interface improvements

# Library system flowchart

<div style={{
    width: '100%', 
    height: 'auto', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: '20px'
}}>
  <iframe 
    src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=diagrama_flujo_voyager.drawio&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22P%C3%A1gina-1%22%20id%3D%22e_6-N1UFIQaPCidMHZc_%22%3E7V1bd%2BJGEv41foyP%2BqLbo%2BOZTHIy2clmNrd904DGVhYQR%2BC55NevBJKQqhrUBqm72uHFB4Rk4%2Bq611dVN%2BJ%2B%2BeVNkawff8rn6eKGe%2FMvN%2BLVDedhFJQ%2Fqwtf9xckF%2FsLD0U2319ihwvvs7%2FT%2BqJXX33K5ummd%2BM2zxfbbN2%2FOMtXq3S27V1LiiL%2F3L%2FtY77o%2F9V18pCiC%2B9nyQJf%2FT2bbx%2F3VyMeHq5%2Fn2YPj81fZkG8%2F2SZNDfX%2F8nmMZnnnzuXxOsbcV%2Fk%2BXb%2FavnlPl1UtGvosn%2FuuyOftl%2BsSFdbnQf%2Bc%2Fe4ePfjr9%2BvFsvfBf%2F03%2B9%2F%2FO3VN6z%2BPzbbr81%2FnM5LAtRv82L7mD%2Fkq2Tx%2BnD12yJ%2FWs3T6td65bvDPW%2FzfF1eZOXFv9Lt9mt9msnTNi8vPW6Xi%2FrT9Eu2%2FaN6%2FNav3%2F3Z%2BeTVl%2Fo37958bd6stsXXzkPV2z%2B7nx0e271rnsNkqim3yZ%2BKWXqKNjW7JcVDuj1xX83QFd06f6A%2BhDdpvkzL71PeUKSLZJt96jNWUvPnQ3vf4QjLF%2FUpPudE97%2F3U7J4qv%2FSD6tsluX4nBeLUoiq8%2Fz8mG3T9%2BtkR43PpRj3T%2BsoBT%2BlxTb9cvJ%2Frj%2BVUS0EtRYQ9dvPB5FijZw8dsSpeWx0KnFEpe%2BylVUSMeb3aSSjwDaVWHTVDgNSP6gdAlLaQSC%2B%2FynfbIukqCxWurq5Fzff3lUUKbLVLFsnC8QA%2FeM1rzpYrCkVwVRSIWOrUtGRiYOEUJEKqSkV0dhSsXv0riiSr50b1nm22m46v%2Fnn6kJH5wZ93vKZ33ehBu6PoMsF7vflyfvLF%2FtvfODF9l8%2Fnz0DZpM9WZc9HWVOTkplx5KKutE1wb3TPByutfOMSSgbHgJl459WHvB%2B1miTSbUHY3at21k%2BHzWGa5IXtjkOmB8%2FOm3e4P1cBNH0HCeRS%2Frvp8oPvSsZ0cvXs2znlIpVRc9F9pBttuVt32G%2F9DFffnjamPFJfb9HKCl97JOGCp%2BUycmcUmdCtfPFb%2FRQSs9rk%2FDQ9vJfPwXObQwHDgnE2zQtamHIKznY51ifNk9JoUjsbB6TdfWyJHGyWKSL%2FKFIliXh12mRld%2Bt%2FFXgs58PHwwJz8fsS9pkaafKDTHbAV4QuCJL5n3oSNMEBpKUEx0hmXqTbraNNJU%2FFtmHIt8cl6Uin6UbDevyIZn972HHC%2B%2BetotsNaGghNYzIbEzRse8oMSaghL7pAQlHhKU2uoQFxUJYyfrRoXxa6ltMGAajqw4LbvSfPGOvPxclAKTLCsJ8aov8ir9lC%2BeKs8tJS40AoZ%2FIrItNBGdZKZurp11RYZNJzK65enRBeasXEQMslmCe6fTX%2FABkC6bKPsVi6uSvpjjWMxoKWmMifgl3aS7vBJLGj19nyyyj9kscUFTcxgyh7bdG%2B45rqmnzBsz7pSuZl4MMmDegLJGT4BK6jTamrOrtr6c57g3en3swkAJaevXpUM9z8owdJY4pphj64rZxxHKu15RBevt8p%2Fd9klWmsaHVfl6VpJmlyauSFKexuKu%2FmCZzec76VLRvi9xI5CZgUyYVGTCAgWRxWRExjzbJzJ3j8gCgmMUoE2zRMaVwj6RsTUgT2SoMHwF5tMskcMBImM0CnkiBz4xTg6GdLLvHpHDgJhODoZ0Mq7ykSdyAInsWyZy495cPXAFA2pDxEdHw14mOKdA4nsMgiI%2FYh0X3sSoFnED1wrPcdroYucCWu1UAXY6CfRT%2BV6f%2BWMF70cK1vcnswNWs3%2FEWV8bM0MrERNg0AwAoh3LxLgJPGOsyYRZsyChVQtyVhLdnBjpImpCWhCB0C5IirJi1D5RWj4BIVCCqyfaqF4qJ4oTLlf35dlSSst9afvp7Stel40pJ3WozffudQulNzxIlpXDuPqwWe%2FoEiyqRN48%2B1S%2BfKhedhuJqu6h%2FQ3ld%2Bjcg9jFaE9RzG%2F7XUWs7cfq%2BKMNXLjrjsZTuaPMt9t7enkz4GQC1MjFMBjKHx0MdR6oAxRBWJOgP4bpCAP%2F5APTYDoauvawWlXT3z796ECbBkDCMKGQYsMoWv%2Fa0zsYWzgjyAL2hQ8Ksjj9wESCjKsIr%2BfZdifF2epjXiyT2aGtBNnrRtC17DQl8W%2FbF1v5tw4BaseW2JL%2FkHJ8E2p39Y%2BvAC5LLOHSxLdPm5krdjLkUFB0551NaCivnb%2BD4b0zhtKH%2BX0ZnJ5%2FEULX7dkP%2BJ4Jy4pj4Lelg%2ByK3PtI7u0bSP%2FayDyYqnVG7mPo7xqRyoZMXX93kS2zlStyGcG4wv4gjmgI8csRRclD%2BEQMs3y2gZIRHjjjPK7ah9kuwfGIJrNUxmgK94HVUGVw2%2FD1CPtGziOrI8jLqrqAUSrHDuYTjc198TXdpZjWZOjme9MCOkoAeGcBx7xvFOnIGqjllfmP8%2FQw84e0mB%2B7QBQh73CqUcjFrWLypNnYuZmucJWH42yuMTGWVm45xm2ALwv7C0Upsl%2Bl9ey2j3TEiB5eqZUPDUnipCSpBZVf9eNlx0oLA8yYVTfwOVB9M8dDK5ppv%2FkLBAr6CCgYK9IuZoGCgYOTeEypOK4rQ8HoPuB5SEEQc3PBDKwBaOl0BPnnxNxZBvoyuRfZdysxEOtutn1KFtnffTBWmyRFOvFAe%2BfgWD5IUXP7o%2FJY4Ayq%2BhK1N80sO4zBgAcsODi4I%2BsaLsVdtn9oYrWIa6At2qMjl0NuTVGr0rmTUgxBldyzPvueXac9aIQDNpyeC80lTgV3cBy%2FuuCFQFgaBS%2BE4fKS%2B2MIYXEqVtDZaGGWsaHxbaaxHEW%2BTXbrI8aDdsgQxL9K%2FjZM9xeI7ggbC0eGvSMcyjivRFC%2FiHUMDWNDgDDuIJkjaBMV6EazZOaYjNQHg0gveo4DuXvXKfQZTEfTmgHD%2BBVgfoI42h1YnNayrPabEwNNAcDgodptDTTFr0XQYa7W4H9iVTaOozqKuCm42MpXjM01HA%2BLq0AMs%2FmwQAhi2aNG0dJHBdA%2BVk7sWO1WbJ4vq6x3pLd8yt1G%2BqdKa%2Bhb%2B81fLMgR2r3AftVEOjNp7wKRGJ%2FR1SVJDkuSUQQObuJV9YzOwFpqc4VaJhjWi%2BHoUe15BW5YNmow0cfGH8AHhCcMbH1rCYt27laa24FGaw6L2aH98pzlIcWU8XtNiOGMHEsox3FsAr%2FX0OkIfm%2FersFupJS0kCLfKVIsjTItpNecwXDIaENML0wFcSQ4aJ4PwnOtdxbPTTRXIKEBtB%2BXCAcNoDnZ0p6RKYjV3aTdgW5n5ePMRSjaxzp%2B3e0szwbOMOZxrTuP7qWGDzQz4SZ2hRSzTxcHtwcp81KVV%2BCKO3YMyAuVO%2FoN82yzzlfZh4p%2FKTYtcQYgW1GD5emqfKZQ%2BU0n8gQqX4Ws3h2Qd0BL777yMLy6Mce6pDdcAYMhZxmp27e4OPv6LxwTkAcWoW4p1S42s8AigUGg7zP3KMuRtrc9KY3JIXitiwBEmEQOFR1Shsk8hKbl7pFZRgi2rMr7mSW0b7Vtt1eu1nOOQV1zQufY1037jb%2Bw9Dzf2IPdCL7opf00nmi8grG84%2BTjuyzgiUjf8oStfoj%2BuPf%2B%2FAbL7hUh8Wym42Pz3IV6BOd%2BX6WbtPxD5bV88WlXVE8WGo70Ml3t1Pxd9UCluLO8oBnSoLUavmoBtVToczYdzjKwmsYirdADXdkafzDjWQo9hllSMIZh8AEW1uu7Jk12cLtjq4grdG2mI6bQg3%2BiQocCx1V1edMK3cWNJDwK%2BmqdD0jY6I1C2pltIjN3Alhu5v1ENR57AfvZuJHMtmKrl4tJuwjFSoqOALOheHOeDplRc75bqN8hQ6NSFeGE%2B%2BlVQvCB0StV6licjO9GruatzXLEPLcQt2TtPLdxHDfu0fTdfGg%2FVSMRp%2FPdlMJlN7lKe%2Bsqi7R7fpuiDxUBUywlui%2Fdm49ZZ%2FPizX6raZUQ8irJw00PlPBYcGqhCOxXhyOsxn7b6a6iVGY7vcQS2jBvuN9S%2BCZRbmqN5MzgQeMo70i7i42cPlIMLNvMiuxDBsSFtLQID5ZHzWohpbzYHdRJPCZr5EBDYkZ3kc%2BLyUDKRITRQEwGH5D1eLVJY7LrXMkxmI4GyzEEvGsyT9Om6RoyTRMEkowAYVOBUHbVGc7exw46XOZkWbuxbnwDcuGx4uoYhbFPUAJU9SujY5%2B452L1yhj%2Fc11bRm2lUfPNiY99ggG4iEJsEYymNVTzd8n3I5kSCK6%2FKSWi1WamSvBRDxRJHqu1zlxlJBZevbfnnaqairTyZVyxZ6gz9antMTiWK3Nk9BNKPqvAqWZtH7uK0wmujHWdQUZNnmIkTxSCIVAQlkwlAJ5ZAXBm9pkFAWDamb1m4TQVAWA42eZANCS59fKKxN2SRuUhpC0Q2tBxFpNymyW3eazEg6FnnGpETM3hpOcL9JvBnAopVHvhhUkt6TuYQ%2B0J04RFaM4UsA01FWmlULlix86bdJWWgqDwFSgBNRioaEqpQlqahTU5WDE3ZW5Ca%2FJxVsFcQu4KQgOzK7libV53YJO33I9nqrrfOpN%2BQPGcsNAKMEpF%2BortV4aF9jrMctj3c8%2Bs4cktClTJYYtqR7LOnHyWzMp%2Fy8kxmLDlR0rra2naUBLORNsdVfpX1QGCTmBWo98dHUbqQdVoMlOuFGocaLk4viviYH2oyuZM1WOppCvuXXWSrqhV2OBYNHXCB9HVyZ5gOAdNKBKkRuk6tDIbJwbIE1kCIjNVFloF0pyMyJarkmdlKydIryhpo1uTpDEBzYesxUWXO4bu59xAw7XdEuB5ufHRY56LeC2gVezA%2FjI6YNOVPgEHk7HYRzpWOWvZ96dSsrhE%2Bkv6UKSbXY206kTwup0G6yJbzbJ1dd01AydkDLTQobGt60f4Jk2c3d0GpE2cqoDgkI2L%2FdNjgqzYOKuZPco2TpvZ2k33RKycolqF9Heio7%2BN20IGBUYRb0QKZSwnU8ZDI8Sxh0je6EkOm7eZav6Kz28VlOZTUboVy6vZw7TRRduRNHvtbA1KZo%2FTmaXuLru1O5mJGD4%2BVuBifOMLXEsS6uKfJ7N8TWh81PJhASJv%2BQKAqlWu2DaaNOY4G9%2BnMs53kqcyWlFin8o4N%2B9iLSkAhBWe7RodfxlboYIAElYqkkBGi5%2FXTYjHaaMLyibpDQsZ8i57kPCGBZnJss9oAuDj47su4zeLkx9OfnH33GGA6xdSas6CmGw8rGLts%2FO75JBq8j1MZrNmD4N%2BnF8lJwI0K9E3uLNPTecXGHbA4E5I22GHGIIEOZg8hhVTpWo2S2W70PTzfBcp2yUrOs5LOu7Glef0NdLK8DXpLlt9CPysRgT5LE%2FV4mGHpA7bt3rYlEvTUncev8XxC%2BojvVb5Lj9UknkNKfjp%2Bcw28hoS%2B7knIuDB%2BbqdCFlvoq7puBmO0RGqMpISSzhZt8GQD%2Bxg3NwObG7JbDuekzgP737cDOa5y3YmjjUqD4GBHCyJ%2BpIclXFTqvO5CdQ8KmznJpow%2FkXlJqDGELZ5OXAvgpliJcnJZngbMxTPcnhjaPZDdtrjRQ%2FwkddJnKTrP2ibRAjq9zJQzYEyvE%2FQbhvHeRMzRAjEn5U%2Bj%2BFslaK1jNgwDbWqfxlzAGI4YME6eCvAsQt1QfrGu%2FW8CBjSKJpMki60r7Tk6IXsLIfpsUix3sWsHL0MEGQEy7yhwWXwasLiUMpJjoV7ZSPbEzXC6wTu47TR7tEYfwPqWdFT4EVAbtnprqAQLuMDD0wTPTV0RZuMm7lZRwaEUxqS5Uu8nVWRCTE7JivEYan7yVNQbxG%2Boo%2FSrMq0vMX%2BXHyE7GrNyn0eyjuNHXY%2BY%2B0RLURM6ODA6dugbyVvmTR73O3uKkILxMu3RZ5vu%2BasVFuPP%2BXztLrj%2Fw%3D%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E" 
    title="Diagrama de Draw.io"
    style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '1200px',
        height: '80vh',
        aspectRatio: '16/9'
    }}
    allowFullScreen>
  </iframe>
</div>

  # Coders:

- Jeronimo Gutierrez
- Brahiam Ruiz
- Juan David Barrera
- Diego Zuluaga

  # Team:
  Voyager

