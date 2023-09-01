// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import EmailAppLayout from 'src/pages/components/email/Email'

const EmailApp = ({ folder }) => {
  return <EmailAppLayout folder={folder} />
}

export const getStaticPaths = async () => {
  const res = await axios.get('/apps/email/allEmails')
  const data = await res.data.emails

  const paths = data.map(mail => ({
    params: { folder: mail.folder }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = ({ params }) => {
  return {
    props: {
      folder: params?.folder
    }
  }
}

EmailApp.contentHeightFixed = true

export default EmailApp
