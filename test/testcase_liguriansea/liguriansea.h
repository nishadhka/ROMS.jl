#define UV_ADV                    /* turn ON advection terms */
#define UV_COR                    /* turn ON Coriolis term */
#define DJ_GRADPS                 /* Splines density  Jacobian (Shchepetkin, 2000) */
#define NONLIN_EOS                /* define if using nonlinear equation of state */
#define SALINITY                  /* define if using salinity */
#define SOLVE3D                   /* define if solving 3D primitive equations */
#define MASKING                   /* define if there is land in the domain */
#define TS_U3HADVECTION           /* Third-order upstream horizontal advection of tracers */
#define TS_C4VADVECTION           /* Fourth-order centered vertical advection of tracers */
#define TS_DIF2                   /* use to turn ON or OFF harmonic horizontal mixing  */
#define MIX_S_UV                  /* mixing along constant S-surfaces */
#define UV_VIS2                   /* turn ON Laplacian horizontal mixing */
#define AVERAGES
#define UV_QDRAG
#define MIX_S_TS

#define  MY25_MIXING
#ifdef MY25_MIXING
# define N2S2_HORAVG
# define KANTHA_CLAYSON
#endif

#define ANA_BSFLUX                /* analytical bottom salinity flux */
#define ANA_BTFLUX                /* analytical bottom temperature flux */
#define ANA_SSFLUX

#define BULK_FLUXES               /* turn ON bulk fluxes computation */
#define CLOUDS
#define LONGWAVE
#define SOLAR_SOURCE
