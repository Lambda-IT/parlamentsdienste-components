FROM node:24-alpine AS ui-builder

WORKDIR /app
COPY . .

RUN npm install -g pnpm
RUN yes | pnpm install
RUN npm run build:storybook

# # final image build
FROM nginx:mainline-alpine AS middlestep
LABEL maintainer=support@lambda-it.ch \
    org.opencontainers.image.source=https://github.com/lambda-it/parlamentsdienste-components

WORKDIR /usr/share/nginx/html

COPY --from=ui-builder /app/docs/storybook-static ./

# this nginx base image will parse the template and will move it to 
# /etc/nginx/conf.d/default.conf before it starts nginx process
COPY --from=ui-builder /app/docs/nginx-config/nginx.conf /etc/nginx/templates/default.conf.template

HEALTHCHECK --interval=5s --timeout=5s --start-period=5s --retries=3 CMD wget localhost -q -O - > /dev/null 2>&1

EXPOSE 80

