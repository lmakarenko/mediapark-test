import React from 'react';
import ReactDOM from 'react-dom';

let token = document.head.querySelector('meta[name="csrf-token"]')

console.log(token);

axios.defaults.headers.common = {
    'X-CSRF-TOKEN': token.content,
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjA2ZDgwNTI3YmZkZjEzNmI3ZTU0Y2JiNDJhNTY3YTUzNWE2ZDA5ZjVhNWQ3MjZjZDE1YTQyZTRkNjc5MDA3ZWI2YjNlZDRkZWQ0ZThmY2UiLCJpYXQiOjE2MDE3NTQ0MDIsIm5iZiI6MTYwMTc1NDQwMiwiZXhwIjoxNjMzMjkwNDAyLCJzdWIiOiI0Iiwic2NvcGVzIjpbInBsYXktZ2FtZSJdfQ.BmkHrfj-gy50DQ3xS9bu4RmUlmji3f1Wd300nU1ye74XcKv6IyRwn6MJbeNNzIewPlkKiPSZgNpm7rbk9ss5vGqHRsFjBD4wr_yvIIG1XLGdQacNxQFQkLpstIzAc9bmszYNw9Liuxdh_5SziGDvMWaKUSM2HvalwXJp9_RQtibGw9JPmPJTcQqbtqCYd8RMWv5LnIyBlOga1Z2_8_1FrGYsWcYGuxuX9AuDSEb92dk7EFZeYjUYhthrJI5ANFyQMe9_L-MBXF8w96L3Msa5t9xQYEaHMJvqWo92bWn6uuDKfFQrex5k1WsTl_OUi1KUxDMgBD4bVd1WJyWD_jAYUcKvgNck06pnbepYNjTDuPhnstciDhHnKv65z0CTTgnNU1Sgx7PCHaiyHriWW9RXUe0bowIInMyXZ08yKZL02NonHpdTJhWGM1N7JZ5Fp28ZCy3bAh9vu0tb973KRIUgpSblItVe3nodch3_D01luMNxhZtJBMGmfPlaD1vz6zDc9b4thn5vGtJMEgflicAZ58odXw2O_sjhSWog85c8V3ndxaxPSd5yds84wcSXIMUYmQpv6hB0Mbqn4JVWpmDtSzAFjnx09HN_2lfLleW6sRTmqIEt1uKPORWIXs0M0_vBbEq9pqHAD19rDuXPqdI-AR8NGgJY8neBJYyb-WicVZw'
    //'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTc0OTM0OWJlOWYyNzIwYmE1Yjk0ZGQ1ZTNkODAyM2Y4ZTE3MTgyYmMwOTIwNTVjMWJmZmRmNmJhNjRhNjE5NmFlZmZkMzA1NGRhZDA1MDUiLCJpYXQiOjE2MDE3NTQzMTQsIm5iZiI6MTYwMTc1NDMxNCwiZXhwIjoxNjMzMjkwMzE0LCJzdWIiOiIxIiwic2NvcGVzIjpbIm1hbmFnZS1nYW1lIl19.RyrisWHkLS8ke0d35DN3C9ms4IID5uLmNx4c0Oq-AnDTsf0rZHDQw4qe-ckzzqBPIzyh0Xru4l-mIhkC9DVbYGF6GWfN1RYqbpA9tcnRchZkWeYJPbHiQNn4VYbOIdF35JAIG-aSbLGA7k9rg4v3APMuJXXIFYGFgc7AE1K71bgW2bb-jfihCr1jy51ZwKbGWpfeuYkNB52gpancSwjSmLQ0PdRI0DmeoBrQwFFUDWutp3BmPmvHSqa4rTrI9gLdt_2ghweurvB8mULssL2DWcZY74d3BZ0Ci6afltA5AnOV8foClhyXnz9AqbrKO9tWTJEHi_dgJw7bqB8KJODDicvcF8VElxEMEb7tTds835OPyk_V7Ksepakb1PSZnw3lKIM5L2OqsjxMRryWZL1q7db_CxhQIRmnYF1pH7H8fdDNwH1hVBzzNJagpf9SyLx2opt-h3efMj98O588ZI8iK7QR6QBlGQgV28P3RGoxGYj2fMFAIsopArs7cd69RYqtI1vGUBTNo3bqLqIoY41k5PrqNfeLa4iSA7CEQmvJIhftEcn9lQ6O564eG4rLUj0mcmwpER76Nh3Lrg6zNSTz1Z9Lo_N9TOWzkHMdlhYh6wtnGeCEgYREnfSR_rOdQ5v8DzDIIXuMETeAlilGQyIFs83FnKeAa9Vb0TpH72kZZMA'
}
axios
    .get('/api/find-new-game')
    .then(response => {
        console.log(response)
    });
/*axios
    .get('/api/games')
    .then(response => {
        console.log(response)
    });*/

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
