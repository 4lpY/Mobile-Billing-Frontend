import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { message } = req.body;

  const backendResponse = await fetch("https://alpys-gateway.azurewebsites.net/llm/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const result = await backendResponse.text();
  res.status(200).send(result);
}
