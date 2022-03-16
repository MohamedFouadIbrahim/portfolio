import { useQuery } from 'react-query'
import APIKit from '../../utils/APIKit'

export function UseMyWork() {
    const { data, ...rest } = useQuery('projects', () => APIKit.get('projects').then(respnse => respnse.data.data))
    return {
        projects: data ?? [],
        ...rest
    }
}