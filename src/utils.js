const baseUrl = 'http://5.35.84.206:8000/';
export async function getData(endpoint) {
	try {
		const res = await fetch(`${baseUrl}${endpoint}`);
		const data = await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}
