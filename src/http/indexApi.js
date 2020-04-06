import http from '@/http/http';


export function getIndexCarousel() {
  const url = 'https://www.fastmock.site/mock/3f8a70ee57336c296feaadb9e87a930a/shop/shop/indexCarousel';
  return http.get(url, {}).then(
    (res) => res,
  );
}


export function getProductDetail(param) {
  const url = `https://www.fastmock.site/mock/3f8a70ee57336c296feaadb9e87a930a/shop/productDetail?id=${param}`;
  return http.get(url, {}).then((data) => data);
}


export function getOneAllGoods(param) {
  const url = `http://dingdong-api.nodebook.top/h5/nottoken/getOneAllGoods?id=${param}`;
  return http.get(url, {}).then((data) => data);
}
