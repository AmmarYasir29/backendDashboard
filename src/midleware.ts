import { errRes } from "./helper/tools.helper";
import * as jwt from "jsonwebtoken";

let auth = (req, res, next) => {
    // get token from req headers
    const token = req.headers.token;
    if (!token) return errRes(res, "Token is missing");
    // verify the token with the key
    try {
      const payload = jwt.verify(token, "12345");
      // if ok -> next()
      next();
    } catch (error) {
      // if not return error
      return errRes(res, "Token is not valid");
    }
}
export default auth;