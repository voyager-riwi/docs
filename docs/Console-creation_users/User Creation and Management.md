# User Management System

## Project Description

UserManagerApp es una aplicación de consola desarrollada en **C# con .NET 8.0** que permite la gestión completa de usuarios, incluyendo registro, consulta, actualización y eliminación de información. El sistema asegura la integridad de los datos mediante validaciones de unicidad en correos y nombres de usuario, y proporciona funcionalidades avanzadas de segmentación y reportes estadísticos.

---

## System Architecture

### Use Case Diagram


### UML Class Diagram


---

## Project Structure

```

```

---

## Main Features

### User Insertion

* Registro de un nuevo usuario con los campos obligatorios:

    * First Name (nombre)
    * Last Name (apellido)
    * Username (único)
    * Email (único)
* Validación de unicidad de correo y nombre de usuario.
* Confirmación de creación exitosa.

### User Update

* Actualización de cualquiera de los datos del usuario.
* Cambio de contraseña con validación de confirmación.
* Mensaje de confirmación tras actualización.

### User Deletion

* Eliminación de un usuario por **Id** o por **correo electrónico**.
* Solicitud de confirmación antes de eliminar:

    * “¿Está seguro de eliminar este usuario? (S/N)”
* Confirmación de eliminación exitosa.

### User Queries

* Listar todos los usuarios registrados.
* Consultar un usuario por **Id** o **correo electrónico**.
* Listar usuarios filtrados por:

    * Ciudad
    * País
    * Edad (ejemplo: mayores de 18)
    * Género (masculino/femenino)
* Mostrar listado con solo **nombres completos y correos** (campañas de comunicación).
* Estadísticas:

    * Total de usuarios registrados.
    * Conteo de usuarios por ciudad.
    * Conteo de usuarios por país.
* Consultas de calidad de datos:

    * Usuarios sin teléfono registrado.
    * Usuarios sin dirección registrada.
* Consultas avanzadas:

    * Últimos usuarios registrados (ordenados por fecha).
    * Usuarios ordenados alfabéticamente por apellido.

---

## Technical Features

### Implemented Validations

* **Unique Username Validation**: Impide registrar nombres de usuario duplicados.
* **Unique Email Validation**: Impide registrar correos electrónicos repetidos.
* **Data Completeness Validation**: Verifica que los campos obligatorios estén presentes.

### Error Handling

* Manejo de excepciones con **try-catch** en todas las operaciones.
* Validación de entradas: tipos de datos y rangos válidos.
* Mensajes claros de error y confirmación.

### Naming Consistency

* Estandarización en **inglés** para clases y métodos.
* Nombres descriptivos y consistentes.
* Buenas prácticas de convenciones en C#.

---

## System Requirements

### Minimum Requirements

* .NET 8.0 Runtime
* Sistema operativo compatible con .NET 8.0
* Terminal o consola para ejecución

### Dependencies

* Microsoft.NET.Sdk

---

## Installation and Execution

### Prerequisites

* Instalar **.NET 8.0 SDK** desde [dotnet.microsoft.com](https://dotnet.microsoft.com)
* Verificar instalación con:

  ```bash
  dotnet --version
  ```

### Installation Steps

```bash
# Clonar o descargar el repositorio
git clone <repo-url>

# Acceder al directorio del proyecto
cd Sprint-01-UserManager

# Restaurar dependencias
dotnet restore

# Compilar el proyecto
dotnet build

# Ejecutar la aplicación
dotnet run
```

---

## Development Commands

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

---

## Application Usage

### Main Menu

Al ejecutar la aplicación, se presentan las siguientes opciones:

* Insert User – Registro de nuevos usuarios
* List/Query Users – Consultas y reportes
* Update User – Modificación de datos
* Delete User – Eliminación de usuarios
* Exit – Finalizar la aplicación

### Typical Workflow

1. Registrar usuarios con sus datos básicos.
2. Consultar o segmentar usuarios según filtros.
3. Actualizar información o contraseñas.
4. Eliminar usuarios cuando sea necesario.
5. Generar reportes estadísticos o listados administrativos.

---

## Design Considerations

### Architecture Pattern

El sistema implementa una **arquitectura en capas**:

* **Models Layer**: Entidad `User` con sus propiedades.
* **Services Layer**: Lógica de negocio y operaciones CRUD.
* **Presentation Layer**: Interfaz de consola y flujo de usuario.

### Data Management

* **In-Memory Storage**: Los datos se mantienen en memoria durante la sesión.
* **Unique Identifiers**: Identificación de usuarios por Id autoincremental.
* **Referential Integrity**: Validaciones de unicidad y relaciones básicas.

### Scalability

La arquitectura permite futuras extensiones como:

* Persistencia en base de datos.
* Interfaz gráfica.
* Integración con API REST.
* Módulo de autenticación y roles.

### Current Limitations

* No persiste datos al cerrar la aplicación.
* No soporta concurrencia.
* Limitado a interfaz de consola.
* Validaciones básicas que podrían fortalecerse.

---

## Contributing

1. Hacer fork del repositorio.
2. Crear una rama para la nueva funcionalidad.
3. Implementar los cambios siguiendo las convenciones.
4. Probar exhaustivamente las modificaciones.
5. Enviar pull request con descripción detallada.

---

## Authors

* 
* 

---

