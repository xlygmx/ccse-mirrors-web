---
sidebarShare: true
prev: false
next: false
---

# [Ubuntu](/ubuntu/) Mirror

## Introduction

[Ubuntu](https://ubuntu.com/) is a popular and user-friendly Linux distribution based on Debian.

## Backup Existing Configuration

``` sh
sudo cp -a /etc/apt/sources.list /etc/apt/sources.list.bak
```

## Edit Configuration

``` sh
sudo sed -i "s@http://.*archive.ubuntu.com@https://mirrors.sustech.edu.cn@g" /etc/apt/sources.list
sudo sed -i "s@http://.*security.ubuntu.com@https://mirrors.sustech.edu.cn@g" /etc/apt/sources.list 
```

## Refresh Repository Indexes

``` sh
sudo apt-get update
```