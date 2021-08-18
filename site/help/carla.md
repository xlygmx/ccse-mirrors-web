---
sidebarShare: true
prev: false
next: false
---

# [CARLA](/carla/) Mirror

## Introduction


CARLA是一个用于自动驾驶研究的开源仿真器。


## Release版下载

本镜像源提供多个CARLA版本的[预编译版](/carla/carla)下载，你可以直接下载并解压，直接开始使用CARLA仿真器。

## Content镜像

**Tips**：此部分仅针对需要对CARLA进行编译开发的情况。如果你只需要使用CARLA,没有自建地图、二次开发等需求，请直接使用上面的Release预编译版。

在CARLA编译过程中，会在[Update.sh](https://github.com/carla-simulator/carla/blob/master/Update.sh#L50)中下载CARLA的Content包。如需使用本镜像，可以将原有的网址替换为镜像链接。

原链接： http://carla-assets.s3.amazonaws.com/${CONTENT_ID}.tar.gz

替换为： https://mirrors.sustech.edu.cn/carla/carla_content/${CONTENT_ID}.tar.gz