let apiUrl
const apiUrls = {
  production: 'https://monthly-backend.herokuapp.com',
  development: 'http://localhost:3002'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
