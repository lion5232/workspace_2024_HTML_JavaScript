/**
 *  CJS 방식으로 모듈화 처리
 * 
 */
 
//개별 모듈화 처리
exports.a =1;
exports.b = () => {
    console.log('호출1');

} 
exports.obj ={
    name : '세종'
}

//대표 모듈화 => 개별 모듈화 무시됨
module.exports = {
    nm:'국밥',
    pay: 5500

} 