# Usa la imagen base de Node.js
FROM node:14 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de la aplicación de React al directorio de trabajo
COPY . .

# Instala las dependencias y construye la aplicación de React
RUN npm install
RUN npm run build

# Imagen base final
FROM php:apache

# Establece el directorio de trabajo en el directorio del servidor web
WORKDIR /var/www/html

# Copia los archivos de la aplicación de React construida al directorio del servidor web en el contenedor
COPY --from=build /app/build/ .

# Exponer el puerto 80 para permitir el tráfico HTTP
EXPOSE 80
