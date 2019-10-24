# git指令总结

> git使用：版本管理、代码托管(码云、github)、项目协作

1.命令行方式

- 先有本地代码，后有远程仓库：

  ```
  1.本地代码管理
  git init 初始化仓库
  git add .  添加到缓存区（如果需要忽略文件，记得配置.gitignore）  touch .gitignore
  git commit-m"备注" 添加到本地仓库  
  ```

  ```
  2.建立连接
  到github官网创建一个空的仓库；
  git remote add origin git@github.com:xxx/view.git (ssh协议方式连接，之前要配置公钥) 先做第5步
  或者用https协议
  git remote add origin https://github.com/shirley3790/dd.git
  ```

  ```
  3.推送到远程
  git push -u origin master (第一次-u，后面就直接  git push origin master) 提交的时候可能需要提交账号密码(https协议，每次填写账号密码)
  ```

  ```
  4.如果要拉取新资料
  git pull origin master
  ```

  ```
  5.ssh协议秘钥设置
  ssh-keygen -t rsa -C 'email地址' （三次回车即可生成）  创建SSH Key,在c盘用户目录下，administrator里面有个文件叫：id_rsa.pub（公钥），复制里面的内容，到github设置里面，并添加公钥；
  ssh -T git@github.com  判断秘钥是否设置成功，hi jiahao!证明成功了，跳到步骤2
  ```

- 先有远程仓库，再有本地代码：建议用这种方法

```
1.拷贝远程仓库
git clone https://github.com/shirley3790/newdemo.git
2.在仓库里面写代码或是把写好的代码拷贝到这里
git add .  添加到缓存区（如果需要忽略文件，记得配置.gitignore）  touch .gitignore
git commit-m"备注" 添加到本地仓库
3.推送到远程
git push origin master(写master或分支名)
4.如果要拉取新资料
git pull origin master
```

2.界面方式

-github提供的桌面工具：GitHubDesktop.exe

-小乌龟：TortoiseGit-2.7.0.0-64bit.msi

-vscode：借助git命令工具，git bash,建议用这个或GitHubDesktop.exe