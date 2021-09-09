var documenterSearchIndex = {"docs":
[{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/#Contents","page":"Reference","title":"Contents","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/#Index","page":"Reference","title":"Index","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [ADNLPModelProblems]","category":"page"},{"location":"reference/#ADNLPModelProblems.meta","page":"Reference","title":"ADNLPModelProblems.meta","text":"ADNLPModelProblems.meta\n\nA composite type that represents the main features of the optimization problem.     optimize    obj(x)     subject to  lvar ≤    x    ≤ uvar                 lcon ≤ cons(x) ≤ ucon –- The following keys are valid: Problem meta\n\nnvar: number of general constraints\nvariable_size: true if we can modify problem size\nncon: number of general constraints\nvariable_con_size: true if we can modify problem size\nnnzo: number of nonzeros in all objectives gradients\nnnzh: number of elements needed to store the nonzeros in the sparse Hessian\nnnzj: number of elements needed to store the nonzeros in the sparse Jacobian\nminimize: true if optimize == minimize\nname: problem name\n\nSolution meta\n\noptimalvalue: best known objective value (NaN if unknown, -Inf if unbounded problem)\nhas_multiple_solution: true if the problem has more than one global solution\nis_infeasible: true if problem is infeasible\n\nClassification\n\nobjtype: #in objtypes\ncontype: #in contypes\norigin: #in origins\nderiv: UInt8 with the largest order derivatives available\nnot_everywhere_defined: true if the problem might return NaN or Inf outside the bounds\nhas_cvx_obj: true if the problem has a convex objective\nhas_cvx_con: true if the problem has convex constraints\nhas_equalities_only: true if the problem constraints are equality constraints (doesn't include bounds)\nhas_inequalities_only: true if the problem constraints are inequality constraints (doesn't include bounds)\nhas_bounds: true if the problem has bound constraints\nhas_fixed_variables: true if it has fixed variables\ncqs: Between 0 and 4 indicates the constraint qualification of the problem, see cqs(i) for the correspondance.\n\n\n\n\n\n","category":"constant"},{"location":"reference/#ADNLPModelProblems.generate_meta-Tuple{String, Vararg{Any, N} where N}","page":"Reference","title":"ADNLPModelProblems.generate_meta","text":"generate_meta(jmodel, name, variable_size, variable_con_size, cvx_obj, cvx_con, quad_cons)      generate_meta(name, variable_size, variable_con_size, cvx_obj, cvx_con, quad_cons)      is used to generate the meta of a given JuMP model.\n\n\n\n\n\n","category":"method"},{"location":"#ADNLPModelProblems","page":"Home","title":"ADNLPModelProblems","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A list of optimization problems in ADNLPModel format, seeADNLPModels.jl. Most of the problems given here are also available in JuMP format either in OptimizationProblems.jl or within this package.","category":"page"},{"location":"#How-to-contribute?","page":"Home","title":"How to contribute?","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Contributions with new problems are very welcome. A couple of advice for a successful contribution:","category":"page"},{"location":"","page":"Home","title":"Home","text":"check that the new problem is not already on the list.\nfurnish as much detail as possible regarding the origin of the problem, e.g. citation, link, application ...\nthe problem should be type-stable, i.e. argument type::Val{T} = Val(Float64) should induce the type returned by the ADNLPModel.\nfill-in the meta as precisely as possible. The function generate_meta helps for this step.","category":"page"},{"location":"#Available-constants/functions","page":"Home","title":"Available constants/functions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The list of available problems are given in String format in","category":"page"},{"location":"","page":"Home","title":"Home","text":"ADNLPModelProblems.problems","category":"page"},{"location":"","page":"Home","title":"Home","text":"This list includes unconstrained and constrained problems, and several are scalable problems. The default parameter value for the variable scale is:","category":"page"},{"location":"","page":"Home","title":"Home","text":"ADNLPModelProblems.default_nvar","category":"page"},{"location":"","page":"Home","title":"Home","text":"The list of problems for which there is no JuMP model is obtained by:","category":"page"},{"location":"","page":"Home","title":"Home","text":"ADNLPModelProblems.problems_no_jump","category":"page"},{"location":"","page":"Home","title":"Home","text":"There are several ways to access the problems, for instance \"power\":","category":"page"},{"location":"","page":"Home","title":"Home","text":"ADNLPModelProblems.power_forward() # ForwardDiff backend\nADNLPModelProblems.power_reverse() # ReverseDiff backend\nADNLPModelProblems.power_zygote() # Zygote backend\nADNLPModelProblems.power_jump() # NLPModelJuMP model","category":"page"},{"location":"","page":"Home","title":"Home","text":"and using ADNLPModels.jl default backend","category":"page"},{"location":"","page":"Home","title":"Home","text":"ADNLPModelProblems.power_autodiff()","category":"page"},{"location":"","page":"Home","title":"Home","text":"We refer to the documentation in ADNLPModels.jl for more information on the ADBackend and the default usage.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Finally, the properties of each problem can be accessed via","category":"page"},{"location":"","page":"Home","title":"Home","text":"power_meta: Dict that contains main information. This information is summed up for the whole test set in the variables ADNLPModelProblems.meta.\npower_meta(n): returns the number of variables and constraints of the problem parameterized by n. ","category":"page"},{"location":"","page":"Home","title":"Home","text":"If the problem is scalable this varies from power_meta[:nvar] and power_meta[:ncon] that were generated with n = ADNLPModelProblems.default_nvar.","category":"page"},{"location":"tutorial/#ADNLPModelProblems-Tutorial","page":"Tutorial","title":"ADNLPModelProblems Tutorial","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using ADNLPModelProblems","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"This package provides a problem set in the ADNLPModel format defined in ADNLPModels.jl. Using JuliaSmoothOptimizers tools, it is then straightforward to run a benchmark on the problem set and using DataFrames.jl tools one can easily select problems.","category":"page"},{"location":"tutorial/#How-to-select-problems","page":"Tutorial","title":"How to select problems","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"This package exports a DataFrame called ADNLPModelProblems.meta containing all the information regarding the classification of the problems. The meta of each problem can be separately obtained by","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"ADNLPModelProblems.arglina_meta # for the problem \"arglina\"","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The ADNLPModelProblems.meta can be used to select instances. For more information, on data manipulation with DataFrames.jl we refer to the tutorials and to the DataFramesMeta.jl tutorial.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using DataFramesMeta\n# select the columns nvar and name for scalable problems\n@linq ADNLPModelProblems.meta |> where(:variable_size) |> select(:nvar, :name)\n# select all the columns of problems with linear objective\n@linq ADNLPModelProblems.meta |> where(:objtype .== ^(:linear))","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The scalable problems are parametrized by one parameter whose default value is ADNLPModelProblems.default_nvar. To obtain the number of variables and constraints for a given value n, use the function get_nameoftheproblem_meta() as follows","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"ADNLPModelProblems.get_arglina_meta(n = 10) # return a tuple of integer","category":"page"},{"location":"tutorial/#How-to-get-the-NLPModel","page":"Tutorial","title":"How to get the NLPModel","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"For each instance, one can get the ADNLPModel using the function nameoftheproblem_autodiff() as follows","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"nlp = ADNLPModelProblems.arglina_autodiff(n = ADNLPModelProblems.default_nvar, type = Val(Float64))","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"For problems that are not scalable, the argument n has no impact on the number of variables/constraints.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The package ADNLPModels.jl handles several backend depending on the package used for the automatic differentiation, e.g. ForwardDiffAD, ReverseDiffAD, ZygoteAD respectively for ForwardDiff.jl, ReverseDiff.jl, and Zygote.jl. By default, nameoftheproblem_autodiff() will use the default backend from ADNLPModels.jl. One can modify this either by specifying the keyword adbackend or use one of the shortcut:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"ADNLPModelProblems.arglina_forward() # ForwardDiff backend\nADNLPModelProblems.arglina_reverse() # ReverseDiff backend\nADNLPModelProblems.arglina_zygote() # Zygote backend","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Many problems from this repository have a JuMP correspondence, either from this repository or from OptimizationProblems.jl","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"ADNLPModelProblems.arglina_jump() # NLPModelJuMP model","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The list of problems for which there is no such JuMP model is","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"ADNLPModelProblems.problems_no_jump","category":"page"},{"location":"tutorial/#Run-a-benchmark","page":"Tutorial","title":"Run a benchmark","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Using SolverBenchmark.jl one can easily benchmark solvers. This tutorial compares lbfgs and trunk, which are two solvers for unconstrained optimization problems available in JSOSolvers.jl.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using JSOSolvers, SolverBenchmark\n# Select unconstrained problems\nnames = @linq ADNLPModelProblems.meta |> where(:contype .== ^(:unconstrained)) |> select(:name)\n# Prepare the list of ADNLPModel\nadproblems = (eval(Meta.parse(\"ADNLPModelProblems.$(pb[:name])_autodiff()\")) for pb in eachrow(names))\n# Prepare the solvers\nsolvers = Dict(:lbfgs => nlp -> lbfgs(nlp), :trunk => nlp -> trunk(nlp))\n# Use SolverBenchmark to run the solvers on all the instances\nstats = bmark_solvers(solvers, adproblems)\n\n# Print the results of each solver in a table\ncols = [:id, :name, :nvar, :objective, :dual_feas, :neval_obj, :neval_grad, :neval_hess, :iter, :elapsed_time, :status]\nheader = Dict(\n  :nvar => \"n\",\n  :objective => \"f(x)\",\n  :dual_feas => \"‖∇f(x)‖\",\n  :neval_obj => \"# f\",\n  :neval_grad => \"# ∇f\",\n  :neval_hprod => \"# ∇²f v\",\n  :elapsed_time => \"t\",\n)\n\nfor solver ∈ keys(solvers)\n  pretty_stats(stats[solver][!, cols], hdr_override=header)\nend\n\n# Or compare the performance of both solvers using performance profiles\nfirst_order(df) = df.status .== :first_order\nunbounded(df) = df.status .== :unbounded\nsolved(df) = first_order(df) .| unbounded(df)\ncostnames = [\"time\", \"obj\"]\ncosts = [df -> .!solved(df) .* Inf .+ df.elapsed_time,\n         df -> .!solved(df) .* Inf .+ df.neval_obj]\nprofile_solvers(stats, costs, costnames)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"(Image: )","category":"page"}]
}
