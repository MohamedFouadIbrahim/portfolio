import { useQuery } from 'react-query'
import APIKit from '../../utils/APIKit'

export function UseIntroSection() {
    const { data, ...rest } = useQuery('introSection', () => APIKit.get('introSection').then(respnse => respnse.data.data))
    return {
        information: data,
        ...rest
    }
}