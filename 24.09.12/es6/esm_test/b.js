/**
 *  ESM 방식의 모듈 가져오기
 */

import {a,b,obj} from './a.js';
console.log(a,obj);
b();

//대표모듈을 다룰때는 원하는 이름으로 받는다.
import C from './c.js';
console.log(C);
