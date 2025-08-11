# Build stage
FROM node:20-alpine AS build

WORKDIR /usr/local/app

# Copy package.json and package-lock.json for caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application
COPY ./ ./
RUN npm run build -- --configuration production

# Production stage
FROM nginx:1.25-alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output from build stage
COPY --from=build /usr/local/app/dist/your-digi-curate-frontend/browser /usr/share/nginx/html

EXPOSE 80

# Démarre le conteneur et remplace les variables dynamiquement
CMD ["/bin/sh", "-c", "sed -i 's|__API_KEY__|'\"$API_KEY\"'|g' /usr/share/nginx/html/assets/config.json && sed -i 's|__API_URL__|'\"$API_URL\"'|g' /usr/share/nginx/html/assets/config.json && sed -i 's|__IMAGE_NAME__|'\"$IMAGE_NAME\"'|g' /usr/share/nginx/html/assets/config.json && sed -i 's|__IMAGE_VERSION__|'\"$IMAGE_VERSION\"'|g' /usr/share/nginx/html/assets/config.json && sed -i 's|__BUILD_DATE__|'\"$BUILD_DATE\"'|g' /usr/share/nginx/html/assets/config.json && sed -i 's|__LAST_COMMIT__|'\"$LAST_COMMIT\"'|g' /usr/share/nginx/html/assets/config.json && nginx -g 'daemon off;'"]
