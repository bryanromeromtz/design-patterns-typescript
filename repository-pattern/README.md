<h1 align="center">Express Typescript Service Skeleton</h1>

<p align="center">
  Skeleton for new typescript services based on express
</p>

<p align="center">
    <a href="https://github.com/AlbertHernandez/express-typescript-service-skeleton/actions/workflows/nodejs.yml?branch=main"><img src="https://github.com/AlbertHernandez/express-typescript-service-skeleton/actions/workflows/nodejs.yml/badge.svg?branch=main" alt="nodejs"/></a>
</p>


# Project Name

Short project description or tagline

## Overview

This project follows the Repository pattern to handle data access and incorporates principles of Inversion of Control (IoC) and Dependency Injection (DI). By leveraging these patterns, we achieve separation and decoupling of dependencies, while adhering to key principles of Hexagonal Architecture and Clean Architecture.

## Description

This project aims to provide a robust and maintainable solution for managing data access in a scalable manner. The Repository pattern is utilized to abstract the data access layer from the rest of the application. This abstraction enables us to easily switch between different data sources, such as databases, APIs, or external services, without impacting the core business logic.

The key benefits of utilizing the Repository pattern include:

- **Separation of Concerns**: The business logic remains independent of the underlying data access implementation, promoting modularity and easier maintenance.
- **Flexibility and Extensibility**: The application can easily adapt to different data sources or technologies, allowing for future changes or upgrades.
- **Testability**: With clear separation between the data access layer and the business logic, unit testing becomes more straightforward and focused.
- **Code Reusability**: Repositories can be shared across different parts of the application, reducing duplication and promoting code reusability.

In conjunction with the Repository pattern, this project follows the principles of Inversion of Control (IoC) and Dependency Injection (DI). IoC is achieved by using a dependency injection container, which manages the creation and resolution of dependencies. DI enables loose coupling and allows dependencies to be injected into classes, rather than being instantiated internally. This approach enhances flexibility, maintainability, and testability.

## Table of Contents

- [Installing](#installing)
- [Building](#building)
- [Testing](#testing)
- [Linting](#linting)
- [Contributing](#contributing)

## Installing

```bash
nvm install 18.0.0
nvm use
npm install npm@8.3.0 -g
npm install
```

## Building

```bash
npm run build
```

## Testing

### Jest with Testing Library

```bash
npm run test
```

## Linting

Run the linter

```bash
npm run lint
```

Fix lint issues automatically

```bash
npm run lint:fix
```
