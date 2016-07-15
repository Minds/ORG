.. _install_vagrant:

===================
Vagrant Environment
===================

Minds.org provides a Vagrant_ development environment based on
Ubuntu 14.04 LTS, along with a Chef_ cookbook.

.. _Vagrant: https://www.vagrantup.com/
.. _Chef: https://downloads.chef.io/chef-dk/

Download
========

Download/clone/fork from `Minds Cookbook on GitHub`_.

.. _Minds Cookbook on GitHub: https://github.com/Minds/minds-cookbook

Setting Up
==========

  #. Download and install Vagrant_.
  #. Download and install VirtualBox_.
  #. Append ``10.54.0.111 dev.minds.io`` to your :file:`/etc/hosts` file.
  #. In your terminal:
      - Go to the folder where you downloaded/cloned `Minds Cookbook on GitHub`_.
      - Run ``vagrant plugin install vagrant-berkshelf vagrant-omnibus``
      - Run ``vagrant up``

.. note:: :file:`/etc/hosts` file is located at the
  :file:`{%SystemRoot%}\\system32\\drivers\\etc\\hosts` on Windows.

.. _VirtualBox: https://www.virtualbox.org/

Troubleshooting
===============

Ubuntu Hosts
------------

  - Ensure the proper DKMS package is installed for your VirtualBox version.
  - There are known issues with VirtualBox shared folders
    when running on an encrypted mount.
