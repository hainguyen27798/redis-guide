<img src="./img/bg.png" width="100%" alt="bg">

<p align="center" style="font-weight: bold; font-size: 32px">
    Redis Guide
</p>

### Redis Basic

#### I. String

| String type    | size        |
|----------------|-------------|
| **_embsting_** | <= 44 bytes |
| **_raw_**      | \> 44 bytes |
| _**int**_      | integer     |

#### II. Basic Command

**Set value**
```redis
127.0.0.1:6379> SET name harry
OK
```
**Get type**
```redis
127.0.0.1:6379> OBJECT ENCODING name
"embstr"
```
**Set multiple values**
```redis
127.0.0.1:6379> MSET key1 value1 key2 value2
OK
```
**Get value by key**
```redis
127.0.0.1:6379> GET name
"harry"
```
**Get multiple values**
```redis
127.0.0.1:6379> MGET key1 key2
1) "value1"
2) "value2"
```
**Get all keys**
```redis
127.0.0.1:6379> KEYS *
1) "key1"
2) "key2"
3) "name"
```
**Get value length by key**
```redis
127.0.0.1:6379> STRLEN name
(integer) 5
```
**Check key existed or not**
```redis
127.0.0.1:6379> EXISTS name
(integer) 1
```
**Delete key**
```redis
127.0.0.1:6379> DEL name
(integer) 1
```
**Increase number**
```redis
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
```redis
127.0.0.1:6379> DECR num
(integer) 4
127.0.0.1:6379> DECRBY num 3
(integer) 1
```
**Set expire time for key and check remaining expire time**
```redis
127.0.0.1:6379> SET lock 1 EX 10
OK
127.0.0.1:6379> TTL lock
(integer) 4
```
