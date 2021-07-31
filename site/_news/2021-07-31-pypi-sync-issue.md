---
author: Qingyuan
date: 2021-07-31T17:00:00+0800
editLink: false
---
# 有关pypi镜像状态过时的故障

在近几周，有镜像站用户反映镜像站的pypi镜像状态过时，未能找到2021年新发布的软件包。经过调查，我们了解到镜像状态过时的问题与2020年11月的[磁盘迁移](https://c.cra.moe/t/topic/30)有关。在磁盘迁移后，我们未能即时更新软件包配置对应的[元数据文件](https://github.com/pypa/bandersnatch/issues/500)，造成同步失败。

我们向镜像站用户表示诚挚的歉意，并将在未来尽量避免此类事故发生。

# Trouble with outdated pypi mirror status

In recent weeks, users of the SUSTech mirrors have reported that the pypi mirror is out of date and new packages released in 2021 could not be found. After investigating, we found that the issue of outdated mirror status is related to the [disk migration](https://c.cra.moe/t/topic/30) in November 2020. After the disk migration, we forget to update the [metadata file](https://github.com/pypa/bandersnatch/issues/500) corresponding to the package configuration immediately, causing the synchronization failure.

We sincerely apologize to mirror users and will try our best to avoid such incidents in the future.