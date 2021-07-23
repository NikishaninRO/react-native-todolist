export class Http {
  static HEADERS = {'Content-Type': 'application/json'};
  static async get(url, showError) {
    return await request(url, 'GET', showError);
  }
  static async post(url, data = {}, showError) {
    return await request(url, 'POST', data, showError);
  }
  static async delete(url, showError) {
    return await request(url, 'DELETE', showError);
  }
  static async patch(url, data = {}, showError) {
    return await request(url, 'PATCH', data, showError);
  }
}

async function request(url, method = 'GET', data, showError) {
  const config = {
    method,
    headers: Http.HEADERS,
  };

  if (method === 'POST' || method === 'PATCH') {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return (await response.json()) || {};
  } catch (error) {
    showError('Что-то пошло не так...');
    return null;
  }
}
