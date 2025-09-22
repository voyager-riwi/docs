# Concert and Ticket Management System - Team1

## Project Description

RiwiMusic is a console application developed in C# with .NET 8.0 that provides a complete management system for concerts, clients, and ticket sales. The application allows managing musical events, maintaining a client database, and processing ticket sales transactions with advanced query and reporting functionalities.

## System Architecture

### Use Case Diagram

<div style={{
    width: '100%', 
    height: 'auto', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: '20px'
}}>
  <iframe 
    src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=RiwiMusicCasosUso.drawio&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22P%C3%A1gina-1%22%20id%3D%22MwNYhBL6olTumzKgF1Hk%22%3E5Vzbcqs2FP2aPJ4ON4H9mCY%2ByXSSTsZpe9pHBRSbFiNXCF%2FO11fYEhcJ23RikMh5StiIi9Zee2ttSfjGvVvtHghcL59xhJIbx4p2N%2B79jePYlgPYn8KyP1o8MD0aFiSOeKPK8Bp%2FR%2BJKbs3jCGWNhhTjhMbrpjHEaYpC2rBBQvC22ewdJ82nruECKYbXECaq9Vsc0eXROnGCyv6I4sVSPNn2ef9WUDTmPcmWMMLbmsmd3bh3BGN6%2FG%2B1u0NJAZ7A5Xjd1xNnyxcjKKVdLpjP58jZ3O6yOcp%2BmT1%2By399%2F%2F7F8Y632cAk5z3mb0v3AgIUMUT4ISZ0iRc4hcmssv5McJ5GqHiOxY6qNk8Yr5nRZsa%2FEaV77l6YU8xMS7pK%2BFm1L7x7Gc5JiM50wBakgGSB6LmG3A1Fb2qP4Fg9ILxClOxZA4ISSONN0%2F%2BQ02hRtquQZv9wsP8H8OK9zwKfJIzmBcDbZUzR6xoeoNiySGvCRzBlr4xTdvhlap3Dc4MIRbuz%2FednS8B44DpTfrytwsCecNuyHgKW1RNmvgLZ7xkiCmws0NbFv%2FkquQ0pJgyPotsxC%2Bon%2BIaSF5zFHK03TCle1RrcJvGiOEGxBDHOaRKn6K5MM1eC2QcNlF1bRdltAdnvC%2BOJgvHrPqNoxWzzeBs%2F51kcnkP8K4GrDoxd4ziliMw2DLnsemjaQZO0NlDQ9EErZ13QV6CrrB1ZhrW6Zlhw7Qx7uPSWELivNThQJ6vd%2BaUwVBxwvCYHfEvy4fGGlUfLN%2FuAk9Ww%2BaxODsxwsi%2BNTu4AXhZK7gfw8tQIL3uONDoOEcvCqZq9zJxL9n%2Fy6w8HfxUHPwFxeL%2Brn7zfXxpFr8cOcUfDcgCYSAWQ1N6dnG3fD5vcHyZnOL4ZrADS8D%2BIl83IGQN42TUk9p2mlwP%2FfOxfaN%2BTKlRj%2FxnGaTE5hNJcJUjXcv%2Bkm7sXSo7VxKOt7hQF%2FyB1pzv6iSjQNYJcIyLIFROVggFDpEkzauET0qo%2FYdWZGmZU0IGgqEiWQ1Bj9BV0ZyebUUEH0vzudAAne%2BqA%2BFmdbEYBLSd5e4gsL0CqefkOpyHTJsz4DFO4QKsCeZ36xxULX2JZUrP88UYvf4KOkeGZIX%2BANEssysZTBcSF9j3lSzP00hCsuLry%2BVg4jl6NdAbeDDXiuc3wEvXoqXD0J%2B3rpr2GIxi9fOnMCjPki2c3R2lX3uIiJ2mZFc4QcidQWBHmGWX3JcVMjyF6RxKC5fyPLsEDRj9jOu0YS8CMGVNfmhf3LmXY8%2B17yrCjl8GdWWGGDA6k%2FUeeN4SXRy9rO3vZjAk9IK18ehdWSy6074kVo9fcnVlhiOaWMjwYIsMLkGpe%2Fi0O%2F0EmzQ3J7Ne9NiZuPNrIKHfuX4yMq9cdHwK%2B5E4F%2FAvr6hIyJjrWY8xUPn%2BKKVwFvm6ujl3Xi20sF7nqX13Xfwz4sUvn7sAbIp09aZV0iOHTH7t07u5lM6SzZ0leviCd%2FenZ9j2xYuzSuTsrzJDO7rQ57E4uTEz6EosmQ0xMBl0%2BMfsUrBBf%2FehmhfT10ZSvavW7XV0dEW6jDUxD5jPH%2BjdHJEaZ6vdB556lHbktGnXCe1HXqKAvjeqqgfGA2THO9RaetpRVpi2fXAYtYt7rDShXAWqOFqzsOSxthGJTh0bIAmnd0FERG3Ybq7r35YnhVaGlNxQDaRt0C8GGhUtdO5tFMTWFXNImaVt3cS12ldXgukcJosgQwICU6cV2M33bqtQEJsKRL9HqjUdf%2Fshe%2Bz40NX%2FVM365rm1SytedxLzTScwEvHxp55qre4z0zmUxExCT9%2Fq5utMYUAXrHIWYFAqfitWTdTkzbVBwliWRNuhOjgBH4LICq%2BJHgUySZZ5uoQHUYYCnNCNY5huHlzoElCnNCMSAJDS8iW7E1EHgdYm3xaMOFwvUivhcwagA8u0wF1NguEZh%2FN7yOzSDIiqvnrdw0G77rZn%2Blt7UUeKPGG1v6rXnEcQwpnqXLeWEp31KyFeHiRPYRfAQ1QSmC81DrfQJS6AdQ3XQ4BjSZaNCZW%2FIXlCYV9i04Vje%2BjgBLaFtt4R20Bu06vgioMUUFpcTtEFpXuD5jgnPkyZOCUxbNtMMylLho5ZIr3ZttxFUHZE0wurJE3ktRZ3tXIei7LD6lcrjskX1W5%2Fu7D8%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E"
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

### UML Class Diagram

<div style={{
    width: '100%', 
    height: 'auto', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: '20px'
}}>
  <iframe 
    src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=RiwiMusicUML..drawio&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22P%C3%A1gina-1%22%20id%3D%223xn4PDSoEQczjsJB5ykE%22%3E7Z1rb%2BI4FIZ%2FDVJ3paLcgY8tzM501UrdaVfTmW8e4oK3SUwTU0p%2F%2FR4nDhDilNApMelYGqnkxLn5PMeX8zqZjj0Mnz%2FHaDa9oj4OOpbhP3fsUceyTMNy4Q%2B3LDOL4w4ywyQmvii0NtyQF5wfKaxz4uOkUJBRGjAyKxrHNIrwmBVsKI7poljsngbFq87QBJcMN2MUlK3fiM%2BmmbVv9db2L5hMpvmVTU88X4jywuJJkiny6WLDZH%2Fq2MOYUpb9Cp%2BHOOCVl9dLdtxfFXtXNxbjiNU54Pblv%2BDH8OVbsrz%2BZ%2Fj4r3F7f3F3Ks7yhIK5eOBhQOCEibhntswrIlmQMEARbJ3f04jdiD0mbKOATCL4PYYDcQyGJxwzAnV4JnYwOgPreEoC%2FxIt6Zzfb8LQ%2BCHfOp%2FSmLzAaVEgzgm7YyZwsLxCiRt%2BJJgNsMY4gTLXeSWYW6Yr9FwoeIkSJgxjGgRolpCfq8cIUTwh0TlljIai0GJKGL6ZoTEvswDC%2BY2wML%2FJsgvy%2BoQKwM8bJuGSz5iGmMVLKCL2DgQdIjw8sblYs2bmtukGZ5ZjCcYF35PVmVcX%2BwrxgKIJPF%2FV1WxDcjlDcjnbKF4NBeDoCDF8TueRn2xyBz82nnNtSmncg0yrRGbHOhcHnfG%2FUOXbjEKds5SdmD7gIQ0owDiKaAYtCYItU85tgO9ZJbUJeJ9Ek8u0zMhZW76K6uEmCsfeB2l0T4nv44gTRxliKMOLszSjhMcV3Kh7Dv%2BgRodG1%2B24cOND2DbX2%2FCPF4%2FZkEbwLIikdGFgd4E5v%2Ftj%2BWrs72ZV4AJxWA9Or5rNAiZ7MzGogCJCIc6wgPoC32gymiXDtRST4VWAgUNEAk2GOjJ6fcVk9CrImE1Th2oyVJFhGo5iNGwJGlsMBCT1bcZAPgEw3wRACK4M8NrjtxyI0alZosIuU2FLCAjQTxxc04QwQvn546zsFhm7nF%2Bkm0RTHBN2SK%2FbNUe4%2FQM53aloD2I8IQmMak%2F%2B6FhewKvAJ0%2Fwc5LVRmb6GW9b4B4K5XQb0mgbYqvuXvoSnCT4pGMRn7A1XRocpeB4qjufqqmMjwPMsG6F2gTToG7W5lAw5dnSEk3JlC40Sy1iCcBRzZIkJ0yjMTyBTgo3lBR2vLdlhW3LqIbiQ2SFzXJa%2BFQnhd%2BzwWpfVtiu6vx0VlgxGsrTwqYsxZOOsqGVytAYwa9bAqBoOJqFQ3lm2KxKBY0JW%2Bp2QyEajaaGXTK4CO8eH5yLH6fuPLw%2Bm335W7IuQqgGMRmLhsPHYxLC0FTD0TAcdTPIB4OjPAYV7QbiTsnbDj0WVcCG2%2BBgVMpG1YADHPeAWZIuP9N0KKKjr3w86krw0JLjfpLj%2FjNUo%2BZQ81Cao1m1PEWLjm1sR44gRytb1aJlxxag4yjvgmSKtRYeW4qTpzyJUqVja%2BWxdTANVK%2BJsMqZ%2FFvyOMdaeWxKeSxpgbWTLTk8H1Z6tKpyglp8fK82axX%2F7REf8wl8ORmYvkd3odlQxoZy9dGqSgaOs%2FU0Gg51cDSpPi7Cu%2BmgPzsbWmfffcf6dH9mjioTxY9zFDEtIihE4wheTKkaajCaDklT%2BZHOea1rOBqGo0n1UdpwVK1amM3j8RQleKSXtiiHpEkZUn7PMkq00LSX0PQGv9cVGA8lNFkyfVELTa1tR5S%2FWGLJlEstNB0%2FOuo1SqvqzXstNLUQJ%2BW6pVWlW2qhqXUwKVct7XLW9guMj2hMJAt6tdR0EKmpX5R%2BXJn0I4Ni9er2h1Wa7KrcoFaa3qvRWjUA7VGa7MrXVbTSpJgN5UqTXTXv10qTcjiUv%2BdmV60%2B1u%2FHKkbjCJQm2SRd54n3yhO%2Fwe%2BqP4Jm7%2FHZKuhCknnATnhrobN7R9JwKP%2FuWZ4P2iAI%2BU8IRht%2Bhy9igBDCetVmQ1Np1ylObh237gdjDKOajw8xl3Z0B%2FfLHZyzd%2FtUd7J8sI987tG%2F5R%2B3Ol8OCVueiBe4sxGx7u8O0d%2Ftz5Ndc5xsH6y7k73mshMovgDnK7Sd%2BCTtibZX5cCtGDjyi2aN3HEg16vZhXqv9KC%2FhFzeh%2B%2BD3BVN2G32pYEbGvhajT8SmGpP%2BNyD0SRbUlpB0y1fZSqQ%2BoqfcDTHJ%2BVEombrSNjqK2%2BpynPBSrZ4C3UtVqr6w3kC06TNVWmaJaUsWY5ylpyS07E%2FwXmmAOpsSic0QsGntRU8AdNH7As%2FrMtc0nT6xavsP8zYUqQC0JzRYoXiZ8LuNn5%2F56cCX2Vbo3z%2Bn24s840InvcuLWi5%2Bfb3zZ3r49Kt%2FMCy90TbnFAIDPxK5Yi5LIwlJ%2Fg1x%2BdLMnjNver2GAeIkSdcuI3396lMnfIe5%2Fx%2FvuNhkf%2BEIqf8a65ri9Ht%2Frm5X94cbDhyZxZpNUFPczmV0csDlGOSZMSYezQ6le7d4y3cre%2F%2FyjSkfo38yvt50FMZlcbbotLrm5theWp0DcPZEZvp1jWOYSKW8vOLAZt%2FYrJ1ESv9voyO2MqItWukRJuN2L7SiF1F6apDrBOxjt0vdKTdgWc1G7C5FLMzYM0jC1hpfkoasN0ubKKQDylfHWR%2FuBg1DbcYo%2F1yryoXSQ7ktPxirRrrGoa33av2eg0HqV23V3WPKkg9aQ5GB2lh6GsXO1LHLktJzQap1bqhr9k1TFt1kOYS3O6e1DuuILVb2Cj3GkpA5DLYbqcel0%2BVJpXeOH11vUIMQ1CvR8fNhHCuGezuZ%2FvH5e5yvum37U9dd2ti6pYHvU6j%2FWl5NfJv6xxna7DjSWTCZp1Tzvv8ts7pWVtJWMn%2FwvZOzoHNmPKh%2F2rf5xjNplfUx7zE%2Fw%3D%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E"
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

## Project Structure

```
Sprint-02-Voyager/
├── Models/
│   ├── Clients.cs          # Data model for clients
│   ├── Concerts.cs         # Data model for concerts
│   └── Tickets.cs          # Data model for tickets
├── Services/
│   ├── ClientsService.cs   # Business logic for clients
│   ├── ConcertsService.cs  # Business logic for concerts
│   ├── TicketsService.cs   # Business logic for tickets
│   ├── PurchaseHistory.cs  # Purchase history management
│   └── ConsultsAdvances.cs # Advanced queries and reports
├── Program.cs              # Application entry point
└── Sprint-02-Voyager.csproj # Project configuration file
```

## Main Features

### Concert Management
- **Concert Registration**: Creation of new events with future date validation
- **Concert Listing**: Display of all registered concerts
- **Concert Editing**: Modification of existing concert data
- **Concert Deletion**: Removal of concerts from the system

### Client Management
- **Client Registration**: Creation of client profiles with email validation
- **Client Listing**: Display of the client database
- **Client Editing**: Update of client information
- **Client Deletion**: Removal of clients from the system

### Ticket Management
- **Purchase Registration**: Sales processing with capacity validation
- **Purchase Listing**: Display of all transactions
- **Inventory Validation**: Verification of ticket availability

### Purchase History
- **Client Query**: Display of purchase history for a specific client
- **Detailed Reports**: Complete information of performed transactions

### Advanced Queries
- **City Filtering**: Search concerts by location
- **Date Range Filtering**: Query concerts within specific time ranges
- **Sales Analysis**: Identification of the concert with the highest number of tickets sold
- **Revenue Calculation**: Total revenue generated by specific concert
- **Client Analysis**: Identification of the client with the highest number of purchases

## Technical Features

### Implemented Validations
- **Email Validation**: Correct format verification using regular expressions
- **Date Validation**: Ensures concerts have future dates
- **Capacity Validation**: Prevents selling more tickets than available
- **Existence Validation**: Verifies existence of clients and concerts before processing sales

### Error Handling
- **Comprehensive Try-Catch**: Exception capture and handling in all operations
- **Input Validation**: Verification of data types and valid ranges
- **Descriptive Messages**: Clear feedback to users about errors and successful operations

### Naming Consistency
- **English Standardization**: Consistent use of English terminology
- **Descriptive Names**: Identifiers that clearly reflect their purpose
- **C# Conventions**: Following language best practices

## System Requirements

### Minimum Requirements
- .NET 8.0 Runtime
- .NET 8.0 compatible operating system
- Terminal or console for execution

### Dependencies
- Microsoft.NET.Sdk
- System.Text.RegularExpressions (for email validation)

## Installation and Execution

### Prerequisites
1. Install .NET 8.0 SDK from [dotnet.microsoft.com](https://dotnet.microsoft.com/download)
2. Verify installation by running `dotnet --version`

### Installation Steps
1. Clone or download the project repository
2. Navigate to the project directory: `cd Sprint-02-Voyager`
3. Restore dependencies: `dotnet restore`
4. Build the project: `dotnet build`
5. Run the application: `dotnet run`

### Development Commands
```bash
# Build the project
dotnet build

# Run the application
dotnet run

# Clean build files
dotnet clean

# Restore NuGet packages
dotnet restore
```

## Application Usage

### Main Menu
When running the application, a menu is presented with the following options:

1. **Concert Management** - Complete event administration
2. **Client Management** - Client database administration
3. **Ticket Management** - Sales processing and queries
4. **Purchase History** - Transaction queries by client
5. **Advanced Queries** - System reports and analysis
6. **Exit** - Terminate the application

### Typical Workflow
1. Register concerts with their respective details
2. Register clients in the system
3. Process ticket sales validating availability
4. Query histories and generate reports as needed

## Design Considerations

### Architecture Pattern
The application implements a layered architecture with clear separation of responsibilities:
- **Models Layer**: Data entities with properties and basic validations
- **Services Layer**: Business logic and CRUD operations
- **Presentation Layer**: Console interface and user flow

### Data Management
- **In-Memory Storage**: Data is maintained during the execution session
- **Unique Identifiers**: Auto-increment system for IDs
- **Referential Integrity**: Validation of relationships between entities

### Scalability
The current design allows for future extensions such as:
- Integration with persistent database
- Graphical interface implementation
- Authentication functionality addition
- REST API implementation

## Current Limitations

- **Data Persistence**: Data is lost when closing the application
- **Concurrency**: Does not support multiple simultaneous users
- **Interface**: Limited to text console
- **Validations**: Some validations could be more robust

## Contributing

To contribute to the project:
1. Fork the repository
2. Create a branch for the new functionality
3. Implement changes following established conventions
4. Test modifications thoroughly
5. Submit pull request with detailed description

## Authors

- **Jerónimo Gutiérrez Arias**
- **Diego Alejandro Zuluaga Yepes**
