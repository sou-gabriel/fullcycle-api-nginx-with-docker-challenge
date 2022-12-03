FROM node:16.14.0

WORKDIR /usr/src/app

COPY . .

EXPOSE 3333

RUN apt update && \
  apt install -y wget netcat && \
  wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
  chmod +x /usr/bin/wait-for
