var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "SuiteSparse",
    "title": "SuiteSparse",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#SuiteSparse-1",
    "page": "SuiteSparse",
    "title": "SuiteSparse",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#API-1",
    "page": "SuiteSparse",
    "title": "API",
    "category": "section",
    "text": "DocTestSetup = :(using SuiteSparse, LinearAlgebra, SparseArrays)"
},

{
    "location": "index.html#LinearAlgebra.cholesky",
    "page": "SuiteSparse",
    "title": "LinearAlgebra.cholesky",
    "category": "function",
    "text": "cholesky(A; shift = 0.0, check = true, perm = Int[]) -> CHOLMOD.Factor\n\nCompute the Cholesky factorization of a sparse positive definite matrix A. A must be a SparseMatrixCSC or a Symmetric/Hermitian view of a SparseMatrixCSC. Note that even if A doesn\'t have the type tag, it must still be symmetric or Hermitian. A fill-reducing permutation is used. F = cholesky(A) is most frequently used to solve systems of equations with F\\b, but also the methods diag, det, and logdet are defined for F. You can also extract individual factors from F, using F.L. However, since pivoting is on by default, the factorization is internally represented as A == P\'*L*L\'*P with a permutation matrix P; using just L without accounting for P will give incorrect answers. To include the effects of permutation, it\'s typically preferable to extract \"combined\" factors like PtL = F.PtL (the equivalent of P\'*L) and LtP = F.UP (the equivalent of L\'*P).\n\nWhen check = true, an error is thrown if the decomposition fails. When check = false, responsibility for checking the decomposition\'s validity (via issuccess) lies with the user.\n\nSetting the optional shift keyword argument computes the factorization of A+shift*I instead of A. If the perm argument is nonempty, it should be a permutation of 1:size(A,1) giving the ordering to use (instead of CHOLMOD\'s default AMD ordering).\n\nnote: Note\nThis method uses the CHOLMOD library from SuiteSparse, which only supports doubles or complex doubles. Input matrices not of those element types will be converted to SparseMatrixCSC{Float64} or SparseMatrixCSC{ComplexF64} as appropriate.Many other functions from CHOLMOD are wrapped but not exported from the Base.SparseArrays.CHOLMOD module.\n\n\n\n\n\n"
},

{
    "location": "index.html#LinearAlgebra.cholesky!",
    "page": "SuiteSparse",
    "title": "LinearAlgebra.cholesky!",
    "category": "function",
    "text": "cholesky!(F::Factor, A; shift = 0.0, check = true) -> CHOLMOD.Factor\n\nCompute the Cholesky (LL) factorization of A, reusing the symbolic factorization F. A must be a SparseMatrixCSC or a Symmetric/Hermitian view of a SparseMatrixCSC. Note that even if A doesn\'t have the type tag, it must still be symmetric or Hermitian.\n\nSee also cholesky.\n\nnote: Note\nThis method uses the CHOLMOD library from SuiteSparse, which only supports doubles or complex doubles. Input matrices not of those element types will be converted to SparseMatrixCSC{Float64} or SparseMatrixCSC{ComplexF64} as appropriate.\n\n\n\n\n\n"
},

{
    "location": "index.html#LinearAlgebra.det",
    "page": "SuiteSparse",
    "title": "LinearAlgebra.det",
    "category": "function",
    "text": "det(F::Factor)\n\nCompute the determinant of the factorized matrix\n\n\n\n\n\n"
},

{
    "location": "index.html#LinearAlgebra.diag",
    "page": "SuiteSparse",
    "title": "LinearAlgebra.diag",
    "category": "function",
    "text": "diag(F::Factor)\n\nReturn a vector of the diagonal elements of the triangular factor of a Cholesky factorization or the diagonal of an LDLt factorization.\n\n\n\n\n\n"
},

{
    "location": "index.html#LinearAlgebra.issuccess",
    "page": "SuiteSparse",
    "title": "LinearAlgebra.issuccess",
    "category": "function",
    "text": "issuccess(F::Factor)\n\nTest if the factorization succeeded\n\n\n\n\n\n"
},

{
    "location": "index.html#LinearAlgebra.ldlt",
    "page": "SuiteSparse",
    "title": "LinearAlgebra.ldlt",
    "category": "function",
    "text": "ldlt(A; shift = 0.0, check = true, perm=Int[]) -> CHOLMOD.Factor\n\nCompute the LDL factorization of a sparse matrix A. A must be a SparseMatrixCSC or a Symmetric/Hermitian view of a SparseMatrixCSC. Note that even if A doesn\'t have the type tag, it must still be symmetric or Hermitian. A fill-reducing permutation is used. F = ldlt(A) is most frequently used to solve systems of equations A*x = b with F\\b. The returned factorization object F also supports the methods diag, det, and logdet. You can extract individual factors from F using F.L. However, since pivoting is on by default, the factorization is internally represented as A == P\'*L*D*L\'*P with a permutation matrix P; using just L without accounting for P will give incorrect answers. To include the effects of permutation, it is typically preferable to extract \"combined\" factors like PtL = F.PtL (the equivalent of P\'*L) and LtP = F.UP (the equivalent of L\'*P). The complete list of supported factors is :L, :PtL, :D, :UP, :U, :LD, :DU, :PtLD, :DUP.\n\nWhen check = true, an error is thrown if the decomposition fails. When check = false, responsibility for checking the decomposition\'s validity (via issuccess) lies with the user.\n\nSetting the optional shift keyword argument computes the factorization of A+shift*I instead of A. If the perm argument is nonempty, it should be a permutation of 1:size(A,1) giving the ordering to use (instead of CHOLMOD\'s default AMD ordering).\n\nnote: Note\nThis method uses the CHOLMOD library from SuiteSparse, which only supports doubles or complex doubles. Input matrices not of those element types will be converted to SparseMatrixCSC{Float64} or SparseMatrixCSC{ComplexF64} as appropriate.Many other functions from CHOLMOD are wrapped but not exported from the Base.SparseArrays.CHOLMOD module.\n\n\n\n\n\n"
},

{
    "location": "index.html#LinearAlgebra.ldlt!",
    "page": "SuiteSparse",
    "title": "LinearAlgebra.ldlt!",
    "category": "function",
    "text": "ldlt!(F::Factor, A; shift = 0.0, check = true) -> CHOLMOD.Factor\n\nCompute the LDL factorization of A, reusing the symbolic factorization F. A must be a SparseMatrixCSC or a Symmetric/Hermitian view of a SparseMatrixCSC. Note that even if A doesn\'t have the type tag, it must still be symmetric or Hermitian.\n\nSee also ldlt.\n\nnote: Note\nThis method uses the CHOLMOD library from SuiteSparse, which only supports doubles or complex doubles. Input matrices not of those element types will be converted to SparseMatrixCSC{Float64} or SparseMatrixCSC{ComplexF64} as appropriate.\n\n\n\n\n\n"
},

{
    "location": "index.html#LinearAlgebra.logdet",
    "page": "SuiteSparse",
    "title": "LinearAlgebra.logdet",
    "category": "function",
    "text": "logdet(F::Factor)\n\nCompute the logarithm of the determinant of the factorized matrix\n\n\n\n\n\n"
},

{
    "location": "index.html#SuiteSparse.CHOLMOD.lowrankdowndate",
    "page": "SuiteSparse",
    "title": "SuiteSparse.CHOLMOD.lowrankdowndate",
    "category": "function",
    "text": "lowrankupdate(F::Factor, C) -> FF::Factor\n\nGet an LDLt Factorization of A + C*C\' given an LDLt or LLt factorization F of A.\n\nThe returned factor is always an LDLt factorization.\n\nSee also lowrankdowndate!, lowrankupdate, lowrankupdate!.\n\n\n\n\n\n"
},

{
    "location": "index.html#SuiteSparse.CHOLMOD.lowrankdowndate!",
    "page": "SuiteSparse",
    "title": "SuiteSparse.CHOLMOD.lowrankdowndate!",
    "category": "function",
    "text": "lowrankdowndate!(F::Factor, C)\n\nUpdate an LDLt or LLt Factorization F of A to a factorization of A - C*C\'.\n\nLLt factorizations are converted to LDLt.\n\nSee also lowrankdowndate, lowrankupdate, lowrankupdate!.\n\n\n\n\n\n"
},

{
    "location": "index.html#SuiteSparse.CHOLMOD.lowrankupdate",
    "page": "SuiteSparse",
    "title": "SuiteSparse.CHOLMOD.lowrankupdate",
    "category": "function",
    "text": "lowrankupdate(F::Factor, C) -> FF::Factor\n\nGet an LDLt Factorization of A + C*C\' given an LDLt or LLt factorization F of A.\n\nThe returned factor is always an LDLt factorization.\n\nSee also lowrankupdate!, lowrankdowndate, lowrankdowndate!.\n\n\n\n\n\n"
},

{
    "location": "index.html#SuiteSparse.CHOLMOD.lowrankupdate!",
    "page": "SuiteSparse",
    "title": "SuiteSparse.CHOLMOD.lowrankupdate!",
    "category": "function",
    "text": "lowrankupdate!(F::Factor, C)\n\nUpdate an LDLt or LLt Factorization F of A to a factorization of A + C*C\'.\n\nLLt factorizations are converted to LDLt.\n\nSee also lowrankupdate, lowrankdowndate, lowrankdowndate!.\n\n\n\n\n\n"
},

{
    "location": "index.html#SuiteSparse.CHOLMOD.lowrankupdowndate!",
    "page": "SuiteSparse",
    "title": "SuiteSparse.CHOLMOD.lowrankupdowndate!",
    "category": "function",
    "text": "lowrankupdowndate!(F::Factor, C::Sparse, update::Cint)\n\nUpdate an LDLt or LLt Factorization F of A to a factorization of A ± C*C\'.\n\nIf sparsity preserving factorization is used, i.e. L*L\' == P*A*P\' then the new factor will be L*L\' == P*A*P\' + C\'*C\n\nupdate: Cint(1) for A + CC\', Cint(0) for A - CC\'\n\n\n\n\n\n"
},

{
    "location": "index.html#CHOLMOD-1",
    "page": "SuiteSparse",
    "title": "CHOLMOD",
    "category": "section",
    "text": "CurrentModule = SuiteSparse.CHOLMODcholesky\ncholesky!\ndet\ndiag\nissuccess\nldlt\nldlt!\nlogdet\nlowrankdowndate\nlowrankdowndate!\nlowrankupdate\nlowrankupdate!\nlowrankupdowndate!"
},

{
    "location": "index.html#LinearAlgebra.lu",
    "page": "SuiteSparse",
    "title": "LinearAlgebra.lu",
    "category": "function",
    "text": "lu(A::SparseMatrixCSC; check = true) -> F::UmfpackLU\n\nCompute the LU factorization of a sparse matrix A.\n\nFor sparse A with real or complex element type, the return type of F is UmfpackLU{Tv, Ti}, with Tv = Float64 or ComplexF64 respectively and Ti is an integer type (Int32 or Int64).\n\nWhen check = true, an error is thrown if the decomposition fails. When check = false, responsibility for checking the decomposition\'s validity (via issuccess) lies with the user.\n\nThe individual components of the factorization F can be accessed by indexing:\n\nComponent Description\nL L (lower triangular) part of LU\nU U (upper triangular) part of LU\np right permutation Vector\nq left permutation Vector\nRs Vector of scaling factors\n: (L,U,p,q,Rs) components\n\nThe relation between F and A is\n\nF.L*F.U == (F.Rs .* A)[F.p, F.q]\n\nF further supports the following functions:\n\n\\\ndet\n\nnote: Note\nlu(A::SparseMatrixCSC) uses the UMFPACK library that is part of SuiteSparse. As this library only supports sparse matrices with Float64 or ComplexF64 elements, lu converts A into a copy that is of type SparseMatrixCSC{Float64} or SparseMatrixCSC{ComplexF64} as appropriate.\n\n\n\n\n\n"
},

{
    "location": "index.html#UMFPACK-1",
    "page": "SuiteSparse",
    "title": "UMFPACK",
    "category": "section",
    "text": "CurrentModule = SuiteSparse.UMFPACKlu"
},

{
    "location": "index.html#LinearAlgebra.qr",
    "page": "SuiteSparse",
    "title": "LinearAlgebra.qr",
    "category": "function",
    "text": "qr(A) -> QRSparse\n\nCompute the QR factorization of a sparse matrix A. Fill-reducing row and column permutations are used such that F.R = F.Q\'*A[F.prow,F.pcol]. The main application of this type is to solve least squares or underdetermined problems with \\. The function calls the C library SPQR.\n\nExamples\n\njulia> A = sparse([1,2,3,4], [1,1,2,2], [1.0,1.0,1.0,1.0])\n4×2 SparseArrays.SparseMatrixCSC{Float64,Int64} with 4 stored entries:\n  [1, 1]  =  1.0\n  [2, 1]  =  1.0\n  [3, 2]  =  1.0\n  [4, 2]  =  1.0\n\njulia> qr(A)\nSuiteSparse.SPQR.QRSparse{Float64,Int64}\nQ factor:\n4×4 SuiteSparse.SPQR.QRSparseQ{Float64,Int64}:\n -0.707107   0.0        0.0       -0.707107\n  0.0       -0.707107  -0.707107   0.0\n  0.0       -0.707107   0.707107   0.0\n -0.707107   0.0        0.0        0.707107\nR factor:\n2×2 SparseArrays.SparseMatrixCSC{Float64,Int64} with 2 stored entries:\n  [1, 1]  =  -1.41421\n  [2, 2]  =  -1.41421\nRow permutation:\n4-element Array{Int64,1}:\n 1\n 3\n 4\n 2\nColumn permutation:\n2-element Array{Int64,1}:\n 1\n 2\n\n\n\n\n\n"
},

{
    "location": "index.html#Base.getproperty",
    "page": "SuiteSparse",
    "title": "Base.getproperty",
    "category": "function",
    "text": "getproperty(F::QRSparse, d::Symbol)\n\nExtract factors of a QRSparse factorization. Possible values of d are\n\nQ : QRSparseQ matrix of the Q factor in Householder form\nR : UpperTriangular R factor\nprow : Vector of the row permutations applied to the factorized matrix\npcol : Vector of the column permutations applied to the factorized matrix\n\nExamples\n\njulia> F = qr(sparse([1,3,2,3,4], [1,1,2,3,4], [1.0,2.0,3.0,4.0,5.0]));\n\njulia> F.Q\n4×4 SuiteSparse.SPQR.QRSparseQ{Float64,Int64}:\n 1.0  0.0  0.0  0.0\n 0.0  1.0  0.0  0.0\n 0.0  0.0  1.0  0.0\n 0.0  0.0  0.0  1.0\n\njulia> F.R\n4×4 SparseArrays.SparseMatrixCSC{Float64,Int64} with 5 stored entries:\n  [1, 1]  =  3.0\n  [2, 2]  =  4.0\n  [3, 3]  =  5.0\n  [2, 4]  =  2.0\n  [4, 4]  =  1.0\n\njulia> F.prow\n4-element Array{Int64,1}:\n 2\n 3\n 4\n 1\n\njulia> F.pcol\n4-element Array{Int64,1}:\n 2\n 3\n 4\n 1\n\n\n\n\n\n"
},

{
    "location": "index.html#Base.:\\",
    "page": "SuiteSparse",
    "title": "Base.:\\",
    "category": "function",
    "text": "(\\)(F::QRSparse, B::StridedVecOrMat)\n\nSolve the least squares problem minAx - b^2 or the linear system of equations Ax=b when F is the sparse QR factorization of A. A basic solution is returned when the problem is underdetermined.\n\nExamples\n\njulia> A = sparse([1,2,4], [1,1,1], [1.0,1.0,1.0], 4, 2)\n4×2 SparseArrays.SparseMatrixCSC{Float64,Int64} with 3 stored entries:\n  [1, 1]  =  1.0\n  [2, 1]  =  1.0\n  [4, 1]  =  1.0\n\njulia> qr(A)\\fill(1.0, 4)\n2-element Array{Float64,1}:\n 1.0\n 0.0\n\n\n\n\n\n"
},

{
    "location": "index.html#SPQR-1",
    "page": "SuiteSparse",
    "title": "SPQR",
    "category": "section",
    "text": "CurrentModule = SuiteSparse.SPQRqr\ngetproperty\n\\DocTestSetup = nothing"
},

]}
