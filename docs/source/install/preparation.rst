.. _install_preparation:

===========
Preparation
===========

Server Setup
============

Minds has a one script installation to provision an ubuntu machine.
Run ``bin/bootstrap-ubuntu.sh``

Front end
=========

.. code::

  npm install
  gulp build && gulp build.index

Engine (PHP)
=========

.. code::

  composer install
