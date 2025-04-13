# Step 1: Build
FROM node:20-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Step 2: Serve
FROM nginx:alpine
COPY --from=build /app/dist/society-ui /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
