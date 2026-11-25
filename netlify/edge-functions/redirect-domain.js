
export default async (request) => {
  const url = new URL(request.url);

  if (url.hostname === "kk-tours-travel.netlify.app") {
    url.hostname = "kktourstravel.in";
    url.protocol = "https:";

    return Response.redirect(url.toString(), 301);
  }
};

export const config = {
  path: "/*"
};
