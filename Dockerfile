# Usa la imagen base de PHP con Apache
FROM php:apache

# Copia tu código PHP al directorio del servidor web en el contenedor
COPY . /var/www/html

# Exponer el puerto 80 para permitir el tráfico HTTP
EXPOSE 80
