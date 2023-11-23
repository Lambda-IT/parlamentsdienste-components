FROM node:20-alpine as ui-builder
WORKDIR /app
COPY . .

RUN apk add python3 make gcc g++
RUN npm install
RUN npm run build
RUN npm run build-storybook

# final image build
FROM nginx:mainline-alpine
LABEL maintainer=support@lambda-it.ch \
    org.opencontainers.image.source=https://github.com/lambda-it/parlamentsdienste-components

WORKDIR /usr/share/nginx/html

COPY --from=ui-builder /app/storybook-static ./
COPY --from=ui-builder /app/dist/parlamentsdienstecore ./build
COPY --from=ui-builder /app/src/assets ./assets
# COPY --from=ui-builder /app/src/vue.html ./vue/index.html

# this nginx base image will parse the template and will move it to 
# /etc/nginx/conf.d/default.conf before it starts nginx process
COPY config/nginx.conf /etc/nginx/templates/default.conf.template

HEALTHCHECK --interval=5s --timeout=5s --start-period=5s --retries=3 CMD wget localhost -q -O - > /dev/null 2>&1

EXPOSE 80