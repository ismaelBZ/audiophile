export const fetchData = async (url: string) => {
    try {
        const response =  await fetch(url); 
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch data, try again later");
    }
}
