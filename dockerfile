#pull image form docker hub registry
FROM nginx:1.13.9-alpine                                  
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY  ./dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]