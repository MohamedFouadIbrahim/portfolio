import { useQuery } from 'react-query'
import APIKit from '../../utils/APIKit'

export function UseMyExperience() {
    const { data, ...rest } = useQuery('homeData', () => APIKit.get('experience').then(respnse => respnse.data.data))
    return {
        myExperiences: data ?? [],
        ...rest
    }
}