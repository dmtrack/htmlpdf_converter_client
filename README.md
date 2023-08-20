## htmlpdf_converter

[deploy](https://htmlpdf-converter-client.onrender.com)

[backend repository](https://github.com/dmtrack/htmlpdf_converter_server)

### Description

This project is a test-task for company
Technical task was to create microservice that able to get zip acrhives and convert included html file to pdf

### Features

Takes a zip file and returns it at pdf format
Records are hold at dedicated PostgreSQL cloud-db
Converted pdf's are hold at Firebase cloud-service
Logging to separate file

### Install

git clone [server](https://github.com/dmtrack/htmlpdf_converter_server)
paste to .env file on server:

```
    PORT=8000
    CLIENT_URL=http://localhost:3000
    DB_NAME=htmlpdf_converter
    DB_USER=htmlpdf_converter_user
    DB_PASSWORD=PLCe25WiqJPRz1G3L4as16cLk4NFmyZn
    DB_HOST=dpg-cje84cgcfp5c73bon540-a.oregon-postgres.render.com
    DB_PORT=5432
    FIREBASE_API_KEY=AIzaSyAQfEIvPDpKTvj6-G9K2xkR2FDVhhimo9s
```

git clone [client](https://github.com/dmtrack/collections_client.git)
paste to .env file on server:

```
    REACT_APP_BASE_URL=http://localhost:8000/file
```

### Stack

-   TypeScript
-   React
-   ReduxToolKit
-   Tailwind
-   PostgreSQL
-   FireBase
-   Winston logger
-   Docker

### Preview

![Preview](public/preview1.png)
