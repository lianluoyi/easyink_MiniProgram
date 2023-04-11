const {
	http
} = uni.$u
// 获取活码
// export const getCode = (params, config = {}) => http.post('/url/empleCode', params, config)
export const getCode = (data) => http.get('/url/empleCode', data)
