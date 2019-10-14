/*
Navicat MySQL Data Transfer

Source Server         : myshuju
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : goodtext

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2019-10-12 21:36:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodscar
-- ----------------------------
DROP TABLE IF EXISTS `goodscar`;
CREATE TABLE `goodscar` (
  `username` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `gid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `shopname` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `imgurl` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `counts` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of goodscar
-- ----------------------------
INSERT INTO `goodscar` VALUES ('17878852663', '5', '中酒自营', '199.00', '拉菲珍藏波尔多 750ml（2瓶装）', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4211/1_220.png', '3', null);
INSERT INTO `goodscar` VALUES ('undefined', '6', '中酒自营', '239.00', '【礼盒】拉菲珍藏波尔多 750ml（2瓶装） 拉菲皮盒', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4032/1_220.png', '10', null);

-- ----------------------------
-- Table structure for text
-- ----------------------------
DROP TABLE IF EXISTS `text`;
CREATE TABLE `text` (
  `﻿uid` int(11) NOT NULL,
  `id` int(11) DEFAULT NULL,
  `url` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `price` float DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `imglist` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `city` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `pingjia` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `pingfen` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `free` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `tiname` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `yfree` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `kucun` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`﻿uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of text
-- ----------------------------
INSERT INTO `text` VALUES ('1', '1', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/2101/4_220.png', '129', '1693', '拉菲珍藏波尔多干红红葡萄酒 750ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/2101/4_220.png', '中酒自营', '17655', '4.5', '0', '法国进口，拉菲品牌', '29', '7656543');
INSERT INTO `text` VALUES ('2', '2', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3122/2_220.png', '89', '906', '拉菲巴斯克卡本妮苏维翁红葡萄酒 750ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3122/2_220.png', '中酒自营', '56567', '3.9', '0', '拉菲品牌优质干红', '39', '87654');
INSERT INTO `text` VALUES ('3', '3', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3121/1_220.png', '109', '466', '拉菲尚品波尔多法定产区红葡萄酒 750ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3121/1_220.png', '中酒自营', '34567', '3.8', '0', '法国波尔多法定产区AOC级别', '20', '76543');
INSERT INTO `text` VALUES ('4', '4', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3634/1_220.png', '499', '223', '拉菲巴斯克卡本妮苏维翁红葡萄酒 750ml（6瓶装）', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3634/1_220.png', '中酒自营', '487654', '4.2', '5', '法国进口，拉菲品牌，专业礼盒', '18', '7654334567');
INSERT INTO `text` VALUES ('5', '5', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4211/1_220.png', '199', '195', '拉菲珍藏波尔多 750ml（2瓶装）', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4211/1_220.png', '中酒自营', '2345778', '4.3', '5', '拉菲罗斯柴尔德家族荣誉出品 ASC正品保证', '30', '345678');
INSERT INTO `text` VALUES ('6', '6', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4032/1_220.png', '239', '158', '【礼盒】拉菲珍藏波尔多 750ml（2瓶装） 拉菲皮盒', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4032/1_220.png', '中酒自营', '7990000', '4.5', '10', '【新老包装交替发货，产品以实物为准】', '35', '34567');
INSERT INTO `text` VALUES ('7', '7', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4293/4_220.png', '199', '132', '【礼盒】拉菲巴斯克卡本妮苏维翁红葡萄酒 750ml（2瓶装） 拉菲皮盒', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4293/4_220.png', '中酒自营', '234567', '4.7', '10', '法国原装进口，拉菲著名红酒\r\n法国原装进口，拉菲著名红酒\r\n法国原装进口，拉菲著名红酒\r\n法国原装进口，拉菲著名红酒', '25', '568876');
INSERT INTO `text` VALUES ('8', '8', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4033/3_220.png', '249', '112', '【礼盒】拉菲尚品波尔多法定产区红葡萄酒 750ml（2瓶装） 拉菲皮盒', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4033/3_220.png', '中酒自营', '0987654', '4.1', '5', '法国优质波尔多，著名拉菲品牌美酒', '20', '67899876');
INSERT INTO `text` VALUES ('9', '9', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/6652/1_220.png', '199', '111', '【礼盒】拉菲巴斯克卡本妮苏维翁红葡萄酒 750ml（2瓶装） 慕尼黑', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/6652/1_220.png', '中酒自营', '4567898', '4.2', '8', '五粮之精华，永恒之经典', '28', '324567');
INSERT INTO `text` VALUES ('10', '10', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4023/1_220.png', '109', '103', '拉菲巴斯克卡本妮苏维翁红葡萄酒 750ml 慕尼黑', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4023/1_220.png', '中酒自营', '456787', '4.3', '10', '陶瓷瓶水晶礼盒装 浓香型', '22', '345678');
INSERT INTO `text` VALUES ('11', '11', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4195/5_220.png', '169', '96', '拉菲巴斯克卡本妮苏维翁红葡萄酒 750ml（2瓶装）', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4195/5_220.png', '中酒自营', '3456578', '4.4', '5', '干邑白兰地', '33', '34567887654');
INSERT INTO `text` VALUES ('12', '12', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103071/1_220.png', '128', '8', '拉菲传奇波尔多 750ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103071/1_220.png', '中酒连锁运城旗舰店', '789098765', '4.5', '8', '芝华士威士忌，12年的品质享受', '18', '5678876');
INSERT INTO `text` VALUES ('13', '13', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103074/1_220.png', '158', '41', '拉菲奥朗歌2016梅洛干红', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103074/1_220.png', '中酒连锁运城旗舰店', '21345678', '4.6', '10', '汲取门前鉴湖水，酿得绍酒满园香', '15', '7887654');
INSERT INTO `text` VALUES ('14', '14', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103074/1_220.png', '137', '63', '拉菲奥朗歌赤霞珠干红', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103074/1_220.png', '中酒连锁运城旗舰店', '345676', '4.7', '0', '法国进口，拉菲品牌', '69', '345678765');
INSERT INTO `text` VALUES ('15', '15', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103074/1_220.png', '218', '62', '法龙图-凯旋之星干红', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103074/1_220.png', '中酒连锁运城旗舰店', '456787', '4.8', '5', '拉菲品牌优质干红', '45', '345676');
INSERT INTO `text` VALUES ('16', '16', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103074/1_220.png', '218', '8', '法龙图-凯旋之星干红', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103074/1_220.png', '中酒连锁运城条山街店', '34567', '4.9', '5', '法国波尔多法定产区AOC级别', '78', '456787');
INSERT INTO `text` VALUES ('17', '17', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/551/Products/190439/1_220.png', '156', '0', '拉菲华诗歌 750ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/551/Products/190439/1_220.png', '中酒连锁运城条山街店', '5678', '3.9', '10', '法国进口，拉菲品牌，专业礼盒', '100', '34567');
INSERT INTO `text` VALUES ('18', '18', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103074/1_220.png', '316', '0', '拉菲传奇波尔多法定产区红葡萄酒 1500ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3121/1_220.png', '中酒连锁运城条山街店', '3456787', '3.8', '10', '拉菲罗斯柴尔德家族荣誉出品 ASC正品保证', '39', '5678');
INSERT INTO `text` VALUES ('19', '19', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/551/Products/190437/1_220.png', '146', '1', '拉菲传奇波尔多 750ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/551/Products/190437/1_220.png', '中酒连锁运城条山街店', '56789', '3.7', '5', '【新老包装交替发货，产品以实物为准】', '35', '3456787');
INSERT INTO `text` VALUES ('20', '20', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/551/Products/190436/1_220.png', '291', '0', '拉菲珍藏梅多克法定产区红葡萄酒750ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/551/Products/190436/1_220.png', '中酒连锁运城条山街店', '67898', '3.6', '8', '法国原装进口，拉菲著名红酒\r\n法国原装进口，拉菲著名红酒\r\n法国原装进口，拉菲著名红酒\r\n法国原装进口，拉菲著名红酒', '25', '56789');
INSERT INTO `text` VALUES ('21', '21', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/487/Products/112350/1_220.png', '129', '0', '拉菲珍藏波尔多干红红葡萄酒 750ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3121/1_220.png', '天佑德北京专卖店', '45678', '3.5', '10', '法国优质波尔多，著名拉菲品牌美酒', '20', '878765');
INSERT INTO `text` VALUES ('22', '22', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103077/1_220.png', '188', '0', '拉菲巴斯克卡本妮苏维翁红葡萄酒 750ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103077/1_220.png', '中酒连锁运城旗舰店', '5678', '4.5', '5', '法国进口，拉菲品牌', '28', '98765');
INSERT INTO `text` VALUES ('23', '23', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103076/1_220.png', '128', '2', '拉菲华诗歌 750ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103076/1_220.png', '中酒连锁运城旗舰店', '3456787', '4.4', '8', '拉菲品牌优质干红', '22', '9876576');
INSERT INTO `text` VALUES ('24', '24', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103074/1_220.png', '298', '0', '拉菲传奇波尔多法定产区红葡萄酒 1500ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103074/1_220.png', '中酒连锁运城旗舰店', '56789', '4.4', '10', '法国波尔多法定产区AOC级别', '33', '987654');
INSERT INTO `text` VALUES ('25', '25', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103070/1_220.png', '138', '0', '拉菲珍藏波尔多干红红葡萄酒 750ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3121/1_220.png', '中酒连锁运城旗舰店', '67898', '4.5', '0', '法国进口，拉菲品牌，专业礼盒', '18', '456876');
INSERT INTO `text` VALUES ('26', '26', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103069/1_220.png', '258', '0', '拉菲 拉菲传奇梅多克750ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103069/1_220.png', '中酒连锁运城旗舰店', '45678', '4.6', '0', '拉菲罗斯柴尔德家族荣誉出品 ASC正品保证', '15', '56789876');
INSERT INTO `text` VALUES ('27', '27', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103068/1_220.png', '268', '0', '拉菲珍藏梅多克法定产区红葡萄酒750ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103068/1_220.png', '中酒连锁运城旗舰店', '56567', '4.5', '0', '【新老包装交替发货，产品以实物为准】', '66', '87654');
INSERT INTO `text` VALUES ('28', '28', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103067/1_220.png', '168', '0', '拉菲传奇波尔多', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103067/1_220.png', '中酒连锁运城旗舰店', '34567', '3.9', '5', '法国原装进口，拉菲著名红酒\r\n法国原装进口，拉菲著名红酒\r\n法国原装进口，拉菲著名红酒\r\n法国原装进口，拉菲著名红酒', '55', '76543');
INSERT INTO `text` VALUES ('29', '29', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/354/Products/95984/1_220.png', '109', '4', '拉菲巴斯克卡本妮苏维翁红葡萄酒 750ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/354/Products/95984/1_220.png', '中酒连锁酒泉旗舰店', '487654', '3.8', '5', '法国优质波尔多，著名拉菲品牌美酒', '55', '7654334567');
INSERT INTO `text` VALUES ('30', '30', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/354/Products/95981/1_220.png', '129', '10', '拉菲珍藏波尔多干红红葡萄酒 750ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3121/1_220.png', '中酒连锁酒泉旗舰店', '2345778', '4.2', '10', '五粮之精华，永恒之经典', '44', '345678');
INSERT INTO `text` VALUES ('31', '31', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/290/Products/94376/2_220.png', '258', '13', '拉菲珍藏梅多克法定产区红葡萄酒750ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/290/Products/94376/2_220.png', '中酒连锁人和天地店', '7990000', '4.3', '10', '陶瓷瓶水晶礼盒装 浓香型', '44', '34567');
INSERT INTO `text` VALUES ('32', '32', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/114/Products/94212/1_220.png', '238', '14', '拉菲珍藏梅多克法定产区红葡萄酒750ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/114/Products/94212/1_220.png', '中酒连锁南溪旗舰店', '234567', '4.5', '5', '干邑白兰地', '33', '568876');
INSERT INTO `text` VALUES ('33', '33', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/114/Products/94193/1_220.png', '188', '4', '史东美神赤霞珠干红', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4766/1_220.png', '中酒连锁南溪旗舰店', '0987654', '4.7', '8', '芝华士威士忌，12年的品质享受', '33', '67899876');
INSERT INTO `text` VALUES ('34', '34', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4766/1_220.png', '599', '13', '拉菲尚品波尔多法定产区红葡萄酒 750ml（6瓶装）', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4766/1_220.png', '中酒自营', '4567898', '4.1', '10', '汲取门前鉴湖水，酿得绍酒满园香', '56', '324567');
INSERT INTO `text` VALUES ('35', '35', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3568/1_220.png', '599', '714', '拉菲传奇波尔多 750ml（6瓶装）', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3568/1_220.png', '中酒自营', '456787', '4.2', '5', '法国进口，拉菲品牌', '78', '345678');
INSERT INTO `text` VALUES ('36', '36', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3890/1_220.png', '599', '431', '拉菲珍藏波尔多 750ml（6瓶装）', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3890/1_220.png', '中酒自营', '3456578', '4.3', '8', '拉菲品牌优质干红', '33', '34567887654');
INSERT INTO `text` VALUES ('37', '37', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4011/4_220.png', '229', '263', '【礼盒】拉菲传奇波尔多 750ml（2瓶装） 慕尼黑', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4011/4_220.png', '中酒自营', '789098765', '4.4', '10', '法国波尔多法定产区AOC级别', '45', '5678876');
INSERT INTO `text` VALUES ('38', '38', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4267/1_220.png', '208', '148', '拉菲珍藏梅多克法定产区红葡萄酒750ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4267/1_220.png', '中酒自营', '21345678', '4.5', '0', '法国进口，拉菲品牌，专业礼盒', '67', '7887654');
INSERT INTO `text` VALUES ('39', '39', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3889/1_220.png', '499', '124', '拉菲华诗歌 750ml（6瓶装）', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3889/1_220.png', '中酒自营', '345676', '4.6', '0', '拉菲罗斯柴尔德家族荣誉出品 ASC正品保证', '45', '345678765');
INSERT INTO `text` VALUES ('40', '40', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3285/1_220.png', '229', '113', '【礼盒】拉菲传奇波尔多 750ml（2瓶装） 拉菲皮盒', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3285/1_220.png', '中酒自营', '456787', '4.7', '0', '【新老包装交替发货，产品以实物为准】', '88', '345676');
INSERT INTO `text` VALUES ('41', '41', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3907/1_220.png', '1290', '107', '拉菲传奇波尔多法定产区红葡萄酒 1500ml（6瓶装）', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/3907/1_220.png', '中酒自营', '34567', '4.8', '0', '法国原装进口，拉菲著名红酒\r\n法国原装进口，拉菲著名红酒\r\n法国原装进口，拉菲著名红酒\r\n法国原装进口，拉菲著名红酒', '67', '456787');
INSERT INTO `text` VALUES ('42', '42', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4750/1_220.png', '199', '96', '拉菲传奇波尔多 750ml（2瓶装）', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4750/1_220.png', '中酒自营', '5678', '4.9', '0', '法国优质波尔多，著名拉菲品牌美酒', '77', '34567');
INSERT INTO `text` VALUES ('43', '43', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/80037/1_220.png', '399', '96', '拉菲珍藏梅多克法定产区红葡萄酒750ml（2瓶装）', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/80037/1_220.png', '中酒自营', '3456787', '3.9', '0', '五粮之精华，永恒之经典', '88', '5678');
INSERT INTO `text` VALUES ('44', '44', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4221/1_220.png', '169', '93', '拉菲华诗歌 750ml（2瓶装）', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/4221/1_220.png', '中酒自营', '56789', '3.8', '0', '陶瓷瓶水晶礼盒装 浓香型', '88', '3456787');
INSERT INTO `text` VALUES ('45', '45', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/6465/1_220.png', '219', '6', '【礼盒】拉菲华诗歌 750ml（2瓶装） 拉菲皮盒', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/1/Products/6465/1_220.png', '中酒自营', '67898', '3.7', '0', '干邑白兰地', '99', '56789');
INSERT INTO `text` VALUES ('46', '46', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/354/Products/95982/1_220.png', '129', '2', '拉菲传奇波尔多 750ml', 'http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/354/Products/95982/1_220.png', '中酒连锁酒泉旗舰店', '45678', '3.6', '0', '芝华士威士忌，12年的品质享受', '77', '67898');
INSERT INTO `text` VALUES ('47', '47', 'http://img6.zhongjiu.cn/resourceb2b2c//STORAGE/Shop/1/Products/81424/1_220.png', '599', '0', '拉菲 巴斯克花园红葡萄酒 750ml（6瓶装）', 'http://img6.zhongjiu.cn/resourceb2b2c//STORAGE/Shop/1/Products/81424/1_220.png', '中酒自营', '7856787', '3.5', '0', '汲取门前鉴湖水，酿得绍酒满园香', '89', '45678');

-- ----------------------------
-- Table structure for userinf
-- ----------------------------
DROP TABLE IF EXISTS `userinf`;
CREATE TABLE `userinf` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=93 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of userinf
-- ----------------------------
INSERT INTO `userinf` VALUES ('15', '18577238806', 's413513', '1804906270@qq.com');
INSERT INTO `userinf` VALUES ('14', '17878852668', 's12345678', '1804906280@qq.com');
INSERT INTO `userinf` VALUES ('13', '17377181833', 'SSSSSS', '180490270@qq.com');
INSERT INTO `userinf` VALUES ('12', '17377181888', 's123456', '1804905270@qq.com');
INSERT INTO `userinf` VALUES ('86', '12', '12', null);
INSERT INTO `userinf` VALUES ('83', '17878852663', 's111111', null);
INSERT INTO `userinf` VALUES ('90', '18577238806', 's413513', null);
INSERT INTO `userinf` VALUES ('81', '17878852663', 's111111', null);
INSERT INTO `userinf` VALUES ('88', '18577238806', 's413513', null);
INSERT INTO `userinf` VALUES ('87', '15277834806', 's111111', null);
INSERT INTO `userinf` VALUES ('85', '123344', '123456', null);
INSERT INTO `userinf` VALUES ('84', '18577238806', 's413513', null);
INSERT INTO `userinf` VALUES ('82', '17878852663', 's1111', null);
INSERT INTO `userinf` VALUES ('92', '18577238806', 's413513', null);
INSERT INTO `userinf` VALUES ('91', '15277834805', 's111111', null);
INSERT INTO `userinf` VALUES ('89', '15277834802', 's111111', null);
SET FOREIGN_KEY_CHECKS=1;
