using Documenter, LinearAlgebra, SuiteSparse

makedocs(
    format = :html,
    sitename = "SuiteSparse.jl",
    modules = [SuiteSparse.CHOLMOD, SuiteSparse.UMFPACK, SuiteSparse.SPQR],
    pages = [
        "index.md",
        "cholmod.md",
        "umfpack.md",
        "spqr.md",
    ]
)

deploydocs(
    repo = "github.com/JuliaLinearAlgebra/SuiteSparse.jl.git",
    target = "build",
    julia  = "nightly",
    deps = nothing,
    make = nothing
)
