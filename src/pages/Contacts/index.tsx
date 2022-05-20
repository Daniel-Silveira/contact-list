import { CreateContact } from '@/components/contacts'
import { Card } from '@/components/contacts/card'
import { Container } from '@/components/shared'
import { useContact } from '@/hooks/useContact'
import { Contact } from '@/types/contact'
import { useState } from 'react'
import { useQueryClient } from 'react-query'
import * as S from './styled'

interface ContactScreenProps {
  title: string
}

const animateListVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
}

const animateCardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Contacts = (props: ContactScreenProps) => {
  const { getContacts, removeContact } = useContact()
  const { data: contactsList } = getContacts()
  const queryClient = useQueryClient()

  const [showModal, setShowModal] = useState(false)
  const [contactEdit, setContactEdit] = useState<Contact>({})

  const handleCloseModal = () => {
    setShowModal(false)
    setContactEdit({})
  }
  const handleOpenModal = () => setShowModal(true)
  const handleEditContact = (contact: Contact) => {
    setContactEdit(contact)
    handleOpenModal()
  }

  const handleRemoveContact = async (contact: Contact) => {
    const { status } = await removeContact(contact)
    if (status === 200) {
      await queryClient.invalidateQueries(['contacts'])
    }
  }

  return (
    <>
      <CreateContact show={showModal} onClose={handleCloseModal} contactEdit={contactEdit} />
      <Container title={props.title} textButton="Novo contato" onClick={handleOpenModal} cyRefButton="newContactButton">
        <S.WrapperContacts initial="hidden" animate="visible" variants={animateListVariants}>
          <S.Header variants={animateCardVariants}>
            <S.Text width="20%">Nome</S.Text>
            <S.Text width="25%">E-mail</S.Text>
            <S.Text width="15%">Empresa</S.Text>
            <S.Text width="15%">Telefone</S.Text>
            <S.Text width="11%">Idade</S.Text>
            <S.Text width="7%">Ativo</S.Text>
            <S.Text width="7%">Açōes</S.Text>
          </S.Header>
          {contactsList?.map((item: Contact) => (
            <Card
              key={item._id}
              onEdit={() => handleEditContact(item)}
              onRemove={() => handleRemoveContact(item)}
              cyRefEditButton="editContactButton"
              cyRefRemoveButton="removeContactButton"
              variants={animateCardVariants}
              {...item}
            />
          ))}
        </S.WrapperContacts>
      </Container>
    </>
  )
}

export default Contacts
