import dbConnect from "@/db/connect.js";
export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const places = await Place.find();
  }
  return response.status(200).json(places);
}
