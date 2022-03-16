import { useQuery } from 'react-query'
import APIKit from '../../utils/APIKit'

export function UseImageHeader() {
    const { data, ...rest } = useQuery('imageHeader', () => APIKit.get('imageHeader').then(respnse => respnse.data.data))
    return {
        information: data,
        ...rest
    }
}