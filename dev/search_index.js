var documenterSearchIndex = {"docs":
[{"location":"#ROMS","page":"ROMS","title":"ROMS","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"This package allows to setup necessary files for the ROMS ocean model.","category":"page"},{"location":"#Tutorial","page":"ROMS","title":"Tutorial","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"This tutorial is for students following the ULiège lecture OCEA0036-1 but might be useful for others as well.","category":"page"},{"location":"#Using-for-the-first-time-a-UNIX/Linux-like-environment?","page":"ROMS","title":"Using for the first time a UNIX/Linux-like environment?","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"Please pay attention to the difference between upper- and lowercase letters\nPresence and absence of white space is also significant\nCheck out the basic shell commands and this tutorial\nAvoid using directories and file names with a space in them, otherwise you need to put the directory in quotes (single or double quotes) or use black-slash (\\) in front of the white space. For example, cd My Directory Name does not work, use one of the following instead:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"cd \"My Directory Name\"\ncd 'My Directory Name'\ncd My\\ Directory\\ Name","category":"page"},{"location":"#Registration","page":"ROMS","title":"Registration","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"Please register at:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"ROMS (Regional Ocean Modeling System).\nCMEMS (Copernicus Marine Environment Monitoring Service)","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"To generate new forcing fields, register at (optional):","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"ECMWF (European Centre for Medium-Range Weather Forecasts)","category":"page"},{"location":"#Required-software","page":"ROMS","title":"Required software","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"A preconfigured virtual machine is available here. The account student has the password tritro. In this virtual machine, all software is already pre-installed. The OVA file must be imported in Virtual Box. If you do not use this virtual machine the following software need to be installed:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"Julia. Under Linux, you can install Julia with the following shell commands:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"cd /opt/\nsudo wget https://julialang-s3.julialang.org/bin/linux/x64/1.5/julia-1.5.3-linux-x86_64.tar.gz\nsudo tar -xvf julia-1.5.3-linux-x86_64.tar.gz\nsudo rm julia-1.5.3-linux-x86_64.tar.gz\nsudo ln -s /opt/julia-1.5.3/bin/julia /usr/local/bin/julia","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"More information is available at: https://julialang.org/downloads/platform/","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"Julia package, PyPlot, NCDatasets, ROMS which can be installed by:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"using Pkg\nPkg.add(\"PyPlot\")\nPkg.add(\"NCDatasets\")\nPkg.develop(url=\"https://github.com/Alexander-Barth/ROMS.jl\")","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"Under Linux, you need to install also python3-matplotlib for PyPlot. On Debian/Ubuntu, this packages can be installed by this command:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"sudo apt install python3-matplotlib","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"ROMS source. This example uses the version 3.9 of ROMS. We assume that the ROMS source is copied in ~/src/roms:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"mkdir ~/src/\ncd ~/src/\nsvn checkout --non-interactive  --username \"$ROMS_USERNAME\" \\\n    --password \"$ROMS_PASSWORD\" https://www.myroms.org/svn/src/tags/roms-3.9 roms","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"In the previous command, you need to replace $ROMS_USERNAME and $ROMS_PASSWORD by your username and password.","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"Other required software typically available from a package manager:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"A Fortran 90 compiler (e.g. gfortran)\nGNU make\nNetCDF (including headers files for development and the tools ncdump, nf-config)\nperl\nPython and pip\nMPI (optional)\nsubversion (optional)\ngit (optional)","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"Note that all libraries (NetCDF and MPI) must be compiled with the same Fortran compiler.","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"On Windows, various ways exist to install gfortran, GNU make and other dependencies:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"Windows Subsystem for Linux\nInstallation guide\nFAQ (in particular exchanging files)\nCygwin\nMINGW\nLinux virtual machine using e.g. VirtualBox\n...","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"On MacOS X:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"Homebrew https://brew.sh/\n...","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"On Debian/Ubuntu, these packages can be installed by this command:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"sudo apt install gfortran make perl netcdf-bin libnetcdff-dev libopenmpi-dev openmpi-bin subversion git python3-pip python3-setuptools","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"For CMEMS data, you need the python package motuclient. Read the installation instructions","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"For example:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"python3 -m pip install motuclient\n# or to install a specific version use for example\n# python3 -m pip install motuclient==1.8.6","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"Normally you will see the warning WARNING: The script motuclient is installed in '.../.local/bin' which is not on PATH. Consider adding this directory to PATH. You need to add the following line to the file .bashrc:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"export PATH=\"$HOME/.local/bin:$PATH\"","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"In a terminal execute the following so that this change takes effect:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"source ~/.bashrc","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"For ECMWF data, you need the pacakge ecmwf-api-client-python (optional). Follow the installation instructions (including the ECMWF key)\nNote that the ECMWF key is different from your password","category":"page"},{"location":"#Check-your-environment","page":"ROMS","title":"Check your environment","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"Check julia version:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"julia --version","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"Check the Fortran Compiler","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"gfortran --version","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"MPI","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"mpif90 --version\nmpirun --help","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"NetCDF","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"nf-config --all","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"or the old name nc-config:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"nc-config --all","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"Check the motuclient (it may return vUnknown, but it should not return No module named motuclient)","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"motuclient --version","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"These commands should return a basic usage info or the version number if they are correctly installed.","category":"page"},{"location":"#Data","page":"ROMS","title":"Data","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"Extract the file ROMS-implementation.zip\nThe full GEBCO bathymetry (the file gebco_30sec_1.nc, optional)","category":"page"},{"location":"#Area","page":"ROMS","title":"Area","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"Choose an area:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"What interesting processes are present in your studied area? (note: now we all use the Ligurian Sea)\nAre there in situ measurements available for your area? Look for temperature and salinity within your areas (for any time frame)\nCheck with World Ocean Database\nCMEMS in situ Thematic Assemble Centre (TAC)\nVisualize a couple of downloaded profiles:\nHints: in Julia you can use the package NCDatasets\nHow would you distribute the vertical resolution in your model represent this profile?\nCheck that your longitude/latitude/time range model of your nested model is within longitude/latitude/time range of the outer model providing the boundary conditions\nChoose the domain such to avoid unnecessary open ocean boundary conditions","category":"page"},{"location":"#Generate-initial-and-boundary-conditions","page":"ROMS","title":"Generate initial and boundary conditions","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"Adapt a example_config.jl file and call it yourdomain_config.jl\nbounding box\nFile paths\nTime range\n...\nFor CMEMS boundary conditions:\nYou may need to adapt service_id, motu_server and mapping (if model is outside the Mediterranean Sea)\nData will be downloaded and saved in NetCDF by \"chunks\" of 60 days in the folder OGCM under the content of the variable basedir\nYou need to remove the files in this directory if you rerun the script with a different time range.\nRun in Julia","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"include(\"yourdomain_config.jl\")","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"Check the resulting files: initial conditions, boundary conditions, interpolated model (clim file) and visualize the these files along some sections","category":"page"},{"location":"#Atmospheric-forcing-fields-(not-needed-now)","page":"ROMS","title":"Atmospheric forcing fields (not needed now)","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"Adapt the file name, longitude/latitude and time range (start one day earlier, and finish one day later) in forcing_ecmwf.py and execute the script as follows:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"python3 forcing_ecmwf.py","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"List of variables (*: quantities accumulated over the integration period (\"step\"))","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"NetCDF Variable name Description\nmsl Mean sea level pressure\nu10 10 metre U wind component\nv10 10 metre V wind component\nt2m 2 metre temperature\nd2m 2 metre dewpoint temperature\ntcc Total cloud cover*\nsshf Surface sensible heat flux*\nstrd Surface thermal radiation downwards*\nssr Surface net solar radiation*\nstr Surface net thermal radiation*\newss Eastward turbulent surface stress*\nnsss Northward turbulent surface stress*\ne Evaporation*\nro Runoff*\ntp Total precipitation*\nsst Sea surface temperature\npar Photosynthetically active radiation at the surface*","category":"page"},{"location":"#ROMS-compilation","page":"ROMS","title":"ROMS compilation","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"Create a directory (avoid directory names with spaces) for your model configuration\nCompile ROMS:\nconfigure ROMS by creating a file yourdomain.h:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"#define UV_ADV                    /* turn ON advection terms */\n#define UV_COR                    /* turn ON Coriolis term */\n#define DJ_GRADPS                 /* Splines density  Jacobian (Shchepetkin, 2000) */\n#define NONLIN_EOS                /* define if using nonlinear equation of state */\n#define SALINITY                  /* define if using salinity */\n#define SOLVE3D                   /* define if solving 3D primitive equations */\n#define MASKING                   /* define if there is land in the domain */\n#define TS_U3HADVECTION           /* Third-order upstream horizontal advection of tracers */\n#define TS_C4VADVECTION           /* Fourth-order centered vertical advection of tracers */\n#define TS_DIF2                   /* use to turn ON or OFF harmonic horizontal mixing  */\n#define MIX_S_UV                  /* mixing along constant S-surfaces */\n#define UV_VIS2                   /* turn ON Laplacian horizontal mixing */\n#define AVERAGES\n#define UV_QDRAG\n#define MIX_S_TS\n\n#define  MY25_MIXING\n#ifdef MY25_MIXING\n# define N2S2_HORAVG\n# define KANTHA_CLAYSON\n#endif\n\n#define ANA_BSFLUX                /* analytical bottom salinity flux */\n#define ANA_BTFLUX                /* analytical bottom temperature flux */\n#define ANA_SSFLUX\n\n#define BULK_FLUXES               /* turn ON bulk fluxes computation */\n#define CLOUDS\n#define LONGWAVE\n#define SOLAR_SOURCE","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"Locate the script build_roms.bash, copy it to this directory and adapt it. Here is a list of changes that I made highlighted with the diff tool.","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":" diff -u /home/abarth/src/roms/ROMS/Bin/build_roms.sh build_roms.sh\n--- /home/abarth/src/roms/ROMS/Bin/build_roms.sh\t2020-10-11 21:19:08.000000000 +0200\n+++ build_roms.sh\t2020-11-06 11:16:15.484841910 +0100\n@@ -102,12 +102,12 @@\n # determine the name of the \".h\" header file with the application\n # CPP definitions.\n\n-export   ROMS_APPLICATION=UPWELLING\n+export   ROMS_APPLICATION=LigurianSea\n\n # Set a local environmental variable to define the path to the directories\n # where all this project's files are kept.\n\n-export        MY_ROOT_DIR=${HOME}/ocean/repository\n+export        MY_ROOT_DIR=${HOME}\n export     MY_PROJECT_DIR=${PWD}\n\n # The path to the user's local current ROMS source code.\n@@ -120,7 +120,7 @@\n # machine. This script is designed to more easily allow for differing paths\n # to the code and inputs on differing machines.\n\n- export       MY_ROMS_SRC=${MY_ROOT_DIR}/trunk\n+ export       MY_ROMS_SRC=${MY_ROOT_DIR}/src/roms\n\n # Set path of the directory containing makefile configuration (*.mk) files.\n # The user has the option to specify a customized version of these files\n@@ -168,13 +168,13 @@\n\n #export        USE_OpenMP=on            # shared-memory parallelism\n\n- export              FORT=ifort\n-#export              FORT=gfortran\n+# export              FORT=ifort\n+export              FORT=gfortran\n #export              FORT=pgi\n\n #export         USE_DEBUG=on            # use Fortran debugging flags\n  export         USE_LARGE=on            # activate 64-bit compilation\n-#export       USE_NETCDF4=on            # compile with NetCDF-4 library\n+export       USE_NETCDF4=on            # compile with NetCDF-4 library\n #export   USE_PARALLEL_IO=on            # Parallel I/O with NetCDF-4/HDF5\n\n","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"Review your changes with:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"diff /path/to/previous/build_roms.bash build_roms.bash","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"copy varinfo.dat from ~/src/roms/ROMS/External/varinfo.dat in your current directory","category":"page"},{"location":"#ROMS-model-domain-configuration","page":"ROMS","title":"ROMS model domain configuration","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"copy roms.in from ~/src/roms/User/External/roms.in\ncheck the glossary at the end of this file for the meaning of the keys that we will change\nwhen editing this file, do not use \"tabs\".","category":"page"},{"location":"#File-names","page":"ROMS","title":"File names","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"adapt MyAppCPP\nadapt file names VARNAME, GRDNAME, ININAME, BRYNAME, CLMNAME,  FRCNAME and NFFILES\nalso make sure that these variables are set (number of files with boundary conditions and climatology). If they do not exist, they need to be added (near BRYNAME for example).","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":" NBCFILES == 1\nNCLMFILES == 1","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"change Lm, Mm and N based on the dimensions of your grid (make sure to read the glossary for these variable)\nboundaries LBC\ntime reference","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"DSTART = ...\nTIME_REF =  18581117","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"where DSTART is the number of days since 1858-11-17. For instance the number of days since 2014-01-01 can be computed by of following line in Julia","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"using Dates\nDate(2020,1,1) - Date(1858,11,17)","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"The inverse operation can be done with:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"using Dates\nDate(1858,11,17) + Day(58849)","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"Use DateTime if you want to specify hour, minutes or seconds.","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"Adapt the length of a time step DT and number of time steps NTIMES\nInitially we choose:\nNTIMES -> 1 day\nNHIS, NAVG-> should correspond to 1 hour\nNRST -> should correspond to 1 hour","category":"page"},{"location":"#Nudging-towards-\"climatology\"","page":"ROMS","title":"Nudging towards \"climatology\"","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"LtracerCLM == T T  ! enable processing of CLIM data\nLnudgeTCLM == T T  ! nudge to CLIM data\nTNUDG == 2*10.0d0                    ! days","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"make nudging on inflow is stronger than on outflow","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"OBCFAC == 10.0d0                      ! nondimensional","category":"page"},{"location":"#Run-ROMS","page":"ROMS","title":"Run ROMS","text":"","category":"section"},{"location":"#Run-ROMS-without-MPI","page":"ROMS","title":"Run ROMS without MPI","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"To run ROMS without MPI, one need to disable MPI in build_roms.bash. The ROMS binary will be called romsS and call be called by:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"./romsS < roms.in | tee roms.out","category":"page"},{"location":"#Run-ROMS-with-MPI","page":"ROMS","title":"Run ROMS with MPI","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"How many CPU cores does your machine have? You can use the command top in a shell terminal followed by 1.\nIn build_roms.bash set USE_MPI=on (which is actually the default value)\nRecompile ROMS\nChange roms.in, NtileI and NtileJ. The number of CPU cores should be NtileI * NtileJ.\nRun ROMS with, e.g.","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"mpirun -np 4 ./romsM  roms.in | tee roms.out","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"where 4 is the number of cores to use.","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"With the command tee the normal screen output will be place in the file roms.out but still be printed on the screen.","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"A problem? What does the error message say?\nOutputs are in roms_his.nc and roms_avg.nc, plot some variables like sea surface height and sea surface temperature at the beginning and the end of the simulation.\nIn Julia, force figure 1 and to 2 to have the same color-bar.","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"figure(); p1 = pcolor(randn(3,3)); colorbar()\nfigure(); p2 = pcolor(randn(3,3)); colorbar()\np2.set_clim(p1.get_clim())","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"If everything runs fine,\nis the model still stable with a longer time steps (DT) ?\nincrease the number of time steps (NTIMES)\npossibly adapt the frequency at which you save the model results (NHIS, NAVG,NRST)","category":"page"},{"location":"#Interpreting-ROMS-output","page":"ROMS","title":"Interpreting ROMS output","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"Check minimum and maximum value of the different parameters","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":" NLM: GET_STATE - Read state initial conditions,             t = 57235 00:00:00\n                   (Grid 02, File: roms_nest_his.nc, Rec=0182, Index=1)\n                - free-surface\n                   (Min = -4.63564634E-01 Max = -3.63838434E-01)","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"The barotropic, baroclinic and Coriolis Courant number should be smaller than 1","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":" Minimum barotropic Courant Number =  2.09670689E-02\n Maximum barotropic Courant Number =  5.56799674E-01\n Maximum Coriolis   Courant Number =  1.71574766E-03","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"Information\nenergy (kinetic, potential, total) and volume\nmaximum Courant number","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"   STEP   Day HH:MM:SS  KINETIC_ENRG   POTEN_ENRG    TOTAL_ENRG    NET_VOLUME  Grid\n          C => (i,j,k)       Cu            Cv            Cw         Max Speed\n\n 346200 57235 00:00:00  2.691184E-03  1.043099E+04  1.043099E+04  6.221264E+13  01\n          (079,055,30)  9.266512E-02  4.949213E-02  0.000000E+00  1.081862E+00","category":"page"},{"location":"#Validation","page":"ROMS","title":"Validation","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"Check out satellite data (e.g. sea surface temperature, sea surface height) at:","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"CMEMS\nPODAAC NASA","category":"page"},{"location":"","page":"ROMS","title":"ROMS","text":"Make some comparison with satellite and the downloaded in situ observation","category":"page"},{"location":"#Hydrodynamic-model-troubleshooting","page":"ROMS","title":"Hydrodynamic model troubleshooting","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"Hydrodynamic model troubleshooting","category":"page"},{"location":"#More-information","page":"ROMS","title":"More information","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"ROMS Wiki\nROMS Wiki Frequently Asked Questions\nK. Hedström. 2016. Technical Manual for a Coupled Sea-Ice/Ocean Circulation Model (Version 4). U.S. Dept. of the Interior, Bureau of Ocean Energy Management, Alaska OCS Region. OCS, Study BOEM 2016-037. 176 pp.","category":"page"},{"location":"#Reference","page":"ROMS","title":"Reference","text":"","category":"section"},{"location":"","page":"ROMS","title":"ROMS","text":"Modules = [ROMS]\nOrder   = [:function, :type]","category":"page"},{"location":"#ROMS.create_grid-NTuple{11,Any}","page":"ROMS","title":"ROMS.create_grid","text":"ROMS.create_grid(fname,h,f,lon_r,lat_r,mask_r,angle,pm,pn,dndx,dmde)\n\nCreate a NetCDF grid file fname using the bathymetry h, Coriolis parameter f and longitude, latitude, mask, angle and strechting factors are rho-points.\n\nnote: Note\nThis function currently only work for non-rotated grids (angle = 0) and the spherical grids.\n\n\n\n\n\n","category":"method"},{"location":"#ROMS.diffusion2!","page":"ROMS","title":"ROMS.diffusion2!","text":" diffusion2!(f,alpha,Niter)\n\nTwo-dimensional diffusion of field f. f is the initial condition of field. alpha is a vector or tuple with two elements corresponding to the diffusion coefficient (multiplied by grid spacing) for the two dimensions. Niter is the number of iterations. On output, f is the field after Niter iterations.\n\n\n\n\n\n","category":"function"},{"location":"#ROMS.extract_bc-Tuple{Any,Any,Any}","page":"ROMS","title":"ROMS.extract_bc","text":"ROMS.extract_bc(domain,clim_filename,bc_filename; missing_value = 9999)\n\nFrom the climatology clim_filename extract the boundary conditions at all open boundaries (using the mask in domain) and save the result into the netCDF nc_filename.\n\n\n\n\n\n","category":"method"},{"location":"#ROMS.extract_ic-NTuple{4,Any}","page":"ROMS","title":"ROMS.extract_ic","text":"ROMS.extract_ic(domain,clim_filename,icfile,t0::DateTime;\n                time_origin = DateTime(1858,11,17))\n\nFrom the climatology clim_filename extract a single time instance at the time t0 (or the nearest) and save the result into icfile.\n\n\n\n\n\n","category":"method"},{"location":"#ROMS.gebco_load-Tuple{Any,Any,Any}","page":"ROMS","title":"ROMS.gebco_load","text":"x,y,b = gebco_load(bath_name,xr,yr)\n\nLoads GEBCO bathymetry with lon and lat range xr, yr.\n\n\n\n\n\n","category":"method"},{"location":"#ROMS.generate_grid-NTuple{8,Any}","page":"ROMS","title":"ROMS.generate_grid","text":"ROMS.generate_grid(grid_fname,bath_name,xr,yr,red,opt,hmin,rmax)\n\nGenerate the netCDF file grid_fname representing the model grid from the bathymetry file bath_name. The domain is bounded by the longitude range xr and the latitude range yr. The resolution of the bathymetry is reduced by the factors red[1] and red[2] in the longitude and latitude directions. opt is tuple with additional parameters describing the vertical axis. hmin and rmax is the minimum depth and rmax is the smoothness parameter of the bathymetry. The r parameter is defined as:\n\nr = maxleft( undersetijmax frach_ij - h_i+1jh_ij + h_i+1j   undersetijmax frach_ij - h_ij+1h_ij + h_ij+1 right)\n\nThe parameter opt contains for example:\n\n# model specific parameters\nopt = (\n    Tcline = 50,   # m\n    theta_s = 5,   # surface refinement\n    theta_b = 0.4, # bottom refinement\n    nlevels = 32,  # number of vertical levels\n    Vtransform  = 2,\n    Vstretching = 4,\n)\n\n\n\n\n\n","category":"method"},{"location":"#ROMS.interp_clim-NTuple{4,Any}","page":"ROMS","title":"ROMS.interp_clim","text":"ROMS.interp_clim(domain,clim_filename,dataset,timerange;\n                 padding = 0.5,\n                 missing_value = -9999.)\n\nInterpolate dataset on the the model grid domain and creating the climatology file clim_filename for all dates between timerange[1] and timerange[2].\n\n\n\n\n\n","category":"method"},{"location":"#ROMS.load-Tuple{ROMS.CMEMS,Symbol}","page":"ROMS","title":"ROMS.load","text":"v,(x,y,z,t) = ROMS.load(ds::CMEMS,name::Symbol; kwargs...)\n\nLoads a variable from a CMEMS remote resource. name is the NetCDF CF standard name.\n\n\n\n\n\n","category":"method"},{"location":"#ROMS.nudgecoef-Tuple{Any,AbstractString,Any,Any,Any,Any}","page":"ROMS","title":"ROMS.nudgecoef","text":"nudgecoef(domain,nudge_filename,alpha,Niter,halo,tscale; max_tscale = 5e5)\n\nGenerate trace nudging coefficients with a value of 1/tscale at the open boundaries over a halo grid cells. coefficients field smoothed spatially with a diffusion coefficient alpha over Niter iterations. For grid cells where the nudging time scale exceeds max_tscale, nudging is disabled (coefficient is set to zero).\n\n\n\n\n\n","category":"method"},{"location":"#ROMS.prepare_ecmwf-NTuple{4,Any}","page":"ROMS","title":"ROMS.prepare_ecmwf","text":"prepare_ecmwf(atmo_fname,Vnames,filename_prefix,domain_name;\n                   time_origin = DateTime(1858,11,17)\n)\n\nGenerate ROMS forcing fields from the ECMWF data file atmo_fname.\n\nExample\n\ndatadir = \"...\"\natmo_fname = joinpath(datadir,\"ecmwf_sample_data.nc\")\nfilename_prefix = joinpath(datadir,\"liguriansea_\")\ndomain_name = \"Ligurian Sea Region\"\nVnames = [\"sustr\",\"svstr\",\"shflux\",\"swflux\",\"swrad\",\"Uwind\",\"Vwind\",\"lwrad\",\n    \"lwrad_down\",\"latent\",\"sensible\",\"cloud\",\"rain\",\"Pair\",\"Tair\",\"Qair\"]\nprepare_ecmwf(atmo_fname,Vnames,filename_prefix,domain_name)\n)\n\nBased on forcing/d_ecmwf2roms.m:\n\nCopyright (c) 2002-2017 The ROMS/TOMS Group      Hernan G. Arango\nLicensed under a MIT/X style license             John Wilkin\nSee License_ROMS.txt\n\n\n\n\n\n","category":"method"},{"location":"#ROMS.reduce_res-Union{Tuple{N}, Tuple{T}, Tuple{AbstractArray{T,N},Any}} where N where T","page":"ROMS","title":"ROMS.reduce_res","text":" field = reduce_res(field,red);\n\nreduce resolution of field \"field\" by a factor \"red\"\n\n\n\n\n\n","category":"method"},{"location":"#ROMS.relative_humidity-Tuple{Any,Any}","page":"ROMS","title":"ROMS.relative_humidity","text":"rh = relative_humidity(temperature_2m_C,dew_temperature_2m_C)\n\nCompute the relative humidity (between 0 and 100) from temperature at 2 m, and dew_temperature at 2 m) both in degree Celsius)\n\n[1] https://web.archive.org/web/20200926200733/https://www.weather.gov/media/epz/wxcalc/vaporPressure.pdf\n\n\n\n\n\n","category":"method"},{"location":"#ROMS.smoothgrid-Tuple{Any,Any,Any}","page":"ROMS","title":"ROMS.smoothgrid","text":"hsmooth = smoothgrid(h,hmin,rmax)\n\nSmooth the topography to get a maximum r factor equalt to rmax\n\nThe original code is from Pierrick Penven from Roms_tools. Copyright (c) 2002-2006 by Pierrick Penven, GPL\n\n\n\n\n\n","category":"method"},{"location":"#ROMS.stretching-NTuple{6,Any}","page":"ROMS","title":"ROMS.stretching","text":"s,C = stretching(Vstretching, theta_s, theta_b, hc, N, kgrid, report)\n\nCompute ROMS vertical coordinate stretching function.\n\nGiven vertical terrain-following vertical stretching parameters, this routine computes the vertical stretching function used in ROMS vertical coordinate transformation. Check the following (link)[https://www.myroms.org/wiki/index.php/Vertical_S-coordinate] for details:\n\nOn Input:\n\nVstretching:   Vertical stretching function:\n\n                   Vstretching = 1,  original (Song and Haidvogel, 1994)\n                   Vstretching = 2,  A. Shchepetkin (UCLA-ROMS, 2005)\n                   Vstretching = 3,  R. Geyer BBL refinement\n                   Vstretching = 4,  A. Shchepetkin (UCLA-ROMS, 2010)\n                   Vstretching = 5,  Quadractic (Souza et al., 2015)\n\ntheta_s:       S-coordinate surface control parameter (scalar)\ntheta_b:       S-coordinate bottom control parameter (scalar)\nhc:            Width (m) of surface or bottom boundary layer in which                  higher vertical resolution is required during                  stretching (scalar)\nN:             Number of vertical levels (scalar)\nkgrid         Depth grid type logical switch:                  kgrid = 0,        function at vertical RHO-points                  kgrid = 1,        function at vertical W-points\nreport        Flag to report detailed information (OPTIONAL):                  report = false,   do not report                  report = true,    report information\n\nOn Output:\n\ns:             S-coordinate independent variable, [-1 <= s <= 0] at                  vertical RHO- or W-points (vector)\nC:             Nondimensional, monotonic, vertical stretching function,                  C(s), 1D array, [-1 <= C(s) <= 0]\n\nThe code is ported from the matlab code stretching.m from Hernan G. Arango. Copyright (c) 2002-2020 The ROMS/TOMS Group, Licensed under a MIT/X style license See LicenseROMS.txt, Hernan G. Arango https://www.myroms.org/main.php?page=LicenseROMS\n\n\n\n\n\n","category":"method"},{"location":"#ROMS.vapor_pressure-Tuple{Any}","page":"ROMS","title":"ROMS.vapor_pressure","text":"e = vapor_pressure(T)\n\nactual vapor pressure in hPa (millibars) from dewpoint temperature T in degree Celsius using using [1]. If T is the air temperature, then  e is the saturated vapor pressure over liquid water is given by:\n\ne(T) = 611 cdot 10 ^ left(  frac75 T2377 + T right)\n\n[1] https://web.archive.org/web/20200926200733/https://www.weather.gov/media/epz/wxcalc/vaporPressure.pdf\n\n\n\n\n\n","category":"method"},{"location":"#ROMS.vapor_pressure_Buck-Tuple{Any}","page":"ROMS","title":"ROMS.vapor_pressure_Buck","text":"e = vapor_pressure_Buck(T)\n\nactual vapor pressure in hPa (millibars) from dewpoint temperature T in degree Celsius using using Buck (1996). If T is the air temperature, then  e is the saturated vapor pressure over liquid water is given by:\n\ne(T) = 61121 exp left(left( 18678 - fracT 2345right)left( fracT 25714 + T right)right)\n\n\n\n\n\n","category":"method"},{"location":"#ROMS.CMEMS-NTuple{5,Any}","page":"ROMS","title":"ROMS.CMEMS","text":"ds = ROMS.CMEMS(username,password,service_id,mapping,cachedir;\n               motu_server = \"http://nrt.cmems-du.eu/motu-web/Motu\",\n               # Put here the path of the script motuclient\n               motu_program = \"motuclient\",\n           )\n\nReturns a structure ds to connect to a CMEMS Motu server using the python tools motuclient (which must be available in your PATH). The mapping parameter contains a dictorary linking the NetCDF CF standard namer to the underlying NetCDF variable names and the product identifers (more information is available in the product user manual). cachedir is a directory where the products are downloaded for caching.\n\nExample\n\nThe  values of service_id and mapping below are specific to the Mediterranean Sea and must be adapted for other domains.\n\ncmems_username = \"Alice\"\ncmems_password = \"rabbit\"\noutdir = \"/tmp\"\nservice_id = \"MEDSEA_ANALYSIS_FORECAST_PHY_006_013-TDS\"\nmapping = Dict(\n    # var  product_id\n    :sea_surface_height_above_geoid => (\"zos\",\"med00-cmcc-ssh-an-fc-d\"),\n    :sea_water_potential_temperature => (\"thetao\", \"med00-cmcc-tem-an-fc-d\"),\n    :sea_water_salinity => (\"so\",\"med00-cmcc-sal-an-fc-d\"),\n    :eastward_sea_water_velocity => (\"uo\", \"med00-cmcc-cur-an-fc-d\"),\n    :northward_sea_water_velocity => (\"vo\", \"med00-cmcc-cur-an-fc-d\"),\n)\ndataset = ROMS.CMEMS(cmems_username,cmems_password,service_id,mapping,outdir)\n\n\n\n\n\n","category":"method"},{"location":"#ROMS.Grid-Tuple{Any,Any}","page":"ROMS","title":"ROMS.Grid","text":"grid = ROMS.Grid(grid_fname,opt)\n\nLoads the ROMS grid from a NetCDF file grid_fname. The grid structure contains the longitude, latitude, depth (z), angle and mask at rho, u, v and w points for  a C-grid.\n\nnote: Note\ngrid.z corresponds to an elevation equal to zero.\n\nExample\n\nopt = (\n    Tcline = 50,   # m\n    theta_s = 5,   # surface refinement\n    theta_b = 0.4, # bottom refinement\n    nlevels = 32,  # number of vertical levels\n    Vtransform  = 2,\n    Vstretching = 4,\n)\ngrid = ROMS.Grid(expanduser(\"~/Models/LS2v/LS2v.nc\"),opt)\n\n\n\n\n\n","category":"method"}]
}
