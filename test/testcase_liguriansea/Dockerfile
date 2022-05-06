
FROM julia:latest
RUN apt update
RUN apt -y install apache2 apache2-utils
RUN apt -y install vim tree subversion libsvn-dev libapache2-mod-svn subversion-tools
RUN apt install gfortran make perl netcdf-bin libnetcdff-dev libopenmpi-dev openmpi-bin subversion git python3-pip python3-setuptools unzip
RUN apt install python3-matplotlib
RUN python3 -m pip install --user motuclient==1.8.6
RUN git clone https://github.com/Alexander-Barth/ROMS.jl.git

