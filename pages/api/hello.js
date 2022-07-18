// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getBaseURL } from "../../vfx/parts/getBaseURL";
import axios from "axios";

export default async function handler(req, res) {
  // Send a POST request
  axios({
    method: "get",
    baseURL: getBaseURL(),
    url: "/api/rooms",
    headers: {
      Authorization: "bearer " + process.env.STRAPI_FULL_ACCESS_TOKEN,
    },
  }).then((res) => {
    console.log(res.data);

    res.status(200).json({ name: "John Doe", data: res.data });
  });

  //
}
