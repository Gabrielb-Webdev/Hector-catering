# Usa la imagen base de PHP con Apache
FROM php:apache

# Instala Node.js y npm
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

# Establece el directorio de trabajo en el directorio del servidor web
WORKDIR /var/www/html

# Copia los archivos de tu aplicación de React al directorio del servidor web en el contenedor
COPY . .

# Instala las dependencias y construye la aplicación de React
RUN npm install
RUN npm run build

# Configura el servidor Apache para servir la aplicación de 
