export async function getUpcomingList() {
    const response = await fetch('https://api.jikan.moe/v4/top/anime?filter=upcoming');
    console.log('IN GETUPCOMING');
    console.log(response);
    const json = await response.json();
    console.log(json);
    console.log(json.data);
    return json;
}

export default async function handler(req, res) {
    console.log('IN GET HANDLER');
    const json = await getUpcomingList();
    res.status(200).json(json);
}