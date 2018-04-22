FROM nginx

ADD . /static
COPY nginx.conf /etc/nginx/nginx.conf
