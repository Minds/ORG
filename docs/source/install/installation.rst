.. _install_installation:

============
Installation
============

Installing
==========

Minds provides a handy CLI tool that allows you to manage your network
from the comfort of your terminal software. You can check out the :ref:`cli`
page for more details.

``$ php bin/cli.php install [OPTIONS]``

.. note:: Before installing Minds, ensure the target system meets the :ref:`install_requirements`.

.. tip:: **Heads up!** If you installed :ref:`install_vagrant` you might need to
  go to the cookbook folder in the host computer and run: ``vagrant up && vagrant ssh``.

  Once you're logged in onto the virtual machine, you can find
  the Minds installation folder in :file:`/var/www/Minds`.

Available Options
=================

Core
----

--domain=VALUE                                Domain where Minds will run. Please note that
                                              if you're using the Vagrant environment, you
                                              should use "dev.minds.io" unless you're willing
                                              to customize nginx configuration.

--username=VALUE                              Super-admin username.
--password=VALUE                              Super-admin password.
--email=VALUE                                 Super-admin email address. Please note that this
                                              is different than --site-email, which is used for
                                              system-related emails (i.e. error dumps, etc).

Storage
-------

--cassandra-keyspace=VALUE                    Cassandra keyspace to be created and used
                                              by your Minds installation. *Default: "minds"*
--cassandra-server=VALUE                      Cassandra server IP address or host name
                                              *Default: "127.0.0.1"*
--cassandra-replication-factor=VALUE          Number of keyspace data copies stored in the
                                              Cassandra cluster(s).
--elasticsearch-server=URL                    ElasticSearch endpoint to be used.
                                              *Default: "http://127.0.0.1:9200/"*
--elasticsearch-prefix=VALUE                  Prefix to be used when storing ElasticSearch
                                              documents. *Default: "mehmac_"*

Paths
-----

--path=PATH                                   Minds installation path. *Default: (auto-detected)*
--dataroot=PATH                               Path to be used for storing uploads and other
                                              user-generated content. *Default: "/data/"*
--cache-path=PATH                             Path to be used as filesystem-based cache.
                                              *Default: "/tmp/minds-cache/*

Third-Party Integrations
------------------------

--facebook-app-id=VALUE                       Facebook app ID for user migrations action.
                                              *Default: (empty)*
--facebook-app-secret=VALUE                   Facebook app secret for user migrations action.
                                              *Default: (empty)*
--google-api-key=VALUE                        Google API key for Push notifications, geolocation
                                              and translation. *Default: (empty)*

Customization
-------------

--site-email=VALUE                            Email address used to send administrative (site-wide)
                                              alerts and error dumps. *Default: "root@localhost"*
--site-name=VALUE                             Name of the site. Please note that this is for
                                              internal use. Most name representations are present
                                              in frontend's HTML markup. *Default: "Minds"*
--site-secret=VALUE                           Secret to be used as encryption salt and other
                                              authentication processes. *Default: (auto-generated)*

Socket.IO Integration
---------------------
--socket-server-uri=VALUE                     Domain and port where the socket server is running.
                                              This setting is client-facing, so use a public
                                              domain or IP address. *Default: (same as --domain
                                              with ":8010" appended)*
--jwt-secret=VALUE                            Secret to be used to encrypt JWT cookies allowing
                                              API <-> Socket.IO session persistance.
                                              *Default: (auto-generated)*
--jwt-domain=VALUE                            Domain where the JWT cookies are used.
                                              *Default: (same as --domain)*

Development-only
----------------

--no-https                                    Specify this flag to avoid using the HTTPS protocol.
                                              *Do not use this on a production environment
                                              installation!*
--default-site=ID                             ID to be used for the site entity. Don't modify this
                                              unless you know what you're doing.
                                              *Default: "1"*

.. _GUID: https://en.wikipedia.org/wiki/Globally_unique_identifier
