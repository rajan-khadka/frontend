#pull image form docker hub registry
FROM node:20.12.0-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
FROM nginx:1.13.9-alpine                                  
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY  --from=builder /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]