# Angular Ecommerce Project

This is a sample Angular Ecommerce project that serves as a frontend for an ecommerce application. It's built using Angular 16 for the frontend, .NET 7 for the backend, and Microsoft SQL Server for the database with Entity Framework Core.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a simple ecommerce application that demonstrates the integration of Angular, .NET Core, and Microsoft SQL Server. It allows users to browse and purchase products, manage their shopping cart, and place orders.

## Features

- Browse products by category and search for specific items.
- Add products to the shopping cart.
- Update and remove items from the shopping cart.
- Complete the checkout process to place an order.
- User authentication and authorization.
- Product reviews and ratings.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed
- [Angular CLI](https://cli.angular.io/) installed
- [Visual Studio](https://visualstudio.microsoft.com/) or [Visual Studio Code](https://code.visualstudio.com/) for .NET Core development
- [.NET Core SDK 7](https://dotnet.microsoft.com/download/dotnet/7) installed
- [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) installed
- [Google Drive video preview link](https://drive.google.com/file/d/1t5kwDiB_qYWKj8qc7aVwjYeQH_RR7Nlb/view?usp=sharing) - (You can replace this with your Google Drive video preview link)

## Installation

Clone this repository to your local machine:

```bash
git clone https://github.com/preethel/Ecom.git
```

### Install the required Node.js packages for the Angular frontend:

Open your terminal and navigate to the `client` directory within your Angular Ecommerce project, and then run the following command to install the necessary Node.js packages:

```bash
cd Task/task-fEnd
npm install
```
### Install the required NuGet packages for the .NET Core backend:

1. Open your solution in either Visual Studio or Visual Studio Code.

2. In the solution explorer, navigate to the .NET Core backend project.

3. Use the package manager console or terminal to run the following command to restore NuGet packages:

```bash
  cd Task/Task/Task.Database
  dotnet ef database update
```

## Configuration

Before running the application, make sure to configure the following:

### Database Connection

1. Open the `appsettings.json` file in your .NET Core backend project.

2. Locate the `"ConnectionStrings"` section.

3. Update the SQL Server connection string with your own connection details.

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=YourServer;Database=YourDatabase;User Id=YourUser;Password=YourPassword;"
}
```
## Running the Angular Application

1. Open a terminal and navigate to the `Task/task-fEnd` directory within your Angular Ecommerce project:

 ```bash
   cd Task/task-fEnd
   ng serve -o
```
## Running the .NET core web api

1. Open a terminal and navigate to the `Task/Task` directory within your Angular Ecommerce project:

 ```bash
   cd Task/Task
   dotnet run --project .\Task.Api\
```

## Usage

Visit http://localhost:4200 in your web browser to access the ecommerce application.

## Contributing

Contributions are welcome. Please feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

For a video preview of the application, please check the following link: [Google Drive Video Preview](https://drive.google.com/file/d/1t5kwDiB_qYWKj8qc7aVwjYeQH_RR7Nlb/view?usp=sharing)


