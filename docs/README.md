# DOCS

### Setup

*  pip install sphinx
*  pip install sphinx_rtd_theme

### Building

*  sphinx-build -b html source build

### Troubleshooting

####  `ValueError: unknown locale: UTF-8` error when building

Run, or add to .bash_profile:
  ```
  export LC_ALL=en_US.UTF-8
  export LANG=en_US.UTF-8
  ```
