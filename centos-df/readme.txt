��װDreamfactoryǰ��Ҫ�ֹ����õ�����

1. MongoDB�Ŀ�

add below line to /etc/php.ini (search extension)
extension=mongodb.so

2. ����MySQL�������ļ�

sudo echo 'default-storage-engine = InnoDB
innodb-file-per-table = 1
innodb_stats_on_metadata = 0
character-set-server = utf8
collation-server = utf8_general_ci' >> /etc/my.cnf