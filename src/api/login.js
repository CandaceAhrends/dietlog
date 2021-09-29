import Axios from "./Axios";
import { of, from, forkJoin, throwError, Observable } from "rxjs";
import { switchMap, map, tap, catchError, reduce } from "rxjs/operators";
import moment from "moment";
const url = "http://localhost:3300/user";

const login = (user) => {
  return from(
    Axios.post(`${url}/login`, user).pipe(
      map((res) => res.data),
      catchError((error) => {
        return of({ message: "Server Error" });
      })
    )
  );
};

export default login;
