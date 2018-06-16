# SuiteSparse

## API

```@meta
DocTestSetup = :(using SuiteSparse, LinearAlgebra, SparseArrays)
```

### CHOLMOD

```@meta
CurrentModule = SuiteSparse.CHOLMOD
```

```@docs
cholesky
cholesky!
det
diag
issuccess
ldlt
ldlt!
logdet
lowrankdowndate
lowrankdowndate!
lowrankupdate
lowrankupdate!
lowrankupdowndate!
```

### UMFPACK

```@meta
CurrentModule = SuiteSparse.UMFPACK
```

```@docs
lu
```

### SPQR

```@meta
CurrentModule = SuiteSparse.SPQR
```

```@docs
qr
getproperty
\
```

```@meta
DocTestSetup = nothing
```