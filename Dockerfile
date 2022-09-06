# Va a instalar node version 16

FROM node:16

# Ejecuta el comando mkdir para crear una carpeta, la bandera -p es para que si la carpeta no existe que la cree

RUN mkdir -p /usr/src/app

# Me paro en la carpeta que cree recien

WORKDIR /usr/src/app

# Va a copiar las dependencias dentro del directorio actual

COPY package*.json ./

# Una vez que copia las dependencias las instala y crea una carpeta node_modules dentro del contenedor

RUN npm install

# Copio SRC dentro del directorio actual

COPY . .

# El puerto que expone este contenedor es el puerto 8085

EXPOSE 8085

# El DockerFile va a iniciar con npm start

CMD ["npm", "run", "dev"]