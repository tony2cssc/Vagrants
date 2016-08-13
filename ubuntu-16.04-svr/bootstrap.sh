#!/usr/bin/env bash

# Change software source to China site
sudo sed -i 's/http:\/\/archive.ubuntu.com/http:\/\/ftp.sjtu.edu.cn/g' /etc/apt/sources.list

sudo apt-get update
sudo apt-get upgrade -y

# install necessary packages
sudo apt-get install build-essential -y

# clean unnecessary files
sudo apt-get autoremove && sudo apt-get clean

# install nvm
# curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash
# nvm install --lts
 
# install meteor
curl https://install.meteor.com/ | sh 

# sudo apt-get install -y python-dev python-setuptools libjpeg-dev python-pip git
# install below for taiga
# sudo apt-get install libxml2-dev
# sudo apt-get install libxslt1-dev 

# sudo pip install virtualenv

# cd ~
# virtualenv oscar
# virtualenv frob

# cd /vagrant
# git clone https://github.com/tangentlabs/django-oscar.git 
# cd django-oscar
# source ~/oscar/bin/activate
# make sandbox
# sites/sandbox/manage.py runserver 0.0.0.0:8000

# Building your own shop
# cd /vagrant
# source ~/frob/bin/activate
# pip install django-oscar
# django-admin.py startproject frobshop
