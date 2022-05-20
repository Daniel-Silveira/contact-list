import http from '@/services/api'
import { Contact } from '@/types/contact'
import { useGet } from '..'

export const useContact = () => {
  const PARTIAL_URL = 'contacts'

  const getContacts = () => {
    const { data } = useGet<Contact[]>('contacts', PARTIAL_URL)
    return { data }
  }

  const createContact = async (data: Contact) => {
    const { status } = await http.post(`/${PARTIAL_URL}/new`, data)
    return { status }
  }

  const editContact = async (data: Contact) => {
    const { status } = await http.put(`/${PARTIAL_URL}/update/${data._id}`, data)
    return { status }
  }

  const removeContact = async (data: Contact) => {
    const { status } = await http.delete(`/${PARTIAL_URL}/remove/${data._id}`, data)
    return { status }
  }

  return { getContacts, createContact, editContact, removeContact }
}
