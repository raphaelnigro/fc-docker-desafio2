FROM node:15

WORKDIR /var/www/html 

COPY . .

RUN npm install
# Dockerize espera um container subir completamente (db) para depois subir este.
RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN chown -R www-data:www-data /var/www

EXPOSE 3000

CMD [ "node", "index.js"]