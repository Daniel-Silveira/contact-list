import { Button, Input, Modal } from '@/components/shared'
import { useContact } from '@/hooks/useContact'

import { Contact } from '@/types/contact'
import { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'
import * as S from './styled'

interface CreateContactProps {
  show: boolean
  onClose: () => void
  contactEdit?: Contact
}

export const CreateContact = (props: CreateContactProps) => {
  const { createContact, editContact } = useContact()

  const queryClient = useQueryClient()

  const [contact, setContact] = useState<Contact>({ name: '', email: '', phone: '', age: '', url: '', company: '' })
  const [loading, setLoading] = useState(false)

  const handleChangeState = (value: string, key: string) => {
    setContact({ ...contact, [key]: value })
    return
  }

  useEffect(() => {
    if (props.contactEdit?._id) {
      setContact(props.contactEdit)
    }
    setLoading(false)
  }, [props.contactEdit])

  const handleNewContact = async () => {
    setLoading(true)
    const { status } = await createContact(contact)
    if (status === 201) {
      await queryClient.invalidateQueries(['contacts'])
      props.onClose()
    }
  }

  const handleEditContact = async () => {
    setLoading(true)
    const { status } = await editContact(contact)
    if (status === 200) {
      await queryClient.invalidateQueries(['contacts'])
      props.onClose()
    }
  }

  return (
    <Modal
      title={props.contactEdit ? 'Editar contato' : 'Criar novo contato'}
      show={props.show}
      onClose={props.onClose}
    >
      <Input
        placeholder="Nome"
        value={contact.name}
        onChangeValue={value => handleChangeState(value, 'name')}
        data-cy="inputName"
      />
      <Input
        placeholder="E-mail"
        margin={['top', '1em']}
        value={contact.email}
        onChangeValue={value => handleChangeState(value, 'email')}
        data-cy="inputEmail"
      />
      <Input
        placeholder="Empresa"
        margin={['top', '1em']}
        value={contact.company}
        onChangeValue={value => handleChangeState(value, 'company')}
        data-cy="inputCompany"
      />
      <Input
        placeholder="URL da foto"
        margin={['top', '1em']}
        value={contact.url}
        onChangeValue={value => handleChangeState(value, 'url')}
        data-cy="inputUrl"
      />
      <S.GroupInputModal>
        <Input
          placeholder="Telefone"
          value={contact.phone}
          onChangeValue={value => handleChangeState(value, 'phone')}
          data-cy="inputPhone"
        />
        <Input
          placeholder="Idade"
          margin={['left', '1em']}
          value={contact.age}
          onChangeValue={value => handleChangeState(value, 'age')}
          data-cy="inputAge"
        />
      </S.GroupInputModal>
      <S.WrapperButtonModal>
        <Button
          loading={loading}
          text="Salvar"
          data-cy="saveContact"
          onClick={!!props.contactEdit?._id ? handleEditContact : handleNewContact}
        />
      </S.WrapperButtonModal>
    </Modal>
  )
}
