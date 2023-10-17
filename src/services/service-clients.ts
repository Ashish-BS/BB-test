const tryJson = async (res: Response) => {
	try {
		return await res.json();
	} catch (_error) {
		return undefined;
	}
};

const setHeaders = (customHeaderValue?: string): { [key: string]: string } => {
	if (customHeaderValue) {
		const headers = {
			'api-key': customHeaderValue
		};
		return headers;
	} else {
		const headers = {
			Authorization: `bearer ${process.env.NEXT_PUBLIC_API_TOKEN || ''}`
		};
		return headers;
	}
};

export const fetchPost = async (url: string, data: object) => {
	return await fetch(url, {
		method: 'POST',
		body: JSON.stringify(data)
	})
		.then(async (resp) => {
			if (!resp.ok) {
				const body = await tryJson(resp);
				if (body) {
					const err = new Error(body.message);
					throw err;
				} else {
					throw new Error('Something went wrong');
				}
			}
			return await resp.json();
		})
		.catch((err) => {
			return err.body ? err.body : err;
		});
};

export const fetchPostFormData = async (url: string, data: FormData, apiKey?: string) => {
	return await fetch(url, {
		method: 'POST',
		headers: apiKey ? setHeaders(apiKey) : setHeaders(),
		body: data
	})
		.then(async (resp) => {
			if (!resp.ok) {
				const body = await tryJson(resp);
				throw new Error(body ? body.detail : 'Something went wrong');
			}
			return await resp.json();
		})
		.catch((err) => {
			console.log(err);
		});
};

export const fetchGet = async (url: string) => {
	return await fetch(url, {
		method: 'GET',
		headers: setHeaders()
	})
		.then(async (resp) => {
			if (!resp.ok) {
				const body = await tryJson(resp);
				if (body) {
					const err = new Error(body.message);
					throw err;
				} else {
					throw new Error('Something went wrong');
				}
			}
			return await resp.json();
		})
		.catch((err) => {
			return err.body ? err.body : err;
		});
};
