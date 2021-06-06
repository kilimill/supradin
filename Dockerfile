FROM nginx:1.17.10-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /www/
COPY backend /backend/
RUN  adduser --disabled-password -s /sbin/nologin www
EXPOSE 80

ARG DB_HOST
ARG DB_NAME
ARG DB_PORT
ARG DB_USER
ARG DB_PASSWORD

ARG S3_ENDPOINT
ARG S3_ID
ARG S3_KEY
ARG S3_BUCKET
ARG S3_REGION

ARG SLACK_KEY
ARG SLACK_CHANNEL

ARG BACK_ENV

ENV NODE_ENV='production'
ENV DATABASE_HOST=$DB_HOST
ENV DATABASE_NAME=$DB_NAME
ENV DATABASE_PORT=$DB_PORT
ENV DATABASE_USER=$DB_USER
ENV DATABASE_PASSWORD=$DB_PASSWORD

ENV JWT_TOKEN='m8b3!?zW&UfSYjTq'

ENV S3_ENDPOINT=$S3_ENDPOINT
ENV S3_REGION=$S3_REGION
ENV S3_ID=$S3_ID
ENV S3_KEY=$S3_KEY
ENV S3_BUCKET=$S3_BUCKET

ENV SLACK_KEY=$SLACK_KEY
ENV SLACK_CHANNEL=$SLACK_CHANNEL

ENV BACK_ENV=$BACK_ENV

RUN touch /var/log/nodejs_all.log
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log
RUN ln -sf /dev/stdout /var/log/nodejs_all.log

RUN apk add --no-cache --update nodejs yarn curl 
RUN apk add --no-cache yarn --repository="http://dl-cdn.alpinelinux.org/alpine/v3.10/main/" 

COPY start_nginx.sh /start_nginx.sh
COPY start_node.sh /start_node.sh
COPY wrapper.sh /wrapper.sh

RUN chmod +x /start_nginx.sh /start_node.sh /wrapper.sh
RUN cd /backend && yarn --production=false && yarn build

CMD ["/wrapper.sh"]