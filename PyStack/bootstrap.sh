#!/usr/bin/env bash

sudo rm /etc/apt/sources.list
sudo cp /vagrant/sources.list /etc/apt/

sudo apt-get update
sudo apt-get dist-upgrade -y
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
