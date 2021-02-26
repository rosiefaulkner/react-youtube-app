export async function searchYouTube(q) {
    q = encodeURIComponent(q);
    const response = await fetch(
      "https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
          "x-rapidapi-key": "0c44933817mshdee4946987ae9afp176b3fjsn266c417c0bb1",
        },
      }
    );
    const body = await response.json();
    console.log(body);
    return body.items.filter((item) => item.type === "video");
  }