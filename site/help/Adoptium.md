---
sidebarShare: true
prev: false
next: false
---

# [Adoptium](/Adoptium) Mirrors

## Windows/macOS 用户

打开[下载页面](https://mirrors.sustech.edu.cn/Adoptium/)，选择所需的版本，下载独立安装包。

## Debian/Ubuntu 用户

首先信任 GPG 公钥:

``` sh
wget -qO - https://packages.adoptium.net/artifactory/api/gpg/key/public | apt-key add -
```

以Ubuntu 20.04 LTS 为例，在`/etc/apt/sources.list.d/Adoptium.list`中新增一行（其他版本请将`focal`修改为响应的版本代号）：

```
deb https://mirrors.sustech.edu.cn/Adoptium/deb focal main
```

执行：

``` sh
sudo apt-get update
```

使用`sudo apt-get install temurin-<version>-jdk`安装软件包，例如`temurin-17-jdk`和 `temurin-8-jdk`。

## CentOS/RHEL

新建`/etc/yum.repos.d/Adoptium.repo`，内容为

```
[Adoptium]
name=Adoptium
baseurl=https://mirrors.sustech.edu.cn/Adoptium/rpm/centos$releasever-$basearch/
enabled=1
gpgcheck=1
gpgkey=https://packages.adoptium.net/artifactory/api/gpg/key/public
```

再执行

``` sh
sudo yum makecache
```

使用`sudo yum install temurin-<version>-jdk`安装软件包，例如`temurin-17-jdk`和 `temurin-8-jdk`。

## 参考

- [https://mirrors.tuna.tsinghua.edu.cn/help/adoptium/](https://mirrors.tuna.tsinghua.edu.cn/help/adoptium/)

