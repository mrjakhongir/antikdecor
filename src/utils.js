export async function getData(url) {
	const baseUrl = 'http://192.168.0.117:8000/';
	try {
		const res = await fetch(`${baseUrl}${url}`);
		const data = await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}
