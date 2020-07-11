FROM node:12.16.1-stretch
RUN npm install -g prettier
RUN npm i bootstrap
RUN npm i reactstrap react react-dom

FROM ubuntu:12.0
RUN apt-get update && \
      apt-get -y install sudo
RUN apt-get install python3-venv
RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo
RUN export LC_ALL="en_US.UTF-8"
RUN export LC_CTYPE="en_US.UTF-8"
RUN sudo dpkg-reconfigure locales
USER docker
CMD /bin/bash


