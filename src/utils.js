export async function getData(url) {
	const baseUrl = 'http://5.35.84.206:8000/';
	try {
		const res = await fetch(`${baseUrl}${url}`);
		const data = await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}
