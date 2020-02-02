import { HTTPClient } from '../utils/Request'
import { ResponseService } from './ResponseService'
export default class BaseService {
    constructor (api) {
        this.api = api
        this.http = HTTPClient
    }
    list = async () => {
        try {
            const response = await http.get(this.api)
            return response.data
        } catch (error) {
            throw ResponseService(error, 'list')
        }
    }
    show = async ($id) => {
        try {
            const response = await http.get(`${this.api}/${$id}`)
            return response.data
        } catch (error) {
            throw ResponseService(error, 'get', 'item')
        }
    }

    create = async ($data) => {
        try {
            const response = await http.post(this.api, $data)
            return response.data
        } catch (error) {
            throw ResponseService(error, 'create')
        }
    }

    update = async ($data) => {
        try {
            const response = await http.put(`${this.api}/${$data.id}`, $data)
            return response.data
        } catch (error) {
            throw ResponseService(error, 'update')
        }
    }

    remove = async ($id) => {
        try {
            const response = await http.delete(`${this.api}/${$id}`)
            return response.data
        } catch (error) {
            throw ResponseService(error, 'remove')
        }
    }
}