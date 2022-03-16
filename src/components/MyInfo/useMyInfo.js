import { useQuery } from 'react-query'
import APIKit from '../../utils/APIKit'

export function UseMyInfo() {
    const { data, ...rest } = useQuery('myInfo', () => APIKit.get('myInfo').then(respnse => respnse.data.data))
    return {
        information: data,
        ...rest
    }
}