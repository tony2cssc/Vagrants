# -*- coding: utf-8 -*-

from pyquery import PyQuery


input_file = unicode(open("plants.htm").read(), 'gbk')
# d = pq(filename="./rel_ip.txt")
d = PyQuery(input_file)


target_list = ["4140", "4142"]
td_list = d("table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td")

values_list = []
item_itr = td_list.items()
for item in item_itr:
    values_list.append(item.text())

print(values_list)
selected_item = []
for item_id in target_list:
    index = values_list.index(item_id)
    tmp_item = []
    for i in range(0, 8):
        tmp_item.append(values_list[index+i])
    selected_item.append(tmp_item)

print(selected_item)

print(selected_item[0][1] == u"‘森林火焰’网纹草 A")