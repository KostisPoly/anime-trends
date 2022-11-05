export async function getUpcomingList() {
    const response = await fetch('https://api.jikan.moe/v4/top/anime?filter=upcoming');
    
    const json = await response.json();
    
    return json;
}

export default async function handler(req, res) {
    
    const json = await getUpcomingList();
    res.status(200).json(json);
}