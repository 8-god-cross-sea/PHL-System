FROM nginx:alpine

ADD . /static
COPY nginx.conf /etc/nginx/nginx.conf
