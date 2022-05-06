
## Compilation error with Docker:
The Docker has the version of gfrortan GNU Fortran (Debian 10.2.1-6) 10.2.1 20210110
This ends up in error as reported in 
https://www.myroms.org/forum/viewtopic.php?t=5696
https://www.myroms.org/forum/viewtopic.php?t=5723

To avoid the error, ROMS source file `Linux-gfortran.mk`, line number 32 has to be edited 

```
FFLAGS := -frepack-arrays -fallow-argument-mismatch
```

The changes can be rechedked with running `./build_roms.sh -p FFLAGS`



