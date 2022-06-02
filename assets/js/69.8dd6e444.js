(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{700:function(t,a,s){"use strict";s.r(a);var r=s(38),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"julia-mirror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#julia-mirror"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/julia/"}},[t._v("Julia")]),t._v(" Mirror")],1),t._v(" "),s("p",[t._v("TUNA 目前提供了 Julia 的官方包注册表 "),s("a",{attrs:{href:"https://github.com/JuliaRegistries/General",target:"_blank",rel:"noopener noreferrer"}},[t._v("General"),s("OutboundLink")],1),t._v(" 镜像来加速 Julia 包的安装。\nTUNA 同时也提供了 Julia 二进制程序的镜像，关于其使用请参考 "),s("RouterLink",{attrs:{to:"/help/julia-releases.html"}},[t._v("Julia Releases")]),t._v(".")],1),t._v(" "),s("p",[t._v("注：本镜像的使用需要 Julia "),s("code",[t._v("v1.4.0")]),t._v(" 或更新的版本。")]),t._v(" "),s("h2",{attrs:{id:"使用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[t._v("#")]),t._v(" 使用方式")]),t._v(" "),s("p",[t._v("只需要设置环境变量 "),s("code",[t._v("JULIA_PKG_SERVER")]),t._v(" 即可切换镜像。若成功切换镜像，则能通过 "),s("code",[t._v("versioninfo()")]),t._v(" 查询到相关信息，例如：")]),t._v(" "),s("div",{staticClass:"language-julia extra-class"},[s("pre",{pre:!0,attrs:{class:"language-julia"}},[s("code",[t._v("julia"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" versioninfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nJulia Version "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.4")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v("\nCommit "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("381693d3df")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("04")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" UTC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nPlatform Info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Linux "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x86_64"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("linux"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("gnu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  CPU"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Intel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" i7"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6800")]),t._v("K CPU @ "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.40")]),t._v("GHz\n  WORD_SIZE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\n  LIBM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" libopenlibm\n  LLVM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" libLLVM"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ORCJIT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" broadwell"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nEnvironment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  JULIA_PKG_SERVER "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("mirrors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("julia\n")])])]),s("p",[t._v("若不设置该环境变量则默认使用官方服务器 "),s("code",[t._v("pkg.julialang.org")]),t._v(" 作为上游。")]),t._v(" "),s("h3",{attrs:{id:"临时使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#临时使用"}},[t._v("#")]),t._v(" 临时使用")]),t._v(" "),s("p",[t._v("不同系统和命令行下设置环境变量的方式各不相同，在命令行下可以通过以下方式来临时修改环境变量")]),t._v(" "),s("ul",[s("li",[t._v("Linux Bash: "),s("code",[t._v("export JULIA_PKG_SERVER=https://mirrors.sustech.edu.cn/julia")])]),t._v(" "),s("li",[t._v("Windows Powershell: "),s("code",[t._v("$env:JULIA_PKG_SERVER = 'https://mirrors.sustech.edu.cn/julia'")])])]),t._v(" "),s("p",[t._v("也可以利用 JuliaCN 社区维护的中文本地化工具包 "),s("a",{attrs:{href:"https://github.com/JuliaCN/JuliaZH.jl",target:"_blank",rel:"noopener noreferrer"}},[t._v("JuliaZH"),s("OutboundLink")],1),t._v(" 来进行切换：")]),t._v(" "),s("div",{staticClass:"language-julia extra-class"},[s("pre",{pre:!0,attrs:{class:"language-julia"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" JuliaZH "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 using 时会自动切换到国内的镜像站")]),t._v("\nJuliaZH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_mirror"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BFSU"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 也可以选择手动切换到 BFSU 镜像")]),t._v("\nJuliaZH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mirrors "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询记录的上游信息")]),t._v("\n")])])]),s("h3",{attrs:{id:"永久使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#永久使用"}},[t._v("#")]),t._v(" 永久使用")]),t._v(" "),s("p",[t._v("不同系统和命令行下永久设定环境变量的方式也不相同，例如 Linux Bash 下可以通过修改 "),s("code",[t._v("~/.bashrc")]),t._v(" 文件实现该目的：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# ~/.bashrc\nexport JULIA_PKG_SERVER=https://mirrors.sustech.edu.cn/julia\n")])])]),s("p",[t._v("此外，这里再提供一种针对 Julia 的全平台通用的方式："),s("code",[t._v("$JULIA_DEPOT_PATH/config/startup.jl")]),t._v("\n( 默认为 "),s("code",[t._v("~/.julia/config/startup.jl")]),t._v(" ) 文件定义了每次启动 Julia 时都会执行的命令，编辑该文件，添加以下内容即可：")]),t._v(" "),s("div",{staticClass:"language-julia extra-class"},[s("pre",{pre:!0,attrs:{class:"language-julia"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ~/.julia/config/startup.jl")]),t._v("\nENV"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JULIA_PKG_SERVER"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://mirrors.sustech.edu.cn/julia"')]),t._v("\n")])])]),s("p",[t._v("也可以选择使用 "),s("code",[t._v("JuliaZH")]),t._v(" 来一键修改/创建 "),s("code",[t._v("startup.jl")]),t._v(" 文件：")]),t._v(" "),s("div",{staticClass:"language-julia extra-class"},[s("pre",{pre:!0,attrs:{class:"language-julia"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以 BFSU 镜像站为例")]),t._v("\njulia"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" JuliaZH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("generate_startup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"default"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n┌ Info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 添加 PkgServer\n│   服务器地址 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://pkg.julialang.org"')]),t._v("\n└   配置文件 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/root/.julia/config"')]),t._v("\n\njulia"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" JuliaZH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("generate_startup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BFSU"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n┌ Info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 更新 PkgServer\n│   原服务器地址 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://pkg.julialang.org"')]),t._v("\n│   新服务器地址 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://mirrors.sustech.edu.cn/julia"')]),t._v("\n└   配置文件 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/root/.julia/config"')]),t._v("\n")])])]),s("p",[t._v("若要临时禁止，可以通过 "),s("code",[t._v("julia --startup-file=no")]),t._v(" 来取消执行 "),s("code",[t._v("startup.jl")]),t._v(" 文件。")]),t._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("h3",{attrs:{id:"为什么有些包的下载还是很慢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么有些包的下载还是很慢"}},[t._v("#")]),t._v(" 为什么有些包的下载还是很慢？")]),t._v(" "),s("p",[t._v("有两类数据不会被镜像：")]),t._v(" "),s("ul",[s("li",[t._v("在 "),s("code",[t._v("deps/build.jl")]),t._v(" 文件中硬编码的下载地址，例如 "),s("a",{attrs:{href:"https://github.com/jheinen/GR.jl/blob/70f025d5cb439d036409f1985107cb5e1615097f/deps/build.jl#L116",target:"_blank",rel:"noopener noreferrer"}},[t._v("GR"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[t._v("在 "),s("code",[t._v("Artifacts.toml")]),t._v(" 中没有给出 "),s("code",[t._v("download")]),t._v(" 项的资源, 例如 "),s("a",{attrs:{href:"https://github.com/JuliaImages/TestImages.jl/blob/eaa94348df619c65956e8cfb0032ecddb7a29d3a/Artifacts.toml",target:"_blank",rel:"noopener noreferrer"}},[t._v("TestImages"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[t._v("在安装包含这两类数据的包时，其数据依然是从原始地址进行下载，因此若网络不稳定则可能会在 "),s("code",[t._v("build")]),t._v(" 阶段报错。")]),t._v(" "),s("h3",{attrs:{id:"为什么注册表还是从原地址下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么注册表还是从原地址下载"}},[t._v("#")]),t._v(" 为什么注册表还是从原地址下载？")]),t._v(" "),s("p",[t._v("Julia "),s("code",[t._v("v1.4.0")]),t._v(" 之前的版本采用的是 "),s("code",[t._v("git clone")]),t._v(" 的方式拉取注册表。为了保持兼容性，如果现有的注册表是一个完整的 git 仓库的话，\n那么即使设置了 PkgServer 作为上游镜像也依然会通过 "),s("code",[t._v("git")]),t._v(" 来进行更新，换句话说，不会通过镜像站来下载注册表数据。")]),t._v(" "),s("p",[t._v("以默认注册表 "),s("code",[t._v("General")]),t._v(" 为例，只需要手动将其重置到镜像站即可：")]),t._v(" "),s("ol",[s("li",[t._v("删除当前注册表："),s("code",[t._v("(@v1.4) pkg> registry rm General")])]),t._v(" "),s("li",[t._v("从镜像站下载/拉取注册表： "),s("code",[t._v("(@v1.4) pkg> registry add General")]),t._v(" -- 将无法在旧 Julia 版本中更新注册表")])]),t._v(" "),s("h3",{attrs:{id:"为什么有些包还是从原地址下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么有些包还是从原地址下载"}},[t._v("#")]),t._v(" 为什么有些包还是从原地址下载？")]),t._v(" "),s("p",[t._v("镜像站只镜像注册表中记录的包，因此如果某些包是通过指定 URL 的方式来安装的话，那么该包的更新不会从镜像站进行下载。\n这常见于那些还未注册的包及其版本，例如：")]),t._v(" "),s("div",{staticClass:"language-julia extra-class"},[s("pre",{pre:!0,attrs:{class:"language-julia"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("add Flux"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#master")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("add https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("FluxML"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Flux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git\nPkg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PackageSpec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/FluxML/Flux.jl.git"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("em",[t._v("本文参考了"),s("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("清华大学开源软件镜像站"),s("OutboundLink")],1),t._v("的相关页面："),s("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/help/julia/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mirrors.tuna.tsinghua.edu.cn/help/julia/"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);