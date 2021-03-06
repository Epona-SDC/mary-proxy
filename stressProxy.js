import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 10,
  duration: '30s'
};

export default function() {
  var id = Math.floor(Math.random() * 1000000) + 9000000;
  let res = http.get('http://localhost:3000/?listingId=' + id);

  res = http.request('GET', 'http://localhost:3004/listing/' + id);
  check(res, {'status was 200': res => res.status === 200});
}

