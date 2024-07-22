<img src="./img/bg.png" width="100%" alt="bg">

<h3 align="center">
    Redis Guide
</h3>

### Redis Basic

#### I. String

| String type    | size        |
|----------------|-------------|
| **_embsting_** | <= 44 bytes |
| **_raw_**      | \> 44 bytes |
| _**int**_      | integer     |

#### II. Basic Command

**Set value**
```shell
127.0.0.1:6379> SET name harry
OK
```
**Get type**
```shell
127.0.0.1:6379> OBJECT ENCODING name
"embstr"
```
**Set multiple values**
```shell
127.0.0.1:6379> MSET key1 value1 key2 value2
OK
```
**Get value by key**
```shell
127.0.0.1:6379> GET name
"harry"
```
**Get multiple values**
```shell
127.0.0.1:6379> MGET key1 key2
1) "value1"
2) "value2"
```
**Get all keys**
```shell
127.0.0.1:6379> KEYS *
1) "key1"
2) "key2"
3) "name"
```
**Get value length by key**
```shell
127.0.0.1:6379> STRLEN name
(integer) 5
```
**Check key existed or not**
```shell
127.0.0.1:6379> EXISTS name
(integer) 1
```
**Delete key**
```shell
127.0.0.1:6379> DEL name
(integer) 1
```
**Increase number**
```shell
127.0.0.1:6379> set num 1
OK
127.0.0.1:6379> INCR num
(integer) 2
127.0.0.1:6379> INCR num
(integer) 3
127.0.0.1:6379> INCRBY num 2
(integer) 5
```
**Decrease number**
```shell
127.0.0.1:6379> DECR num
(integer) 4
127.0.0.1:6379> DECRBY num 3
(integer) 1
```
**Set expire time for key and check remaining expire time**
```shell
127.0.0.1:6379> SET lock 1 EX 10
OK
127.0.0.1:6379> TTL lock
(integer) 4
```
| Param key | Unit        |
|-----------|-------------|
| EX        | second      |
| PX        | millisecond |
**Set key if it is not existed**
```shell
127.0.0.1:6379> SET year 2024 NX
OK
127.0.0.1:6379> SET year 2025 NX
(nil)
```
