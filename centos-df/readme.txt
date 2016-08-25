安装Dreamfactory前需要手工配置的内容

1. MongoDB的库

add below line to /etc/php.ini (search extension)
extension=mongodb.so

2. 配置MySQL的配置文件

sudo echo 'default-storage-engine = InnoDB
innodb-file-per-table = 1
innodb_stats_on_metadata = 0
character-set-server = utf8
collation-server = utf8_general_ci' >> /etc/my.cnf