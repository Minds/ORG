.. _install_vagrant:

===================
Vagrant Environment
===================

Minds has a Vagrant_ development environment based on Ubuntu 14.04 LTS.

.. _Vagrant: https://www.vagrantup.com/

Setting Up
==========

  #. Download and run `Vagrant Installer`_.
  #. Download and run `VirtualBox Installer`_.
  #. Append ``10.54.0.111 dev.minds.io`` to your :file:`/etc/hosts` file.
  #. In your terminal:
      - From your Minds directory run:
          - ``vagrant up``

.. note:: :file:`/etc/hosts` file is located at the
  :file:`{%SystemRoot%}\\system32\\drivers\\etc\\hosts` on Windows.

.. _Vagrant Installer: https://www.vagrantup.com/downloads.html
.. _VirtualBox Installer: https://www.virtualbox.org/wiki/Downloads
.. _ChefDK Installer: https://downloads.chef.io/chef-dk/

.. _install_vagrant_troubleshooting:

Troubleshooting
===============

General
-------

  - If the host computer is running Windows or OS X, be careful with PHP class files
    name capitalization. On Vagrant, the host filesystem will resolve name on a
    case-insensitive way, but later when it's deployed on a case-sensitive filesystem
    (a Linux or Unix machine) the autoloader won't be able to find the class files.

Ubuntu Hosts
------------

  - Ensure the proper DKMS package is installed for your VirtualBox version.
  - There are known issues with VirtualBox shared folders when running on an
    encrypted drive.

Windows Hosts
-------------

  - Vagrant has a known issue on Windows where it might create additional Host-only
    network interfaces. If you have troubles connecting to the virtual machine, check
    VirtualBox Networking preferences.
