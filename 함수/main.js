/*
const name = "망고";
const proce = 10000;

const product = {
  제품명: "7D 건조망고",
  유형: "당절임",
  성분: "망고, 설탕, 치자황색소",
  원산지: "필리핀",
  const: "상수입니다",
  javascript: "자바스크립트입니다.",
  1234: 5678,
  "제품 유형": "먹는거",
};

console.log(product);

console.log(product.제품명);
//console.log(product.["제품명"]);

console.log(product.const);

//console.log(product.1234);
//console.log(product.[1234]);

//console.log(product.제품 유형);
//console.log(product.["제품 유형"]);
*/

const site = {
  사이트명: "네이버",
  url: "https://naver.com",
};

const product = {
  상품번호: "7134572951",
  상품상태: "신상품",
  제조사: "삼성전자",
  브랜드: "갤럭시",
  모델명: "버즈2 프로 SM-R510",
  원산지: "베트남산(삼성전자)",
  제조일자: "2022.08.01",
  옵션명: ["1개", "2개", "3개"],
  중량: ["100g", "200g", "300g"],
  판매처: site,
  printBrand: function (myname) {
    console.log(`${myname}이 선호하는 브랜드는 ${this.브랜드} 입니다.`);
    console.log(this);
  },
  /*
  printModel: (myname) => {
    console.log(`${myname}이 선호하는 모델은 ${this.모델명} 입니다.`);
    console.log(this);
  },
  */
};

const str = "         동해물과 백두산이 마르고 닳도록";
console.log(str);
console.log(str.split(" "));
console.log(str.trim());
console.log(str.trim().split(" "));

/*
const str = "hellow";
console.log(str);
str.indexOf();

const str2 = new String("hellow");
console.log(str2);
str2.indexOf();
*/

/*
const products = [product, product, product, product];
console.log(products);

const 내쇼핑몰 = {
  제품들: products,
};

console.log(내쇼핑몰);
*/

/*
product.제조사 = "로지택";
console.log(product);

product.옵션명.type = "수량";
console.log(product.옵션명.type);
console.log(product.옵션명);
*/

/*
console.printf = function (str) {
  console.log(`[INFO] ${str}`);
};

console.printf("내가 만든 출력 함수 1");
console.printf("내가 만든 출력 함수 2");
console.printf("내가 만든 출력 함수 3");
console.printf("내가 만든 출력 함수 4");
console.printf("내가 만든 출력 함수 5");
*/

/*
product.고객센터 = "1555-5555";
delete product.중량;
console.log(product);
/*
console.log(typeof product);
console.log(typeof console);

console.myname = "rkdtjrdnjs";
console.log(console.myname);
*/

/*
const json = JSON.stringify(product.판매처, null, 2);
console.log(json);

const obj = JSON.parse(json);
console.log(obj);
*/

/*
console.log(product);
console.log(product.판매처.사이트명);
product.printBrand("강석원");
product.printModel("강석원");
*/
