const _0x30f737=_0x3b03;function _0x558e(){const _0x34f9d8=['*🚩Adios\x20@user*','db\x20','/stats/','delete','groupManage','511208xoZQnk','info','delirius','AFK','763066uhwkDj','/afk','getData','/config','push','db/db','28680TGxFNR','/groups/123-456@g.us','354waOfwn','some','3137598smFUDN','findIndex','find','/groups/','i\x20dont\x20know','node-json-db','21VvECYe','now','255998rqCwAB','exists','123@c.us','/stats','jid','123-456@g.us','/afk[]','104271GBNmsB','20mYdfOK','groupId','/afk[','10lXhPDW','5078073lNPZfv','/groups'];_0x558e=function(){return _0x34f9d8;};return _0x558e();}(function(_0x546afd,_0x364715){const _0x372e26=_0x3b03,_0x5ea126=_0x546afd();while(!![]){try{const _0x168c9a=parseInt(_0x372e26(0x11f))/0x1+parseInt(_0x372e26(0x131))/0x2+parseInt(_0x372e26(0x138))/0x3*(parseInt(_0x372e26(0x139))/0x4)+-parseInt(_0x372e26(0x125))/0x5*(-parseInt(_0x372e26(0x127))/0x6)+parseInt(_0x372e26(0x12f))/0x7*(-parseInt(_0x372e26(0x11b))/0x8)+-parseInt(_0x372e26(0x129))/0x9*(parseInt(_0x372e26(0x113))/0xa)+-parseInt(_0x372e26(0x114))/0xb;if(_0x168c9a===_0x364715)break;else _0x5ea126['push'](_0x5ea126['shift']());}catch(_0x29b099){_0x5ea126['push'](_0x5ea126['shift']());}}}(_0x558e,0x61f9a));const {JsonDB}=require(_0x30f737(0x12e)),{Config}=require('node-json-db/dist/lib/JsonDBConfig');var db=new JsonDB(new Config(_0x30f737(0x124),!![],!![],'/'));function _0x3b03(_0x183f45,_0x27cc06){const _0x558ebb=_0x558e();return _0x3b03=function(_0x3b03af,_0x213e01){_0x3b03af=_0x3b03af-0x113;let _0x7c425e=_0x558ebb[_0x3b03af];return _0x7c425e;},_0x3b03(_0x183f45,_0x27cc06);}let stats={'msgSent':0x1,'msgRecv':0x1,'filesize':0x1,'autodownload':0x1,'sticker':0x1,'cmd':0x1,'bufferRecv':0x1};if(!db[_0x30f737(0x132)](_0x30f737(0x134)))db[_0x30f737(0x123)](_0x30f737(0x134),stats);if(!db[_0x30f737(0x132)](_0x30f737(0x115)))db[_0x30f737(0x123)](_0x30f737(0x126),{'id':_0x30f737(0x136),'groupName':'jirolu','antilink':![],'mute':![],'antiDelete':![],'antiViewOnce':![],'antireactionMessage':![],'antivirtex':![],'autosticker':![],'antibard':![],'autobio':![],'autopokemon':![]});if(!db[_0x30f737(0x132)]('/afk'))db[_0x30f737(0x123)](_0x30f737(0x137),{'jid':_0x30f737(0x133),'groupId':_0x30f737(0x136),'groupName':_0x30f737(0x11d),'timestamp':Date[_0x30f737(0x130)](),'reason':_0x30f737(0x12d)});if(!db[_0x30f737(0x132)]('/config'))db['push'](_0x30f737(0x122),{'session_id':'','removeBG':'','musixMatch':''});exports['configHandler']={'get':()=>{const _0x54bb52=_0x30f737;let _0x454929=db[_0x54bb52(0x121)](_0x54bb52(0x122));return _0x454929;},'update':(_0x61e6e6,_0x5d9a65)=>{const _0x4ef726=_0x30f737;let _0xed309b=db[_0x4ef726(0x121)](_0x4ef726(0x122));_0xed309b[_0x61e6e6]=_0x5d9a65,db['push'](_0x4ef726(0x122),_0xed309b);}},exports['statistics']=(_0x23969a,_0x57c366=0x1)=>{const _0x89c7cc=_0x30f737;if(!db['exists']('/stats/'+_0x23969a))db[_0x89c7cc(0x123)](_0x89c7cc(0x118)+_0x23969a,_0x57c366);let _0x70dce6=db[_0x89c7cc(0x121)](_0x89c7cc(0x118)+_0x23969a);db[_0x89c7cc(0x123)](_0x89c7cc(0x118)+_0x23969a,_0x70dce6+=_0x57c366);},exports[_0x30f737(0x11c)]=_0x4d215b=>{const _0x38bb9f=_0x30f737;if(!db['exists'](_0x4d215b))throw _0x38bb9f(0x117)+_0x4d215b+'\x20not\x20exists';return db['getData'](_0x4d215b);},exports[_0x30f737(0x11a)]={'add':(_0x5da6e5,_0x25372d)=>{const _0x1fbdec=_0x30f737;if(db[_0x1fbdec(0x132)](_0x1fbdec(0x12c)+_0x5da6e5))return![];let _0x474f2a={'id':_0x5da6e5,'groupName':_0x25372d,'antilink':![],'mute':![],'antiDelete':![],'antiViewOnce':![],'antireactionMessage':![],'antivirtex':![],'autosticker':![],'antibard':![],'autobio':![],'autopokemon':![],'welcome':{'status':![],'msg':'*🍟\x20@user\x20bienvenido\x20a\x20{title}*'},'leave':{'status':![],'msg':_0x1fbdec(0x116)}};return db[_0x1fbdec(0x123)]('/groups/'+_0x5da6e5,_0x474f2a),_0x474f2a;},'update':(_0x3be0d5,_0x26657e)=>{const _0x5f14e5=_0x30f737;db[_0x5f14e5(0x123)](_0x5f14e5(0x12c)+_0x3be0d5,_0x26657e);},'get':_0x5d5995=>{const _0x9adfee=_0x30f737;if(!db['exists'](_0x9adfee(0x12c)+_0x5d5995))return![];else return db['getData'](_0x9adfee(0x12c)+_0x5d5995);}},exports[_0x30f737(0x11e)]={'add':(_0x219e2a,_0x1beb29,_0x31c7d0,_0x1f2a17,_0x5a91d8)=>{const _0x235d07=_0x30f737;let _0x58e174=db['getData'](_0x235d07(0x120));(!_0x58e174[_0x235d07(0x128)](_0x5354f9=>_0x5354f9[_0x235d07(0x135)]==_0x219e2a)||!_0x58e174[_0x235d07(0x128)](_0xcf18df=>_0xcf18df[_0x235d07(0x13a)]==_0x1beb29))&&db[_0x235d07(0x123)](_0x235d07(0x137),{'jid':_0x219e2a,'groupId':_0x1beb29,'groupName':_0x31c7d0,'timestamp':_0x1f2a17,'reason':_0x5a91d8});},'update':(_0x567972,_0x40f1b6,_0xe77fb0,_0xb938e7)=>{const _0x51558c=_0x30f737;let _0x50bb23=db[_0x51558c(0x121)](_0x51558c(0x120)),_0x4e353f=_0x50bb23[_0x51558c(0x12a)](_0x52f9a4=>_0x52f9a4['jid']==_0x567972&&_0x52f9a4[_0x51558c(0x13a)]==_0x40f1b6);(_0x50bb23[_0x51558c(0x128)](_0x2db80e=>_0x2db80e[_0x51558c(0x135)]==_0x567972)||_0x50bb23['some'](_0x3468d9=>_0x3468d9[_0x51558c(0x13a)]==_0x40f1b6))&&db['push'](_0x51558c(0x13b)+_0x4e353f+']',{'jid':_0x567972,'groupId':_0x40f1b6,'timestamp':_0xe77fb0,'reason':_0xb938e7});},'check':(_0x48385d,_0xce63e1)=>{const _0x41b320=_0x30f737;let _0x457a4e=db[_0x41b320(0x121)]('/afk'),_0x33742b=_0x457a4e[_0x41b320(0x128)](_0x54dde2=>_0x54dde2[_0x41b320(0x135)]==_0x48385d&&_0x54dde2[_0x41b320(0x13a)]==_0xce63e1);return _0x33742b;},'get':(_0x3518cb,_0x277f3f)=>{const _0x456e46=_0x30f737;let _0x15d992=db['getData'](_0x456e46(0x120)),_0x29db1a=_0x15d992[_0x456e46(0x12b)](_0xfd2d07=>_0xfd2d07['jid']==_0x3518cb&&_0xfd2d07[_0x456e46(0x13a)]==_0x277f3f);return _0x29db1a;},'delete':(_0x2f49da,_0x26ecea)=>{const _0x5b42ee=_0x30f737;let _0x32c9fe=db[_0x5b42ee(0x121)](_0x5b42ee(0x120)),_0x37d606=_0x32c9fe['findIndex'](_0x565b58=>_0x565b58[_0x5b42ee(0x135)]==_0x2f49da&&_0x565b58[_0x5b42ee(0x13a)]==_0x26ecea);db[_0x5b42ee(0x119)](_0x5b42ee(0x13b)+_0x37d606+']');},'getAll':()=>{const _0x443644=_0x30f737;return db[_0x443644(0x121)]('/afk');}};