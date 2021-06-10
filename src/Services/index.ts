import { create } from 'apisauce';
import { servicePath,barPath } from '../constants';
import { IGetQueryResponse } from '../Interfaces';

const api = () => {
    return create({
        baseURL: servicePath,
        timeout: 10000
    })
}

export const getData = async () => {
    return await api().get<IGetQueryResponse>(barPath)
}
