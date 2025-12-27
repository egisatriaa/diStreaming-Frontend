/**
 * Fetch data dari endpoint guest (tanpa autentikasi)
 */
export const fetchGuest = async (endpoint) => {
    const url = `https://distreaming.my.id/api/guest${endpoint}`;
    const response = await fetch(url);

    if (!response.ok) throw new Error(`API error! status: ${response.status}`);

    const json = await response.json();

    // Untuk /movies --> json.data.data
    // Untuk /categories --> json.data (langsung array)
    if (json.data && Array.isArray(json.data.data)) {
        return json.data.data;
    }
    if (json.data && Array.isArray(json.data)) {
        return json.data;
    }
    return json.data || json;
};
